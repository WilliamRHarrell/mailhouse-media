interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'success';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const styles = {
    primary: {
      background: 'var(--signal-500)',
      color: '#fff',
    },
    outline: {
      background: 'transparent',
      color: 'var(--signal-500)',
      border: '1px solid var(--signal-500)',
    },
    success: {
      background: 'var(--success)',
      color: '#fff',
    },
  };

  return (
    <span
      style={{
        ...styles[variant],
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: 'var(--fs-micro)',
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
      }}
    >
      {variant === 'success' && (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />
      )}
      {children}
    </span>
  );
}
