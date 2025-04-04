import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'BRIOTIFX - Forex Trade Signals',
  description: 'Your ultimate Forex trade signals generator.',
  icons: {
    icon: '/logo.png', // Path to the favicon in the public/ directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}