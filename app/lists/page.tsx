'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function TargetedListsPage() {
  const [mode, setMode] = useState<'eddm' | 'targeted'>('targeted');
  const [owner, setOwner] = useState<'all' | 'homeowners' | 'renters'>('all');
  const [valueIdx, setValueIdx] = useState(2);
  const [ageIdx, setAgeIdx] = useState(1);

  const valueLabels = ['Any', '$200K+', '$350K+', '$500K+', '$750K+', '$1M+'];
  const ageLabels = ['Any', '10+ years', '20+ years', '30+ years', '40+ years'];

  const perHome = mode === 'eddm' ? '$0.06' : '$0.11';
  const reach = mode === 'eddm' ? '812' : `${184 - valueIdx * 22 - (ageIdx > 2 ? 30 : 0)}`;
  const estCost = mode === 'eddm' ? '$48.72' : `$${(parseInt(reach) * 0.11).toFixed(2)}`;

  return (
    <div className="mh-animate-rise">
      {/* Hero */}
      <div style={{ background: 'var(--paper-200)', padding: '64px clamp(20px, 5vw, 56px) 40px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--signal-500)' }}>
            Targeted mail lists
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(38px, 4.6vw, 56px)', lineHeight: 1, letterSpacing: '-0.03em', margin: '14px 0 0', color: 'var(--text-strong)', maxWidth: 760 }}>
            Every door, or just the right ones.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-muted)', margin: '18px 0 0', maxWidth: 600 }}>
            EDDM blankets a full route for the lowest cost per home. Build a targeted list — filter by homeowner status, home value, age of home, income, and new movers — then mail only the addresses that fit.
          </p>
        </div>
      </div>

      {/* Two modes */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '24px clamp(20px, 5vw, 56px) 8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div
            onClick={() => setMode('eddm')}
            style={{
              background: 'var(--surface-card)',
              border: mode === 'eddm' ? '2px solid var(--ink-900)' : '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              padding: 26,
              cursor: 'pointer',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, margin: '0 0 12px', color: 'var(--text-strong)' }}>
              EDDM — every door
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '0 0 14px' }}>
              Blanket an entire USPS carrier route. Lowest postage rate, maximum saturation.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 24, lineHeight: 1 }}>$0.06</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Per home</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 24, lineHeight: 1 }}>100%</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Coverage</div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setMode('targeted')}
            style={{
              background: 'var(--surface-card)',
              border: mode === 'targeted' ? '2px solid var(--signal-500)' : '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              padding: 26,
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <span
              style={{
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
              }}
            >
              AI-powered
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, margin: '0 0 12px', color: 'var(--text-strong)' }}>
              Targeted list
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '0 0 14px' }}>
              Mail only the households that match. Higher per-home cost, far less waste.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 24, lineHeight: 1, color: 'var(--signal-500)' }}>$0.11</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Per home</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 24, lineHeight: 1, color: 'var(--signal-500)' }}>Filtered</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Targeting</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List builder */}
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '44px clamp(20px, 5vw, 56px) 20px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 34px)', letterSpacing: '-0.02em', margin: '0 0 8px', color: 'var(--text-strong)' }}>
          Build your list
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', margin: '0 0 26px', maxWidth: 560 }}>
          Adjust the filters — your reach and estimated cost update live.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: 22, alignItems: 'start' }}>
          {/* Filters */}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 9 }}>
                  Homeowner status
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {(['all', 'homeowners', 'renters'] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setOwner(opt)}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        fontSize: 13.5,
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-pill)',
                        cursor: 'pointer',
                        border: `1px solid ${owner === opt ? 'var(--ink-900)' : 'var(--border-soft)'}`,
                        background: owner === opt ? 'var(--ink-900)' : 'var(--paper-50)',
                        color: owner === opt ? '#fff' : 'var(--text-body)',
                        transition: 'all 0.12s',
                      }}
                    >
                      {opt === 'all' ? 'All' : opt === 'homeowners' ? 'Homeowners' : 'Renters'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 9 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Min. home value
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--signal-600)' }}>
                    {valueLabels[valueIdx]}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={1}
                  value={valueIdx}
                  onChange={(e) => setValueIdx(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--signal-500)' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 9 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Age of home
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--signal-600)' }}>
                    {ageLabels[ageIdx]}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={4}
                  step={1}
                  value={ageIdx}
                  onChange={(e) => setAgeIdx(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--signal-500)' }}
                />
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div
            style={{
              position: 'sticky',
              top: 100,
              background: 'var(--ink-900)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              padding: 26,
              color: 'var(--paper-100)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--fs-micro)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-on-ink-muted)' }}>
              Estimated reach
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 46, letterSpacing: '-0.03em', lineHeight: 1, margin: '8px 0 2px', color: '#fff' }}>
              {reach}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-on-ink-muted)' }}>
              matching households in your area
            </div>
            <div style={{ height: 1, background: 'var(--border-on-ink)', margin: '20px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 9 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-ink-muted)' }}>
                Cost per home
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: '#fff' }}>
                {perHome}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-on-ink-muted)' }}>
                Estimated mailing
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 20, color: 'var(--signal-400)' }}>
                {estCost}
              </span>
            </div>
            <Button variant="primary" size="md" fullWidth>
              Reserve this list
            </Button>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-on-ink-muted)', margin: '12px 0 0', textAlign: 'center' }}>
              Design & mailing included. No contract.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
