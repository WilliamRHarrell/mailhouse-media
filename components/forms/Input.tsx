'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', style, ...props }, ref) => {
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
        <input
          ref={ref}
          className={className}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-body)',
            background: 'var(--paper-50)',
            border: '1px solid var(--border-soft)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            color: 'var(--text-strong)',
            width: '100%',
            ...style,
          }}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
