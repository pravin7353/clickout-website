import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clickout.in'),
  title: {
    default: 'ClickOut — Retail Operating System | Self-Checkout, Inventory & Store Analytics',
    template: '%s | ClickOut'
  },
  description: 'ClickOut is India\'s all-in-one retail operating ecosystem. Eliminate billing queues with QR self-checkout, manage inventory, verify employees, detect fraud, and run multi-store analytics — all in one platform.',
  keywords: ['retail management software', 'self checkout india', 'pos software', 'inventory management', 'retail analytics', 'store operations', 'supermarket software india'],
  authors: [{ name: 'ClickOut', url: 'https://www.clickout.in' }],
  creator: 'ClickOut',
  publisher: 'ClickOut Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.clickout.in',
    siteName: 'ClickOut',
    title: 'ClickOut — The Retail Operating System',
    description: 'Control fast, scale faster. ClickOut replaces billing queues with QR self-checkout while giving store owners real-time analytics, inventory sync, and fraud protection.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ClickOut Retail Operating System Dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickOut — Retail Operating System',
    description: 'Eliminate billing queues. Manage inventory. Detect fraud. Run analytics.',
    creator: '@clickoutin',
  },
  alternates: {
    canonical: 'https://www.clickout.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.clickout.in/#organization",
                "name": "ClickOut",
                "legalName": "ClickOut Technologies",
                "url": "https://www.clickout.in",
                "description": "ClickOut is a global retail operations ecosystem.",
                "foundingDate": "2024",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Mumbai, Maharashtra, India"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "@id": "https://www.clickout.in/#software",
                "name": "ClickOut",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "url": "https://www.clickout.in",
                "offers": {
                  "@type": "AggregateOffer",
                  "lowPrice": "99",
                  "highPrice": "699",
                  "priceCurrency": "INR"
                }
              }
            ])
          }}
        />
        {children}
      </body>
    </html>
  );
}
