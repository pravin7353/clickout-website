import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QR Self-Checkout Software | ClickOut',
  description: 'Skip the billing queue with ClickOut QR self-checkout. Customers scan products, pay digitally, and exit via gatepass verification in seconds.',
};

export default function SelfCheckoutPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{background:'var(--bg-base)', color:'var(--text-primary)'}}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 backdrop-blur-xl border-b" style={{background:'var(--bg-nav)', borderColor:'var(--border-color)'}}>
        <Link href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span style={{color:'var(--text-primary)'}}>Click</span><span style={{color:'var(--accent)'}}>Out</span>
        </Link>
        <Link href="/" className="px-4 py-2 rounded-lg text-sm transition" style={{background:'var(--bg-card)', color:'var(--text-primary)', border:'1px solid var(--border-color)'}}>
          Back to Home
        </Link>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto space-y-16">
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-modern" style={{color:'var(--text-primary)'}}>QR Self-Checkout by ClickOut</h1>
            <p className="text-xl font-light" style={{color:'var(--accent)'}}>Eliminate billing queues permanently.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold" style={{color:'var(--text-primary)'}}>What Is ClickOut Self-Checkout?</h2>
            <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>
              ClickOut Self-Checkout is a QR-based system that allows retail customers to scan products with their smartphone as they shop, pay digitally, and exit through a gatepass verification — all without standing in a billing queue.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold" style={{color:'var(--text-primary)'}}>How It Works (Step-by-Step)</h2>
            <div className="grid gap-4">
              <div className="p-5 rounded-xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
                <span className="font-bold mr-2" style={{color:'var(--accent)'}}>1.</span>
                <strong style={{color:'var(--text-primary)'}}>Enter & Scan QR:</strong> <span style={{color:'var(--text-secondary)'}}>Customer scans the store's entry QR code to start a secure shopping session.</span>
              </div>
              <div className="p-5 rounded-xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
                <span className="font-bold mr-2" style={{color:'var(--accent)'}}>2.</span>
                <strong style={{color:'var(--text-primary)'}}>Shop & Scan Products:</strong> <span style={{color:'var(--text-secondary)'}}>Customer scans each product's barcode using the ClickOut mobile app.</span>
              </div>
              <div className="p-5 rounded-xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
                <span className="font-bold mr-2" style={{color:'var(--accent)'}}>3.</span>
                <strong style={{color:'var(--text-primary)'}}>Review Cart:</strong> <span style={{color:'var(--text-secondary)'}}>Cart updates in real-time; customer sees running total.</span>
              </div>
              <div className="p-5 rounded-xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
                <span className="font-bold mr-2" style={{color:'var(--accent)'}}>4.</span>
                <strong style={{color:'var(--text-primary)'}}>Pay Digitally:</strong> <span style={{color:'var(--text-secondary)'}}>Pay via UPI, debit/credit card, or CASH.</span>
              </div>
              <div className="p-5 rounded-xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
                <span className="font-bold mr-2" style={{color:'var(--accent)'}}>5.</span>
                <strong style={{color:'var(--text-primary)'}}>Exit Verification:</strong> <span style={{color:'var(--text-secondary)'}}>Security guard scans exit QR code to verify purchase — customer walks out in seconds.</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold" style={{color:'var(--text-primary)'}}>Key Benefits</h2>
            <ul className="list-disc pl-5 space-y-2" style={{color:'var(--text-secondary)'}}>
              <li>Eliminates checkout queues entirely</li>
              <li>Reduces billing staff requirements</li>
              <li>Prevents shoplifting with exit verification</li>
              <li>Increases store throughput (more customers, same space)</li>
              <li>Generates individual customer purchase data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold" style={{color:'var(--text-primary)'}}>Security & Payments</h2>
            <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>
              <strong style={{color:'var(--text-primary)'}}>Security:</strong> Every self-checkout session is protected by encrypted QR tokens, transaction verification, Risk Engine fraud scoring, and gatepass exit validation. Ghost Visitor Detection flags customers who enter but do not complete checkout.
            </p>
            <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>
              <strong style={{color:'var(--text-primary)'}}>Supported Payments:</strong> UPI, Debit Cards, Credit Cards, Digital Wallets (Paytm, PhonePe, GPay), Cash Counter verification.
            </p>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full mt-20 border-t" style={{background:'var(--bg-footer)', borderColor:'var(--border-color)'}}>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{color:'var(--text-muted)'}}>© {new Date().getFullYear()} ClickOut. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}