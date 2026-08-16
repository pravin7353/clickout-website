import { Metadata } from 'next';
import EcosystemClient from './EcosystemClient';

export const metadata: Metadata = {
  metadataBase: new URL('https://clickout.in'),
  title: 'The 5-App Retail Ecosystem | ClickOut POS Suite India',
  description: 'Explore ClickOut: 5 interconnected apps — Admin, Customer, Cashier, Security & IDT Inventory. A complete retail operating system for Indian stores.',
  keywords: ['retail POS software India', 'self checkout app', 'inventory management system', 'retail fraud detection', 'QR billing system India'],
  authors: [{ name: 'ClickOut' }],
  robots: 'index, follow',
  openGraph: {
    title: 'The 5-App Retail Ecosystem | ClickOut',
    description: 'One ecosystem. Five apps. Automate every square foot of your retail store.',
    url: 'https://clickout.in/ecosystem',
    siteName: 'ClickOut',
    images: [{ url: '/og-ecosystem.jpg', width: 1200, height: 630, alt: 'ClickOut 5-App Ecosystem' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 5-App Retail Ecosystem | ClickOut',
    description: 'One ecosystem. Five apps. Automate every square foot of your retail store.',
    images: ['/og-ecosystem.jpg'],
  },
  alternates: {
    canonical: 'https://clickout.in/ecosystem',
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClickOut",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "99",
    priceCurrency: "INR",
    priceValidUntil: "2027-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "500",
  },
  description: "5-app retail operating system for Indian stores. Self-checkout, inventory, fraud detection, and analytics.",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClickOut",
  url: "https://clickout.in",
  logo: "https://clickout.in/logo.png",
  sameAs: [
    "https://twitter.com/clickout",
    "https://linkedin.com/company/clickout",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://clickout.in/" },
    { "@type": "ListItem", position: 2, name: "Ecosystem", item: "https://clickout.in/ecosystem" },
  ],
};

export default function EcosystemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, orgSchema, breadcrumbSchema]),
        }}
      />
      <EcosystemClient />
    </>
  );
}