/**
 * Mailhouse Media — Unit Economics Module
 *
 * All cost/pricing math is centralized here. Every customer-facing quote,
 * internal margin calculation, and reorder trigger pulls from this file.
 *
 * ASSUMPTIONS (2026 rates, verified July 2026):
 * - USPS EDDM Retail postage: $0.247/piece (flat rate regardless of size)
 * - USPS EDDM BMEU postage: $0.242/piece (requires permit, ~1% discount)
 * - USPS July 12, 2026 rate increase will bump both ~$0.013-$0.015
 *
 * SOURCES:
 * - USPS.com (current rates)
 * - CRST.net EDDM guide (printing industry benchmarks)
 * - MailPro.org direct mail cost guide 2026
 * - Vendor quotes (4over, GotPrint) — TO BE VALIDATED by Ryan
 *
 * COST COMPONENTS (per-piece breakdown at typical volumes):
 */

// ============================================================================
// USPS EDDM POSTAGE (fixed by USPS, July 2026)
// ============================================================================

export const USPS_POSTAGE = {
  RETAIL_CURRENT: 0.247, // per piece, current (pre-July 12 2026)
  RETAIL_AFTER_JULY: 0.260, // per piece, post-July 12 2026 rate increase
  BMEU_CURRENT: 0.242, // per piece, with permit
  BMEU_AFTER_JULY: 0.255, // per piece, with permit post-July 12
  PERMIT_ANNUAL_FEE: 285, // one-time per year
  RETAIL_DAILY_MAX_PER_ZIP: 5000, // over this need BMEU permit
} as const;

// ============================================================================
// PRINTING COSTS (per piece, at indicated volumes)
// Vendors: 4over, GotPrint, PSprint — prices are industry benchmarks
// ============================================================================

export const PRINT_COSTS = {
  // 4over standard postcards (confirmed)
  '6.5x9': {
    vendor: '4over',
    stock: '14pt gloss',
    qty_500: 0.12,
    qty_1000: 0.09,
    qty_2500: 0.07,
    qty_5000: 0.07,
    qty_10000: 0.05,
  },
  '6x11': {
    vendor: '4over',
    stock: '14pt gloss',
    qty_500: 0.15,
    qty_1000: 0.11,
    qty_2500: 0.08,
    qty_5000: 0.08,
    qty_10000: 0.06,
  },
  '8.5x11': {
    vendor: '4over',
    stock: '14pt gloss',
    qty_500: 0.22,
    qty_1000: 0.16,
    qty_2500: 0.12,
    qty_5000: 0.12,
    qty_10000: 0.10,
  },
  // 9x12 — GotPrint explicitly offers this size as EDDM-eligible
  // 4over does NOT list this size; verify with Ryan which vendor he uses
  '9x12': {
    vendor: 'GotPrint (to verify with Ryan)',
    stock: '14pt or 16pt gloss',
    qty_500: 0.30,
    qty_1000: 0.24,
    qty_2500: 0.18,
    qty_5000: 0.16,
    qty_10000: 0.13,
    // NOTE: These are estimates. Ryan's historical 4over/Bob Ross 9x12
    // numbers + the PDF guide will replace these once uploaded.
  },
} as const;

// ============================================================================
// DESIGN COSTS (one-time per customer, amortized over first run)
// ============================================================================

export const DESIGN_COSTS = {
  STANDARD: 100, // single offer, simple layout, 5-min brief
  COMPLEX: 200, // multiple photos, custom layout, detailed brief
  TEMPLATE_REFRESH: 35, // update offer/date on existing template (reorders)
  FREE_THRESHOLD_PIECES: 2500, // design free at this volume (amortizes to ~$0.04/piece)
} as const;

// ============================================================================
// LETTERSHOP COSTS (Path B - external fulfillment partner)
// Based on MailPro/CatDi industry benchmarks (~$0.04-$0.08/piece)
// ============================================================================

export const LETTERSHOP_COSTS = {
  BUNDLING_AND_DROP: 0.06, // per piece, average
  FACING_SLIP_PREP: 0.005, // per bundle (1 bundle = 50-100 pieces)
} as const;

// ============================================================================
// AGENT / OVERHEAD COSTS (automated, essentially zero marginal cost)
// These are real costs amortized into pricing, not paid per-order
// ============================================================================

export const OVERHEAD = {
  GHL_MONTHLY: 97, // GoHighLevel CRM
  SUPABASE_MONTHLY: 25, // database
  VERCEL_MONTHLY: 20, // hosting
  STRIPE_FEE_PCT: 0.029 + 0.30, // 2.9% + $0.30 per transaction
  DESIGN_TOOLS: 50, // Canva Pro, Adobe, etc.
  TELEPHONE_TRACKING: 30, // call tracking (per route)
  TOTAL_FIXED_MONTHLY: 222, // sum of fixed monthly costs
} as const;

// ============================================================================
// TOTAL COST PER PIECE (what it costs US to fulfill one mail piece)
// ============================================================================

export type MailerSize = '6.5x9' | '6x11' | '8.5x11' | '9x12';
export type VolumeTier = '500' | '1000' | '2500' | '5000' | '10000';

export function getVolumeTier(pieces: number): VolumeTier {
  if (pieces < 1000) return '500';
  if (pieces < 2500) return '1000';
  if (pieces < 5000) return '2500';
  if (pieces < 10000) return '5000';
  return '10000';
}

export function getOurCostPerPiece(size: MailerSize, pieces: number): number {
  const tier = getVolumeTier(pieces);
  const printCosts = PRINT_COSTS[size];
  const printPerPiece = printCosts[`qty_${tier}` as keyof typeof printCosts] as number;

  // Postage (retail, current rate)
  const postage = USPS_POSTAGE.RETAIL_CURRENT;

  // Lettershop (Path B)
  const lettershop = LETTERSHOP_COSTS.BUNDLING_AND_DROP;

  // Design amortization (on first order; reorders use template_refresh @ $35)
  // Assume $100 standard design amortized over the run
  const designCostPerPiece = Math.min(DESIGN_COSTS.STANDARD / pieces, 0.20);

  return postage + printPerPiece + lettershop + designCostPerPiece;
}

// ============================================================================
// CUSTOMER-FACING PRICING (what we charge)
// Industry standard: $0.85-$1.50/piece for EDDM, depending on size
// Target margin: 50-65%
// ============================================================================

export const CUSTOMER_PRICING = {
  // These are Ryan's starting prices — adjust as needed
  '6.5x9': {
    basePerHome: 0.85,
    minRouteCharge: 75, // minimum order value
  },
  '6x11': {
    basePerHome: 0.95,
    minRouteCharge: 85,
  },
  '8.5x11': {
    basePerHome: 1.15,
    minRouteCharge: 100,
  },
  '9x12': {
    basePerHome: 1.45, // premium pricing for largest mailer
    minRouteCharge: 150,
  },
} as const;

// ============================================================================
// QUOTE GENERATION
// ============================================================================

export interface QuoteRequest {
  size: MailerSize;
  homes: number;
  isFirstOrder: boolean;
  includeDesign: boolean;
}

export interface Quote {
  size: MailerSize;
  homes: number;
  tier: VolumeTier;
  lineItems: { label: string; amount: number }[];
  subtotal: number;
  stripeFee: number;
  total: number;
  ourCost: number;
  grossProfit: number;
  marginPct: number;
}

export function generateQuote(req: QuoteRequest): Quote {
  const { size, homes, isFirstOrder, includeDesign } = req;
  const pricing = CUSTOMER_PRICING[size];
  const tier = getVolumeTier(homes);

  const lineItems: { label: string; amount: number }[] = [];

  // Mailing service (per home)
  const mailingFee = homes * pricing.basePerHome;
  lineItems.push({
    label: `EDDM mailing (${homes} homes × $${pricing.basePerHome.toFixed(2)}/home)`,
    amount: mailingFee,
  });

  // Design (first order only, optional)
  if (isFirstOrder && includeDesign) {
    const designFee = homes >= DESIGN_COSTS.FREE_THRESHOLD_PIECES
      ? 0
      : DESIGN_COSTS.STANDARD;
    if (designFee > 0) {
      lineItems.push({ label: 'Design & layout (one-time)', amount: designFee });
    } else {
      lineItems.push({ label: 'Design & layout (free at 2,500+ pieces)', amount: 0 });
    }
  } else if (!isFirstOrder) {
    lineItems.push({ label: 'Template refresh & reprint', amount: 0 });
  }

  const subtotal = lineItems.reduce((sum, item) => sum + item.amount, 0);
  const effectiveSubtotal = Math.max(subtotal, pricing.minRouteCharge);

  // Stripe fee
  const stripeFee = Math.round(effectiveSubtotal * OVERHEAD.STRIPE_FEE_PCT * 100) / 100;
  const total = effectiveSubtotal + stripeFee;

  // Our costs
  const ourMailingCost = homes * getOurCostPerPiece(size, homes);
  const designCost = isFirstOrder && homes < DESIGN_COSTS.FREE_THRESHOLD_PIECES
    ? DESIGN_COSTS.STANDARD
    : (isFirstOrder ? 0 : DESIGN_COSTS.TEMPLATE_REFRESH);
  const ourCost = ourMailingCost + designCost;

  const grossProfit = effectiveSubtotal - ourCost;
  const marginPct = (grossProfit / effectiveSubtotal) * 100;

  return {
    size,
    homes,
    tier,
    lineItems,
    subtotal: effectiveSubtotal,
    stripeFee,
    total,
    ourCost: Math.round(ourCost * 100) / 100,
    grossProfit: Math.round(grossProfit * 100) / 100,
    marginPct: Math.round(marginPct * 10) / 10,
  };
}

// ============================================================================
// PROFITABILITY CHECKS
// ============================================================================

export function isProfitable(quote: Quote, minMarginPct = 40): boolean {
  return quote.marginPct >= minMarginPct;
}

export function getMarginWarning(quote: Quote): string | null {
  if (quote.marginPct < 30) {
    return `⚠️ Critical margin warning: ${quote.marginPct.toFixed(1)}% on this quote. Consider increasing price or reducing cost.`;
  }
  if (quote.marginPct < 45) {
    return `⚠️ Below target margin: ${quote.marginPct.toFixed(1)}% (target 50-65%). Review pricing or volume.`;
  }
  return null;
}

// ============================================================================
// TARGETED LIST PRICING (demographic filtering)
// Higher margin, smaller runs, but data costs offset print savings
// ============================================================================

export const TARGETED_LIST_PRICING = {
  perHome: 0.65, // lower than EDDM because smaller print runs + data costs
  dataAccessFee: 50, // one-time filter fee (pure margin)
  minListSize: 100, // don't bother below this
  maxListSize: 5000,
} as const;

export interface TargetedListQuote {
  homes: number;
  lineItems: { label: string; amount: number }[];
  dataCosts: number; // estimates of list purchase costs (we pay $0.05-$0.15/record)
  printCosts: number;
  ourTotalCost: number;
  customerTotal: number;
  grossProfit: number;
  marginPct: number;
}

export function generateTargetedListQuote(homes: number): TargetedListQuote {
  const filteredHomes = Math.max(TARGETED_LIST_PRICING.minListSize, homes);

  // Customer charges
  const customerDataFee = TARGETED_LIST_PRICING.dataAccessFee;
  const customerPerHome = filteredHomes * TARGETED_LIST_PRICING.perHome;
  const customerTotal = customerDataFee + customerPerHome;

  // Our costs
  const ourDataCost = filteredHomes * 0.10; // avg list cost $0.10/record (we buy from data vendors)
  const ourPostage = filteredHomes * USPS_POSTAGE.RETAIL_CURRENT;
  const ourPrint = filteredHomes * 0.14; // avg print at small volumes
  const ourLettershop = filteredHomes * LETTERSHOP_COSTS.BUNDLING_AND_DROP;
  const ourTotalCost = ourDataCost + ourPostage + ourPrint + ourLettershop;

  const grossProfit = customerTotal - ourTotalCost;
  const marginPct = (grossProfit / customerTotal) * 100;

  return {
    homes: filteredHomes,
    lineItems: [
      { label: `Targeted list fee (one-time)`, amount: customerDataFee },
      { label: `Print + mail (${filteredHomes} homes × $${TARGETED_LIST_PRICING.perHome}/home)`, amount: customerPerHome },
    ],
    dataCosts: Math.round(ourDataCost * 100) / 100,
    printCosts: Math.round((ourPrint + ourPostage + ourLettershop) * 100) / 100,
    ourTotalCost: Math.round(ourTotalCost * 100) / 100,
    customerTotal,
    grossProfit: Math.round(grossProfit * 100) / 100,
    marginPct: Math.round(marginPct * 10) / 10,
  };
}

// ============================================================================
// AI EVENT TARGETING PRICING (highest value, premium)
// Combines data filtering with real-time event matching
// ============================================================================

export const AI_TARGETING_PRICING = {
  perHome: 0.75, // premium over standard targeted lists
  aiServiceFee: 99, // covers AI matching + list generation (pure margin)
  minListSize: 200,
  maxListSize: 10000,
} as const;

export function generateAITargetingQuote(homes: number) {
  const filteredHomes = Math.max(AI_TARGETING_PRICING.minListSize, homes);
  const customerAIFee = AI_TARGETING_PRICING.aiServiceFee;
  const customerPerHome = filteredHomes * AI_TARGETING_PRICING.perHome;
  const customerTotal = customerAIFee + customerPerHome;

  // Our costs (targeted list costs + AI compute amortization)
  const ourDataCost = filteredHomes * 0.08; // slightly lower, we use cheaper data sources
  const ourPostage = filteredHomes * USPS_POSTAGE.RETAIL_CURRENT;
  const ourPrint = filteredHomes * 0.14;
  const ourLettershop = filteredHomes * LETTERSHOP_COSTS.BUNDLING_AND_DROP;
  const ourAIOverhead = 10; // amortized AI compute cost per list
  const ourTotalCost = ourDataCost + ourPostage + ourPrint + ourLettershop + ourAIOverhead;

  const grossProfit = customerTotal - ourTotalCost;
  const marginPct = (grossProfit / customerTotal) * 100;

  return {
    homes: filteredHomes,
    lineItems: [
      { label: `AI targeting service (one-time)`, amount: customerAIFee },
      { label: `Targeted list + mail (${filteredHomes} homes × $${AI_TARGETING_PRICING.perHome}/home)`, amount: customerPerHome },
    ],
    ourTotalCost: Math.round(ourTotalCost * 100) / 100,
    customerTotal,
    grossProfit: Math.round(grossProfit * 100) / 100,
    marginPct: Math.round(marginPct * 10) / 10,
  };
}
