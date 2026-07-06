/**
 * Mailhouse Media — Stripe Integration
 *
 * Replaces the old ad-space SKU system with a dynamic Checkout Sessions API.
 * Order flow:
 *   1. Calculator / form collects order details
 *   2. /api/order creates a draft order in Supabase
 *   3. /api/order calls Stripe → creates a Checkout Session
 *   4. Customer pays → Stripe webhook confirms payment
 *   5. /api/stripe-webhook updates order status to 'paid'
 */

import Stripe from 'stripe'

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY not set')
  return new Stripe(key, { apiVersion: '2026-06-24.dahlia' })
}

// ---------- Stripe Product IDs (configured in .env) ----------
export const STRIPE_PRICES = {
  EDDM_9X12: process.env.STRIPE_PRICE_EDDM_9X12,
  AI_TARGETING: process.env.STRIPE_PRICE_AI_TARGETING,
  DESIGN: process.env.STRIPE_PRICE_DESIGN,
} as const

// ---------- Create Checkout Session ----------
export interface CreateCheckoutInput {
  orderId: string
  customerEmail: string
  lineItems: {
    priceId: string | null       // Stripe Price ID (for fixed SKU line items)
    amountCents: number          // for custom dynamic amounts (EDDM per-home)
    quantity: number
    description: string
  }[]
  metadata: {
    orderId: string
    customerName: string
    routeCount: number
    totalHomes: number
  }
  successUrl?: string
  cancelUrl?: string
}

export async function createCheckoutSession(input: CreateCheckoutInput): Promise<string> {
  const stripe = getStripe()
  const successUrl = input.successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/order/confirmation?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = input.cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/calculator`

  // Build line_items array — mix of Stripe Price IDs and custom amounts
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = input.lineItems.map((item) => {
    if (item.priceId) {
      // Fixed SKU (design fee, AI targeting service)
      return {
        price: item.priceId,
        quantity: item.quantity,
      }
    }
    // Dynamic per-home pricing for EDDM
    return {
      price_data: {
        currency: 'usd',
        unit_amount: item.amountCents,
        product_data: {
          name: item.description,
          description: 'EDDM 9×12 postcard — design, print, postage, lettershop drop included',
        },
      },
      quantity: item.quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: input.customerEmail,
    client_reference_id: input.orderId,
    line_items: lineItems,
    metadata: input.metadata,
    success_url: successUrl,
    cancel_url: cancelUrl,
    // Tax handling
    automatic_tax: { enabled: false }, // no tax on EDDM service in NC
    // Invoice receipt email to customer
    invoice_creation: {
      enabled: true,
      invoice_data: {
        description: input.metadata.routeCount > 0
          ? `Mailhouse Media EDDM — ${input.metadata.routeCount} routes, ${input.metadata.totalHomes.toLocaleString()} homes`
          : 'Mailhouse Media — Direct Mail Service',
      },
    },
  })

  if (!session.url) {
    throw new Error('Stripe did not return a checkout URL')
  }
  return session.url
}

// ---------- Webhook signature verification ----------
export async function verifyWebhookSignature(payload: string, signature: string): Promise<Stripe.Event> {
  const stripe = getStripe()
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret) throw new Error('STRIPE_WEBHOOK_SECRET not set')
  return stripe.webhooks.constructEvent(payload, signature, secret)
}

// ---------- Retrieve a session (for confirmation page) ----------
export async function getCheckoutSession(sessionId: string) {
  const stripe = getStripe()
  return stripe.checkout.sessions.retrieve(sessionId)
}
