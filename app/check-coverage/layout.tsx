import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Coverage | Find Available USPS EDDM Routes Near You',
  description: 'Search your ZIP code to see every open carrier route nearby. Real-time inventory, transparent pricing. Claim a route slot for EDDM postcard advertising.',
  openGraph: {
    title: 'Check Coverage — Open USPS Routes Near You',
    description: 'Enter your ZIP to see every available carrier route. See homes, pricing, and slots left.',
  },
};

export default function CheckCoverageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
