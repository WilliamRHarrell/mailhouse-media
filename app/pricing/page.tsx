import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Direct Mail Pricing | $0.06/Home All-In for EDDM',
  description: 'Transparent direct mail pricing starting at $0.06/home. Design, printing, USPS postage all included. No hidden fees, no contracts. See pricing for EDDM, targeted lists, and AI targeting.',
  openGraph: {
    title: 'Mailhouse Media Pricing — Starting at $0.06/Home',
    description: 'No hidden fees. No setup costs. No contracts. Everything included at $0.06/home for EDDM.',
  },
};

export default function PricingPage() {
  return (
    <div className="mh-animate-rise">
      {/* Hero */}
      <div style={{ background: 'var(--paper-200)', padding: '64px clamp(20px, 5vw, 56px) 20px', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
          Pricing
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 4.6vw, 56px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '14px auto 0', color: 'var(--text-strong)', maxWidth: 720 }}>
          Direct Mail Pricing: $0.06/Home, Everything Included
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-muted)', margin: '16px auto 0', maxWidth: 560 }}>
          What's included in $0.06/home? Everything. Design, printing, USPS postage, tracking, and support. No hidden fees, no setup charges, no surprise costs.
        </p>
      </div>

      {/* Services overview */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '40px clamp(20px, 5vw, 56px) 20px' }}>
        <h2 style={sectionH2}>Our Services: Choose Your Level of Targeting</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {[
            {
              title: 'EDDM Service',
              subtitle: 'Every Door Direct Mail',
              tag: 'Best for: Broad awareness, budget campaigns',
              price: '$0.06/home',
              bullets: ['Design, printing, USPS postage', 'Every home on carrier route', '800-900 homes per route', 'No targeting — full coverage'],
            },
            {
              title: 'Targeted Mail Lists',
              subtitle: 'Demographic filtering',
              tag: 'Best for: High-ticket services, premium customers',
              price: '$0.11/home',
              bullets: ['Filter by homeowner, value, age', 'Only matching homes receive mail', '300-600 homes per list', 'Include data access + filtering'],
              featured: true,
            },
            {
              title: 'AI Event Targeting',
              subtitle: 'Event-based precision',
              tag: 'Best for: Hail storms, seasonal shifts, new closings',
              price: '$0.11/home',
              bullets: ['AI detects events automatically', 'Custom list + vertical match', '300-800 homes per list', 'Real-time event monitoring'],
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: s.featured ? 'var(--ink-900)' : 'var(--surface-card)',
                border: s.featured ? '2px solid var(--signal-500)' : '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                padding: 26,
                color: s.featured ? '#fff' : 'var(--text-body)',
              }}
            >
              {s.featured && (
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  background: 'var(--signal-500)',
                  padding: '4px 9px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: 12,
                }}>
                  Most flexible
                </span>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: s.featured ? '#fff' : 'var(--text-strong)' }}>
                {s.title}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: s.featured ? 'var(--paper-200)' : 'var(--text-muted)', marginTop: 2 }}>
                {s.subtitle}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, color: s.featured ? 'var(--signal-400)' : 'var(--signal-500)', margin: '12px 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {s.tag}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 32, color: s.featured ? '#fff' : 'var(--text-strong)', marginBottom: 12 }}>
                {s.price}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {s.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: 8, fontFamily: 'var(--font-body)', fontSize: 13.5, color: s.featured ? 'var(--paper-100)' : 'var(--text-muted)', marginBottom: 6 }}>
                    <span style={{ color: s.featured ? 'var(--signal-400)' : 'var(--success)' }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing tiers */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '20px clamp(20px, 5vw, 56px) 20px' }}>
        <h2 style={sectionH2}>Volume Tiers: Save More As You Scale</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'stretch' }}>
          {[
            {
              name: 'Starter',
              desc: 'Test a route first',
              price: '$0.06',
              example: '$54 for 900 homes (1 route)',
              features: ['Single route, single mailing', 'Design, print, postage included', 'Basic tracking', 'Email support'],
              featured: false,
              btnVariant: 'outline' as const,
            },
            {
              name: 'Growth',
              desc: 'Most popular with local businesses',
              price: '$0.06',
              example: '$270 for 4,500 homes (5 routes)',
              features: ['Up to 5 routes per mailing', 'Priority design (24hr)', 'Dedicated tracking + QR', 'Quarterly re-mail discount'],
              featured: true,
              btnVariant: 'primary' as const,
            },
            {
              name: 'Agency',
              desc: 'Multi-client, ongoing campaigns',
              price: 'Custom',
              example: 'Volume pricing on request',
              features: ['Unlimited routes', 'Custom artwork per client', 'API access for inventory', 'Account manager'],
              featured: false,
              btnVariant: 'outline' as const,
            },
          ].map((t) => (
            <div
              key={t.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: t.featured ? 'var(--ink-900)' : 'var(--surface-card)',
                border: t.featured ? '2px solid var(--signal-500)' : '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: t.featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                padding: 28,
                position: 'relative',
              }}
            >
              {t.featured && (
                <span style={{
                  position: 'absolute', top: -11, left: 28,
                  fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: '#fff', background: 'var(--signal-500)',
                  padding: '4px 9px', borderRadius: 'var(--radius-sm)',
                }}>
                  Most popular
                </span>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: t.featured ? '#fff' : 'var(--text-strong)', marginBottom: 4 }}>
                {t.name}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: t.featured ? 'var(--paper-200)' : 'var(--text-muted)', marginBottom: 18 }}>
                {t.desc}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 2 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 40, letterSpacing: '-0.02em', color: t.featured ? '#fff' : 'var(--text-strong)' }}>
                  {t.price}
                </span>
                {!t.price.startsWith('Custom') && (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: t.featured ? 'var(--paper-200)' : 'var(--text-muted)' }}>/ home</span>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: t.featured ? 'var(--paper-200)' : 'var(--text-muted)', marginBottom: 20 }}>
                ≈ {t.example}
              </div>
              <div style={{ height: 1, background: t.featured ? 'var(--border-on-ink)' : 'var(--border-hairline)', marginBottom: 18 }} />
              <ul style={{ listStyle: 'none', margin: '0 0 22px', padding: 0, display: 'flex', flexDirection: 'column', gap: 11, flex: 1 }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 9, fontFamily: 'var(--font-body)', fontSize: 14, color: t.featured ? 'var(--paper-100)' : 'var(--text-muted)' }}>
                    <span style={{ color: t.featured ? 'var(--signal-400)' : 'var(--success)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button variant={t.btnVariant} size="md" fullWidth style={t.featured ? { background: 'var(--signal-500)', color: '#fff', borderColor: 'var(--signal-500)' } : { background: 'transparent', color: 'var(--text-strong)', borderColor: 'var(--ink-900)' }}>
                {t.featured ? 'Start a campaign' : 'Get started'}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ROI examples */}
      <section style={{ background: 'var(--surface-sunken)', padding: 'var(--space-16) 0' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 clamp(20px, 5vw, 56px)' }}>
          <h2 style={sectionH2}>Real ROI Examples: How Much Can You Make?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                biz: 'Roofer (EDDM Pro)',
                cost: '$216',
                reach: '3,600 homes',
                response: '328 leads',
                jobs: '11 inspections, 4 replacements',
                revenue: '$50,000',
                roi: '231×',
              },
              {
                biz: 'Landscaper (Targeted List)',
                cost: '$55',
                reach: '500 homes',
                response: '57 leads',
                jobs: '18 design jobs',
                revenue: '$50,400',
                roi: '916×',
              },
              {
                biz: 'Dent Repair (AI Targeting)',
                cost: '$231',
                reach: '2,100 homes',
                response: '183 leads',
                jobs: '47 dent repair jobs',
                revenue: '$16,450',
                roi: '71×',
              },
            ].map((r, i) => (
              <div key={i} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, margin: '0 0 16px', color: 'var(--text-strong)' }}>
                  {r.biz}
                </h3>
                {[
                  { label: 'Cost', value: r.cost },
                  { label: 'Reach', value: r.reach },
                  { label: 'Response', value: r.response },
                  { label: 'Booked', value: r.jobs },
                  { label: 'Revenue', value: r.revenue, accent: true },
                  { label: 'ROI', value: r.roi, big: true },
                ].map((row, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-hairline)' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)' }}>{row.label}</span>
                    <span style={{
                      fontFamily: row.big ? 'var(--font-mono)' : 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: row.big ? 22 : 14,
                      color: row.accent ? 'var(--signal-500)' : row.big ? 'var(--success)' : 'var(--text-strong)',
                    }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-muted)', textAlign: 'center', margin: '24px auto 0', maxWidth: 640, lineHeight: 1.55 }}>
            Even at a conservative 10× ROI, a $54 EDDM mailing becomes $540 in revenue. Direct mail is one of the highest-ROI channels available to local businesses — and the only one that reaches 100% of households.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: 'var(--space-16) clamp(20px, 5vw, 56px)' }}>
        <h2 style={sectionH2}>Pricing FAQs: Everything You Want to Know About Cost</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28, marginTop: 32 }}>
          {[
            {
              q: 'Is there a setup fee or minimum order?',
              a: "No setup fees. No minimum order. You can start with a single 900-home route for $54. We don't believe in locking you into contracts or charging hidden fees.",
            },
            {
              q: 'What does $0.06/home actually include?',
              a: 'Everything. Professional design (with unlimited revisions), 14pt premium card stock printing, USPS EDDM postage, tracking, and support. The only thing you need to provide is your logo, offer, and brand guidelines.',
            },
            {
              q: 'Why is targeted list pricing $0.11/home?',
              a: 'Targeted lists require more work: we pull custom data, apply filters, and verify addresses. EDDM uses a pre-built carrier route. The extra $0.05/home covers data access and list generation. Plus, targeted lists typically get 2× the response rate, so the cost-per-lead is often lower.',
            },
            {
              q: 'Do you charge extra for design revisions?',
              a: 'No. Unlimited revisions are included. We\'ll keep tweaking the design until you love it. Most clients approve within 1-2 rounds, but we never charge for extra revisions.',
            },
            {
              q: 'Do you offer discounts for multiple mailings?',
              a: 'Yes. If you commit to 3+ mailings in 90 days, we offer a 10% discount. If you mail 10+ routes per cycle, we offer a 15% discount. Contact us for custom pricing on high-volume campaigns.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards (Visa, Mastercard, Amex) and bank transfer (ACH) for larger orders. Payment is due before we send your mailing to USPS.',
            },
          ].map((faq, i) => (
            <div key={i}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h4)', letterSpacing: '-0.01em', margin: '0 0 8px', color: 'var(--text-strong)' }}>
                {faq.q}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', margin: 0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', textAlign: 'center', margin: '0 auto 40px', maxWidth: 600 }}>
        <Link href="/lists" style={{ color: 'var(--signal-600)', fontWeight: 600, textDecoration: 'none' }}>
          Build a targeted list →
        </Link>
        <span style={{ display: 'inline-block', margin: '0 10px' }}>·</span>
        <Link href="/ai-targeting" style={{ color: 'var(--signal-600)', fontWeight: 600, textDecoration: 'none' }}>
          Try AI targeting →
        </Link>
        <span style={{ display: 'inline-block', margin: '0 10px' }}>·</span>
        <Link href="/check-coverage" style={{ color: 'var(--signal-600)', fontWeight: 600, textDecoration: 'none' }}>
          See available routes →
        </Link>
      </p>
    </div>
  );
}

const sectionH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  fontSize: 'clamp(26px, 3vw, 36px)',
  letterSpacing: '-0.02em',
  margin: 0,
  color: 'var(--text-strong)',
};
