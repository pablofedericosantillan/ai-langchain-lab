import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI LangChain Lab',
  description: 'Chat interface for the AI LangChain Lab backend',
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
