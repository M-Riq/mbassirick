import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LP — Full Stack Developer',
  description:
    'Full Stack Developer crafting premium digital experiences. Specializing in React, Node.js, and modern web technologies.',
  openGraph: {
    title: 'LP — Full Stack Developer',
    description: 'Full Stack Developer crafting premium digital experiences.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
