'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/check-coverage', label: 'Check Coverage', seo: 'Find USPS carrier routes near you' },
    { href: '/lists', label: 'Targeted Lists', seo: 'Filter by home value, age, demographics' },
    { href: '/ai-targeting', label: 'AI Targeting', seo: 'Event-based targeting for local services' },
    { href: '/pricing', label: 'Pricing', seo: '$0.06/home all-in EDDM pricing' },
    { href: '/about', label: 'About', seo: 'Why choose Mailhouse Media' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--surface-canvas)',
      borderBottom: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: 20, letterSpacing: '0.05em', color: 'var(--text-strong)' }}>
                MAILHOUSE
              </div>
              <div style={{ width: 2, height: 16, background: 'var(--signal-500)' }} />
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--text-muted)' }}>
                EDDM Direct Mail
              </div>
            </div>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: pathname === link.href ? 'var(--signal-600)' : 'var(--text-body)',
                    padding: '8px 0',
                    borderBottom: pathname === link.href ? '2px solid var(--signal-500)' : '2px solid transparent',
                    transition: 'all 0.15s',
                  }}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
