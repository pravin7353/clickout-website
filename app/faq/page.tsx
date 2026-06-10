import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | ClickOut Retail System',
  description: 'Frequently asked questions about ClickOut\'s queue-free checkout, inventory management, security, and pricing.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What is ClickOut?",
      a: "ClickOut is a retail operating system that enables queue-free shopping through QR-based self-checkout while providing store owners with real-time inventory management, employee authentication, fraud prevention, customer analytics, and multi-store command center capabilities."
    },
    {
      q: "How does ClickOut work?",
      a: "Customers scan a QR code at store entry, scan product barcodes as they shop using the ClickOut app, pay digitally via UPI or card, and exit through a quick gatepass scan. The entire process takes seconds and eliminates queues."
    },
    {
      q: "Who should use ClickOut?",
      a: "ClickOut is designed for retail stores, supermarkets, grocery chains, warehouses, and multi-location businesses in India. It is ideal for businesses with high customer volumes looking to reduce checkout queues."
    },
    {
      q: "How secure is ClickOut?",
      a: "Every ClickOut session uses encrypted QR tokens, real-time fraud scoring via the Risk Engine AI, and mandatory gatepass exit validation. All transactions are secured with end-to-end encryption."
    },
    {
      q: "Does ClickOut support multiple store branches?",
      a: "Yes. ClickOut's Command Center is specifically built for enterprise multi-store operations. Store owners and chain managers can monitor all locations from a single dashboard."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#EBEBE8]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-white/5">
        <a href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span className="text-white">Click</span><span className="text-[#00ff66]">Out</span>
        </a>
        <a href="/" className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-white text-sm transition border border-white/10">
          Back to Home
        </a>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 font-modern text-center">Frequently Asked Questions</h1>
        
        {/* FAQ Schema injection for this specific page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
              <p className="text-[#A0A09C] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>

    {/* FOOTER */}
    <footer className="w-full border-t border-gray-800 bg-black mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ClickOut. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}