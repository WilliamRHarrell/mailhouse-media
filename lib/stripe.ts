// Stripe placeholder — replace with real SDK once SKUs are live
// https://docs.stripe.com/payments/payment-links

export interface StripeSKU {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  paymentLink?: string; // Stripe payment link URL
}

// Base SKUs — update prices/paymentLinks with real Stripe values
// Once live, swap these for dynamic fetches from Stripe
export const SKUS = {
  EDDM_STANDARD: {
    id: 'eddm-standard',
    name: 'EDDM Route Slot — Standard',
    description: 'Standard carrier route slot. 9x12 postcard to every door.',
    priceCents: 60, // $0.60 — update based on real pricing
    paymentLink: 'https://buy.stripe.com/REPLACE_ME_STANDARD',
  },
  EDDM_PREMIUM: {
    id: 'eddm-premium',
    name: 'EDDM Route Slot — Premium',
    description: 'Premium carrier route slot with scarcity guarantee.',
    priceCents: 95,
    paymentLink: 'https://buy.stripe.com/REPLACE_ME_PREMIUM',
  },
  TARGETED_LIST_BASE: {
    id: 'targeted-list-base',
    name: 'Custom Targeted List',
    description: 'AI-matched carrier routes based on event + filters.',
    priceCents: 1100, // $11.00 list fee — update based on real pricing
    paymentLink: 'https://buy.stripe.com/REPLACE_ME_TARGETED',
  },
} as const;

/**
 * Get the Stripe payment link for a given SKU.
 * In production, this would verify inventory exists before returning the link.
 */
export function getPaymentLink(skuId: string): string | null {
  const sku = Object.values(SKUS).find((s) => s.id === skuId);
  if (!sku || !sku.paymentLink || sku.paymentLink.includes('REPLACE_ME')) {
    return null;
  }
  return sku.paymentLink;
}

export function getSKU(skuId: string) {
  return Object.values(SKUS).find((s) => s.id === skuId) || null;
}
