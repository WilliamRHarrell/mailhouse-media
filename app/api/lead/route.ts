import { NextRequest, NextResponse } from 'next/server';

const GHL_WORKFLOW_ID = process.env.GHL_WORKFLOW_ID || 'REPLACE_ME_GHL_WEBHOOK';
const GHL_LOCATION_ID = 'Tf1GNxxLZVrbPq8HxDiC';

// Stripe SKU placeholders — update with real payment link URLs when SKUs are live
interface SKU {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  paymentLink: string;
}

const SKUS: SKU[] = [
  {
    id: 'eddm-standard',
    name: 'EDDM Route Slot — Standard',
    description: 'Standard carrier route slot. 9x12 postcard to every door.',
    priceCents: 60,
    paymentLink: 'https://buy.stripe.com/REPLACE_ME_STANDARD',
  },
  {
    id: 'eddm-premium',
    name: 'EDDM Route Slot — Premium',
    description: 'Premium carrier route slot with scarcity guarantee.',
    priceCents: 95,
    paymentLink: 'https://buy.stripe.com/REPLACE_ME_PREMIUM',
  },
  {
    id: 'targeted-list-base',
    name: 'Custom Targeted List',
    description: 'AI-matched carrier routes based on event + filters.',
    priceCents: 1100,
    paymentLink: 'https://buy.stripe.com/REPLACE_ME_TARGETED',
  },
];

interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  formType: 'booking' | 'targeted-list' | 'question';
  city?: string;
  route?: string;
  adSpace?: string;
  skuId?: string;
  vertical?: string;
  filters?: {
    event?: string;
    minHomeValue?: string;
    zipCodes?: string[];
    state?: string;
  };
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();

    const ghlPayload = {
      locationId: GHL_LOCATION_ID,
      workflowId: GHL_WORKFLOW_ID,
      contact: {
        firstName: body.name.split(' ')[0] || '',
        lastName: body.name.split(' ').slice(1).join(' ') || '',
        email: body.email,
        phone: body.phone,
        companyName: body.company || '',
      },
      tags: [`mailhouse-${body.formType}`, `vertical-${body.vertical || 'unknown'}`],
      customFields: {
        formType: body.formType,
        city: body.city || '',
        route: body.route || '',
        skuId: body.skuId || '',
        vertical: body.vertical || '',
        filters: JSON.stringify(body.filters || {}),
        message: body.message || '',
      },
    };

    console.log('[lead] GHL payload:', ghlPayload);

    // Real GHL webhook — uncomment + set GHL_WORKFLOW_ID when ready:
    // await fetch(`https://services.leadconnectorhq.com/hooks/${GHL_WORKFLOW_ID}`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(ghlPayload),
    // });

    let paymentLink: string | null = null;
    if (body.formType === 'booking' && body.skuId) {
      const sku = SKUS.find((s) => s.id === body.skuId);
      if (sku && sku.paymentLink && !sku.paymentLink.includes('REPLACE_ME')) {
        paymentLink = sku.paymentLink;
      }
    }

    return NextResponse.json({
      success: true,
      paymentLink,
      message: 'Lead captured. A human will reach out within 24 hours.',
    });
  } catch (error) {
    console.error('[lead] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
