export default function AboutPage() {
  const values = [
    {
      title: 'Local, not global',
      body: "You're not bidding against national brands. You own your neighborhood's route outright.",
      icon: '🏠',
    },
    {
      title: 'Accountable by design',
      body: 'Tracking numbers and QR codes on every card. Real response data, not vanity impressions.',
      icon: '✓',
    },
    {
      title: 'Done for you',
      body: 'Design, print, and postage handled end to end. You approve; we deliver to every door.',
      icon: '📮',
    },
  ];

  const stats = [
    { value: '300+', label: 'Local businesses' },
    { value: '1,400+', label: 'Routes covered' },
    { value: '6.2M', label: 'Postcards mailed' },
    { value: '2–5%', label: 'Avg. response', accent: true },
  ];

  return (
    <div className="mh-animate-rise">
      {/* Hero */}
      <div style={{ background: 'var(--ink-900)', color: 'var(--paper-100)', padding: '72px clamp(20px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>
            About Mailhouse Media
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 4.6vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: '16px 0 0', color: '#fff' }}>
            We built the local ad network for mailboxes.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-on-ink-muted)', margin: '20px auto 0', maxWidth: 640 }}>
            Local businesses were told to move their budgets online. Then they watched costs climb and response rates crater. We built Mailhouse to give them back the most trusted channel there is — the mailbox — with the targeting and accountability of a modern ad platform.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '56px clamp(20px, 5vw, 56px) 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, padding: 34, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-h1)', letterSpacing: '-0.02em', lineHeight: 1, color: s.accent ? 'var(--signal-500)' : 'var(--text-strong)' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 44 }}>
          {values.map((v) => (
            <div key={v.title}>
              <span
                style={{
                  display: 'inline-flex',
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--signal-100)',
                  color: 'var(--signal-600)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 14,
                  fontSize: 20,
                }}
              >
                {v.icon}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-0.01em', margin: '0 0 6px', color: 'var(--text-strong)' }}>
                {v.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
