import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="mh-animate-rise">
      {/* HERO */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--ink-900)',
          color: '#fff',
          padding: 'var(--space-20) 0',
        }}
      >
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={{ maxWidth: 800 }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-body-sm)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--signal-500)',
                marginBottom: 'var(--space-4)',
              }}
            >
              EDDM Direct Mail Advertising
            </div>
            <h1 style={heroH1}>
              Reach Every Mailbox in Your Target Neighborhood
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--fs-body-lg)',
                lineHeight: 'var(--lh-body)',
                color: 'var(--paper-100)',
                marginBottom: 'var(--space-8)',
              }}
            >
              Skip the digital noise. Our EDDM (Every Door Direct Mail) service puts your 9×12 postcard in every mailbox on the carrier routes you choose. No ad blockers. No scrolling past. Just real mail, real responses, and real jobs. Design, printing, and USPS postage all included — starting at just $1.99 per home.
            </p>
            <Link href="/check-coverage" style={ctaBtn}>
              See Available Routes Near You →
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF BAND */}
      <section style={proofBand}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={proofGrid}>
            <div style={proofItem}>
              <div style={proofNumber}>$1.99/home</div>
              <div style={proofLabel}>"Lowest cost-per-impression in local advertising"</div>
            </div>
            <div style={proofItem}>
              <div style={proofNumber}>100% Delivery Rate</div>
              <div style={proofLabel}>"Every home on your route gets your postcard"</div>
            </div>
            <div style={proofItem}>
              <div style={proofNumber}>5-9% Average Response Rate</div>
              <div style={proofLabel}>"Compare that to 0.1% for Facebook ads"</div>
            </div>
            <div style={proofItem}>
              <div style={proofNumber}>48-Hour Turnaround</div>
              <div style={proofLabel}>"From concept to print-ready design"</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS TEASER */}
      <section style={section}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={sectionHeader}>
            <div>
              <div style={eyebrow}>How Our EDDM Service Works</div>
              <h2 style={sectionH2}>Four Simple Steps to Reach Every Home in Your Area</h2>
            </div>
            <Link href="/how" style={link}>
              View Our Complete Process Guide →
            </Link>
          </div>
          <p style={sectionIntro}>
            Most local businesses waste money on Facebook and Google ads that get ignored. With Mailhouse Media's EDDM service, you skip the digital clutter and put your offer directly in front of potential customers — in their mailbox. Here's how we make it easy:
          </p>
          <div style={stepsGrid}>
            {[
              {
                num: '01',
                title: 'Choose Your Route',
                body: 'Use our interactive map to find available carrier routes in your service area. See exactly how many homes are on each route and how many ad slots are still open (we cap routes at 10 advertisers max).',
              },
              {
                num: '02',
                title: "We Design Your Postcard",
                body: 'Send us your offer, logo, and any images. Our designers create a professional 9×12 postcard that stands out in the mailbox. Unlimited revisions until you love it.',
              },
              {
                num: '03',
                title: 'We Print & Mail',
                body: 'Once you approve the design, we print on premium 14pt card stock and coordinate with USPS for the next available EDDM mailing date. No trips to the post office, no address lists to pull.',
              },
              {
                num: '04',
                title: 'Track Your Response',
                body: 'Every postcard gets a unique tracking number and QR code. See exactly which routes drove calls, text messages, and website visits. Reorder your best-performing routes anytime.',
              },
            ].map((step) => (
              <div key={step.num} style={stepCard}>
                <div style={stepNum}>{step.num}</div>
                <h3 style={stepTitle}>{step.title}</h3>
                <p style={stepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ ...section, background: 'var(--surface-sunken)', padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <h2 style={faqH2}>Frequently Asked Questions About EDDM Direct Mail</h2>
          <div style={faqGrid}>
            {[
              {
                q: 'What is EDDM and how does it work?',
                a: "EDDM (Every Door Direct Mail) is a USPS service that lets businesses send mail to every address on a carrier route without needing a mailing list. You choose a USPS carrier route, and your postcard gets delivered to every mailbox on that route — homes and businesses alike. It's perfect for local service businesses like roofing, HVAC, cleaning, and home improvement.",
              },
              {
                q: 'How much does EDDM direct mail cost?',
                a: "Our EDDM service includes everything — design, printing, and USPS postage — for just $1.99 per home. For a typical 1,000-home route, that's $1,990 total. Compare that to Facebook or Google ads, where you pay per impression with no guarantee anyone actually sees your message.",
              },
              {
                q: "What's the average response rate for direct mail?",
                a: 'Industry data shows EDDM and direct mail get 5-9% response rates, compared to 0.1% for digital ads. That\'s 20-50x better results. With EDDM, your postcard lands in every mailbox — there\'s no algorithm deciding who sees it. For local service businesses, even a 1-2% response rate can mean several high-value jobs from a single mailing.',
              },
              {
                q: 'How long does it take to get my postcard in mailboxes?',
                a: "Once you approve the design (usually within 48 hours), we queue your mailing for the next available USPS EDDM date. Typical turnaround is 7-10 business days from approval to delivery. We'll confirm the exact delivery date before we print.",
              },
              {
                q: 'Can I target specific types of homes or demographics?',
                a: "EDDM uses full carrier routes — you can't filter by income, home value, or age within a route. If you need demographic targeting, check out our Targeted Mail List service, which lets you filter by homeowner status, property value, and more for $0.11/home.",
              },
            ].map((faq, i) => (
              <div key={i} style={faqItem}>
                <h3 style={faqQ}>{faq.q}</h3>
                <p style={faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI TARGETING TEASER */}
      <section style={{ ...section, background: 'var(--surface-card)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={aiTeaserGrid}>
            <div>
              <div style={eyebrow}>AI-Powered Event Targeting</div>
              <h2 style={sectionH2}>Hail hit your neighborhood? Find the right homes automatically</h2>
              <p style={sectionIntro}>
                Our AI system monitors weather events, new closings, and market signals in real time. Describe your ideal customer — "homeowners with 15+ year-old roofs in zip codes hit by hail last week" — and we'll build the perfect mailing list. No manual research required.
              </p>
              <Link href="/ai-targeting" style={secondaryCta}>
                Explore AI Targeting →
              </Link>
            </div>
            <div style={aiCard}>
              <h3 style={aiCardTitle}>Example Request:</h3>
              <ul style={aiCardList}>
                <li>Homes over $400K</li>
                <li>Last NC area with 2" hail</li>
                <li>Last 30 days</li>
                <li>Owner-occupied only</li>
              </ul>
              <div style={aiCardResult}>
                <div style={aiCardResultLabel}>Matches found:</div>
                <div style={aiCardResultNumber}>3,420 homes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section style={{ ...section, background: 'var(--surface-ink)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={sectionHeader}>
            <div>
              <div style={eyebrow}>Direct Mail vs. Digital Ads</div>
              <h2 style={sectionH2}>Why Local Businesses Choose Mailhouse Media Over Facebook</h2>
            </div>
          </div>
          <div style={comparisonGrid}>
            <div style={comparisonCard}>
              <h3 style={comparisonTitle}>Facebook/Google Ads</h3>
              <ul style={comparisonList}>
                <li>
                  <span style={comparisonX}>✕</span>
                  <span>0.1% average response rate</span>
                </li>
                <li>
                  <span style={comparisonX}>✕</span>
                  <span>Blocked, muted, or scrolled past</span>
                </li>
                <li>
                  <span style={comparisonX}>✕</span>
                  <span>Auction prices that climb every quarter</span>
                </li>
                <li>
                  <span style={comparisonX}>✕</span>
                  <span>Competing with global brands</span>
                </li>
              </ul>
            </div>
            <div style={{ ...comparisonCard, background: 'var(--paper-100)' }}>
              <h3 style={{ ...comparisonTitle, color: 'var(--text-strong)' }}>Mailhouse EDDM</h3>
              <ul style={comparisonList}>
                <li>
                  <span style={comparisonCheck}>✓</span>
                  <span>5-9% response rate — 20-50× digital</span>
                </li>
                <li>
                  <span style={comparisonCheck}>✓</span>
                  <span>Physically handled by every household</span>
                </li>
                <li>
                  <span style={comparisonCheck}>✓</span>
                  <span>Flat $1.99 per home, all-in</span>
                </li>
                <li>
                  <span style={comparisonCheck}>✓</span>
                  <span>100% delivery, no algorithm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={section}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <blockquote style={testimonial}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
              "We mailed two routes in March and booked 14 roof jobs off one postcard. It paid for the whole year of mailings in a week."
            </p>
            <footer style={testimonialFooter}>
              <div>
                <div style={{ fontWeight: 600 }}>Javier Reyes</div>
                <div style={{ fontSize: 'var(--fs-body)', color: 'var(--text-muted)' }}>Owner, Reyes Roofing · Coral Springs, FL</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section style={{ ...section, background: 'var(--paper-100)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <div style={eyebrow}>Real Work, Real Results</div>
            <h2 style={sectionH2}>From Napkin Sketch to Mailbox</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-lg)', color: 'var(--text-muted)', maxWidth: 600, margin: 'var(--space-4) auto 0' }}>
              Give us a rough idea. We'll turn it into a professional 9×12 postcard that gets responses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)', maxWidth: 1000, margin: '0 auto' }}>
            {/* Before */}
            <div style={{ textAlign: 'center' }}>
              <div style={portfolioLabel}>Before: Client's Sketch</div>
              <div style={portfolioImageWrapper}>
                <img
                  src="/portfolio-nicks-sketch.png"
                  alt="Hand-drawn sketch for Nick's Mobile Oil Change"
                  style={portfolioImage}
                />
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-4)' }}>
                Simple drawing with basic layout notes
              </p>
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--signal-500)', fontWeight: 700 }}>
              →
            </div>

            {/* After */}
            <div style={{ textAlign: 'center' }}>
              <div style={portfolioLabel}>After: Mailhouse Design</div>
              <div style={portfolioImageWrapper}>
                <img
                  src="/portfolio-nicks-finished.png"
                  alt="Professional 9x12 postcard design for Nick's Mobile Oil Change"
                  style={portfolioImage}
                />
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginTop: 'var(--space-4)' }}>
                Print-ready 9×12 postcard — mailed to 1,000 homes
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
            <Link href="/check-coverage" style={ctaBtn}>
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Styles
const heroH1: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-display-lg)',
  fontWeight: 700,
  lineHeight: 'var(--lh-tight)',
  marginBottom: 'var(--space-6)',
};

const ctaBtn: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-body-lg)',
  fontWeight: 700,
  padding: 'var(--space-4) var(--space-8)',
  background: 'var(--signal-500)',
  color: '#fff',
  borderRadius: 'var(--radius-sm)',
  textDecoration: 'none',
};

const secondaryCta: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-body)',
  fontWeight: 700,
  padding: 'var(--space-2) var(--space-2)',
  color: 'var(--signal-600)',
  textDecoration: 'none',
};

const proofBand: React.CSSProperties = {
  background: 'var(--surface-ink)',
  color: '#fff',
  padding: 'var(--space-12) 0',
};

const proofGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: 'var(--space-6)',
};

const proofItem: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
};

const proofNumber: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h1)',
  fontWeight: 700,
};

const proofLabel: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--paper-200)',
};

const section: React.CSSProperties = {
  padding: 'var(--space-16) 0',
};

const sectionHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: 'var(--space-8)',
  flexWrap: 'wrap',
  gap: 'var(--space-4)',
};

const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-body-sm)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--signal-500)',
  marginBottom: 'var(--space-2)',
};

const sectionH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h2)',
  fontWeight: 700,
};

const link: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  fontWeight: 600,
  color: 'var(--signal-500)',
  textDecoration: 'none',
};

const sectionIntro: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-lg)',
  lineHeight: 'var(--lh-body)',
  marginBottom: 'var(--space-8)',
  maxWidth: 700,
};

const stepsGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: 'var(--space-6)',
};

const stepCard: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-3)',
};

const stepNum: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-display-2xl)',
  fontWeight: 900,
  color: 'var(--signal-500)',
  lineHeight: 1,
};

const stepTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h3)',
  fontWeight: 700,
  marginTop: 'var(--space-4)',
};

const stepBody: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-body)',
};

const faqH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h2)',
  fontWeight: 700,
  marginBottom: 'var(--space-8)',
};

const faqGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 'var(--space-8)',
};

const faqItem: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-3)',
};

const faqQ: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h4)',
  fontWeight: 700,
};

const faqA: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-body)',
};

const aiTeaserGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 'var(--space-12)',
  alignItems: 'center',
};

const aiCard: React.CSSProperties = {
  background: 'var(--ink-900)',
  color: '#fff',
  padding: 'var(--space-6)',
  borderRadius: 'var(--radius-lg)',
};

const aiCardTitle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-body-sm)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: 'var(--space-4)',
  color: 'var(--paper-200)',
};

const aiCardList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
  marginBottom: 'var(--space-6)',
};

const aiCardResult: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
};

const aiCardResultLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-body-sm)',
  color: 'var(--paper-200)',
};

const aiCardResultNumber: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h2)',
  fontWeight: 700,
  color: 'var(--signal-500)',
};

const comparisonGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 'var(--space-6)',
};

const comparisonCard: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  padding: 'var(--space-8)',
  borderRadius: 'var(--radius-lg)',
};

const comparisonTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h3)',
  fontWeight: 700,
  marginBottom: 'var(--space-4)',
  color: 'var(--paper-200)',
};

const comparisonList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-4)',
};

const comparisonX: React.CSSProperties = {
  color: 'var(--signal-400)',
  marginRight: 'var(--space-3)',
};

const comparisonCheck: React.CSSProperties = {
  color: 'var(--success)',
  marginRight: 'var(--space-3)',
};

const testimonial: React.CSSProperties = {
  borderLeft: '4px solid var(--signal-500)',
  paddingLeft: 'var(--space-8)',
  margin: 0,
};

const testimonialFooter: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  color: 'var(--text-body)',
};

const portfolioLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-micro)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: 'var(--ls-eyebrow)',
  color: 'var(--signal-500)',
  marginBottom: 'var(--space-3)',
};

const portfolioImageWrapper: React.CSSProperties = {
  background: 'var(--surface-card)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-lg)',
  padding: 'var(--space-4)',
  boxShadow: 'var(--shadow-sm)',
};

const portfolioImage: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: 'var(--radius-md)',
};
