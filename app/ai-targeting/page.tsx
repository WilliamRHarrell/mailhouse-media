'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/forms/Input';

export default function AITargetingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vertical: '',
    event: '',
    state: '',
    zipCodes: '',
    minHomeValue: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        formType: 'targeted-list',
        filters: {
          event: formData.event,
          state: formData.state,
          zipCodes: formData.zipCodes.split(',').map((s) => s.trim()).filter(Boolean),
          minHomeValue: formData.minHomeValue,
        },
      }),
    });
    setSubmitted(true);
  };

  const verticals = [
    { name: 'Roofing', icon: '🏠', event: 'hail', desc: 'Newly hail-damaged neighborhoods' },
    { name: 'Dent Repair', icon: '🚗', event: 'hail', desc: 'Vehicle owners in storm zones' },
    { name: 'HVAC', icon: '❄️', event: 'seasonal', desc: 'Aging homes in extreme-heat areas' },
    { name: 'Restoration', icon: '💧', event: 'flood', desc: 'Flood-damaged properties' },
    { name: 'Realtors', icon: '🔑', event: 'new-movers', desc: 'Recent closings + upcoming listings' },
    { name: 'Home Services', icon: '🔧', event: 'demographic', desc: 'Home owners over threshold value' },
  ];

  return (
    <div className="mh-animate-rise">
      {/* HERO */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--ink-900)',
          padding: '80px clamp(20px, 5vw, 56px) 96px',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
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
              AI-Powered Targeting
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(42px, 5.4vw, 68px)',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                margin: '14px 0 0',
                color: '#fff',
              }}
            >
              AI-PICKED ROUTES.
              <br />
              <span style={{ color: 'var(--signal-400)' }}>NOT RANDOM ZIP CODES.</span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 18.5,
                lineHeight: 1.55,
                color: 'var(--text-on-ink-muted)',
                margin: '24px 0 0',
                maxWidth: 540,
              }}
            >
              Tell us what you're looking for — homes over $X in the last area in your state that got hail. We build a custom carrier route list and send it to your mailbox this week.
            </p>
          </div>

          {/* Visual: stylized route map */}
          <div
            style={{
              background: 'var(--ink-700)',
              border: '1px solid var(--border-on-ink)',
              borderRadius: 'var(--radius-lg)',
              padding: 24,
              position: 'relative',
              minHeight: 320,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: 'var(--fs-micro)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-on-ink-muted)',
                marginBottom: 16,
              }}
            >
              Live event · Hail event · NC 27513
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {['33-C', '33-A', '33-D', '34-B', '34-A', '35-C'].map((r, i) => (
                <div
                  key={r}
                  style={{
                    background: i < 4 ? 'var(--signal-500)' : 'var(--paper-300)',
                    border: `1px solid ${i < 4 ? 'var(--signal-400)' : 'var(--border-on-ink)'}`,
                    borderRadius: 'var(--radius-sm)',
                    padding: 10,
                    color: i < 4 ? '#fff' : 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  Route {r}
                  <div style={{ fontSize: 10, marginTop: 4, opacity: 0.85 }}>
                    {i < 4 ? '★ HIT' : 'CLEARED'}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 16,
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--text-on-ink-muted)',
              }}
            >
              4 of 6 routes match your filter. <br />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--signal-400)' }}>
                3,420 homes
              </span>{' '}
              in impact zone.
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '80px clamp(20px, 5vw, 56px) 20px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
          How AI targeting works
        </span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(30px, 3.6vw, 42px)', letterSpacing: '-0.02em', margin: '12px 0 40px', color: 'var(--text-strong)' }}>
          Event detection. Vertical matching. Targeted delivery.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            {
              num: '01',
              title: 'Event Detection',
              body: 'Real-time feeds pull hail, wind, flood, and storm data mapped to USPS carrier routes the moment they happen.',
              icon: '🌩️',
            },
            {
              num: '02',
              title: 'Vertical Matching',
              body: 'Our system matches affected routes to advertisers who need them — roofers, dent repair, HVAC, restoration.',
              icon: '🎯',
            },
            {
              num: '03',
              title: 'Custom List Delivery',
              body: 'You get a buyer-ready carrier route list mapped to the event. Purchase per list; we design, print, and mail.',
              icon: '📬',
            },
          ].map((s) => (
            <Card key={s.num}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ display: 'inline-flex', width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--ink-900)', color: 'var(--paper-100)', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                  {s.icon}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, color: 'var(--text-faint)' }}>
                  {s.num}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, margin: '0 0 8px', color: 'var(--text-strong)' }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>
                {s.body}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* USE CASES */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '40px clamp(20px, 5vw, 56px) 20px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 34px)', letterSpacing: '-0.02em', margin: '0 0 32px', color: 'var(--text-strong)' }}>
          Common plays
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {verticals.map((v) => (
            <div
              key={v.name}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-lg)',
                padding: 22,
                cursor: 'pointer',
                transition: 'border-color 0.15s',
              }}
              onClick={() => {
                setFormData((p) => ({ ...p, vertical: v.name, event: v.event }));
                document.getElementById('ai-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{v.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--text-strong)' }}>
                    {v.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
                    via {v.event.toUpperCase()}
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div style={{ background: 'var(--ink-900)', marginTop: 40 }} id="ai-form">
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '80px clamp(20px, 5vw, 56px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48 }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>
                Request a custom list
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 3.2vw, 38px)', letterSpacing: '-0.02em', margin: '12px 0 20px', color: '#fff' }}>
                Tell us what you want on the list.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.55, color: 'var(--text-on-ink-muted)', margin: 0, maxWidth: 420 }}>
                Event, vertical, filters, geography — whatever shape. We'll match carrier routes and send a quote within 24 hours.
              </p>

              <div style={{ marginTop: 40, padding: 24, background: 'var(--ink-700)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-on-ink)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)', marginBottom: 12 }}>
                  Starting at
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 40, color: '#fff' }}>$0.11</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-ink-muted)' }}>per home · list purchase</span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-on-ink-muted)', marginTop: 8 }}>
                  No subscription. Pay per list you buy.
                </div>
              </div>
            </div>

            {!submitted ? (
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
                  <Input label="Name" required value={formData.name} onChange={(e) => update('name', e.target.value)} />
                  <Input label="Company" value={formData.company} onChange={(e) => update('company', e.target.value)} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input label="Email" type="email" required value={formData.email} onChange={(e) => update('email', e.target.value)} />
                  <Input label="Phone" type="tel" required value={formData.phone} onChange={(e) => update('phone', e.target.value)} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Your vertical
                    </label>
                    <select
                      required
                      value={formData.vertical}
                      onChange={(e) => update('vertical', e.target.value)}
                      style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}
                    >
                      <option value="">Select…</option>
                      {verticals.map((v) => <option key={v.name}>{v.name}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Trigger event
                    </label>
                    <select
                      required
                      value={formData.event}
                      onChange={(e) => update('event', e.target.value)}
                      style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}
                    >
                      <option value="">Select…</option>
                      <option value="hail">Hail / Storm</option>
                      <option value="flood">Flood</option>
                      <option value="new-movers">New Movers</option>
                      <option value="seasonal">Seasonal / Heat</option>
                      <option value="demographic">Demographic Only</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      State
                    </label>
                    <input
                      value={formData.state}
                      onChange={(e) => update('state', e.target.value)}
                      placeholder="NC"
                      maxLength={2}
                      style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Zip codes
                    </label>
                    <input
                      value={formData.zipCodes}
                      onChange={(e) => update('zipCodes', e.target.value)}
                      placeholder="27513, 27601"
                      style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Min home value
                    </label>
                    <input
                      value={formData.minHomeValue}
                      onChange={(e) => update('minHomeValue', e.target.value)}
                      placeholder="$400K"
                      style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Describe the list you want
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="e.g. Homes over $400K in the last NC area that got 2-inch hail in the past 30 days."
                    rows={4}
                    style={{ background: 'var(--paper-50)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, resize: 'vertical' }}
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" style={{ marginTop: 8 }}>
                  Build my list →
                </Button>
              </form>
            ) : (
              <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 48, textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--success)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, color: '#fff' }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, margin: '0 0 12px', color: 'var(--text-strong)' }}>
                  List request received.
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-muted)', margin: 0, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
                  We'll pull carrier routes that match your filters and email you a quote within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
