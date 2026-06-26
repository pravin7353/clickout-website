import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ClickOut | The Retail Operating System',
  description: 'Founded in Mumbai, ClickOut is a retail operating ecosystem that transforms store operations with QR self-checkout, inventory management, and fraud prevention.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{background:'var(--bg-base)',color:'var(--text-primary)'}}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 backdrop-blur-xl border-b" style={{background:'var(--bg-nav)',borderColor:'var(--border-color)'}}>
        <a href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span style={{color:'var(--text-primary)'}}>Click</span><span style={{color:'var(--accent)'}}>Out</span>
        </a>
        <a href="/" className="px-4 py-2 rounded-lg text-sm transition" style={{background:'var(--bg-card)',color:'var(--text-primary)',border:'1px solid var(--border-color)'}}>
          Back to Home
        </a>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto space-y-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-modern" style={{color:'var(--text-primary)'}}>About <span style={{color:'var(--accent)'}}>ClickOut</span></h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold" style={{color:'var(--accent)'}}>What Is ClickOut?</h2>
          <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>
            ClickOut is a retail operating ecosystem founded in Mumbai, India. The platform transforms how retail stores, supermarkets, chains, and warehouses manage their daily operations — replacing traditional billing counters with QR-based self-checkout while providing a comprehensive suite of tools for inventory, employee management, fraud prevention, and customer analytics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff66]">The Problem ClickOut Solves</h2>
          <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>
            Indian retail loses billions annually to three core inefficiencies: (1) long billing queues that reduce customer satisfaction and throughput, (2) inventory shrinkage and financial leakage from undetected fraud, and (3) fragmented systems that force owners to juggle multiple disconnected tools. ClickOut addresses all three with a single integrated platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff66]">How ClickOut Started</h2>
          <p className="leading-relaxed" style={{color:'var(--text-secondary)'}}>
            ClickOut was built in Mumbai — a city where retail volume is massive but technology adoption in store operations has historically lagged. The founders observed that even large supermarkets were losing significant revenue to checkout delays, employee errors, and inability to track real-time store performance. ClickOut was designed to bring enterprise-grade retail intelligence to stores of every size, starting at ₹99/month.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00ff66]">Who ClickOut Serves</h2>
          <ul className="list-disc pl-5 space-y-2" style={{color:'var(--text-secondary)'}}>
            <li>Independent retail stores and boutiques</li>
            <li>Supermarkets and grocery chains</li>
            <li>Multi-branch retail operations</li>
            <li>Warehouses and distribution centers</li>
            <li>Any high-traffic retail business seeking to modernize operations</li>
          </ul>
        </section>
      </div>
    </main>

    {/* FOOTER */}
    <footer className="w-full mt-20 border-t" style={{background:'var(--bg-footer)',borderColor:'var(--border-color)'}}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm" style={{color:'var(--text-muted)'}}>© {new Date().getFullYear()} ClickOut. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}