import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'EDDM Direct Mail Service | Reach Every Mailbox for $1.99/Home',
  description: 'Get your postcard in every mailbox with EDDM direct mail services. From $1.99/home with design, printing & USPS postage included. 5-9% response rate. Start today.',
  keywords: 'EDDM, direct mail, postcard advertising, every door direct mail, local business marketing, USPS direct mail',
  openGraph: {
    title: 'Mailhouse Media: EDDM Direct Mail for Local Businesses',
    description: 'Reach every mailbox in your neighborhood for $1.99/home. Design, print, and mail included. 5-9% response rate vs 0.1% for digital ads.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mailhouse Media',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mailhouse Media: EDDM Direct Mail',
    description: 'Get your postcard in every mailbox for $1.99/home. 5-9% response rate.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
