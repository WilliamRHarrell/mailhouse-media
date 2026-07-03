'use client';

import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, className = '', style, ...props }, ref) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        {label && (
          <label
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
          </label>
        )}
        <select
          ref={ref}
          className={className}
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 'var(--fs-body-sm)',
            background: 'var(--paper-50)',
            border: '1px solid var(--border-soft)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            color: 'var(--text-body)',
            cursor: 'pointer',
            ...style,
          }}
          {...props}
        >
          {children}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
