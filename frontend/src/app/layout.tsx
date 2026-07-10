import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chat AI',
  description: 'Chat AI etst server',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
