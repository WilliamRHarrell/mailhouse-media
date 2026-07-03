'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/forms/Input';
import { RouteCard } from '@/components/brand/RouteCard';
import { Suspense } from 'react';

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

  // Pre-fill from homepage link
  useEffect(() => {
    const prefilled = searchParams.get('zip');
    if (prefilled) {
      setZip(prefilled);
      setSearched(true);
    }
  }, [searchParams]);

  // Mock routes — in production pulled from Supabase via API
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
    // Send to lead API with "booking" formType
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
    if (data.paymentLink) {
      setPaymentLink(data.paymentLink);
    }
    setSubmitted(true);
  };

  // Filter by trade
  const filterByTrade = (route: { route: string }) => {
    if (!trade) return true;
    // In production: match trade to route premium/type
    return true;
  };

  return (
    <div className="mh-animate-rise">
      {/* HERO */}
      <div style={{ background: 'var(--ink-900)', padding: '64px clamp(20px, 5vw, 56px) 56px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>
            Live inventory
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 4.6vw, 56px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '14px 0 0', color: '#fff', maxWidth: 720 }}>
            Find open routes near you.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-on-ink-muted)', margin: '18px 0 0', maxWidth: 540 }}>
            Search your area. See available USPS routes with homes, price, and slots left. Claim yours before a neighbor does.
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
                <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Your trade
                </label>
                <select
                  value={trade}
                  onChange={(e) => setTrade(e.target.value)}
                  style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--text-body)', cursor: 'pointer' }}
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
        </div>
      </div>

      {/* RESULTS */}
      {searched && (
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '48px clamp(20px, 5vw, 56px) 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
                Open near {zip || 'you'}
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 34px)', letterSpacing: '-0.02em', margin: '8px 0 0', color: 'var(--text-strong)' }}>
                {trade ? `${trade} routes` : 'Available routes'}
              </h2>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', maxWidth: 400 }}>
              Routes capped at 10 advertisers each so your postcard never competes for attention.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
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
                  Reserve route
                </span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 3.2vw, 38px)', letterSpacing: '-0.02em', margin: '12px 0 20px', color: '#fff' }}>
                  Finish your claim.
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
                      Fill out your info. You'll be taken to secure checkout to lock it in.
                    </div>
                  </div>
                )}
                <div style={{ marginTop: 24, fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-on-ink-muted)', lineHeight: 1.6 }}>
                  After payment, we'll email you within 24 hours to collect your offer, logo, and contact info for the postcard.
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--surface-card)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
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
                  <span>Standard slot</span>
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

      {/* EMPTY STATE if no zip entered yet */}
      {!searched && (
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '80px clamp(20px, 5vw, 56px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 34px)', color: 'var(--text-strong)', margin: '0 0 12px' }}>
            Enter a ZIP to see routes.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-muted)', margin: 0 }}>
            We'll show you every open carrier route within that area.
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
