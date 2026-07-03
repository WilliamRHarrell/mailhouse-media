import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Mailhouse Media — Advertise to every home on your street',
  description:
    '9×12 postcards in every mailbox on USPS routes you pick. We design, print, and mail — you book the jobs.',
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
