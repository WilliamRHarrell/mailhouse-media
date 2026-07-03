'use client';

import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface RouteCardProps {
  route: string;
  place: string;
  homes: number;
  total: number;
  taken: number;
  premium?: boolean;
  onClaim: () => void;
}

export function RouteCard({ route, place, homes, total, taken, premium = false, onClaim }: RouteCardProps) {
  const remaining = total - taken;
  const progress = (taken / total) * 100;

  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 'var(--fs-body-sm)',
              color: 'var(--text-muted)',
              marginBottom: 'var(--space-1)',
            }}
          >
            Route
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'var(--fs-h2)',
              color: premium ? 'var(--signal-500)' : 'var(--text-strong)',
              letterSpacing: 'var(--ls-tight)',
            }}
          >
            {route}
          </div>
        </div>
        {premium && <Badge variant="primary">Premium</Badge>}
      </div>

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-muted)',
        }}
      >
        {place} · {homes.toLocaleString()} homes
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-2)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: 'var(--fs-caption)',
          }}
        >
          <span style={{ color: 'var(--success)' }}>{remaining} left</span>
          <span style={{ color: 'var(--text-faint)' }}>
            {taken}/{total} claimed
          </span>
        </div>
        <div
          style={{
            height: 8,
            background: 'var(--paper-300)',
            borderRadius: 'var(--radius-pill)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: premium ? 'var(--signal-500)' : 'var(--ink-900)',
              borderRadius: 'var(--radius-pill)',
              transition: 'width var(--dur-base) var(--ease-out)',
            }}
          />
        </div>
      </div>

      <Button variant={premium ? 'primary' : 'secondary'} size="md" fullWidth onClick={onClaim}>
        Claim Route
      </Button>
    </div>
  );
}
