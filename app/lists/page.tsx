import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Targeted Direct Mail Lists | Filter by Home Value, Age, New Movers',
  description: 'Target specific homes with our direct mail lists. Filter by homeowner status, property value, home age, new movers. Starting at $0.11/home with everything included.',
  openGraph: {
    title: 'Targeted Direct Mail Lists',
    description: 'Mail only the right homes. Filter by homeowner, home value, age, new movers. $0.11/home all-in.',
  },
};

export default function TargetedListsPage() {
  return (
    <div className="mh-animate-rise">
      {/* Hero */}
      <section style={{ background: 'var(--paper-200)', padding: 'var(--space-16) 0 var(--space-10)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={eyebrow}>Targeted Mail Lists</div>
          <h1 style={heroH1}>Targeted Direct Mail Lists: Reach the Homes That Matter Most</h1>
          <p style={heroSub}>
            Need more than blanket coverage? Our targeted mailing list service lets you filter by homeowner status, property value, home age, and more — so your postcard only goes to the addresses most likely to buy. Perfect for high-ticket services where you want to reach premium customers, or for campaigns targeting new homeowners. Starting at just $0.11/home.
          </p>
        </div>
      </section>

      {/* Two modes */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-6) var(--space-6) var(--space-2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={modeCard}>
            <h3 style={modeTitle}>EDDM: Maximum Coverage, Lowest Cost</h3>
            <p style={modeBody}>
              Blanket an entire USPS carrier route. Lowest postage rate, maximum saturation. Best for broad local awareness.
            </p>
            <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
              <div>
                <div style={statNum}>$1.99</div>
                <div style={statLabel}>Per home</div>
              </div>
              <div>
                <div style={statNum}>100%</div>
                <div style={statLabel}>Coverage</div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div style={modeSubTitle}>Best for:</div>
              <ul style={modeList}>
                <li>New businesses building brand awareness</li>
                <li>Services with broad appeal (cleaning, pest control)</li>
                <li>Seasonal promotions (holiday, spring maintenance)</li>
                <li>Referral campaigns ("tell your neighbors!")</li>
              </ul>
            </div>
          </div>

          <div style={{ ...modeCard, border: '2px solid var(--signal-500)', position: 'relative' }}>
            <span style={modeBadge}>AI-powered</span>
            <h3 style={modeTitle}>Targeted List: Precision Targeting</h3>
            <p style={modeBody}>
              Mail only the households that match your criteria. Filter by demographics for higher conversion — less waste, better ROI.
            </p>
            <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
              <div>
                <div style={{ ...statNum, color: 'var(--signal-500)' }}>$0.11</div>
                <div style={statLabel}>Per home</div>
              </div>
              <div>
                <div style={{ ...statNum, color: 'var(--signal-500)' }}>Filtered</div>
                <div style={statLabel}>Targeting</div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div style={modeSubTitle}>Available Filters:</div>
              <ul style={modeList}>
                <li>Homeowner status (owners vs. renters)</li>
                <li>Minimum property value ($200K, $400K, $600K+)</li>
                <li>Home age (built before 2000, 1990, etc.)</li>
                <li>New homeowners (moved in within last 12 months)</li>
                <li>Household income (where available)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-12) var(--space-6) var(--space-6)' }}>
        <h2 style={sectionH2}>Real-World Examples: How Businesses Use Targeted Lists</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {[
            {
              biz: 'Roofer Targeting Aging Homes',
              scenario: "Local roofing company wanted to reach homeowners likely to need roof replacement.",
              filters: ['Homeowner status: Owners only (no renters)', 'Home age: Built before 2000 (20+ years)', 'Property value: $300K+ (likely to invest in repairs)'],
              result: 'From a 900-home route, filters narrowed to 410 homes. Response rate: 7.3% (30 leads), including 4 full roof replacements averaging $12K each.',
            },
            {
              biz: 'Landscaper Targeting Premium Properties',
              scenario: 'High-end landscaping company offers $5K+ design/build projects.',
              filters: ['Homeowner status: Owners only', 'Property value: $600K+ (luxury homes)', 'Home age: Built after 2005 (established yards)'],
              result: 'From a 1,200-home route, filters narrowed to 280 homes. Response rate: 11.4% (32 leads), including 2 design/build projects at $18K each.',
            },
            {
              biz: 'Real Estate Agent Targeting New Movers',
              scenario: 'Agent wanted referral business from homeowners who just moved into the area.',
              filters: ['Homeowner status: Owners only', 'New movers: Moved in within last 12 months'],
              result: 'From an 800-home route, filters narrowed to 95 new homeowners. Response rate: 21% (20 leads), including 3 listings at $2K average commission each.',
            },
          ].map((ex, i) => (
            <div key={i} style={caseCard}>
              <h3 style={caseTitle}>{ex.biz}</h3>
              <p style={caseBody}><strong>Scenario:</strong> {ex.scenario}</p>
              <div style={caseFiltersLabel}>Targeted List Filters:</div>
              <ul style={caseFiltersList}>
                {ex.filters.map((f, j) => <li key={j}>• {f}</li>)}
              </ul>
              <div style={caseResult}>
                <strong>Result:</strong> {ex.result}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: 'var(--surface-sunken)', padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <h2 style={faqH2}>Frequently Asked Questions About Targeted Mail Lists</h2>
          <div style={faqGrid}>
            {[
              {
                q: 'How do your targeted lists compare to EDDM?',
                a: "EDDM delivers to every home on a carrier route (no filtering). Targeted lists use the same USPS data but filter down to specific demographics — so you pay more per home ($0.65 vs $1.99 for 9×12 EDDM), but you only mail to addresses that match your criteria. EDDM is better for broad awareness, targeted lists are better for precision.",
              },
              {
                q: 'How accurate are your targeted list filters?',
                a: 'We pull data from USPS address records, county property records, and third-party demographic databases. Homeowner status and property values are 95%+ accurate. Home age is based on county records and is 90%+ accurate. New mover data is updated monthly.',
              },
              {
                q: 'Can I combine multiple filters?',
                a: 'Yes. For example, you can filter for homeowners only + property value $400K+ + home age 20+ years. The more filters you add, the smaller your list gets (and the more targeted your mailing). You\'ll see your final count and cost before you confirm.',
              },
              {
                q: 'What if my filters return too few homes?',
                a: 'If your filters are too narrow (e.g., filtering to fewer than 100 homes), we\'ll let you know before we run the mailing. You can either loosen your filters or expand to multiple routes. Most clients aim for 300-600 homes per mailing for optimal cost vs. targeting.',
              },
              {
                q: 'Can I re-use my targeted list for future mailings?',
                a: "Yes. Once we pull your targeted list, it's yours to keep. You can reorder the exact same list anytime — or tweak your filters and pull a new list. Most clients mail their targeted list 2-3 times over 6 months for maximum impact.",
              },
              {
                q: 'Do targeted lists work for service businesses or just real estate?',
                a: 'Targeted lists work great for any high-ticket local service. Roofers use them to target aging homes. Landscapers use them for premium properties. Solar companies use them for single-family homes. Home security companies use them for new homeowners. If your average job pays $5K+, targeted lists are worth the extra cost.',
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
    </div>
  );
}

// Styles
const eyebrow: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontWeight: 700,
  fontSize: 'var(--fs-micro)',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--signal-500)',
};

const heroH1: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  fontSize: 'clamp(38px, 4.6vw, 56px)',
  lineHeight: 1,
  letterSpacing: '-0.03em',
  margin: '14px 0 0',
  color: 'var(--text-strong)',
  maxWidth: 760,
};

const heroSub: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 18,
  lineHeight: 1.55,
  color: 'var(--text-muted)',
  margin: '18px 0 0',
  maxWidth: 600,
};

const modeCard: React.CSSProperties = {
  background: 'var(--surface-card)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-sm)',
  padding: 26,
};

const modeBadge: React.CSSProperties = {
  position: 'absolute',
  top: -11,
  right: 18,
  fontFamily: 'var(--font-mono)',
  fontWeight: 700,
  fontSize: 10,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#fff',
  background: 'var(--signal-500)',
  padding: '4px 9px',
  borderRadius: 'var(--radius-sm)',
};

const modeTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 22,
  margin: '0 0 12px',
  color: 'var(--text-strong)',
};

const modeBody: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 14.5,
  lineHeight: 1.55,
  color: 'var(--text-muted)',
  margin: 0,
};

const statNum: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontWeight: 700,
  fontSize: 26,
  lineHeight: 1,
};

const statLabel: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  color: 'var(--text-muted)',
  marginTop: 4,
};

const modeSubTitle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 8,
};

const modeList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
};

const sectionH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  fontSize: 'clamp(26px, 3vw, 36px)',
  letterSpacing: '-0.02em',
  margin: '0 0 32px',
  color: 'var(--text-strong)',
};

const caseCard: React.CSSProperties = {
  background: 'var(--surface-card)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-lg)',
  padding: 24,
  boxShadow: 'var(--shadow-sm)',
};

const caseTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 20,
  margin: '0 0 12px',
  color: 'var(--text-strong)',
};

const caseBody: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  lineHeight: 1.55,
  color: 'var(--text-body)',
  margin: '0 0 12px',
};

const caseFiltersLabel: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--signal-500)',
  marginBottom: 6,
};

const caseFiltersList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: '0 0 14px',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontFamily: 'var(--font-body)',
  fontSize: 13.5,
  color: 'var(--text-muted)',
};

const caseResult: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  lineHeight: 1.55,
  color: 'var(--text-body)',
  padding: '12px 14px',
  background: 'var(--signal-100)',
  borderRadius: 'var(--radius-md)',
  borderLeft: '3px solid var(--signal-500)',
};

const faqH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  fontSize: 'clamp(26px, 3vw, 36px)',
  letterSpacing: '-0.02em',
  margin: '0 0 var(--space-8)',
  color: 'var(--text-strong)',
};

const faqGrid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: 'var(--space-8)',
};

const faqItem: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-3)',
};

const faqQ: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'var(--fs-h4)',
  letterSpacing: '-0.01em',
  margin: 0,
  color: 'var(--text-strong)',
};

const faqA: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-muted)',
  margin: 0,
};
