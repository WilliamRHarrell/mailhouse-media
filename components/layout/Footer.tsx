import Link from 'next/link';

export function Footer() {
  return (
    <>
      {/* Why choose us */}
      <section style={{ background: 'var(--surface-sunken)', padding: '64px clamp(20px, 5vw, 56px)', borderTop: '1px solid var(--border-hairline)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)', marginBottom: 16 }}>
              Why Choose Mailhouse Media
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: 0, maxWidth: 560 }}>
              <strong style={{ color: 'var(--text-strong)' }}>Most local businesses waste thousands on Facebook and Google ads that get ignored.</strong> With Mailhouse Media's EDDM service, you skip the digital clutter and put your offer directly in front of potential customers — in their mailbox. Design, printing, and USPS postage all included. Track every response with our unique QR code system. Starting at just $0.06 per home.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {[
              { big: '5-9%', label: 'Avg response rate' },
              { big: '100%', label: 'Of every route delivered' },
              { big: '48hr', label: 'Design turnaround' },
              { big: '$0.06', label: 'Per home all-in' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-h2)', color: 'var(--signal-500)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {s.big}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <div style={{ background: 'var(--signal-500)', color: '#fff' }}>
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '64px clamp(20px, 5vw, 56px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(30px, 3.8vw, 44px)', letterSpacing: '-0.02em', margin: 0, color: '#fff' }}>
              See which routes are open near you.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.9)', margin: '12px 0 0', maxWidth: 460 }}>
              Enter your ZIP, browse open routes, claim a slot in under 2 minutes.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/check-coverage">
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, padding: '16px 32px', background: '#fff', color: 'var(--signal-500)', borderRadius: 'var(--radius-md)', border: '2px solid #fff' }}>
                See open routes →
              </div>
            </Link>
            <Link href="/ai-targeting">
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, padding: '16px 32px', background: 'transparent', color: '#fff', borderRadius: 'var(--radius-md)', border: '2px solid rgba(255,255,255,0.55)' }}>
                Try AI targeting
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: 'var(--ink-900)', color: 'var(--paper-100)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '56px clamp(20px, 5vw, 56px) 40px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 32 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, letterSpacing: 'var(--ls-tight)', color: 'var(--paper-100)' }}>
              MAILHOUSE<span style={{ color: 'var(--signal-400)' }}>.</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-on-ink-muted)', margin: '16px 0 20px', maxWidth: 280 }}>
              The physical ad network for local service businesses. Every door. Every home. Every mailbox matters.
            </p>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-on-ink-muted)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--paper-100)' }}>Contact:</strong><br />
              ryan@ryanharrell.ai<br />
              317-671-7278<br />
              4145 Applecross Dr<br />
              Fayetteville, NC 28314
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)', marginBottom: 2 }}>
              Services
            </div>
            <FooterLink href="/check-coverage">EDDM coverage</FooterLink>
            <FooterLink href="/lists">Targeted lists</FooterLink>
            <FooterLink href="/ai-targeting">AI targeting</FooterLink>
            <FooterLink href="/how">How it works</FooterLink>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)', marginBottom: 2 }}>
              Company
            </div>
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/">Home</FooterLink>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)', marginBottom: 2 }}>
              Who this is for
            </div>
            <FooterLink href="/check-coverage">Roofers</FooterLink>
            <FooterLink href="/check-coverage">HVAC companies</FooterLink>
            <FooterLink href="/check-coverage">Landscapers</FooterLink>
            <FooterLink href="/check-coverage">Real estate agents</FooterLink>
            <FooterLink href="/check-coverage">Dent repair</FooterLink>
            <FooterLink href="/check-coverage">Home services</FooterLink>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-on-ink)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto', padding: '18px clamp(20px, 5vw, 56px)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-on-ink-muted)' }}>
              © 2026 Mailhouse Media. EDDM® is a registered service of the USPS.
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: 'var(--text-on-ink-muted)' }}>
              EVERY DOOR · EVERY HOME
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--text-on-ink-muted)',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </Link>
  );
}
