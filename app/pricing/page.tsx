'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const getPrice = (monthly: number) => isYearly ? Math.floor(monthly * 0.8) : monthly;

  return (
    <div className="min-h-screen transition-colors duration-300" style={{background:'var(--bg-base)', color:'var(--text-primary)'}}>
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-modern mb-6" style={{color:'var(--text-primary)'}}>Explore Plans</h1>
            <div className="inline-flex bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm rounded-full p-1">
              <button onClick={() => setIsYearly(false)} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isYearly ? 'bg-[var(--text-primary)] text-[var(--bg-base)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>Monthly</button>
              <button onClick={() => setIsYearly(true)} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isYearly ? 'bg-[var(--text-primary)] text-[var(--bg-base)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
                Yearly <span className="text-[var(--accent)] text-[10px] bg-[var(--accent-bg)] px-2 py-0.5 rounded-full border border-[var(--accent)]">20% OFF</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-[1400px] mx-auto">
            {/* MINI */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] h-full p-8 rounded-3xl flex flex-col hover:shadow-sm transition-all">
              <h3 className="font-modern text-xl mb-1 font-semibold">Mini</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">For independent retail stores</p>
              <div className="text-4xl font-modern mb-2 font-bold">₹{getPrice(99)}</div>
              <p className="text-[var(--text-secondary)] text-[10px] mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && '(billed yearly)'}</p>
              <div className="space-y-3 mb-8 flex-1">
                {[ "1 Terminal License", "100 Transactions / month", "Real-Time UPI & QR Settlement", "Product & Service Ledger Access", "Basic Revenue Dashboard" ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> {f}</div>
                ))}
                <div className="pt-4 border-t border-[var(--border-color)] mt-4">
                  <span className="text-[10px] text-[var(--accent)] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Dashboard Core, Product Control, Service Control, IDT Deposits</span>
                </div>
              </div>
              <Button variant="secondary" className="w-full">Start Mini</Button>
            </div>

            {/* BASIC */}
            <div className="bg-[var(--bg-card)] border-2 border-[var(--accent)] shadow-md h-full p-8 rounded-3xl flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-[#1a1917] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <h3 className="font-modern text-xl mb-1 font-semibold">Basic</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">For scaling shops & supermarkets</p>
              <div className="text-4xl font-modern mb-2 font-bold">₹{getPrice(299)}</div>
              <p className="text-[var(--text-secondary)] text-[10px] mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && '(billed yearly)'}</p>
              <div className="space-y-3 mb-8 flex-1">
                {[ "3 Terminal Licenses", "1,000 Smart Transactions / mo.", "Customer Intelligence Reports", "Refund Monitoring Engine", "Staff Command Management" ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3 text-[12px] text-[var(--text-primary)] font-medium"><Check size={16} className="text-[var(--accent)] shrink-0" /> {f}</div>
                ))}
                <div className="pt-4 border-t border-[var(--border-color)] mt-auto">
                  <span className="text-[10px] text-[var(--accent)] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Everything in MINI, Super Manager, Growth Radar, Refund Engine, Fraud Detection Basic</span>
                </div>
              </div>
              <Button className="w-full">Start Basic</Button>
            </div>

            {/* GROWTH */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] h-full p-8 rounded-3xl flex flex-col hover:shadow-sm transition-all">
              <h3 className="font-modern text-xl mb-1 font-semibold">Growth</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">For enterprise retail operations</p>
              <div className="text-4xl font-modern mb-2 font-bold">₹{getPrice(699)}</div>
              <p className="text-[var(--text-secondary)] text-[10px] mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && '(billed yearly)'}</p>
              <div className="space-y-3 mb-8 flex-1">
                {[ "10 Terminal Licenses", "Unlimited Transaction Processing", "AI Fraud Intelligence", "Multi-Store Analytics", "Super Auditor Suite", "QR Bailout Protection" ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> {f}</div>
                ))}
                <div className="pt-4 border-t border-[var(--border-color)] mt-auto">
                  <span className="text-[10px] text-[var(--accent)] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Everything in BASIC, Procurement Full, Super Auditor, Risk Engine AI, Fraud Control</span>
                </div>
              </div>
              <Button variant="secondary" className="w-full">Start Growth</Button>
            </div>

            {/* ENTERPRISE */}
            <div className="bg-[var(--bg-base)] border border-[var(--border-color)] h-full p-8 rounded-3xl flex flex-col hover:shadow-sm transition-all">
              <h3 className="font-modern text-xl mb-1 font-semibold">Enterprise</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">For large retail chains</p>
              <div className="text-4xl font-modern mb-2 font-bold">Custom</div>
              <p className="text-[var(--text-secondary)] text-[10px] mb-8 uppercase tracking-wide font-semibold">Contact us for pricing</p>
              <div className="space-y-3 mb-8 flex-1">
                {[ "Unlimited Terminals", "Dedicated Infrastructure", "Custom API Integrations", "White Label Deployment", "Enterprise Risk Automation", "Dedicated Account Manager" ].map((f, i) => (
                    <div key={i} className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> {f}</div>
                ))}
                <div className="pt-4 border-t border-[var(--border-color)] mt-auto">
                  <span className="text-[10px] text-[var(--accent)] font-bold tracking-wider uppercase mb-1 block">Includes</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Full ClickOut Ecosystem, Custom Modules, Enterprise SLA Support</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">Contact Us</Button>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-[var(--border-color)] pt-12">
            {[ "GST Ready", "Multi-Store Secure", "AI Fraud Detection", "Real-Time Analytics", "Cloud Synced" ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium" style={{color:'var(--text-secondary)'}}><Check size={16} className="text-[var(--accent)]" /> {t}</div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}