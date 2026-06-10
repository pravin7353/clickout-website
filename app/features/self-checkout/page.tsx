import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'QR Self-Checkout Software | ClickOut',
  description: 'Skip the billing queue with ClickOut QR self-checkout. Customers scan products, pay digitally, and exit via gatepass verification in seconds.',
};

export default function SelfCheckoutPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#EBEBE8]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span className="text-white">Click</span><span className="text-[#00ff66]">Out</span>
        </Link>
        <Link href="/" className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-white text-sm transition border border-white/10">
          Back to Home
        </Link>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto space-y-16">
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-modern">QR Self-Checkout by ClickOut</h1>
            <p className="text-xl text-[#00ff66] font-light">Eliminate billing queues permanently.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">What Is ClickOut Self-Checkout?</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              ClickOut Self-Checkout is a QR-based system that allows retail customers to scan products with their smartphone as they shop, pay digitally, and exit through a gatepass verification — all without standing in a billing queue.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">How It Works (Step-by-Step)</h2>
            <div className="grid gap-4">
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <span className="text-[#00ff66] font-bold mr-2">1.</span>
                <strong className="text-white">Enter & Scan QR:</strong> <span className="text-[#a1a1aa]">Customer scans the store's entry QR code to start a secure shopping session.</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <span className="text-[#00ff66] font-bold mr-2">2.</span>
                <strong className="text-white">Shop & Scan Products:</strong> <span className="text-[#a1a1aa]">Customer scans each product's barcode using the ClickOut mobile app.</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <span className="text-[#00ff66] font-bold mr-2">3.</span>
                <strong className="text-white">Review Cart:</strong> <span className="text-[#a1a1aa]">Cart updates in real-time; customer sees running total.</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <span className="text-[#00ff66] font-bold mr-2">4.</span>
                <strong className="text-white">Pay Digitally:</strong> <span className="text-[#a1a1aa]">Pay via UPI, debit/credit card, or CASH.</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <span className="text-[#00ff66] font-bold mr-2">5.</span>
                <strong className="text-white">Exit Verification:</strong> <span className="text-[#a1a1aa]">Security guard scans exit QR code to verify purchase — customer walks out in seconds.</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Key Benefits</h2>
            <ul className="list-disc pl-5 text-[#a1a1aa] space-y-2">
              <li>Eliminates checkout queues entirely</li>
              <li>Reduces billing staff requirements</li>
              <li>Prevents shoplifting with exit verification</li>
              <li>Increases store throughput (more customers, same space)</li>
              <li>Generates individual customer purchase data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Security & Payments</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              <strong className="text-white">Security:</strong> Every self-checkout session is protected by encrypted QR tokens, transaction verification, Risk Engine fraud scoring, and gatepass exit validation. Ghost Visitor Detection flags customers who enter but do not complete checkout.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed">
              <strong className="text-white">Supported Payments:</strong> UPI, Debit Cards, Credit Cards, Digital Wallets (Paytm, PhonePe, GPay), Cash Counter verification.
            </p>
          </section>

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