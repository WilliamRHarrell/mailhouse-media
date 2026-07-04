import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How EDDM Direct Mail Works | 4 Steps to Every Mailbox',
  description: 'Learn how our EDDM direct mail process works: choose your route, approve design, we print & mail, track your response. From 7 days start to finish.',
  openGraph: {
    title: 'How Our EDDM Direct Mail Process Works',
    description: 'Four simple steps from concept to mailbox. 48-hour design, 7-10 day delivery, full tracking. See how it works.',
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Carrier Route',
      body: 'Use our interactive route search tool to find available carrier routes in your service area. We show every open route with details like:',
      bullets: [
        'Total homes on the route (typically 800–900)',
        'How many ad slots are taken (max 10 per route)',
        'Estimated cost based on route size',
        'Premium vs standard route options',
      ],
      extra: "Click any route to claim your slot. You can reserve multiple routes if you want broader coverage.",
      subSections: [
        {
          title: 'What is a Carrier Route?',
          body: "A carrier route is a specific path that a USPS mail carrier walks or drives every day. Routes are designed for efficiency — usually 800-900 homes per route. When you choose a route, you're choosing a geographic area, not just a handful of addresses.",
        },
        {
          title: 'Why Do You Cap Routes at 10 Advertisers?',
          body: "We limit each route to 10 advertisers per mailing cycle to keep your postcard from getting lost in the stack. With fewer advertisers, your mail piece stands out more. Think of it like being 1 of 10 flyers in a mailbox vs 1 of 50.",
        },
      ],
      icon: '📍',
    },
    {
      num: '02',
      title: 'We Design Your Postcard',
      body: 'Once you claim a route, we email you a design brief form. Just tell us about your business, offer, logos, or images you want to use. Our designers will create a professional 9×12 postcard optimized for mailbox impact.',
      bullets: [
        '9×12 postcard design (standard EDDM size)',
        'Unlimited revisions until you approve',
        'Print-ready files quality-checked',
        'Unique tracking number + QR code on every card',
        'Your design is yours to keep',
      ],
      subSections: [
        {
          title: 'What to Include in Your Brief:',
          body: "Your business name, phone, and website. The main offer or headline (e.g., '$100 Off New Roof' or 'Free AC Tune-Up'). Any logos, photos, or brand colors you want. Call to action (call, text, visit website, etc.)",
        },
        {
          title: 'Turnaround: 48 Hours',
          body: "Most designs are ready in 24-48 hours. We email you the final proof for approval before we print. Unlimited revisions at no extra cost.",
        },
      ],
      icon: '🎨',
    },
    {
      num: '03',
      title: 'We Print & Mail',
      body: 'Once you approve the design, we send it to print immediately. Every postcard is printed on 14pt card stock (thick, premium feel) with full-color printing on both sides.',
      bullets: [
        '14pt card stock (4× thicker than standard postcards)',
        'Full-color, both sides',
        '9×12 size (maximum EDDM size)',
        'Quality check on every batch',
      ],
      subSections: [
        {
          title: 'USPS Coordination:',
          body: "We handle all the USPS paperwork, including EDDM forms, route verification, and postage payment. We queue your mailing for the next available EDDM date (usually within 3-5 business days).",
        },
        {
          title: 'Delivery Timeline:',
          body: "Typically, your postcard reaches mailboxes within 7-10 business days from approval. We email you the scheduled delivery date so you can plan your staffing and promotions.",
        },
      ],
      icon: '📮',
    },
    {
      num: '04',
      title: 'Track Your Response',
      body: 'Every postcard we mail gets a unique tracking number and QR code. When someone calls, texts, or scans the QR code, we log that response and tie it back to the specific route.',
      bullets: [
        'Unique phone number and QR code per mailing',
        'Online dashboard showing response numbers by route',
        'Call recordings (optional) to hear how leads came in',
        'Ability to reorder your best-performing routes',
      ],
      subSections: [
        {
          title: 'Why This Matters:',
          body: "Most marketing is a black box — you spend money and hope for the best. With our tracking system, you'll know exactly which routes drive results. Maybe Route A generated 12 calls, while Route B got 2. Next time, you'll know where to double down.",
        },
        {
          title: 'Average Results:',
          body: "Our clients see 5-9% response rates. For a 900-home route, that's 45-81 responses. Even at 1% response, that's 9 leads from a $54 investment. For service businesses, most jobs pay for the mailing 10× over.",
        },
      ],
      icon: '📈',
    },
  ];

  const faqs = [
    {
      q: "Do I need to provide my own mailing list?",
      a: "No. That's the beauty of EDDM — you don't need a list. We use the USPS carrier route, which already has every address mapped out. You just pick a route, and we deliver to every home on that route.",
    },
    {
      q: "Can I see a proof before you print?",
      a: "Yes. We email you a final PDF proof for approval before any printing happens. You can request unlimited revisions at no extra cost until you love the design.",
    },
    {
      q: "What if I want to mail the same route again?",
      a: "You can reorder any route anytime — as long as there are still ad slots available. Most clients find that mailing a route 2-3 times over several months builds brand recognition and drives the best results.",
    },
    {
      q: "Do you offer design help for my postcard?",
      a: "Absolutely. Design is included in our base price. Just send us your logo, offer, and any brand guidelines, and we handle the creative. Need a new logo or brand refresh? We can help with that too (separate project).",
    },
    {
      q: "What's the best time of year to mail?",
      a: "We see strong results year-round, but a few seasonal patterns stand out: Spring (March-May) is home improvement season — great for roofing, landscaping, cleaning. Summer (June-August) is HVAC, pool maintenance, painting. Fall (September-November) is HVAC tune-ups, gutter cleaning, holiday prep. Winter (December-February) has lower volume but less competition — great for budget-conscious mailers.",
    },
    {
      q: "How do I know if EDDM is working for me?",
      a: "Every postcard gets a unique tracking number. You'll see exact response counts for each route in your dashboard. We also recommend asking every customer how they heard about you — they'll often say 'the postcard,' even if they called the main number.",
    },
  ];

  return (
    <div className="mh-animate-rise">
      {/* Hero */}
      <section style={{ background: 'var(--ink-900)', color: '#fff', padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={eyebrowDark}>How Our EDDM Service Works</div>
          <h1 style={heroH1}>Our Complete EDDM Process: From Concept to Mailbox in 7 Days</h1>
          <p style={heroSub}>
            Most local business owners don't have time to mess with post office forms, address lists, and print vendors. Our done-for-you EDDM service handles everything — so you just approve the design and wait for the phone to ring. Here's the exact process we use for every client.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <div style={stepsLayout}>
            <div style={stepsList}>
              {steps.map((s) => (
                <div key={s.num} style={stepCard}>
                  <span style={stepIcon}>{s.icon}</span>
                  <div>
                    <div style={stepNum}>Step {s.num}</div>
                    <h2 style={stepTitle}>{s.title}</h2>
                    <p style={stepBody}>{s.body}</p>
                    {s.bullets && (
                      <ul style={bulletList}>
                        {s.bullets.map((b, i) => (
                          <li key={i} style={bullet}>
                            <span style={bulletCheck}>✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.extra && <p style={stepExtra}>{s.extra}</p>}
                    {s.subSections && s.subSections.map((sub, i) => (
                      <div key={i} style={subSection}>
                        <h4 style={subSectionTitle}>{sub.title}</h4>
                        <p style={subSectionBody}>{sub.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={stepsSidebar}>
              <div style={statBox}>
                <div style={statNum}>48hr</div>
                <div style={statLabel}>Design turnaround</div>
              </div>
              <div style={statBox}>
                <div style={statNum}>7–10d</div>
                <div style={statLabel}>In mailboxes</div>
              </div>
              <Link href="/check-coverage">
                <div style={ctaBtn}>Check Coverage →</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process FAQs */}
      <section style={{ background: 'var(--surface-sunken)', padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
          <h2 style={faqH2}>Common Questions About Our EDDM Process</h2>
          <div style={faqGrid}>
            {faqs.map((faq, i) => (
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
const eyebrowDark: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--fs-body-sm)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: 'var(--signal-400)',
  marginBottom: 'var(--space-3)',
};

const heroH1: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-display-lg)',
  fontWeight: 700,
  lineHeight: 'var(--lh-tight)',
  marginBottom: 'var(--space-6)',
  maxWidth: 720,
  color: '#fff',
};

const heroSub: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-lg)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--paper-200)',
  maxWidth: 540,
};

const stepsLayout: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.4fr 0.6fr',
  gap: 'var(--space-12)',
  alignItems: 'start',
};

const stepsList: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-6)',
};

const stepCard: React.CSSProperties = {
  display: 'flex',
  gap: 'var(--space-5)',
  padding: 'var(--space-6)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-sm)',
};

const stepIcon: React.CSSProperties = {
  flexShrink: 0,
  display: 'inline-flex',
  width: 56,
  height: 56,
  borderRadius: 'var(--radius-md)',
  background: 'var(--ink-900)',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 28,
};

const stepNum: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--signal-500)',
  marginBottom: 5,
};

const stepTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 800,
  fontSize: 'var(--fs-h3)',
  letterSpacing: '-0.01em',
  margin: '0 0 5px',
  color: 'var(--text-strong)',
};

const stepBody: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-muted)',
  margin: 0,
};

const bulletList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 'var(--space-3) 0 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-2)',
};

const bullet: React.CSSProperties = {
  display: 'flex',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-body)',
};

const bulletCheck: React.CSSProperties = {
  color: 'var(--success)',
  fontWeight: 700,
  flexShrink: 0,
};

const stepExtra: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-muted)',
  margin: 'var(--space-3) 0 0',
  fontStyle: 'italic',
};

const subSection: React.CSSProperties = {
  marginTop: 'var(--space-4)',
  padding: 'var(--space-4)',
  background: 'var(--surface-sunken)',
  borderRadius: 'var(--radius-md)',
};

const subSectionTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'var(--fs-h4)',
  margin: '0 0 var(--space-2)',
  color: 'var(--text-strong)',
};

const subSectionBody: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-body-sm)',
  lineHeight: 'var(--lh-body)',
  color: 'var(--text-muted)',
  margin: 0,
};

const stepsSidebar: React.CSSProperties = {
  position: 'sticky',
  top: 100,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-5)',
};

const statBox: React.CSSProperties = {
  padding: 'var(--space-5)',
  background: 'var(--surface-card)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-sm)',
  textAlign: 'center',
};

const statNum: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontWeight: 700,
  fontSize: 'var(--fs-h1)',
  letterSpacing: '-0.02em',
  lineHeight: 1,
  color: 'var(--text-strong)',
};

const statLabel: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--fs-caption)',
  color: 'var(--text-muted)',
  marginTop: 'var(--space-1)',
};

const ctaBtn: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'var(--fs-body-lg)',
  padding: 'var(--space-4) var(--space-8)',
  background: 'var(--signal-500)',
  color: '#fff',
  borderRadius: 'var(--radius-md)',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'block',
};

const faqH2: React.CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  fontSize: 'var(--fs-h2)',
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
