import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clickout.in'),
  title: {
    default: 'ClickOut — Retail Operating System | Self-Checkout, Inventory & Store Analytics',
    template: '%s | ClickOut'
  },
  description: "ClickOut is India's all-in-one retail operating ecosystem. Eliminate billing queues with QR self-checkout, manage inventory, verify employees, detect fraud, and run multi-store analytics — all in one platform.",
  keywords: ['retail management software', 'self checkout india', 'pos software', 'inventory management', 'retail analytics', 'store operations', 'supermarket software india'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.clickout.in',
    siteName: 'ClickOut',
    title: 'ClickOut — The Retail Operating System',
    description: 'Control fast, scale faster. ClickOut replaces billing queues with QR self-checkout while giving store owners real-time analytics, inventory sync, and fraud protection.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}