import React from 'react';

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Pick your routes',
      long: 'Enter your ZIP to see every open USPS carrier route near you — homes, price per home, and how many ad slots are left. Claim as many as you want; inventory is capped so you\'re never buried.',
      icon: '📍',
    },
    {
      num: '02',
      title: 'We design it',
      long: 'Tell us your offer and drop any logo or photos you have. Our designers build a print-ready 9×12 postcard on-brand for your business and send proofs within 48 hours. Unlimited revisions until you approve.',
      icon: '🎨',
    },
    {
      num: '03',
      title: 'We print & mail',
      long: 'Once you approve, we print on heavy stock and submit the mailing to USPS under Every Door Direct Mail. Your postcard lands in every mailbox on the routes you claimed — no address list needed.',
      icon: '📮',
    },
    {
      num: '04',
      title: 'You book jobs',
      long: 'Every postcard carries a dedicated tracking number and QR code, so you know exactly which routes and mailings drove calls. Reorder your best performers in a couple of clicks.',
      icon: '📈',
    },
  ];

  return (
    <div className="mh-animate-rise">
      {/* Hero */}
      <div style={{ background: 'var(--ink-900)', color: 'var(--paper-100)', padding: '72px clamp(20px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>
            How it works
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 4.6vw, 56px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '14px 0 0', color: '#fff', maxWidth: 720 }}>
            From your offer to every mailbox in four steps.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-on-ink-muted)', margin: '18px 0 0', maxWidth: 540 }}>
            No design software, no print quotes, no post-office paperwork. Pick your routes and approve the artwork — we handle everything downstream.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '64px clamp(20px, 5vw, 56px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {steps.map((s) => (
              <div
                key={s.num}
                style={{
                  display: 'flex',
                  gap: 18,
                  padding: 20,
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    display: 'inline-flex',
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--ink-900)',
                    color: 'var(--paper-100)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                  }}
                >
                  {s.icon}
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal-500)', marginBottom: 5 }}>
                    Step {s.num}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-0.01em', margin: '0 0 5px', color: 'var(--text-strong)' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.5, color: 'var(--text-muted)', margin: 0 }}>{s.long}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, padding: 22, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-h1)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  48hr
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>
                  Design turnaround
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-h1)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  7–10d
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>
                  In mailboxes
                </div>
              </div>
            </div>
            <a href="/#routes">
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 18,
                  padding: '16px 32px',
                  background: 'var(--signal-500)',
                  color: '#fff',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--signal-500)',
                  cursor: 'pointer',
                }}
              >
                See open routes →
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
