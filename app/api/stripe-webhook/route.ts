import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { verifyWebhookSignature } from '@/lib/stripe'

/**
 * POST /api/stripe-webhook
 *
 * Stripe sends payment confirmations here.
 * Verifies signature, updates order status, triggers n8n fulfillment workflow.
 */
export async function POST(request: NextRequest) {
  const payload = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  try {
    const event = await verifyWebhookSignature(payload, signature)
    const supabase = createServerClient()

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const orderId = session.metadata?.order_id || session.client_reference_id

        if (!orderId) {
          console.error('No order_id in Stripe session metadata')
          return NextResponse.json({ error: 'Missing order_id' }, { status: 400 })
        }

        // Update order status to 'paid'
        await supabase
          .from('orders')
          .update({
            status: 'paid',
            stripe_payment_intent_id: session.payment_intent,
            paid_at: new Date().toISOString(),
          })
          .eq('id', orderId)

        // Log event
        await supabase.from('payments').insert({
          order_id: orderId,
          event_type: 'checkout_session_completed',
          stripe_event_id: event.id,
          amount_cents: session.amount_total,
          metadata: {
            payment_intent_id: session.payment_intent,
            customer_email: session.customer_email,
          },
        })

        // TODO: Trigger n8n webhook for fulfillment
        // fetch(process.env.N8N_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify({ orderId }) })

        break
      }

      case 'payment_intent.payment_failed': {
        const intent = event.data.object
        const orderId = intent.metadata?.order_id

        if (orderId) {
          await supabase
            .from('orders')
            .update({ status: 'draft' }) // reset to draft so they can retry
            .eq('id', orderId)

          await supabase.from('payments').insert({
            order_id: orderId,
            event_type: 'payment_failed',
            stripe_event_id: event.id,
            metadata: { last_payment_error: intent.last_payment_error },
          })
        }
        break
      }

      // Add other events as needed (refunds, disputes, etc.)
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (err: any) {
    console.error('Webhook error:', err)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
