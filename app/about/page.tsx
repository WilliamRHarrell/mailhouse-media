import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Mailhouse Media | Our Story & Mission for Local Business',
  description: 'Mailhouse Media helps local service businesses grow through predictable, affordable direct mail marketing. From frustrated ad-spend to proven EDDM results.',
  openGraph: {
    title: 'About Mailhouse Media',
    description: 'Why we built Mailhouse Media — and how we help local businesses replace digital ad-spend with predictable direct mail.',
  },
};

export default function AboutPage() {
  return (
    <div className="mh-animate-rise">
      {/* Hero */}
      <section style={{ background: 'var(--ink-900)', color: 'var(--paper-100)', padding: '72px clamp(20px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>
            About Mailhouse Media
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 4.6vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: '16px 0 0', color: '#fff' }}>
            We're Rebuilding Local Advertising Around the Mailbox
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--text-on-ink-muted)', margin: '20px auto 0', maxWidth: 640 }}>
            Local service businesses were told to move their budgets online. Then they watched costs climb and response rates crater. We built Mailhouse to give them back the most trusted channel there is — the mailbox — with the targeting, tracking, and transparency of a modern ad platform.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '56px clamp(20px, 5vw, 56px) 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, padding: 34, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          {[
            { value: '300+', label: 'Local businesses helped', accent: false },
            { value: '1,400+', label: 'Routes covered', accent: false },
            { value: '6.2M', label: 'Postcards mailed', accent: false },
            { value: '5-9%', label: 'Avg. response rate', accent: true },
          ].map((s) => (
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
      </section>

      {/* Our Story */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '40px clamp(20px, 5vw, 56px)' }}>
        <h2 style={sectionH2}>The Problem We Saw</h2>
        <p style={storyP}>
          Local service businesses — roofers, landscapers, cleaners, HVAC, real estate — were spending thousands on digital ads with almost nothing to show for it. Facebook CPMs (cost per thousand impressions) have tripled since 2020. Google Ads is a race to the bottom. And despite all that spending, most local businesses still struggle to get consistent, predictable leads.
        </p>
        <p style={storyP}>
          At the same time, EDDM (Every Door Direct Mail) has been quietly delivering 5-9% response rates for decades. The catch? The process was clunky: pull address lists, coordinate with printers, fill out USPS forms. Most business owners didn't have time for that.
        </p>

        <h2 style={{ ...sectionH2, marginTop: 40 }}>The Solution We Built</h2>
        <p style={storyP}>
          Mailhouse Media makes EDDM so easy that any local business can do it. Enter your ZIP code, choose a route, approve the design. That's it. We handle design, printing, USPS coordination, and tracking — so you just wait for the phone to ring.
        </p>
        <p style={storyP}>
          We launched with two core beliefs: first, local businesses deserve predictable marketing (not a gambling session with Facebook's ad manager). Second, direct mail isn't dead — it just needs modern tracking, targeting, and transparency. That's what we built.
        </p>

        <h2 style={{ ...sectionH2, marginTop: 40 }}>Who We Help</h2>
        <p style={storyP}>
          We work exclusively with local service businesses:
        </p>
        <ul style={{ ...storyList, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
          {['Roofers & contractors', 'HVAC companies', 'Landscapers & lawn care', 'Cleaning services', 'Pest control', 'Dent repair & auto services', 'Real estate agents', 'Home security', 'Solar companies'].map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--surface-sunken)', padding: '64px clamp(20px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2 style={sectionH2}>What We Believe: Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 32 }}>
            {[
              {
                title: 'Predictable Marketing Over Hope Marketing',
                body: "Most marketing is a gamble. You spend money and hope for the best. We believe local businesses should know exactly what they're getting: how many homes will see your postcard, how much it will cost, and how to track response. That's why we built a system with full transparency.",
                icon: '📍',
              },
              {
                title: "Direct Mail Isn't Dead — It Evolved",
                body: 'People used to say direct mail was dead. But response rates tell a different story: 5-9% for direct mail vs 0.1% for digital ads. Direct mail isn\'t dead — it was just boring and hard to execute. We took the best parts (tactile, trusted, high-response) and added modern tech (tracking, targeting, transparency).',
                icon: '✓',
              },
              {
                title: 'Results Over Promises',
                body: "We don't believe in vanity metrics — impressions, clicks, reach. We believe in booked jobs. If your postcard doesn't generate calls, texts, or website visits, we failed. That's why every mailing gets tracking — so you see real results, not pretty charts.",
                icon: '📮',
              },
            ].map((v) => (
              <div key={v.title}>
                <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--signal-100)', color: 'var(--signal-600)', alignItems: 'center', justifyContent: 'center', marginBottom: 14, fontSize: 20 }}>
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
      </section>

      {/* Team */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '64px clamp(20px, 5vw, 56px)' }}>
        <h2 style={sectionH2}>Who's Behind Mailhouse Media</h2>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-sm)', marginTop: 24 }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--ink-900)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 32, flexShrink: 0 }}>
              RH
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, margin: '0 0 4px', color: 'var(--text-strong)' }}>Ryan Harrell</h3>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal-500)', marginBottom: 12 }}>
                Founder & CEO
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
                15+ years in marketing, sales, and operations across multiple industries. He founded Mailhouse Media after seeing too many local service businesses throw away money on inefficient digital ads. His mission: make every door direct mail as easy as running a Facebook ad — with better results.
              </p>
            </div>
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal-500)', margin: '40px 0 16px' }}>
          Company Facts
        </h3>
        <ul style={storyList}>
          <li><strong>Headquarters:</strong> Fayetteville, NC (fully remote team)</li>
          <li><strong>Mission:</strong> To help every local service business in America grow through predictable, affordable direct mail marketing.</li>
          <li><strong>Vision:</strong> Every local business should have access to the same marketing that national chains use — without the national chain budgets. We're building the tools to make that happen.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--surface-sunken)', padding: '64px clamp(20px, 5vw, 56px)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2 style={sectionH2}>Company FAQs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 32 }}>
            {[
              {
                q: 'Where is Mailhouse Media based?',
                a: "We're based in Fayetteville, North Carolina. Our team is fully remote, but we serve clients across the entire U.S.",
              },
              {
                q: 'Who runs Mailhouse Media?',
                a: 'Ryan Harrell is the founder and CEO. He has 15+ years of experience in marketing and direct mail. The team includes designers, developers, and customer support specialists.',
              },
              {
                q: 'What types of businesses do you work with?',
                a: "We work exclusively with local service businesses: roofers, HVAC, landscaping, cleaning, pest control, dent repair, real estate, home security, solar. If you're a local service business, we can help.",
              },
              {
                q: 'Why did you start Mailhouse Media?',
                a: 'After seeing local businesses waste thousands on ads with almost zero ROI, we knew there had to be a better solution. EDDM (direct mail) delivers 5-9% response rates, but the process was clunky. We built Mailhouse to make EDDM so easy that any business can use it.',
              },
              {
                q: 'How is Mailhouse different from other direct mail companies?',
                a: 'Three things: (1) We focus exclusively on local service businesses. (2) We offer real-time route availability and instant booking. (3) We include tracking on every mailing — so you see response data, not just delivery counts.',
              },
              {
                q: 'How can I contact Mailhouse Media?',
                a: "You can reach us through our contact form or email. We respond within 24 hours.",
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
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--signal-500)', color: '#fff', padding: '64px clamp(20px, 5vw, 56px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
            See which routes are open in your area and book your slot in under 2 minutes.
          </p>
          <Link href="/check-coverage" style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, padding: '16px 32px', background: '#fff', color: 'var(--signal-500)', borderRadius: 'var(--radius-md)', textDecoration: 'none' }}>
            See Available Routes Near You →
          </Link>
        </div>
      </section>
    </div>
  );
}

const sectionH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  fontSize: 'clamp(26px, 3vw, 36px)',
  letterSpacing: '-0.02em',
  margin: '0 0 16px',
  color: 'var(--text-strong)',
};

const storyP: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-lg)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-muted)',
  margin: '0 0 16px',
};

const storyList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: '0 0 16px',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-lg)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-body)',
};
