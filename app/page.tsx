import Link from 'next/link';
import { PostcardPreview } from '@/components/brand/PostcardPreview';

export default function HomePage() {
  return (
    <div className="mh-animate-rise">
      {/* HERO */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--ink-900)',
          padding: '64px clamp(20px, 5vw, 56px) 72px',
        }}
      >
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }}
        >
          <path d="M-40 320 C 220 240 320 360 560 260 S 940 140 1240 210" fill="none" stroke="#f5eae4" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
          <path d="M-40 160 C 260 90 360 210 620 120 S 980 40 1240 90" fill="none" stroke="#f5eae4" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" />
        </svg>
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.04fr 0.96fr',
            gap: 48,
            alignItems: 'center',
            maxWidth: 1120,
            margin: '0 auto',
          }}
        >
          <div>
            {/* Scarcity badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: 'rgba(254,0,50,0.13)',
                border: '1px solid rgba(254,0,50,0.32)',
                borderRadius: 'var(--radius-pill)',
                padding: '6px 12px',
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--signal-500)',
                  animation: 'mh-pulse 1.8s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  color: 'var(--paper-100)',
                }}
              >
                8 SLOTS LEFT · ROUTE 33076-C
              </span>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 11.5,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--signal-400)',
                display: 'block',
              }}
            >
              Advertise to your local customers
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(40px, 5vw, 60px)',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                margin: '14px 0 0',
                color: '#fff',
              }}
            >
              Advertise to every home
              <br />
              on your street.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 18.5,
                lineHeight: 1.55,
                color: 'var(--text-on-ink-muted)',
                margin: '20px 0 0',
                maxWidth: 470,
              }}
            >
              A 9×12 postcard in every mailbox on the USPS routes you pick. Can't be blocked, muted, or scrolled past. We design, print, and mail it — you book the jobs.
            </p>

            {/* CTA — go to /check-coverage */}
            <Link href="/check-coverage">
              <div
                style={{
                  marginTop: 26,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 18,
                  padding: '16px 32px',
                  background: 'var(--signal-500)',
                  color: '#fff',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--signal-500)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                Check my coverage →
              </div>
            </Link>
          </div>

          {/* Postcard hero visual */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 360 }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '6%',
                zIndex: 3,
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: 'var(--signal-500)',
                boxShadow: 'var(--shadow-signal)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'rotate(-8deg)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 25, color: '#fff', lineHeight: 1 }}>
                2–5%
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: 8,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)',
                  marginTop: 2,
                }}
              >
                Response
              </span>
            </div>
            <div style={{ transform: 'rotate(4deg)', zIndex: 2 }}>
              <PostcardPreview
                headline="NEED A NEW ROOF?"
                offer="$500 off full replacement"
                business="Reyes Roofing"
                phone="(954) 555-0148"
                width={440}
              />
            </div>
            <div style={{ position: 'absolute', bottom: -18, right: '2%', transform: 'rotate(-6deg)', zIndex: 1 }}>
              <PostcardPreview
                headline="SPRING TUNE-UP"
                offer="$89 A/C check"
                business="Cool Breeze HVAC"
                phone="(954) 555-0199"
                accent="var(--navy-400)"
                width={240}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PROOF BAND */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', background: 'var(--signal-500)' }}>
        <div style={{ padding: '24px clamp(20px, 4vw, 44px)', color: '#fff' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 30, letterSpacing: '-0.02em' }}>
            $0.06<span style={{ fontSize: 15, opacity: 0.85 }}> / home</span>
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(255,255,255,0.85)', marginTop: 3 }}>
            Cheapest customer acquisition in your market
          </div>
        </div>
        <div style={{ padding: '24px clamp(20px, 4vw, 44px)', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.22)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 30, letterSpacing: '-0.02em' }}>100%</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(255,255,255,0.85)', marginTop: 3 }}>
            Of doors on every route you claim
          </div>
        </div>
        <div style={{ padding: '24px clamp(20px, 4vw, 44px)', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.22)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 30, letterSpacing: '-0.02em' }}>48hr</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(255,255,255,0.85)', marginTop: 3 }}>
            From your offer to print-ready artwork
          </div>
        </div>
      </div>

      {/* HOW IT WORKS TEASER */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '80px clamp(20px, 5vw, 56px) 20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 36 }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
              How it works
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(30px, 3.6vw, 42px)', letterSpacing: '-0.02em', margin: '10px 0 0', color: 'var(--text-strong)' }}>
              You pick the route. We do the rest.
            </h2>
          </div>
          <a href="/how" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--signal-600)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            See the full process →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {[
            { num: '01', title: 'Pick your routes', body: 'Search your area and claim the USPS routes you want.', icon: '📍' },
            { num: '02', title: "We design it", body: 'Send us your offer. Print-ready 9×12 artwork in 48 hours.', icon: '🎨' },
            { num: '03', title: 'We print & mail', body: 'We print on heavy stock and drop it USPS EDDM to every door.', icon: '📮' },
            { num: '04', title: 'You book jobs', body: 'Track responses with a dedicated number and QR code.', icon: '📈' },
          ].map((s) => (
            <div
              key={s.num}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                padding: 22,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    width: 42,
                    height: 42,
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
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, color: 'var(--text-faint)' }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em', margin: '0 0 6px', color: 'var(--text-strong)' }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--text-muted)', margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI TARGETING TEASER */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '40px clamp(20px, 5vw, 56px) 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
              New · AI-powered targeting
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 3.4vw, 40px)', letterSpacing: '-0.02em', margin: '10px 0 16px', color: 'var(--text-strong)' }}>
              Hail hit your area? We'll find the right routes for you.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.55, color: 'var(--text-muted)', margin: '0 0 24px', maxWidth: 500 }}>
              Describe what you're looking for — homes over $X in the last area to get a storm — and we'll pull a custom carrier route list built around that event.
            </p>
            <a href="/ai-targeting">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 16,
                  padding: '12px 24px',
                  background: 'var(--signal-500)',
                  color: '#fff',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                Try AI targeting →
              </div>
            </a>
          </div>
          <div style={{ background: 'var(--ink-900)', borderRadius: 'var(--radius-lg)', padding: 24, border: '1px solid var(--border-on-ink)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)', marginBottom: 16 }}>
              Example request
            </div>
            {['Homes over $400K', 'Last NC area with 2" hail', 'Last 30 days', 'Owner-occupied only'].map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border-on-ink)' }}>
                <span style={{ color: 'var(--signal-400)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12 }}>✓</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--paper-100)' }}>{t}</span>
              </div>
            ))}
            <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-on-ink-muted)' }}>Matches found</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 22, color: 'var(--signal-400)' }}>3,420 homes</span>
            </div>
          </div>
        </div>
      </div>

      {/* COMPARISON */}
      <div style={{ background: 'var(--ink-900)', color: 'var(--paper-100)', marginTop: 40 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '76px clamp(20px, 5vw, 56px)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>
            Mailbox vs. the feed
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(30px, 3.6vw, 42px)', letterSpacing: '-0.02em', margin: '12px 0 40px', color: '#fff', maxWidth: 640 }}>
            Digital ads get skipped. Postcards get read at the kitchen table.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ background: 'rgba(245,234,228,0.05)', border: '1px solid var(--border-on-ink)', borderRadius: 'var(--radius-lg)', padding: 26 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)', marginBottom: 18 }}>
                A digital impression
              </div>
              {['0.1% average response rate', 'Blocked, muted, or scrolled past', 'Auction prices that climb every quarter', 'Competing with global brands'].map((t) => (
                <div key={t} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-on-ink-muted)', marginBottom: 12 }}>
                  <span style={{ color: 'var(--signal-400)' }}>✕</span> {t}
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--paper-100)', borderRadius: 'var(--radius-lg)', padding: 26, boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-600)', marginBottom: 18 }}>
                A Mailhouse postcard
              </div>
              {['2–5% response rate — 20–50× digital', 'Physically handled by every household', 'Flat ~$0.06 per home, all-in', "You own the route — neighbors can't buy in"].map((t) => (
                <div key={t} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', marginBottom: 12 }}>
                  <span style={{ color: 'var(--success)' }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '76px clamp(20px, 5vw, 56px)', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal-500)', marginBottom: 20 }}>
          Booked jobs, not impressions
        </div>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.28, letterSpacing: '-0.015em', color: 'var(--text-strong)', margin: 0 }}>
          "We mailed two routes in March and booked 14 roof jobs off one postcard. It paid for the whole year of mailings in a week."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 26 }}>
          <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: '50%', background: 'var(--navy-500)', color: '#fff', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16 }}>
            JR
          </span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--text-strong)' }}>Javier Reyes</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>Owner, Reyes Roofing · Coral Springs, FL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
