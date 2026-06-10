import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supermarket Management Software India | ClickOut',
  description: 'Transform your supermarket with ClickOut. Eliminate billing queues, manage thousands of SKUs, and track VIP customers across multiple locations.',
};

export default function SupermarketsPage() {
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
            <div className="inline-block px-3 py-1 bg-[#00ff66]/10 text-[#00ff66] text-xs font-bold tracking-wider rounded-full border border-[#00ff66]/20 mb-4">INDUSTRY SOLUTIONS</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-modern">ClickOut for Supermarkets</h1>
            <p className="text-xl text-[#a1a1aa] font-light">Built for high-volume Indian retail.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">The Supermarket Challenge</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              Supermarkets face a unique intersection of high customer volumes, large SKU counts, multiple staff roles, and intense pressure on margins. The traditional checkout model — where every customer queues at a staffed billing counter — creates bottlenecks that drive customers away and limit throughput.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">How ClickOut Transforms Operations</h2>
            <div className="space-y-4">
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <strong className="text-[#00ff66] block mb-1">For Customers:</strong> 
                <span className="text-[#a1a1aa]">Skip the billing queue entirely. Scan items as you shop, pay on your phone, and walk out in seconds through a quick exit verification.</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <strong className="text-[#00ff66] block mb-1">For Store Managers:</strong> 
                <span className="text-[#a1a1aa]">Watch live revenue, active shoppers, VIP customer presence, inventory levels, and fraud alerts — all in one Command Center dashboard.</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <strong className="text-[#00ff66] block mb-1">For Security Staff:</strong> 
                <span className="text-[#a1a1aa]">Gatepass validation with QR scanning replaces manual receipt checking. Ghost Visitor Detection flags non-paying customers automatically.</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Supermarket-Specific Features</h2>
            <ul className="list-disc pl-5 text-[#a1a1aa] space-y-2">
              <li>Multi-lane self-checkout support for high-volume hours</li>
              <li>Bulk product barcode management (10,000+ SKUs)</li>
              <li>Category-level analytics and performance tracking</li>
              <li>Staff management across cashier, guard, auditor, and manager roles</li>
              <li>Financial leakage detection across high-volume transactions</li>
            </ul>
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