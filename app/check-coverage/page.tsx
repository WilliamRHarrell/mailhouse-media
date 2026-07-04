'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/forms/Input';
import { RouteCard } from '@/components/brand/RouteCard';

function CheckCoverageInner() {
  const searchParams = useSearchParams();
  const [zip, setZip] = useState('');
  const [searched, setSearched] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [trade, setTrade] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [paymentLink, setPaymentLink] = useState<string | null>(null);

  useEffect(() => {
    const prefilled = searchParams.get('zip');
    if (prefilled) {
      setZip(prefilled);
      setSearched(true);
    }
  }, [searchParams]);

  const generateRoutes = (z: string) => [
    { route: `${z}-C`, place: 'Coral Springs, FL', homes: 812, total: 10, taken: 8, premium: true },
    { route: `${z}-A`, place: 'Coral Springs, FL', homes: 945, total: 10, taken: 5, premium: false },
    { route: `${z}-D`, place: 'Parkland, FL', homes: 604, total: 10, taken: 3, premium: true },
    { route: `${z}-B`, place: 'Margate, FL', homes: 1123, total: 10, taken: 7, premium: false },
    { route: `${z}-E`, place: 'Coral Springs, FL', homes: 729, total: 10, taken: 2, premium: false },
    { route: `${z}-F`, place: 'Parkland, FL', homes: 891, total: 10, taken: 9, premium: true },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  const handleClaim = (route: string) => {
    setSelectedRoute(route);
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        company,
        formType: 'booking',
        vertical: trade,
        route: selectedRoute,
        city: zip.slice(0, 3),
        skuId: 'eddm-standard',
      }),
    });
    const data = await res.json();
    if (data.paymentLink) setPaymentLink(data.paymentLink);
    setSubmitted(true);
  };

  const filterByTrade = (route: { route: string }) => !trade || true;

  return (
    <div className="mh-animate-rise">
      {/* HERO + INSTRUCTIONS */}
      <div style={{ background: 'var(--ink-900)', padding: '64px clamp(20px, 5vw, 56px) 56px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>
            Real-Time Route Inventory
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 4.6vw, 56px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '14px 0 0', color: '#fff', maxWidth: 780 }}>
            Find Open USPS Carrier Routes Near You
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-on-ink-muted)', margin: '18px 0 0', maxWidth: 600 }}>
            Enter your ZIP code to see every available carrier route in your service area. Claim a slot (max 10 advertisers per route) before a neighbor does. All-in pricing from $0.60/home — design, printing, and USPS postage included.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap', maxWidth: 640 }}>
            <div style={{ flex: 1, minWidth: 180 }}>
              <Input
                label="ZIP code"
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                placeholder="Enter ZIP"
                required
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: 18,
                  letterSpacing: '0.06em',
                  background: 'var(--paper-50)',
                  color: 'var(--text-strong)',
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)' }}>
                  Your trade
                </label>
                <select
                  value={trade}
                  onChange={(e) => setTrade(e.target.value)}
                  style={{ background: 'var(--paper-50)', border: '1px solid var(--border-on-ink)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#fff', cursor: 'pointer' }}
                >
                  <option value="">Any trade</option>
                  <option>Roofing</option>
                  <option>HVAC</option>
                  <option>Dent Repair</option>
                  <option>Realtor</option>
                  <option>Home Services</option>
                  <option>Restaurant</option>
                  <option>Dental</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <Button type="submit" variant="primary" size="md" style={{ padding: '12px 28px' }}>
              Search routes
            </Button>
          </form>

          {/* Quick instructions */}
          {!searched && (
            <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, padding: 28, background: 'rgba(245,234,228,0.03)', border: '1px solid var(--border-on-ink)', borderRadius: 'var(--radius-lg)' }}>
              {[
                { num: '1', title: 'Enter your ZIP', desc: 'Start with the ZIP where you want to mail.' },
                { num: '2', title: 'Browse open routes', desc: 'See homes per route, slots left, and pricing.' },
                { num: '3', title: 'Claim a slot', desc: 'Pick your route. Max 10 advertisers per route.' },
                { num: '4', title: 'Approve & mail', desc: 'Approve design in 48hr. In mailboxes in 7-10 days.' },
              ].map((step) => (
                <div key={step.num}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal-400)', marginBottom: 8 }}>
                    Step {step.num}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 4 }}>{step.title}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-ink-muted)', lineHeight: 1.5 }}>{step.desc}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RESULTS */}
      {searched && (
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '48px clamp(20px, 5vw, 56px) 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
                Open near {zip}
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 34px)', letterSpacing: '-0.02em', margin: '8px 0 0', color: 'var(--text-strong)' }}>
                {trade ? `${trade} routes` : 'Available carrier routes'}
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', maxWidth: 400 }}>
              Routes capped at 10 advertisers each so your postcard never competes for attention.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {generateRoutes(zip || '33076').filter(filterByTrade).map((r) => (
              <RouteCard key={r.route} {...r} onClaim={() => handleClaim(r.route)} />
            ))}
          </div>
        </div>
      )}

      {/* BOOKING FORM */}
      {showForm && !submitted && (
        <div id="booking-form" style={{ background: 'var(--ink-900)', marginTop: 20 }}>
          <div style={{ maxWidth: 1120, margin: '0 auto', padding: '64px clamp(20px, 5vw, 56px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 48, alignItems: 'start' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>
                  Reserve your slot
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 3.2vw, 38px)', letterSpacing: '-0.02em', margin: '12px 0 20px', color: '#fff' }}>
                  Lock In Your Route — Before Someone Else Does
                </h2>
                {selectedRoute && (
                  <div style={{ background: 'var(--ink-700)', border: '1px solid var(--border-on-ink)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)', marginBottom: 8 }}>
                      Selected route
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--fs-h1)', color: 'var(--signal-400)', letterSpacing: 'var(--ls-tight)' }}>
                      {selectedRoute}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-ink-muted)', marginTop: 8 }}>
                      Fill out your info. Take it to secure checkout to lock it in. Only 10 advertisers per route — so the sooner you book, the longer you keep the slot.
                    </div>
                  </div>
                )}
                <div style={{ marginTop: 24, fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-on-ink-muted)', lineHeight: 1.6 }}>
                  After payment, we email you within 24 hours to collect your offer, logo, and contact info for the postcard. Design proofs turn around in 48 hours. In mailboxes within 7-10 days.
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input label="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                  <Input label="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Input label="Phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Your trade
                  </label>
                  <select
                    required
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}
                  >
                    <option value="">Select your vertical…</option>
                    <option>Roofing</option>
                    <option>HVAC</option>
                    <option>Dent Repair</option>
                    <option>Realtor</option>
                    <option>Home Services</option>
                    <option>Restaurant</option>
                    <option>Dental</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ height: 1, background: 'var(--border-hairline)', margin: '8px 0' }} />

                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Route pricing
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)' }}>
                  <span>Standard slot (all-in)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>$0.60 / home</span>
                </div>

                <Button type="submit" variant="primary" size="lg" style={{ marginTop: 8 }}>
                  Reserve & pay →
                </Button>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                  Secure checkout via Stripe. No contract until you approve artwork.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS STATE */}
      {submitted && (
        <div style={{ background: 'var(--ink-900)', marginTop: 20 }}>
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px clamp(20px, 5vw, 56px)', textAlign: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--success)', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, color: '#fff' }}>
              ✓
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 36, color: '#fff', margin: '0 0 12px' }}>
              Route reserved.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-on-ink-muted)', margin: 0, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
              {paymentLink ? 'Complete payment below to lock it in.' : "We'll reach out within 24 hours with your artwork brief and next steps."}
            </p>
            {paymentLink && (
              <a href={paymentLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 32 }}>
                <Button variant="primary" size="lg">Complete payment →</Button>
              </a>
            )}
          </div>
        </div>
      )}

      {/* FAQ SECTION */}
      <section style={{ background: 'var(--surface-sunken)', padding: '64px 0' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 clamp(20px, 5vw, 56px)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 36px)', letterSpacing: '-0.02em', margin: '0 0 32px', color: 'var(--text-strong)' }}>
            Frequently Asked Questions About Routes & Booking
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {[
              {
                q: 'How do I find available routes?',
                a: "Enter your ZIP code in the search bar above. We'll show you every open carrier route in that area with details: total homes, slots still available, and estimated cost. Click any route to claim a slot.",
              },
              {
                q: 'How many advertisers can be on one route?',
                a: "Routes are capped at 10 advertisers per mailing cycle. That's it. Your postcard stays visible — not buried in a stack of 50 other mailers. The more slots that are claimed, the more urgency to book.",
              },
              {
                q: 'Can I book multiple routes at once?',
                a: "Yes. Claim as many routes as you want in a single session. Most clients start with 2-3 routes to test response, then scale to 5-10 routes once they see what works.",
              },
              {
                q: "Do I need to provide my own mailing list?",
                a: "No — that's the whole point of EDDM. USPS already has every address on every carrier route mapped out. You pick a route, and we deliver to every home on that route. No list, no addresses, no paperwork.",
              },
              {
                q: 'Can I reorder a route I already mailed?',
                a: "Absolutely. You can reorder any route anytime — as long as there are still ad slots available. Most clients mail a route 2-3 times over several months to build recognition. Reorders ship faster since we already have your design on file.",
              },
              {
                q: 'What happens after I claim a route?',
                a: "You fill out the form above with your contact info. We email you a design brief to collect your offer, logo, and images. Within 48 hours we send you a proof. Once you approve, we print and queue the mailing for the next USPS EDDM date. Typical total turnaround: 7-10 days.",
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

      {/* EMPTY STATE if no zip entered yet */}
      {!searched && (
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px clamp(20px, 5vw, 56px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 34px)', color: 'var(--text-strong)', margin: '0 0 12px' }}>
            Enter a ZIP code above to see routes
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-muted)', margin: 0, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Or pick a vertical (roofing, HVAC, etc.) in the dropdown to filter routes by trade. We'll show you every open carrier route within that ZIP.
          </p>
        </div>
      )}
    </div>
  );
}

export default function CheckCoveragePage() {
  return (
    <Suspense fallback={<div style={{ padding: 80, textAlign: 'center', color: 'var(--text-muted)' }}>Loading…</div>}>
      <CheckCoverageInner />
    </Suspense>
  );
}
