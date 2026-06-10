import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | ClickOut Retail Software',
  description: 'View pricing for ClickOut. Plans start at ₹99/month for independent stores up to Enterprise solutions for large multi-store chains.',
};

export default function PricingPage() {
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
        <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-modern">Transparent Pricing</h1>
          <p className="text-xl text-[#A0A09C]">Choose the right command center for your scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mini */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
            <h3 className="text-xl text-white font-semibold mb-2">Mini</h3>
            <div className="text-4xl font-bold text-white mb-6">₹99<span className="text-sm text-[#85847E] font-normal">/mo</span></div>
            <p className="text-[#85847E] text-sm mb-6">For independent retail stores & services</p>
            <ul className="space-y-3 text-sm text-[#D4D4D2]">
              <li>1 Terminal License</li>
              <li>100 Transactions / month</li>
              <li>Basic Revenue Dashboard</li>
              <li>IDT Deposit Validation</li>
            </ul>
          </div>

          {/* Basic */}
          <div className="bg-white/[0.02] border border-[#00ff66]/30 p-8 rounded-3xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00ff66] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">Most Popular</div>
            <h3 className="text-xl text-white font-semibold mb-2">Basic</h3>
            <div className="text-4xl font-bold text-white mb-6">₹299<span className="text-sm text-[#85847E] font-normal">/mo</span></div>
            <p className="text-[#85847E] text-sm mb-6">For scaling shops & supermarkets</p>
            <ul className="space-y-3 text-sm text-[#D4D4D2]">
              <li>3 Terminal Licenses</li>
              <li>1,000 Smart Transactions / mo</li>
              <li>Growth Radar Analytics</li>
              <li>Staff Command Management</li>
            </ul>
          </div>

          {/* Growth */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
            <h3 className="text-xl text-white font-semibold mb-2">Growth</h3>
            <div className="text-4xl font-bold text-white mb-6">₹699<span className="text-sm text-[#85847E] font-normal">/mo</span></div>
            <p className="text-[#85847E] text-sm mb-6">For enterprise retail operations</p>
            <ul className="space-y-3 text-sm text-[#D4D4D2]">
              <li>10 Terminal Licenses</li>
              <li>Risk Engine AI</li>
              <li>Enterprise Procurement</li>
              <li>Operational Intelligence</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
            <h3 className="text-xl text-white font-semibold mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-white mb-6">Custom</div>
            <p className="text-[#85847E] text-sm mb-6">For large chains & deployments</p>
            <ul className="space-y-3 text-sm text-[#D4D4D2]">
              <li>Unlimited Terminals</li>
              <li>Dedicated Infrastructure</li>
              <li>Custom API Integrations</li>
              <li>White Label Deployment</li>
            </ul>
          </div>
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