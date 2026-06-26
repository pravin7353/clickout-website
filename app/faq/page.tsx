import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | ClickOut Retail System',
  description: "Frequently asked questions about ClickOut's queue-free checkout, inventory management, security, and pricing.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is ClickOut?",
      a: "ClickOut is India's all-in-one retail operating system. It eliminates billing queues through QR-based self-checkout, while giving store owners real-time inventory management, employee authentication, fraud prevention, customer analytics, and a multi-store command center — all in one platform."
    },
    {
      q: "How does the self-checkout process work?",
      a: "Customers scan a QR code at store entry, scan product barcodes as they shop using the ClickOut app, pay digitally via UPI or card, and exit through a quick gatepass scan. The entire checkout takes seconds with zero queues."
    },
    {
      q: "Do customers need to download an app?",
      a: "Yes, customers use the ClickOut app to scan products and pay. It is available on Android and iOS. The app is lightweight and designed to work seamlessly even on low-end smartphones common across India."
    },
    {
      q: "Which payment methods does ClickOut support?",
      a: "ClickOut supports UPI (Google Pay, PhonePe, Paytm, BHIM, etc.), debit and credit cards, and QR-based digital payments. Real-time UPI and QR settlement is included from the Mini plan onwards."
    },
    {
      q: "Is ClickOut secure? Can customers manipulate the system?",
      a: "Every session uses encrypted QR tokens that expire after use. The Risk Engine AI scores each transaction in real time for fraud signals. Mandatory gatepass exit validation ensures no item leaves without a valid payment receipt. All data is end-to-end encrypted."
    },
    {
      q: "What happens if a customer skips scanning an item?",
      a: "ClickOut's fraud detection engine monitors cart anomalies, scan gaps, and exit patterns. Suspicious sessions are flagged instantly and store staff are alerted. The system is designed to make shrinkage difficult without creating friction for honest shoppers."
    },
    {
      q: "Can store owners track live shoppers inside the store?",
      a: "Yes. The ClickOut dashboard shows real-time active sessions — how many customers are currently shopping, their cart values, and time in store. This gives owners full visibility without needing physical counters."
    },
    {
      q: "How does ClickOut handle returns and refunds?",
      a: "The Refund Monitoring Engine (available from the Basic plan) tracks all refund requests against original transactions. Store staff can approve or reject refunds from the dashboard, with a full audit trail maintained for every case."
    },
    {
      q: "Does ClickOut work for multi-branch or chain stores?",
      a: "Yes. The Command Center is built specifically for multi-location retail chains. Owners and managers can monitor inventory, sales, staff activity, and fraud alerts across all branches from a single dashboard."
    },
    {
      q: "What is the QR Bailout Protection feature?",
      a: "QR Bailout Protection (Growth plan and above) is a fallback mechanism that ensures checkout can proceed even if the primary QR system faces a temporary disruption. It prevents operational downtime during network or hardware issues."
    },
    {
      q: "How does inventory management work in ClickOut?",
      a: "Every product scan during checkout automatically updates your live inventory count. Low-stock alerts, procurement tracking, and ledger management are built in. The Growth plan includes the full Procurement suite for automated reorder workflows."
    },
    {
      q: "What is the difference between Mini, Basic, and Growth plans?",
      a: "Mini (₹99/mo) suits small independent stores with 1 terminal and 100 transactions per month. Basic (₹299/mo) is for growing shops needing 3 terminals, 1,000 transactions, fraud detection, and staff management. Growth (₹699/mo) adds 10 terminals, unlimited transactions, AI fraud intelligence, and multi-store analytics."
    },
    {
      q: "Is there a free trial available?",
      a: "Please contact the ClickOut sales team or visit clickout.in to check current trial or demo availability. The team offers walkthroughs tailored to your store size and needs."
    },
    {
      q: "How is employee authentication handled?",
      a: "ClickOut includes staff identity verification so only authorised employees can access manager dashboards, approve refunds, or override system alerts. Role-based access control limits what each staff member can see or action."
    },
    {
      q: "Does ClickOut generate GST-compliant bills?",
      a: "Yes. ClickOut is GST-ready. Digital receipts generated after each checkout include all required tax fields and can be downloaded or sent to customers via the app."
    },
    {
      q: "How fast is the actual checkout compared to a traditional billing counter?",
      a: "Most ClickOut checkouts complete in under 30 seconds. Traditional billing counters in busy supermarkets average 5–15 minutes of wait time. For high-traffic stores, this translates to significantly higher customer throughput and satisfaction."
    },
    {
      q: "Can ClickOut integrate with our existing POS or ERP system?",
      a: "Custom API integrations are available on the Enterprise plan. For smaller plans, ClickOut operates as a standalone system. Contact the sales team to discuss specific integration requirements for your existing setup."
    },
    {
      q: "What kind of analytics and reports does ClickOut provide?",
      a: "Depending on your plan, you get dashboards covering real-time revenue, transaction volume, peak hours, product-level sales, customer return frequency, staff performance, and fraud incident reports. The Growth plan includes the Super Auditor Suite for deep operational analysis."
    },
    {
      q: "What happens if the internet goes down in my store?",
      a: "ClickOut is designed with connectivity resilience in mind. The QR Bailout Protection feature on the Growth plan provides offline fallback modes. For detailed offline capability specifics, reach out to the ClickOut team based on your store infrastructure."
    },
    {
      q: "How do I get started with ClickOut?",
      a: "Visit clickout.in, choose a plan that fits your store size, and sign up. The onboarding team will guide you through terminal setup, staff training, and app configuration. Enterprise customers get a dedicated account manager for the full rollout."
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-secondary)' }}>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 backdrop-blur-xl border-b"
        style={{ background: 'var(--bg-nav)', borderColor: 'var(--border-color)' }}
      >
        <a href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span style={{ color: 'var(--text-primary)' }}>Click</span>
          <span style={{ color: 'var(--accent)' }}>Out</span>
        </a>
        <a
          href="/"
          className="px-4 py-2 rounded-lg text-sm transition border"
          style={{
            background: 'var(--accent-bg)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-primary)',
          }}
        >
          Back to Home
        </a>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold mb-12 font-modern text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Frequently Asked Questions
          </h1>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                }))
              })
            }}
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 border"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {faq.q}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer
        className="w-full border-t mt-20"
        style={{ background: 'var(--bg-footer)', borderColor: 'var(--border-color)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} ClickOut. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
