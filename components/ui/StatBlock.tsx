interface StatBlockProps {
  value: string;
  label: string;
  accent?: boolean;
}

export function StatBlock({ value, label, accent = false }: StatBlockProps) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: 'var(--fs-h1)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          color: accent ? 'var(--signal-500)' : 'var(--text-strong)',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-caption)',
          color: 'var(--text-muted)',
          marginTop: 'var(--space-1)',
        }}
      >
        {label}
      </div>
    </div>
  );
}
