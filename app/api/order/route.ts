import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { createCheckoutSession } from '@/lib/stripe'
import { CUSTOMER_PRICING } from '@/lib/unit-economics'

/**
 * POST /api/order
 *
 * Accepts order details from the calculator or AI targeting form.
 * Creates a draft order in Supabase, then returns a Stripe Checkout URL.
 *
 * Body:
 * {
 *   customer: { name, email, phone, company?, city?, state?, zip? },
 *   orderType: 'eddm_standard' | 'eddm_targeted' | 'eddm_ai_targeted',
 *   routes: [{ routeId, homes, pricePerHome }],  // optional for AI-targeted
 *   designIncluded: boolean,
 *   isFirstOrder: boolean,
 *   aiFilters?: { event, zipCodes, minHomeValue, ... },
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customer, orderType, routes, designIncluded, isFirstOrder, aiFilters } = body

    // ---------- Validation ----------
    if (!customer?.email || !customer?.name) {
      return NextResponse.json({ error: 'Customer name and email required' }, { status: 400 })
    }
    if (!orderType) {
      return NextResponse.json({ error: 'orderType required' }, { status: 400 })
    }
    if (orderType === 'eddm_standard' && (!routes || routes.length === 0)) {
      return NextResponse.json({ error: 'At least one route required for EDDM orders' }, { status: 400 })
    }

    const supabase = createServerClient()

    // ---------- Upsert customer ----------
    const { data: existingCustomer, error: customerErr } = await supabase
      .from('customers')
      .select('id')
      .eq('email', customer.email)
      .single()

    let customerId: string

    if (existingCustomer) {
      customerId = existingCustomer.id
      // Update contact info if changed
      if (customer.phone || customer.company) {
        await supabase.from('customers').update({
          phone: customer.phone,
          company: customer.company,
          city: customer.city,
          state: customer.state,
          zip: customer.zip,
        }).eq('id', customerId)
      }
    } else {
      const { data: newCustomer, error: insertErr } = await supabase
        .from('customers')
        .insert({
          name: customer.name,
          email: customer.email,
          phone: customer.phone,
          company: customer.company,
          city: customer.city,
          state: customer.state,
          zip: customer.zip,
          source: 'website',
        })
        .select('id')
        .single()

      if (insertErr || !newCustomer) {
        console.error('Customer insert error:', insertErr)
        return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 })
      }
      customerId = newCustomer.id
    }

    // ---------- Calculate totals ----------
    let subtotalCents = 0
    const lineItems: any[] = []

    if (routes && routes.length > 0) {
      // EDDM order — sum route totals
      for (const route of routes) {
        const routeSubtotal = route.homes * route.pricePerHome
        subtotalCents += Math.round(routeSubtotal * 100)
      }
    }

    // Design fee (one-time, waived at 2,500+ homes)
    let designFeeCents = 0
    if (designIncluded && isFirstOrder) {
      const totalHomes = routes?.reduce((sum: number, r: any) => sum + r.homes, 0) || 0
      if (totalHomes < 2500) {
        designFeeCents = 15000 // $150
        subtotalCents += designFeeCents
      }
    }

    const stripeFeeCents = Math.round(subtotalCents * 0.029 + 30)
    const totalCents = subtotalCents + stripeFeeCents

    // ---------- Create order ----------
    const { data: order, error: orderErr } = await supabase
      .from('orders')
      .insert({
        customer_id: customerId,
        order_type: orderType,
        status: 'draft',
        subtotal_cents: subtotalCents,
        stripe_fee_cents: stripeFeeCents,
        total_cents: totalCents,
        include_design: designIncluded,
        first_order: isFirstOrder,
        design_fee_cents: designFeeCents,
        ai_event_type: aiFilters?.event,
        ai_event_zip_codes: aiFilters?.zipCodes,
        ai_filters: aiFilters,
      })
      .select('id')
      .single()

    if (orderErr || !order) {
      console.error('Order insert error:', orderErr)
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    }

    const orderId = order.id

    // ---------- Insert order routes (if EDDM) ----------
    if (routes && routes.length > 0) {
      const orderRoutes = routes.map((r: any) => ({
        order_id: orderId,
        route_id: r.routeId,
        homes_count: r.homes,
        price_per_home_cents: Math.round(r.pricePerHome * 100),
        subtotal_cents: Math.round(r.homes * r.pricePerHome * 100),
      }))

      await supabase.from('order_routes').insert(orderRoutes)
    }

    // ---------- Build Stripe Checkout Session ----------
    const stripeLineItems: any[] = []

    if (routes && routes.length > 0) {
      // Dynamic per-home pricing
      const totalHomes = routes.reduce((sum: number, r: any) => sum + r.homes, 0)
      const pricePerHomeCents = Math.round(routes[0].pricePerHome * 100) // assume uniform tier

      stripeLineItems.push({
        description: `EDDM 9×12 — ${routes.length} route${routes.length > 1 ? 's' : ''}, ${totalHomes.toLocaleString()} homes`,
        amount_cents: pricePerHomeCents,
        quantity: totalHomes,
      })
    }

    // Design fee (if applicable)
    if (designFeeCents > 0) {
      stripeLineItems.push({
        description: 'Custom design fee (one-time)',
        amount_cents: designFeeCents,
        quantity: 1,
      })
    }

    // Create Stripe session
    const checkoutUrl = await createCheckoutSession({
      orderId,
      customerEmail: customer.email,
      lineItems: stripeLineItems.map((item: any) => ({
        priceId: null, // dynamic pricing
        amountCents: item.amount_cents,
        quantity: item.quantity,
        description: item.description,
      })),
      metadata: {
        orderId,
        customerName: customer.name,
        routeCount: routes?.length || 0,
        totalHomes: routes?.reduce((sum: number, r: any) => sum + r.homes, 0) || 0,
      },
    })

    // Update order with Stripe session ID
    await supabase
      .from('orders')
      .update({
        stripe_session_id: checkoutUrl.split('/').pop(), // extract session ID from URL
        status: 'pending_payment',
      })
      .eq('id', orderId)

    return NextResponse.json({
      success: true,
      order_id: orderId,
      checkout_url: checkoutUrl,
    })
  } catch (err: any) {
    console.error('Order API error:', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}
