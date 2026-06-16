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
  metadataBase: new URL("https://mbassirick.vercel.app"),
  title: "Rick|Mbassi",
  description:
    "RM's portfolio, discover who I am,  what I've built, and  how I can help you",
  

  openGraph: {
    title: "Rick Mbassi(RM)",
    description: "RM's portfolio, explore who I am,  what I've built, and  how I can help you",
    url: "https://mbassirick.vercel.app",
    siteName: "Rick mbassi",
    images: [
      {
        url: "/LP.jpg", // 🔥 IMPORTANT
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "fr_FR",
  },

  twitter: {
    card: "summary_large_image",
    title: "RM",
    description: "Batir le futur avec passion",
    images: ["https://mbassirick.vercel.app/LP.jpg"],
  },
  
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
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
