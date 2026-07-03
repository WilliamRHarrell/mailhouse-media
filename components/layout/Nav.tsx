'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';

const navLinks = [
  { href: '/check-coverage', label: 'Check coverage' },
  { href: '/how', label: 'How it works' },
  { href: '/lists', label: 'Targeted lists' },
  { href: '/ai-targeting', label: 'AI targeting' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px clamp(20px, 5vw, 56px)',
        background: 'rgba(245, 234, 228, 0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <Link href="/" style={{ display: 'inline-flex' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: 'var(--ls-tight)',
            color: 'var(--ink-900)',
          }}
        >
          MAILHOUSE<span style={{ color: 'var(--signal-500)' }}>.</span>
        </div>
      </Link>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 15,
              color: pathname === l.href ? 'var(--signal-600)' : 'var(--text-body)',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link
          href="#"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 15,
            color: 'var(--text-strong)',
            textDecoration: 'none',
          }}
        >
          Sign in
        </Link>
        <Link href="/check-coverage">
          <Button variant="primary" size="sm">Check coverage</Button>
        </Link>
      </div>
    </div>
  );
}
