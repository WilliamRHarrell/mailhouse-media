'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...props }, ref) => {
    const baseStyles = `
      font-family: var(--font-display);
      font-weight: var(--fw-bold);
      letter-spacing: 0.02em;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all var(--dur-base) var(--ease-out);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
    `;

    const variantStyles = {
      primary: `
        background: var(--signal-500);
        color: #fff;
        border: 2px solid var(--signal-500);
      `,
      secondary: `
        background: var(--ink-900);
        color: var(--paper-100);
        border: 2px solid var(--ink-900);
      `,
      outline: `
        background: transparent;
        color: var(--ink-900);
        border: 2px solid var(--ink-900);
      `,
    };

    const sizeStyles = {
      sm: `padding: 8px 16px; font-size: 14px;`,
      md: `padding: 12px 24px; font-size: 16px;`,
      lg: `padding: 16px 32px; font-size: 18px;`,
    };

    const widthStyle = fullWidth ? 'width: 100%;' : '';

    return (
      <button
        ref={ref}
        className={`${className}`}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--fw-bold)',
          letterSpacing: '0.02em',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          transition: 'all var(--dur-base) var(--ease-out)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-2)',
          background: variant === 'primary' ? 'var(--signal-500)' : variant === 'secondary' ? 'var(--ink-900)' : 'transparent',
          color: variant === 'primary' ? '#fff' : variant === 'secondary' ? 'var(--paper-100)' : 'var(--ink-900)',
          border: `2px solid ${variant === 'primary' ? 'var(--signal-500)' : variant === 'secondary' ? 'var(--ink-900)' : 'var(--ink-900)'}`,
          padding: size === 'sm' ? '8px 16px' : size === 'md' ? '12px 24px' : '16px 32px',
          fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
          width: fullWidth ? '100%' : 'auto',
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
