import Link from 'next/link';

export function Footer() {
  return (
    <>
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
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(30px, 3.8vw, 44px)',
                letterSpacing: '-0.02em',
                margin: 0,
                color: '#fff',
              }}
            >
              Your route to every door.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 17,
                color: 'rgba(255,255,255,0.9)',
                margin: '12px 0 0',
                maxWidth: 460,
              }}
            >
              Check which routes near you are still open. Claim yours before a neighbor does.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/check-coverage" style={{ color: 'inherit' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  padding: '16px 32px',
                  background: '#fff',
                  color: 'var(--signal-500)',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid #fff',
                }}
              >
                See open routes →
              </div>
            </a>
            <a href="/about" style={{ color: 'inherit' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  padding: '16px 32px',
                  background: 'transparent',
                  color: '#fff',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid rgba(255,255,255,0.55)',
                }}
              >
                Talk to us
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: 'var(--ink-900)', color: 'var(--paper-100)' }}>
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '56px clamp(20px, 5vw, 56px) 40px',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 22,
                letterSpacing: 'var(--ls-tight)',
                color: 'var(--paper-100)',
              }}
            >
              MAILHOUSE<span style={{ color: 'var(--signal-400)' }}>.</span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                lineHeight: 1.55,
                color: 'var(--text-on-ink-muted)',
                margin: '16px 0 0',
                maxWidth: 280,
              }}
            >
              The physical ad network for local businesses. Every door. Every home.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 'var(--fs-micro)',
                letterSpacing: 'var(--ls-eyebrow)',
                textTransform: 'uppercase',
                color: 'var(--text-on-ink-muted)',
                marginBottom: 2,
              }}
            >
              Product
            </div>
            <FooterLink href="/how">How it works</FooterLink>
            <FooterLink href="/lists">Targeted lists</FooterLink>
            <FooterLink href="/ai-targeting">AI targeting</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 'var(--fs-micro)',
                letterSpacing: 'var(--ls-eyebrow)',
                textTransform: 'uppercase',
                color: 'var(--text-on-ink-muted)',
                marginBottom: 2,
              }}
            >
              Company
            </div>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/about">Results</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 'var(--fs-micro)',
                letterSpacing: 'var(--ls-eyebrow)',
                textTransform: 'uppercase',
                color: 'var(--text-on-ink-muted)',
                marginBottom: 2,
              }}
            >
              Get started
            </div>
            <FooterLink href="/check-coverage">Check coverage</FooterLink>
            <FooterLink href="#">Sign in</FooterLink>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-on-ink)' }}>
          <div
            style={{
              maxWidth: 1120,
              margin: '0 auto',
              padding: '18px clamp(20px, 5vw, 56px)',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12.5,
                color: 'var(--text-on-ink-muted)',
              }}
            >
              © 2026 Mailhouse Media. EDDM® is a registered service of the USPS.
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: 'var(--ls-wide)',
                color: 'var(--text-on-ink-muted)',
              }}
            >
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
