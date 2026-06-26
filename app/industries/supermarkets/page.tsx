import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supermarket Management Software India | ClickOut',
  description: 'Transform your supermarket with ClickOut. Eliminate billing queues, manage thousands of SKUs, and track VIP customers across multiple locations.',
};

export default function SupermarketsPage() {
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
            <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider rounded-full border mb-4" style={{background:'var(--accent-bg)', color:'var(--accent)', borderColor:'var(--accent-border)'}}>INDUSTRY SOLUTIONS</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-modern" style={{color:'var(--text-primary)'}}>ClickOut for Supermarkets</h1>
            <p className="text-xl font-light" style={{color:'var(--text-secondary)'}}>Built for high-volume Indian retail.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold" style={{color:'var(--text-primary)'}}>The Supermarket Challenge</h2>
            <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>
              Supermarkets face a unique intersection of high customer volumes, large SKU counts, multiple staff roles, and intense pressure on margins. The traditional checkout model — where every customer queues at a staffed billing counter — creates bottlenecks that drive customers away and limit throughput.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold" style={{color:'var(--text-primary)'}}>How ClickOut Transforms Operations</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
                <strong className="block mb-1" style={{color:'var(--accent)'}}>For Customers:</strong> 
                <span style={{color:'var(--text-secondary)'}}>Skip the billing queue entirely. Scan items as you shop, pay on your phone, and walk out in seconds through a quick exit verification.</span>
              </div>
              <div className="p-5 rounded-xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
                <strong className="block mb-1" style={{color:'var(--accent)'}}>For Store Managers:</strong> 
                <span style={{color:'var(--text-secondary)'}}>Watch live revenue, active shoppers, VIP customer presence, inventory levels, and fraud alerts — all in one Command Center dashboard.</span>
              </div>
              <div className="p-5 rounded-xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
                <strong className="block mb-1" style={{color:'var(--accent)'}}>For Security Staff:</strong> 
                <span style={{color:'var(--text-secondary)'}}>Gatepass validation with QR scanning replaces manual receipt checking. Ghost Visitor Detection flags non-paying customers automatically.</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold" style={{color:'var(--text-primary)'}}>Supermarket-Specific Features</h2>
            <ul className="list-disc pl-5 space-y-2" style={{color:'var(--text-secondary)'}}>
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
      <footer className="w-full mt-20 border-t" style={{background:'var(--bg-footer)', borderColor:'var(--border-color)'}}>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{color:'var(--text-muted)'}}>© {new Date().getFullYear()} ClickOut. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}