'use client';

interface SlotMeterProps {
  total: number;
  taken: number;
  label?: string;
}

export function SlotMeter({ total, taken, label }: SlotMeterProps) {
  const slots = Array.from({ length: total });
  const remaining = total - taken;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        {label && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 'var(--fs-micro)',
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            {label}
          </span>
        )}
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: 'var(--fs-body-sm)',
            color: remaining <= 3 ? 'var(--signal-500)' : 'var(--success)',
          }}
        >
          {remaining} of {total} available
        </span>
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
        {slots.map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 24,
              borderRadius: 'var(--radius-xs)',
              background: i < taken ? 'var(--paper-300)' : 'var(--signal-500)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
