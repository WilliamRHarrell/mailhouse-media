'use client'
import Link from 'next/link'

export default function PricingCalculator() {
  // Pricing tiers match site pricing
  const TIERS = [
    { id: 'local', name: 'Local Route', homesMin: 200, homesMax: 2000, pricePerHome: 1.99, badge: null },
    { id: 'multi', name: 'Multi-Route', homesMin: 2001, homesMax: 10000, pricePerHome: 1.79, badge: 'MOST POPULAR' },
    { id: 'enterprise', name: 'Enterprise', homesMin: 10001, homesMax: 50000, pricePerHome: 1.59, badge: 'BEST VALUE' },
  ] as const

  // Auto-detect tier based on slider
  const [homes, setHomes] = React.useState<number>(1000)
  const [includeDesign, setIncludeDesign] = React.useState<boolean>(true)
  const [isFirstOrder, setIsFirstOrder] = React.useState<boolean>(true)
  const [customerEmail, setCustomerEmail] = React.useState<string>('')
  const [customerName, setCustomerName] = React.useState<string>('')
  const [selectedZipCodes, setSelectedZipCodes] = React.useState<string[]>(['28301', '28303', '28304']) // Default NC routes
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const DESIGN_FEE = 150
  const FREE_DESIGN_THRESHOLD = 2500

  const activeTier = TIERS.find(t => homes >= t.homesMin && homes <= t.homesMax) || TIERS[0]
  const subtotal = homes * activeTier.pricePerHome
  const designFee = (isFirstOrder && includeDesign && homes < FREE_DESIGN_THRESHOLD) ? DESIGN_FEE : 0
  const total = subtotal + designFee

  const sliderMax = 10000
  const sliderMin = 200

  return (
    <div className="mh-animate-rise">
      {/* HERO */}
      <section style={heroSection}>
        <div style={container}>
          <div style={eyebrow}>Pricing Calculator</div>
          <h1 style={heroH1}>
            Get Your Instant Quote
          </h1>
          <p style={heroSub}>
            Transparent pricing for 9×12 EDDM postcards. No hidden fees, no contracts. Design, printing, and USPS postage all included.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={calcSection}>
        <div style={container}>
          <div style={calcGrid}>
            {/* CONTROLS */}
            <div>
              {/* Route Size */}
              <div style={controlCard}>
                <div style={controlHeader}>
                  <span style={controlLabel}>Route Size</span>
                  <span style={controlValue}>{homes.toLocaleString()} homes</span>
                </div>
                <input
                  type="range"
                  min={sliderMin}
                  max={sliderMax}
                  step={100}
                  value={homes}
                  onChange={(e) => setHomes(Number(e.target.value))}
                  style={slider}
                />
                <div style={scaleLabels}>
                  <span>{sliderMin.toLocaleString()}</span>
                  <span>{sliderMax.toLocaleString()}</span>
                </div>
              </div>

              {/* Tier Selection Info */}
              <div style={tierCard(activeTier.id)}>
                <div style={tierHeader}>
                  <div>
                    <div style={tierLabel}>Current Tier</div>
                    <div style={tierName}>{activeTier.name}</div>
                  </div>
                  <div style={tierPrice}>
                    <span style={tierPriceValue}>${activeTier.pricePerHome.toFixed(2)}</span>
                    <span style={tierPriceUnit}>/home</span>
                  </div>
                </div>
                <div style={tierBadge}>
                  {activeTier.homesMin.toLocaleString()} – {activeTier.homesMax.toLocaleString()} homes
                  {activeTier.badge && <span style={badgePill}>{activeTier.badge}</span>}
                </div>
              </div>

              {/* Options */}
              <div style={controlCard}>
                <div style={optionRow}>
                  <div>
                    <div style={optionLabel}>First Order?</div>
                    <div style={optionDesc}>
                      {isFirstOrder ? 'Includes full custom design' : 'Reorder template — no design fee'}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsFirstOrder(!isFirstOrder)}
                    style={toggleBtn(isFirstOrder)}
                  >
                    {isFirstOrder ? 'Yes' : 'No'}
                  </button>
                </div>
                {isFirstOrder && (
                  <div style={{ ...optionRow, borderTop: '1px solid var(--border-hairline)', paddingTop: 16, marginTop: 16 }}>
                    <div>
                      <div style={optionLabel}>Include Custom Design?</div>
                      <div style={optionDesc}>
                        {homes >= FREE_DESIGN_THRESHOLD ? (
                          <span style={{ color: 'var(--success)' }}>✓ Free — included at {FREE_DESIGN_THRESHOLD.toLocaleString()}+ homes</span>
                        ) : designFee > 0 ? (
                          <>One-time fee: +${DESIGN_FEE}</>
                        ) : (
                          <>Free at {FREE_DESIGN_THRESHOLD.toLocaleString()}+ homes</>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => setIncludeDesign(!includeDesign)}
                      style={toggleBtn(includeDesign)}
                      disabled={homes >= FREE_DESIGN_THRESHOLD}
                    >
                      {includeDesign ? 'Yes' : 'No'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* QUOTE */}
            <div style={quoteContainer}>
              <div style={quoteBox}>
                <div style={quoteHeader}>Your Quote</div>
                <div style={quoteTotal}>
                  <span style={quoteDollar}>$</span>
                  <span style={quoteAmount}>{total.toFixed(2)}</span>
                </div>

                <div style={breakdownList}>
                  <div style={breakdownRow}>
                    <span style={breakdownLabel}>Route size</span>
                    <span style={breakdownValue}>{homes.toLocaleString()} homes</span>
                  </div>
                  <div style={breakdownRow}>
                    <span style={breakdownLabel}>Price per home</span>
                    <span style={breakdownValue}>${activeTier.pricePerHome.toFixed(2)}</span>
                  </div>
                  <div style={breakdownRow}>
                    <span style={breakdownLabel}>Mailing subtotal</span>
                    <span style={breakdownValueMono}>${subtotal.toFixed(2)}</span>
                  </div>
                  {designFee > 0 && (
                    <div style={breakdownRow}>
                      <span style={breakdownLabel}>Custom design</span>
                      <span style={breakdownValueMono}>+${designFee.toFixed(2)}</span>
                    </div>
                  )}
                  {designFee === 0 && isFirstOrder && includeDesign && homes >= FREE_DESIGN_THRESHOLD && (
                    <div style={breakdownRow}>
                      <span style={breakdownLabel}>Custom design</span>
                      <span style={{ ...breakdownValueMono, color: 'var(--success)' }}>FREE</span>
                    </div>
                  )}
                </div>

                <div style={quoteDivider} />

                <div style={includedList}>
                  <div style={includedTitle}>Everything included:</div>
                  <ul style={includedUl}>
                    <li>All USPS postage</li>
                    <li>Premium 16pt printing</li>
                    <li>Route targeting & USPS mapping</li>
                    <li>Lettershop bundling + BMEU drop</li>
                    <li>Tracking + performance report</li>
                    {includeDesign && <li>Custom 9×12 design</li>}
                  </ul>
                </div>

                {/* Customer Info */}
                <div style={customerFormSection}>
                  <div style={customerFormTitle}>Ready to book? Enter your info:</div>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={formInput}
                  />
                  <input
                    type="email"
                    placeholder="Business email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    style={formInput}
                  />
                  <button
                    onClick={async () => {
                      if (!customerName.trim() || !customerEmail.trim()) {
                        alert('Please enter your name and email to proceed.')
                        return
                      }
                      setIsLoading(true)
                      try {
                        const res = await fetch('/api/order', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            customer: { name: customerName, email: customerEmail },
                            orderType: 'eddm_standard',
                            designIncluded: includeDesign,
                            isFirstOrder,
                            routes: [{
                              routeId: 'placeholder',
                              homes,
                              pricePerHome: activeTier.pricePerHome,
                            }],
                          }),
                        })
                        const data = await res.json()
                        if (data.checkout_url) {
                          window.location.href = data.checkout_url
                        } else {
                          alert(data.error || 'Failed to create checkout session')
                        }
                      } catch (err: any) {
                        alert('Error: ' + err.message)
                      } finally {
                        setIsLoading(false)
                      }
                    }}
                    disabled={isLoading}
                    style={{ ...checkoutBtn, opacity: isLoading ? 0.6 : 1 }}
                  >
                    {isLoading ? 'Creating checkout…' : 'Secure Checkout →'}
                  </button>
                  <div style={checkoutSub}>
                    Stripe payment · Cancel anytime before payment · Invoice emailed
                  </div>
                </div>

                <div style={ctaSub}>
                  <Link href="/check-coverage" style={{ color: 'var(--signal-600)', fontWeight: 600 }}>
                    Or browse routes near you →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={compareSection}>
        <div style={container}>
          <div style={eyebrowCenter}>Why EDDM</div>
          <h2 style={compareH2}>Your Money, Working Harder</h2>
          <div style={compareGrid}>
            <div style={compareCard}>
              <h3 style={compareTitle}>Facebook Ads</h3>
              <div style={compareStat}>$0.00</div>
              <div style={compareStatLabel}>guaranteed eyeballs</div>
              <ul style={compareList}>
                <li>✕ Algorithm decides who sees your ad</li>
                <li>✕ Ad fatigue within days</li>
                <li>✕ Costs climb every quarter</li>
                <li>✕ 0.1% response rate average</li>
              </ul>
            </div>
            <div style={{ ...compareCard, ...compareCardWin }}>
              <h3 style={{ ...compareTitle, color: 'var(--paper-200)' }}>Mailhouse EDDM</h3>
              <div style={{ ...compareStat, color: 'var(--signal-300)' }}>5-9%</div>
              <div style={compareStatLabel}>response rate — guaranteed</div>
              <ul style={compareList}>
                <li style={{ color: 'var(--paper-100)' }}>✓ 100% delivery — every home, no algorithm</li>
                <li style={{ color: 'var(--paper-100)' }}>✓ Physically handled by every household</li>
                <li style={{ color: 'var(--paper-100)' }}>✓ Flat pricing — no auction, no surprises</li>
                <li style={{ color: 'var(--paper-100)' }}>✓ 9×12 format = 3× response of standard postcards</li>
              </ul>
            </div>
          </div>
          <div style={roiBox}>
            <div style={roiStat}>For ${(total / 1000).toFixed(0)}/day you spend, you reach {homes.toLocaleString()} homes.</div>
            <div style={roiBody}>
              At a 5% response rate, that's <strong>{Math.round(homes * 0.05)}</strong> leads. At a 10% close rate on $2,000 average jobs,
              that's <strong style={{ color: 'var(--success)' }}>${Math.round(homes * 0.05 * 0.10 * 2000).toLocaleString()}</strong> in new revenue from a single mailing.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={faqSection}>
        <div style={{ ...container, maxWidth: 860 }}>
          <div style={eyebrowCenter}>Questions?</div>
          <h2 style={faqH2}>Common Pricing Questions</h2>
          {[
            {
              q: 'Why is 9×12 priced at $1.99 per home?',
              a: 'A 9×12 postcard is the USPS flat-size format that gets 3× the response rate of a standard 6×9. USPS EDDM postage is a flat rate regardless of size, so the 9×12 costs the same to mail. You get maximum ad space for the highest possible conversion.',
            },
            {
              q: 'What counts as a "home"?',
              a: 'Every address on the carrier route — both residential and business mailboxes. If an address gets mail, it counts as a delivery. So a route with 900 mailboxes means 900 deliveries, even if some are businesses.',
            },
            {
              q: 'Is the design fee recurring?',
              a: 'No. It\'s a one-time fee for your first order. Reorders use the same template with just the date/offer updated — no design charge on subsequent mailings. At 2,500+ homes, design is always free.',
            },
            {
              q: 'When do I pay?',
              a: '50% deposit when you approve the design, final balance before the postcard goes to print. We accept all major credit cards via Stripe. No hidden fees, no setup charges.',
            },
            {
              q: 'Can I save more with volume?',
              a: 'Yes — once you hit 2,001 homes, you drop to the Multi-Route tier at $1.79/home. At 10,001+ homes, you\'re at $1.59/home Enterprise pricing. Larger routes = bigger discounts.',
            },
          ].map((item, i) => (
            <details key={i} style={faqItem}>
              <summary style={faqQ}>{item.q}</summary>
              <p style={faqA}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

import React from 'react'

// ===== Styles using design tokens =====
const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--space-6)',
}

const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-micro)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-eyebrow)',
  color: 'var(--signal-300)',
  marginBottom: 'var(--space-4)',
}

const eyebrowCenter: React.CSSProperties = { ...eyebrow, textAlign: 'center', marginBottom: 'var(--space-4)' }

const heroSection: React.CSSProperties = {
  background: 'var(--ink-900)',
  color: '#fff',
  padding: 'var(--space-16) 0 var(--space-12)',
}

const heroH1: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(36px, 5vw, 56px)',
  fontWeight: 900,
  lineHeight: 'var(--lh-tight)',
  letterSpacing: 'var(--ls-tighter)',
  marginBottom: 'var(--space-4)',
}

const heroSub: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-lg)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--ink-200)',
  maxWidth: 640,
}

const calcSection: React.CSSProperties = {
  padding: 'var(--space-16) 0',
  background: 'var(--paper-100)',
}

const calcGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
  gap: 'var(--space-8)',
  alignItems: 'start',
}

const controlCard: React.CSSProperties = {
  background: '#fff',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-lg)',
  padding: 'var(--space-6)',
  marginBottom: 'var(--space-6)',
  boxShadow: 'var(--shadow-xs)',
}

const controlHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: 'var(--space-4)',
}

const controlLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-micro)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-eyebrow)',
  color: 'var(--text-muted)',
}

const controlValue: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h2)',
  fontWeight: 900,
  color: 'var(--text-strong)',
}

const slider: React.CSSProperties = {
  width: '100%',
  height: 6,
  background: 'var(--paper-300)',
  borderRadius: 3,
  cursor: 'pointer',
  accentColor: 'var(--signal-500)',
}

const scaleLabels: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 8,
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-caption)',
  color: 'var(--text-faint)',
}

const tierCard = (tierId: string): React.CSSProperties => ({
  background: tierId === 'multi' ? 'var(--ink-900)' : '#fff',
  border: `2px solid ${tierId === 'multi' ? 'var(--signal-500)' : 'var(--border-hairline)'}`,
  borderRadius: 'var(--radius-lg)',
  padding: 'var(--space-6)',
  marginBottom: 'var(--space-6)',
  boxShadow: tierId === 'multi' ? 'var(--shadow-signal)' : 'var(--shadow-xs)',
  color: tierId === 'multi' ? '#fff' : 'inherit',
})

const tierHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: 'var(--space-3)',
}

const tierLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-micro)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-eyebrow)',
  opacity: 0.7,
  marginBottom: 4,
}

const tierName: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h3)',
  fontWeight: 900,
}

const tierPrice: React.CSSProperties = {
  display: 'flex',
  alignItems: 'baseline',
  gap: 'var(--space-1)',
}

const tierPriceValue: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h1)',
  fontWeight: 900,
  color: 'var(--signal-500)',
  lineHeight: 1,
}

const tierPriceUnit: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-body-sm)',
  opacity: 0.7,
}

const tierBadge: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-caption)',
  opacity: 0.85,
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-2)',
}

const badgePill: React.CSSProperties = {
  background: 'var(--signal-500)',
  color: '#fff',
  padding: '2px 8px',
  borderRadius: 'var(--radius-pill)',
  fontSize: 'var(--fs-micro)',
  fontWeight: 700,
  letterSpacing: 'var(--ls-eyebrow)',
}

const optionRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 'var(--space-4)',
}

const optionLabel: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-body)',
  fontWeight: 700,
  color: 'var(--text-strong)',
  marginBottom: 4,
}

const optionDesc: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-muted)',
}

const toggleBtn = (on: boolean): React.CSSProperties => ({
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-caption)',
  fontWeight: 700,
  padding: '6px 14px',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid var(--border-soft)',
  background: on ? 'var(--ink-900)' : '#fff',
  color: on ? '#fff' : 'var(--text-strong)',
  cursor: 'pointer',
  letterSpacing: 'var(--ls-eyebrow)',
  textTransform: 'uppercase' as const,
  transition: 'all var(--dur-fast) var(--ease-out)',
})

// QUOTE SECTION
const quoteContainer: React.CSSProperties = {
  position: 'sticky' as const,
  top: 24,
}

const quoteBox: React.CSSProperties = {
  background: '#fff',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-xl)',
  padding: 'var(--space-8)',
  boxShadow: 'var(--shadow-card)',
}

const quoteHeader: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-micro)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-eyebrow)',
  color: 'var(--text-muted)',
  marginBottom: 'var(--space-4)',
}

const quoteTotal: React.CSSProperties = {
  display: 'flex',
  alignItems: 'baseline',
  marginBottom: 'var(--space-8)',
}

const quoteDollar: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h2)',
  fontWeight: 700,
  color: 'var(--text-muted)',
  marginRight: 'var(--space-1)',
}

const quoteAmount: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(48px, 6vw, 64px)',
  fontWeight: 900,
  letterSpacing: 'var(--ls-tighter)',
  color: 'var(--text-strong)',
  lineHeight: 1,
}

const breakdownList: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
}

const breakdownRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  padding: '4px 0',
}

const breakdownLabel: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-muted)',
}

const breakdownValue: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  fontWeight: 600,
  color: 'var(--text-strong)',
}

const breakdownValueMono: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-body-sm)',
  fontWeight: 700,
  color: 'var(--text-strong)',
  fontFeatureSettings: "'tnum' 1",
}

const quoteDivider: React.CSSProperties = {
  borderTop: '1px dashed var(--border-hairline)',
  margin: 'var(--space-4) 0',
}

const includedList: React.CSSProperties = {
  marginBottom: 'var(--space-6)',
}

const includedTitle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-caption)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-eyebrow)',
  color: 'var(--text-muted)',
  marginBottom: 'var(--space-2)',
}

const includedUl: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
}

const ctaBtn: React.CSSProperties = {
  display: 'block',
  width: '100%',
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-body)',
  fontWeight: 700,
  padding: '14px 24px',
  background: 'var(--signal-500)',
  color: '#fff',
  borderRadius: 'var(--radius-md)',
  textDecoration: 'none',
  textAlign: 'center',
  boxShadow: 'var(--shadow-signal)',
  transition: 'all var(--dur-fast) var(--ease-out)',
  letterSpacing: 'var(--ls-wide)',
}

const ctaSub: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-caption)',
  color: 'var(--text-muted)',
  textAlign: 'center',
  marginTop: 'var(--space-3)',
}

// COMPARISON
const compareSection: React.CSSProperties = {
  padding: 'var(--space-20) 0',
  background: 'var(--paper-200)',
}

const compareH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(32px, 4vw, 44px)',
  fontWeight: 900,
  letterSpacing: 'var(--ls-tighter)',
  textAlign: 'center',
  marginBottom: 'var(--space-12)',
}

const compareGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 'var(--space-6)',
  marginBottom: 'var(--space-8)',
}

const compareCard: React.CSSProperties = {
  background: '#fff',
  padding: 'var(--space-8)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border-hairline)',
}

const compareCardWin: React.CSSProperties = {
  background: 'var(--ink-900)',
  color: '#fff',
  border: '2px solid var(--signal-500)',
}

const compareTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h3)',
  fontWeight: 700,
  marginBottom: 'var(--space-4)',
  color: 'var(--text-muted)',
}

const compareStat: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-display-lg)',
  fontWeight: 900,
  letterSpacing: 'var(--ls-tighter)',
  marginBottom: 'var(--space-1)',
}

const compareStatLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-caption)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-eyebrow)',
  color: 'var(--text-muted)',
  marginBottom: 'var(--space-6)',
}

const compareList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--text-body)',
}

const roiBox: React.CSSProperties = {
  background: 'var(--ink-900)',
  color: '#fff',
  padding: 'var(--space-8)',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border-on-ink)',
}

const roiStat: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h2)',
  fontWeight: 700,
  marginBottom: 'var(--space-3)',
}

const roiBody: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--ink-200)',
}

// FAQ
const faqSection: React.CSSProperties = {
  padding: 'var(--space-20) 0',
  background: 'var(--paper-100)',
}

const faqH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(28px, 3.5vw, 38px)',
  fontWeight: 900,
  letterSpacing: 'var(--ls-tighter)',
  textAlign: 'center',
  marginBottom: 'var(--space-10)',
}

const faqItem: React.CSSProperties = {
  background: '#fff',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-md)',
  marginBottom: 'var(--space-3)',
  overflow: 'hidden',
}

const faqQ: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-body-lg)',
  fontWeight: 700,
  padding: 'var(--space-5) var(--space-6)',
  cursor: 'pointer',
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const faqA: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-body)',
  padding: '0 var(--space-6) var(--space-5)',
  margin: 0,
}

// Mobile responsiveness
if (typeof window !== 'undefined') {
  const mq = window.matchMedia('(max-width: 768px)')
  if (mq.matches) {
    Object.assign(calcGrid, { gridTemplateColumns: '1fr' })
    Object.assign(quoteContainer, { position: 'static' })
  }
}

// Checkout form styles
const customerFormSection: React.CSSProperties = {
  marginTop: 'var(--space-6)',
  paddingTop: 'var(--space-6)',
  borderTop: '1px solid var(--border-hairline)',
}

const customerFormTitle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  fontWeight: 600,
  color: 'var(--text-strong)',
  marginBottom: 'var(--space-4)',
}

const formInput: React.CSSProperties = {
  width: '100%',
  padding: 'var(--space-3) var(--space-4)',
  fontSize: 'var(--fs-body)',
  fontFamily: 'var(--font-body)',
  border: '1px solid var(--border-strong)',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--paper-50)',
  marginBottom: 'var(--space-3)',
}

const checkoutBtn: React.CSSProperties = {
  width: '100%',
  padding: 'var(--space-4)',
  fontSize: 'var(--fs-body-lg)',
  fontWeight: 700,
  fontFamily: 'var(--font-display)',
  background: 'var(--signal)',
  color: '#fff',
  border: 'none',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  marginTop: 'var(--space-4)',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'all 0.2s ease',
}

const checkoutSub: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-caption)',
  color: 'var(--text-muted)',
  textAlign: 'center',
  marginTop: 'var(--space-2)',
}
