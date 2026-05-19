'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, ShieldCheck, CreditCard, CheckCircle2, Download, Smartphone } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] overflow-x-hidden">
      {/* GLOBAL PREMIUM STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        * { font-family: 'Inter', sans-serif; }
        .glass-card {
          background: rgba(25, 25, 25, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glow-effect {
          box-shadow: 0 0 40px -10px rgba(0, 200, 83, 0.15);
        }
        .input-premium {
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.2s ease;
        }
        .input-premium:focus {
          border-color: #00C853;
          box-shadow: 0 0 0 1px #00C853;
          outline: none;
        }
      `}} />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-5 z-50 glass-card border-b-0 border-white/5">
        <div className="text-xl tracking-tighter font-semibold">
          Click<span className="text-[#00C853]">Out</span>
        </div>
        <div className="flex gap-6 text-sm text-[#A1A1AA]">
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="mailto:support@clickout.in" className="hover:text-white transition">Support</a>
        </div>
      </nav>

      {/* HERO / AUTH SECTION (Claude Vibe) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C853] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 max-w-2xl z-10"
        >
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
            The Operating System for Modern Retail.
          </h1>
        </motion.div>

        {/* AUTH CARD (Owner Login) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-card w-full max-w-md rounded-2xl p-8 glow-effect z-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium mb-1">Store Owner Login</h2>
            <p className="text-sm text-[#A1A1AA]">Access your Command Center</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); window.location.href='https://clickout-cfa95.web.app/#/login'; }} className="space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-premium w-full px-4 py-3 rounded-xl text-sm placeholder:text-[#555] text-white"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#00C853] text-[#050505] hover:bg-[#00E65F] font-medium py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
              Continue with Email
            </button>
          </form>
        </motion.div>

        {/* STAFF APPS CIRCLES */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex flex-col items-center z-10"
        >
          <p className="text-xs text-[#555] uppercase tracking-widest mb-6">Staff Portals</p>
          <div className="flex gap-8">
            <StaffLink icon={<Store size={20} />} label="Cashier" />
            <StaffLink icon={<ShieldCheck size={20} />} label="Guard" />
            <StaffLink icon={<CreditCard size={20} />} label="IDT" />
          </div>
        </motion.div>
      </section>

      {/* CUSTOMER APP SECTION */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between glass-card p-12 rounded-3xl">
          <div className="mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-medium tracking-tight mb-3">For Customers: ClickOut App</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-md">
              Skip the queue. Direct UPI bank settlements. Scan, pay, and generate your exit gate-pass instantly. 
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <AppButton icon={<Smartphone size={18}/>} text="App Store" />
            <AppButton icon={<Download size={18}/>} text="Google Play" />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight mb-4">Transparent Pricing</h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard title="MINI" price="₹99" desc="Small shops" features={["1 Terminal", "UPI Settlements"]} />
          <PricingCard title="BASIC" price="₹299" desc="Growing retail" features={["3 Terminals", "Guard Portal"]} popular />
          <PricingCard title="GROWTH" price="₹699" desc="Multi-store chains" features={["10 Terminals", "Risk Engine"]} />
        </div>
      </section>
    </div>
  );
}

// Reusable Components
function StaffLink({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group">
      <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#A1A1AA] group-hover:text-[#00C853] group-hover:border-[#00C853]/30 group-hover:bg-[#00C853]/10 transition-all duration-300">
        {icon}
      </div>
      <span className="text-xs text-[#777] font-medium tracking-wide group-hover:text-white transition-colors">{label}</span>
    </div>
  );
}

function AppButton({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl transition-all text-sm font-medium">
      {icon} {text}
    </button>
  );
}

function PricingCard({ title, price, desc, features, popular = false }: { title: string, price: string, desc: string, features: string[], popular?: boolean }) {
  return (
    <div className={`glass-card p-8 rounded-2xl relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${popular ? 'border-[#00C853]/30 glow-effect' : 'border-white/5'}`}>
      {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00C853] text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">RECOMMENDED</span>}
      <h4 className="text-[#A1A1AA] text-xs font-semibold tracking-widest mb-2">{title}</h4>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-3xl font-medium tracking-tight">{price}</span><span className="text-[#555] text-sm">/mo</span>
      </div>
      <p className="text-[#777] text-sm mb-8">{desc}</p>
      <div className="space-y-4 mb-8 flex-grow">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-[#EDEDED]">
            <CheckCircle2 size={16} className="text-[#00C853]" />{f}
          </div>
        ))}
      </div>
    </div>
  );
}