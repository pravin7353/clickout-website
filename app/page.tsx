'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSales from '@/components/sections/ContactSales';
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How does ClickOut work?", a: "Customers scan, shop, pay, and exit securely without standing in billing queues." },
    { q: "Is ClickOut secure?", a: "Yes. Every session is encrypted with real-time fraud protection and QR verification." },
    { q: "Can stores track live shoppers?", a: "Yes. ClickOut provides live customer analytics, VIP tracking, and ghost visitor monitoring." },
    { q: "Which payment methods are supported?", a: "UPI, Debit/Credit Cards, Wallets, and Cash Counter verification." },
    { q: "Does ClickOut support multiple store branches?", a: "Yes. The Command Center is built for enterprise multi-store operations." },
    { q: "How fast is the checkout process?", a: "Customers can complete shopping and exit verification within seconds." }
  ];

  const scrollToContact = () => {
    document.getElementById('contact-sales')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[var(--accent-bg)]">
      <Navbar />

      <main>
        {/* =========================================
            HERO SECTION: QUEUE KILLER (COMING SOON)
            (As requested: Layout prepared, left empty for future implementation)
            ========================================= */}
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-24 relative overflow-hidden">
          <div className="text-center z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-8xl font-bold font-modern tracking-tight mb-6">
              Queue <span className="text-[var(--accent)]">Killer</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light">
              (Interactive Hero Experience Under Development)
            </p>
          </div>
        </section>

        {/* =========================================
            PRICING SECTION
            ========================================= */}
        <section id="pricing" className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 border-t border-[var(--border-color)]">
          <div className="text-center mb-16">
            <h2 className="font-modern text-4xl md:text-5xl mb-6 font-semibold">Explore Plans</h2>
            <div className="inline-flex bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm rounded-full p-1">
              <button onClick={() => setIsYearly(false)} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isYearly ? 'bg-[var(--text-primary)] text-[var(--bg-base)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>Monthly</button>
              <button onClick={() => setIsYearly(true)} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isYearly ? 'bg-[var(--text-primary)] text-[var(--bg-base)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
                Yearly <span className="text-[var(--accent)] text-[10px] bg-[var(--accent-bg)] px-2 py-0.5 rounded-full border border-[var(--accent)]">20% OFF</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* MINI */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] h-full p-8 rounded-3xl flex flex-col hover:shadow-sm transition-all hover:translate-y-[-2px]">
              <h3 className="font-modern text-xl mb-1 font-semibold">Mini</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">For independent retail stores</p>
              <div className="text-4xl font-modern mb-2 font-bold">₹{isYearly ? Math.floor(99 * 0.8) : 99}</div>
              <p className="text-[var(--text-secondary)] text-[10px] mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && 'billed yearly'}</p>
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> 1 Terminal License</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> 100 Transactions / month</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Real-Time UPI & QR Settlement</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Product & Service Ledger Access</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Basic Revenue Dashboard</div>
                
                <div className="pt-4 border-t border-[var(--border-color)] mt-4">
                  <span className="text-[10px] text-[var(--accent)] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Dashboard Core, Product Control, Service Control, IDT Deposits</span>
                </div>
              </div>
              <Button variant="secondary" onClick={scrollToContact} className="w-full">Start Mini</Button>
            </div>

            {/* BASIC */}
            <div className="bg-[var(--bg-card)] border-2 border-[var(--accent)] shadow-md h-full p-8 rounded-3xl flex flex-col relative hover:translate-y-[-2px] transition-transform">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-[#1a1917] text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <h3 className="font-modern text-xl mb-1 font-semibold">Basic</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">For scaling shops & supermarkets</p>
              <div className="text-4xl font-modern mb-2 font-bold">₹{isYearly ? Math.floor(299 * 0.8) : 299}</div>
              <p className="text-[var(--text-secondary)] text-[10px] mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && 'billed yearly'}</p>
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-3 text-[12px] font-medium"><Check size={16} className="text-[var(--accent)] shrink-0" /> 3 Terminal Licenses</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> 1,000 Smart Transactions / mo.</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Customer Intelligence Reports</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Refund Monitoring Engine</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Staff Command Management</div>
                
                <div className="pt-4 border-t border-[var(--border-color)] mt-auto">
                  <span className="text-[10px] text-[var(--accent)] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Everything in MINI, Super Manager, Growth Radar, Refund Engine, Fraud Detection Basic</span>
                </div>
              </div>
              <Button onClick={scrollToContact} className="w-full">Start Basic</Button>
            </div>

            {/* GROWTH */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] h-full p-8 rounded-3xl flex flex-col hover:shadow-sm transition-all hover:translate-y-[-2px]">
              <h3 className="font-modern text-xl mb-1 font-semibold transition-colors">Growth</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">For enterprise retail operations</p>
              <div className="text-4xl font-modern mb-2 font-bold">₹{isYearly ? Math.floor(699 * 0.8) : 699}</div>
              <p className="text-[var(--text-secondary)] text-[10px] mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && 'billed yearly'}</p>
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> 10 Terminal Licenses</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Unlimited Transaction Processing</div>
                <div className="flex items-start gap-3 text-[12px] font-medium"><Check size={16} className="text-[var(--accent)] shrink-0" /> AI Fraud Intelligence</div>
                <div className="flex items-start gap-3 text-[12px] font-medium"><Check size={16} className="text-[var(--accent)] shrink-0" /> Multi-Store Analytics</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Super Auditor Suite</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> QR Bailout Protection</div>

                <div className="pt-4 border-t border-[var(--border-color)] mt-auto">
                  <span className="text-[10px] text-[var(--accent)] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Everything in BASIC, Procurement Full, Super Auditor, Risk Engine AI, Fraud Control</span>
                </div>
              </div>
              <Button variant="secondary" onClick={scrollToContact} className="w-full">Start Growth</Button>
            </div>

            {/* ENTERPRISE */}
            <div className="bg-[var(--bg-base)] border border-[var(--border-color)] h-full p-8 rounded-3xl flex flex-col hover:shadow-sm transition-all hover:translate-y-[-2px]">
              <h3 className="font-modern text-xl mb-1 font-semibold">Enterprise</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">For large retail chains</p>
              <div className="text-4xl font-modern mb-2 font-bold">Custom</div>
              <p className="text-[var(--text-secondary)] text-[10px] mb-8 uppercase tracking-wide font-semibold">Contact us for pricing</p>
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Unlimited Terminals</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Dedicated Infrastructure</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Custom API Integrations</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> White Label Deployment</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Enterprise Risk Automation</div>
                <div className="flex items-start gap-3 text-[12px] text-[var(--text-secondary)]"><Check size={16} className="text-[var(--accent)] shrink-0" /> Dedicated Account Manager</div>

                <div className="pt-4 border-t border-[var(--border-color)] mt-auto">
                  <span className="text-[10px] text-[var(--accent)] font-bold tracking-wider uppercase mb-1 block">Includes</span>
                  <span className="text-[11px] text-[var(--text-secondary)] leading-relaxed">Full ClickOut Ecosystem, Custom Modules, Enterprise SLA Support</span>
                </div>
              </div>
              <Button variant="outline" onClick={scrollToContact} className="w-full">Contact Us</Button>
            </div>
          </div>

          {/* TRUST BADGES STRIP */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 border-t border-[var(--border-color)] pt-12">
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium"><Check size={16} className="text-[var(--accent)]" /> GST Ready</div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium"><Check size={16} className="text-[var(--accent)]" /> Multi-Store Secure</div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium"><Check size={16} className="text-[var(--accent)]" /> AI Fraud Detection</div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium"><Check size={16} className="text-[var(--accent)]" /> Real-Time Analytics</div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] font-medium"><Check size={16} className="text-[var(--accent)]" /> Cloud Synced</div>
          </div>
        </section>

        {/* =========================================
            FAQ SECTION
            ========================================= */}
        <section id="faq" className="max-w-[900px] mx-auto px-6 md:px-8 py-24 border-t border-[var(--border-color)]">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-modern">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm transition-all">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left gap-4">
                  <span className="font-medium text-base md:text-lg">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }} className="w-8 h-8 rounded-full bg-[var(--bg-base)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                    <ChevronDown size={16} className={openFaq === idx ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-6 pb-6 text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </main>

      <ContactSales />
      <Footer />
    </div>
  );
}