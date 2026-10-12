import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'ClickOut Pricing — Retail OS Plans Starting ₹399/month',
  description:
    'ClickOut plans for every retail store. Free 14-day trial. Spark ₹399, Pro ₹799, Growth ₹1,499/month. GST excluded. No card for trial.',
  openGraph: {
    title: 'ClickOut Pricing — Retail OS Plans Starting ₹399/month',
    description:
      'ClickOut plans for every retail store. Free 14-day trial. Spark ₹399, Pro ₹799, Growth ₹1,499/month. GST excluded. No card for trial.',
    url: 'https://www.clickout.in/pricing',
    siteName: 'ClickOut',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.clickout.in/pricing',
  },
};

// Schema markup (PricingPage with all 3 plans listed)
const pricingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.clickout.in/pricing#webpage',
      url: 'https://www.clickout.in/pricing',
      name: 'ClickOut Pricing — Retail OS Plans Starting ₹399/month',
      description:
        'ClickOut plans for every retail store. Free 14-day trial. Spark ₹399, Pro ₹799, Growth ₹1,499/month. GST excluded. No card for trial.',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'ClickOut Retail Operating System',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android, iOS',
      offers: [
        {
          '@type': 'Offer',
          name: 'Spark Plan',
          price: '399',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '399',
            priceCurrency: 'INR',
            unitCode: 'MON',
          },
          description:
            'Chhoti dukaan ka perfect start. 1 Store, 500 txn/month, QR Self-Checkout, Cashier POS, Inventory Management, 5 Staff Accounts, 1 POS Counter.',
        },
        {
          '@type': 'Offer',
          name: 'Pro Plan',
          price: '799',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '799',
            priceCurrency: 'INR',
            unitCode: 'MON',
          },
          description:
            'Puri dukaan, ek dashboard. 1 Store, 2,500 txn/month, Full HR & Workforce, AI Fraud Detection, Growth Radar, General Ledger, 15 Staff Accounts, 2 POS Counters.',
        },
        {
          '@type': 'Offer',
          name: 'Growth Plan',
          price: '1499',
          priceCurrency: 'INR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1499',
            priceCurrency: 'INR',
            unitCode: 'MON',
          },
          description:
            'Multiple stores, ek dimag. 3 Stores included, 6,000 txn/month, Multi-Store Analytics, Cross-Store Inventory Transfer, Churn Radar, 50 Staff Accounts, 5 POS Counters.',
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema),
        }}
      />
      <PricingClient />
    </>
  );
}