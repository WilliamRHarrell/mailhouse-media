import { Button } from '@/components/ui/Button';

export default function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      desc: 'Test a route first',
      price: '$0.06',
      example: '$60 for 1,000 homes',
      features: ['Single route, single mailing', 'Design, print, postage included', 'Basic tracking', 'Email support'],
      featured: false,
      btnVariant: 'outline' as const,
    },
    {
      name: 'Growth',
      desc: 'Most popular with local businesses',
      price: '$0.06',
      example: '$540 for 9,000 homes (3 routes)',
      features: ['Up to 5 routes per mailing', 'Priority design', 'Dedicated tracking number + QR', 'Quarterly re-mail discount'],
      featured: true,
      btnVariant: 'primary' as const,
    },
    {
      name: 'Agency',
      desc: 'Multi-client, ongoing campaigns',
      price: 'Custom',
      example: 'Volume pricing on request',
      features: ['Unlimited routes', 'Custom artwork per client', 'API access for inventory', 'Dedicated account manager'],
      featured: false,
      btnVariant: 'outline' as const,
    },
  ];

  return (
    <div className="mh-animate-rise">
      {/* Hero */}
      <div style={{ background: 'var(--paper-200)', padding: '64px clamp(20px, 5vw, 56px) 20px', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
          Pricing
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 4.6vw, 56px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '14px auto 0', color: 'var(--text-strong)', maxWidth: 720 }}>
          One flat price per home. Everything included.
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-muted)', margin: '16px auto 0', maxWidth: 560 }}>
          Design, printing, and USPS postage are all in. No setup fees, no contracts.
        </p>
      </div>

      {/* Tiers */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '44px clamp(20px, 5vw, 56px) 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'stretch' }}>
          {tiers.map((t) => (
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
                <span
                  style={{
                    position: 'absolute',
                    top: -11,
                    left: 28,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    background: 'var(--signal-500)',
                    padding: '4px 9px',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  Most popular
                </span>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: t.featured ? '#fff' : 'var(--text-strong)', marginBottom: 4 }}>
                {t.name}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: t.featured ? 'var(--text-on-ink-muted)' : 'var(--text-muted)', marginBottom: 18 }}>
                {t.desc}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 2 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 40, letterSpacing: '-0.02em', color: t.featured ? '#fff' : 'var(--text-strong)' }}>
                  {t.price}
                </span>
                {!t.price.startsWith('Custom') && (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: t.featured ? 'var(--text-on-ink-muted)' : 'var(--text-muted)' }}>/ home</span>
                )}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: t.featured ? 'var(--text-on-ink-muted)' : 'var(--text-muted)', marginBottom: 20 }}>
                ≈ {t.example}
              </div>
              <div style={{ height: 1, background: t.featured ? 'var(--border-on-ink)' : 'var(--border-hairline)', marginBottom: 18 }} />
              <ul style={{ listStyle: 'none', margin: '0 0 22px', padding: 0, display: 'flex', flexDirection: 'column', gap: 11, flex: 1 }}>
                {t.features.map((f) => (
                  <li
                    key={f}
                    style={{ display: 'flex', gap: 9, fontFamily: 'var(--font-body)', fontSize: 14, color: t.featured ? 'var(--paper-100)' : 'var(--text-muted)' }}
                  >
                    <span style={{ color: t.featured ? 'var(--signal-400)' : 'var(--success)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button variant={t.btnVariant} size="md" fullWidth style={t.featured ? { background: 'var(--signal-500)', color: '#fff', borderColor: 'var(--signal-500)' } : t.featured === false ? { background: 'transparent', color: t.featured ? '#fff' : 'var(--text-strong)', borderColor: t.featured ? 'var(--border-on-ink)' : 'var(--ink-900)' } : {}}>
                {t.featured ? 'Start a campaign' : 'Get started'}
              </Button>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', textAlign: 'center', margin: '26px auto 0', maxWidth: 600 }}>
          Targeted mailing lists price from $0.11/home depending on filters.{' '}
          <a href="/lists" style={{ color: 'var(--signal-600)', display: 'inline', fontFamily: 'var(--font-body)', fontWeight: 600, textDecoration: 'none' }}>
            Build a targeted list →
          </a>
          <br />
          <span style={{ marginTop: 6, display: 'inline-block' }}>
            Need precision by event + filter?{' '}
            <a href="/ai-targeting" style={{ color: 'var(--signal-600)', fontWeight: 600, textDecoration: 'none' }}>
              Try AI targeting →
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
