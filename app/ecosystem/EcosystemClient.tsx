'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../src/context/LanguageContext'; // Adjust path based on your folder structure

export default function EcosystemClient() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300" style={{background:'var(--bg-base)', color:'var(--text-primary)'}}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 backdrop-blur-xl border-b" style={{background:'var(--bg-nav)', borderColor:'var(--border-color)'}}>
        <Link href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span style={{color:'var(--text-primary)'}}>Click</span><span style={{color:'var(--accent)'}}>Out</span>
        </Link>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="px-3 py-1 rounded-full text-xs font-bold border transition"
            style={{borderColor:'var(--accent)', color:'var(--accent)'}}
          >
            {t('nav.lang')}
          </button>
          <Link href="/" className="px-4 py-2 rounded-lg text-sm transition" style={{background:'var(--bg-card)', color:'var(--text-primary)', border:'1px solid var(--border-color)'}}>
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-300 mx-auto space-y-24">
          
          {/* Header Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-20">
            <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider rounded-full border" style={{background:'var(--accent-bg)', color:'var(--accent)', borderColor:'var(--accent-border)'}}>
              {t('eco.heroLabel')}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-modern" style={{color:'var(--text-primary)'}}>
              {t('eco.heroTitle')}
            </h1>
            <p className="text-xl font-light leading-relaxed" style={{color:'var(--text-secondary)'}}>
              {t('eco.heroDesc')}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y" style={{borderColor:'var(--border-color)'}}>
            {[
              { num: t('eco.stat1'), label: lang === 'hi' ? 'India mein active' : 'Active across India' },
              { num: t('eco.stat2'), label: lang === 'hi' ? 'Average checkout time' : 'Average checkout time' },
              { num: t('eco.stat3'), label: lang === 'hi' ? 'Fraud reduction' : 'Fraud reduction' },
              { num: t('eco.stat4'), label: lang === 'hi' ? 'System reliability' : 'System reliability' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{color:'var(--accent)'}}>{stat.num}</div>
                <div className="text-xs md:text-sm mt-1" style={{color:'var(--text-secondary)'}}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="space-y-16">
            
            {/* 1. ClickOut Admin (Restored 3D Overlap) */}
            <div className="p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden group border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)', boxShadow:'var(--shadow-card)'}}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-[#00ff66] to-[#10b981]"></div>
              
              <div className="z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_8px_#00ff66]" />
                  <span className="text-[#00ff66] text-xs font-bold tracking-wider">{t('eco.app1.label')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'var(--text-primary)'}}>{t('eco.app1.title')}</h2>
                <p className="mb-8 text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>{t('eco.app1.desc')}</p>
                <ul className="space-y-4 text-sm" style={{color:'var(--text-secondary)'}}>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app1.feat1')).split(':')[0]}:</strong> {String(t('eco.app1.feat1')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app1.feat2')).split(':')[0]}:</strong> {String(t('eco.app1.feat2')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app1.feat3')).split(':')[0]}:</strong> {String(t('eco.app1.feat3')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app1.feat4')).split(':')[0]}:</strong> {String(t('eco.app1.feat4')).split(':')[1]}</li>
                </ul>
              </div>

              <div className="relative h-62.5 sm:h-87.5 md:h-100 w-full mt-10 lg:mt-0 perspective-1000">
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-75 h-75 bg-[#00ff66]/10 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="absolute right-0 top-0 w-[85%] rounded-xl border border-white/10 opacity-30 shadow-xl transform hover:-translate-y-6 hover:-translate-x-4 hover:opacity-100 hover:-rotate-2 transition-all duration-500 hover:z-40 cursor-pointer overflow-hidden">
                  <Image src="/images/admin-procurement.jpg" alt="Procurement Screen" width={800} height={450} className="w-full h-auto object-cover" />
                </div>

                <div className="absolute right-4 top-6 w-[85%] rounded-xl border border-white/20 opacity-60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-6 hover:-translate-x-2 hover:opacity-100 hover:-rotate-1 transition-all duration-500 z-20 hover:z-40 cursor-pointer overflow-hidden">
                  <Image src="/images/admin-audit.jpg" alt="Super Auditor Screen" width={800} height={450} className="w-full h-auto object-cover" />
                </div>

                <div className="absolute right-8 top-12 w-[85%] rounded-xl border-2 border-[#00ff66]/30 shadow-[0_20px_50px_rgba(0,255,102,0.15)] z-30 transform group-hover:scale-[1.02] transition-all duration-500 overflow-hidden bg-black">
                  <div className="w-full h-4 bg-[#1a1a1a] flex items-center gap-1.5 px-3 border-b border-white/10 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#ff4d4d]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffcc00]" />
                    <div className="w-2 h-2 rounded-full bg-[#00ff66]" />
                  </div>
                  <Image src="/images/admin-main.jpg" alt="Admin Dashboard Screen" priority width={800} height={450} className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>

            {/* 2. Customer App (Restored 3 Phones) */}
            <div className="p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)', boxShadow:'var(--shadow-card)'}}>
              <div className="z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4d4d]/10 border border-[#ff4d4d]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#ff4d4d] animate-pulse" />
                  <span className="text-[#ff4d4d] text-xs font-bold tracking-wider">{t('eco.app2.label')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'var(--text-primary)'}}>{t('eco.app2.title')}</h2>
                <p className="mb-8 text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>{t('eco.app2.desc')}</p>
                <ul className="space-y-4 text-sm" style={{color:'var(--text-secondary)'}}>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app2.feat1')).split(':')[0]}:</strong> {String(t('eco.app2.feat1')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app2.feat2')).split(':')[0]}:</strong> {String(t('eco.app2.feat2')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app2.feat3')).split(':')[0]}:</strong> {String(t('eco.app2.feat3')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app2.feat4')).split(':')[0]}:</strong> {String(t('eco.app2.feat4')).split(':')[1]}</li>
                </ul>
              </div>

              <div className="relative h-125 w-full flex justify-center items-center mt-10 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-[#ff4d4d]/20 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="absolute left-0 md:left-4 z-10 transform -rotate-6 scale-90 opacity-80 hover:opacity-100 hover:z-40 hover:scale-100 transition-all duration-500 shadow-2xl rounded-4xl overflow-hidden border-4 border-[#222]">
                  <Image src="/images/customer-cart.png" alt="Cart Screen" width={220} height={450} className="object-cover" />
                </div>
                
                <div className="absolute right-0 md:right-4 z-10 transform rotate-6 scale-90 opacity-80 hover:opacity-100 hover:z-40 hover:scale-100 transition-all duration-500 shadow-2xl rounded-4xl overflow-hidden border-4 border-[#222]">
                  <Image src="/images/customer-gatepass.png" alt="Gatepass Screen" width={220} height={450} className="object-cover" />
                </div>

                <div className="absolute z-30 transform hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-4xl overflow-hidden border-4 border-[#444]">
                  <Image src="/images/customer-scan.jpg" alt="Scan Screen" width={240} height={500} className="object-cover" />
                </div>
              </div>
            </div>

            {/* 3. ClickOut Cashier */}
            <div className="p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)', boxShadow:'var(--shadow-card)'}}>
              <div className="z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                  <span className="text-[#00e5ff] text-xs font-bold tracking-wider">{t('eco.app3.label')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'var(--text-primary)'}}>{t('eco.app3.title')}</h2>
                <p className="mb-8 text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>{t('eco.app3.desc')}</p>
                <ul className="space-y-4 text-sm" style={{color:'var(--text-secondary)'}}>
                  <li className="flex items-start gap-3"><span className="text-[#00e5ff] mt-0.5">✓</span> <strong>{String(t('eco.app3.feat1')).split(':')[0]}:</strong> {String(t('eco.app3.feat1')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00e5ff] mt-0.5">✓</span> <strong>{String(t('eco.app3.feat2')).split(':')[0]}:</strong> {String(t('eco.app3.feat2')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00e5ff] mt-0.5">✓</span> <strong>{String(t('eco.app3.feat3')).split(':')[0]}:</strong> {String(t('eco.app3.feat3')).split(':')[1]}</li>
                </ul>
              </div>

              <div className="relative h-112.5 w-full flex justify-center items-center mt-10 lg:mt-0 perspective-1000">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 bg-[#00e5ff]/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-4xl overflow-hidden border-4 border-[#333]">
                  <Image src="/images/cashier-main.png" alt="Cashier Portal" width={240} height={500} className="object-cover" />
                </div>
              </div>
            </div>

            {/* 4. ClickOut Security (Restored 2 Phones) */}
            <div className="p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)', boxShadow:'var(--shadow-card)'}}>
              <div className="order-2 lg:order-1 relative h-112.5 w-full flex justify-center items-center mt-10 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 bg-[#ffcc00]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="absolute left-0 md:left-10 z-10 transform -rotate-6 scale-90 opacity-70 hover:opacity-100 hover:z-30 hover:scale-95 transition-all duration-500 shadow-2xl rounded-4xl overflow-hidden border-4 border-[#222]">
                  <Image src="/images/security-audit.jpg" alt="Spot Audit Screen" width={220} height={450} className="object-cover" />
                </div>

                <div className="absolute right-0 md:right-16 z-20 transform rotate-2 hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-4xl overflow-hidden border-4 border-[#444]">
                  <Image src="/images/security-approve.jpg" alt="Approve Exit Screen" width={230} height={470} className="object-cover" />
                </div>
              </div>

              <div className="order-1 lg:order-2 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffcc00]/10 border border-[#ffcc00]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse" />
                  <span className="text-[#ffcc00] text-xs font-bold tracking-wider">{t('eco.app4.label')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'var(--text-primary)'}}>{t('eco.app4.title')}</h2>
                <p className="mb-8 text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>{t('eco.app4.desc')}</p>
                <ul className="space-y-4 text-sm" style={{color:'var(--text-secondary)'}}>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app4.feat1')).split(':')[0]}:</strong> {String(t('eco.app4.feat1')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#ffcc00] mt-0.5">✓</span> <strong>{String(t('eco.app4.feat2')).split(':')[0]}:</strong> {String(t('eco.app4.feat2')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#ff4d4d] mt-0.5">✓</span> <strong>{String(t('eco.app4.feat3')).split(':')[0]}:</strong> {String(t('eco.app4.feat3')).split(':')[1]}</li>
                </ul>
              </div>
            </div>

            {/* 5. ClickOut IDT (Restored 2 Phones) */}
            <div className="p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)', boxShadow:'var(--shadow-card)'}}>
              <div className="order-2 lg:order-1 relative h-112.5 w-full flex justify-center items-center mt-10 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 bg-[#00ff66]/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="absolute left-0 md:left-10 z-10 transform -rotate-6 scale-90 opacity-70 hover:opacity-100 hover:z-30 hover:scale-95 transition-all duration-500 shadow-2xl rounded-4xl overflow-hidden border-4 border-[#222]">
                  <Image src="/images/idt-home.jpg" alt="IDT Home Screen" width={220} height={450} className="object-cover" />
                </div>

                <div className="absolute right-0 md:right-16 z-20 transform rotate-2 hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-4xl overflow-hidden border-4 border-[#444]">
                  <Image src="/images/idt-entry.jpg" alt="IDT Entry Screen" width={230} height={470} className="object-cover" />
                </div>
              </div>

              <div className="order-1 lg:order-2 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                  <span className="text-[#00ff66] text-xs font-bold tracking-wider">{t('eco.app5.label')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'var(--text-primary)'}}>{t('eco.app5.title')}</h2>
                <p className="mb-8 text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>{t('eco.app5.desc')}</p>
                <ul className="space-y-4 text-sm" style={{color:'var(--text-secondary)'}}>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app5.feat1')).split(':')[0]}:</strong> {String(t('eco.app5.feat1')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app5.feat2')).split(':')[0]}:</strong> {String(t('eco.app5.feat2')).split(':')[1]}</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>{String(t('eco.app5.feat3')).split(':')[0]}:</strong> {String(t('eco.app5.feat3')).split(':')[1]}</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}