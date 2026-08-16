'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSales from '@/components/sections/ContactSales';
import { Check, ChevronDown, ArrowRight, Zap, Shield, Clock, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Hero from '@/components/sections/Hero';
import CustomerApp from '@/components/sections/CustomerApp';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    { q: "Mera paisa online safe hai ya nahi?", a: "Bilkul safe. ClickOut bank-level 256-bit SSL encryption use karta hai. Har UPI transaction NPCI ke through direct aapke bank account mein settle hoti hai. Paisa kabhi hamare account mein nahi rukta. Aur hamari AI fraud detection har transaction ko real-time mein check karti hai — kuch galat hua toh turant alert." },
    { q: "Internet chala gaya toh billing kaise hogi?", a: "Growth plan mein 'QR Bailout Protection' feature hai. Agar 2-3 minute ke liye internet chala jaye, toh system offline mode mein automatically chalta rahega. Jaise hi internet wapas aata hai, saari transactions sync ho jati hain." },
    { q: "GST bill auto-generate hota hai?", a: "Haan, bilkul. Jab customer payment complete karta hai, uske phone pe instant digital receipt jata hai jisme aapka GST number, HSN code, item-wise tax breakdown hota hai. Month end pe ek click se GSTR-1/3B ke liye Excel export bhi nikal sakte hain." },
    { q: "Setup mein kitna time aur paisa lagega?", a: "Setup 5 minute mein hota hai. App download karo, apni dukaan ka naam aur address daalo, aur products add karna shuru karo. Agar products zyada hain (500+), toh humari team free Excel import karwa degi. Koi technician bulane ki zaroorat nahi." },
    { q: "14 din free trial ke baad pasand na aaye toh?", a: "Full refund, no questions asked. 14 din ke andar email karo hello@clickout.in pe ya WhatsApp karo. Paise wapas 3-5 working days mein aapke account mein aa jayenge." },
    { q: "Khatabook/OkCredit se alag kya hai?", a: "Khatabook aur OkCredit 'ledger apps' hain — matlab sirf paisa aaya-gaya likhne ka kaam. ClickOut poori dukaan chalane ka operating system hai: customer khud scan kare, UPI payment auto-settle ho, inventory auto-update ho, staff attendance track ho, aur fraud auto-detect ho." }
  ];

  const scrollToContact = () => {
    document.getElementById('contact-sales')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[var(--accent-bg)]">
      <Navbar />

      <main>
        <Hero />
        <CustomerApp />

        {/* =========================================
            PROBLEM SECTION
            ========================================= */}
        <section className="max-w-[1000px] mx-auto px-6 md:px-8 py-24 border-t border-[var(--border-color)]">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent)] text-[var(--accent)] text-xs font-bold tracking-wider uppercase mb-6">
              {t('home.problemLabel') as string}
            </span>
            <h2 className="font-modern text-3xl md:text-5xl mb-4 font-semibold">
              {t('home.problemTitle') as string}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              {t('home.problemDesc') as string}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">15 Min</div>
              <p className="text-sm text-[var(--text-secondary)]">{t('home.problemCard1') as string}</p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-7 h-7 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">3 Apps</div>
              <p className="text-sm text-[var(--text-secondary)]">{t('home.problemCard2') as string}</p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">₹2.5L</div>
              <p className="text-sm text-[var(--text-secondary)]">{t('home.problemCard3') as string}</p>
            </div>
          </div>
        </section>

        {/* =========================================
            SOLUTION SECTION
            ========================================= */}
        <section className="max-w-[1000px] mx-auto px-6 md:px-8 py-24 border-t border-[var(--border-color)]">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent)] text-[var(--accent)] text-xs font-bold tracking-wider uppercase mb-6">
              {t('home.solutionLabel') as string}
            </span>
            <h2 className="font-modern text-3xl md:text-5xl mb-4 font-semibold">
              {t('home.solutionTitle') as string}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              {t('home.solutionDesc') as string}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: t('home.step1Title') as string, desc: t('home.step1Desc') as string },
              { num: '2', title: t('home.step2Title') as string, desc: t('home.step2Desc') as string },
              { num: '3', title: t('home.step3Title') as string, desc: t('home.step3Desc') as string },
            ].map((item) => (
              <div key={item.num} className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--bg-base)] flex items-center justify-center text-xl font-bold">{item.num}</div>
                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 pt-10">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={scrollToContact} className="px-8 py-4 text-lg">
              {t('home.ctaTrial') as string} <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* =========================================
            TESTIMONIALS SECTION
            ========================================= */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 border-t border-[var(--border-color)]">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent)] text-[var(--accent)] text-xs font-bold tracking-wider uppercase mb-6">
              {t('home.testimonialLabel') as string}
            </span>
            <h2 className="font-modern text-3xl md:text-4xl mb-3 font-semibold">{t('home.testimonialTitle') as string}</h2>
            <p className="text-[var(--text-secondary)]">{t('home.testimonialDesc') as string}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Ramesh Gupta', store: 'Gupta General Store, Delhi', quote: t('home.quote1') as string, result: '50+ extra customers daily', plan: 'Basic' },
              { name: 'Suresh Yadav', store: 'Yadav Kirana, Varanasi', quote: t('home.quote2') as string, result: '₹1.4L yearly savings', plan: 'Basic' },
              { name: 'Priya Sharma', store: 'Sharma Supermart, Jaipur', quote: t('home.quote3') as string, result: '2000+ tx | Zero fraud', plan: 'Growth' },
              { name: 'Mohammad Asif', store: 'Asif Retail Chain, Hyderabad', quote: t('home.quote4') as string, result: '1 → 3 stores in 8 months', plan: 'Growth' },
            ].map((tItem, i) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-bg)] flex items-center justify-center text-[var(--accent)] font-bold">{tItem.name[0]}</div>
                  <div>
                    <div className="font-bold text-sm">{tItem.name}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{tItem.store}</div>
                  </div>
                </div>
                <blockquote className="text-sm italic mb-4 text-[var(--text-secondary)]">"{tItem.quote}"</blockquote>
                <div className="pt-4 border-t border-[var(--border-color)]">
                  <div className="text-xs text-[var(--text-secondary)]">Result:</div>
                  <div className="font-bold text-[var(--accent)] text-sm">{tItem.result}</div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Plan: ClickOut {tItem.plan}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            TRUST BADGES
            ========================================= */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-8 py-16 border-t border-[var(--border-color)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: '🔒', title: 'Bank-Level Security', desc: '256-bit SSL. RBI Compliant.' },
              { icon: '✅', title: 'GST Ready', desc: 'Auto-Invoice. GSTR Ready.' },
              { icon: '🏦', title: 'UPI Certified', desc: 'NPCI Partner. Real-time.' },
              { icon: '🤖', title: 'AI Fraud Detection', desc: '99.4% Accuracy. Real-time.' },
              { icon: '☁️', title: 'Cloud Synced', desc: '99.9% Uptime. Auto Backup.' },
            ].map((badge, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <span className="text-2xl flex-shrink-0">{badge.icon}</span>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">{badge.title}</h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            COMPARISON TABLE
            ========================================= */}
        <section className="max-w-[1000px] mx-auto px-6 md:px-8 py-24 border-t border-[var(--border-color)]">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent)] text-[var(--accent)] text-xs font-bold tracking-wider uppercase mb-6">
              {t('home.compareLabel') as string}
            </span>
            <h2 className="font-modern text-3xl md:text-4xl mb-3 font-semibold">{t('home.compareTitle') as string}</h2>
            <p className="text-[var(--text-secondary)]">{t('home.compareDesc') as string}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--border-color)]">
                  <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-[var(--accent)] bg-[var(--accent-bg)] rounded-t-lg">ClickOut</th>
                  <th className="text-center py-4 px-4 font-semibold text-[var(--text-secondary)]">Khatabook</th>
                  <th className="text-center py-4 px-4 font-semibold text-[var(--text-secondary)]">OkCredit</th>
                  <th className="text-center py-4 px-4 font-semibold text-[var(--text-secondary)]">POSist</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                {[
                  ['Customer Self-Checkout', '✅ 17 sec', '❌', '❌', '⚠️ Kiosk only'],
                  ['UPI Real-time Settlement', '✅ Same day', '⚠️ 1-2 days', '⚠️ 1-2 days', '✅ Same day'],
                  ['AI Fraud Detection', '✅ Built-in', '❌', '❌', '💰 Addon'],
                  ['GST Auto-Invoice', '✅ 1-click', '⚠️ Manual', '⚠️ Manual', '✅ 1-click'],
                  ['Multi-Store Analytics', '✅ ₹699', '❌', '❌', '💰 ₹5000+'],
                  ['Staff Management', '✅', '❌', '❌', '✅'],
                  ['Starting Price', '₹299', 'Free*', 'Free*', '₹3000+'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border-color)]">
                    <td className="py-4 px-4 font-medium text-[var(--text-primary)]">{row[0]}</td>
                    <td className="py-4 px-4 text-center bg-[var(--accent-bg)]/30 font-semibold">{row[1]}</td>
                    <td className="py-4 px-4 text-center">{row[2]}</td>
                    <td className="py-4 px-4 text-center">{row[3]}</td>
                    <td className="py-4 px-4 text-center">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-4 text-center">* Free plans have hidden limits or take commission</p>
        </section>

        {/* =========================================
            FAQ SECTION
            ========================================= */}
        <section id="faq" className="max-w-[900px] mx-auto px-6 md:px-8 py-24 border-t border-[var(--border-color)]">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-bg)] border border-[var(--accent)] text-[var(--accent)] text-xs font-bold tracking-wider uppercase mb-6">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-modern">{t('home.faqTitle') as string}</h2>
            <p className="text-[var(--text-secondary)]">{t('home.faqDesc') as string}</p>
          </div>
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

        {/* =========================================
            FINAL CTA SECTION
            ========================================= */}
        <section className="max-w-[800px] mx-auto px-6 md:px-8 py-24 text-center border-t border-[var(--border-color)]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-modern">{t('home.finalCtaTitle') as string}</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
            {t('home.finalCtaDesc') as string}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={scrollToContact} className="px-8 py-4 text-lg">
              🚀 {t('home.finalCtaBtn1') as string}
            </Button>
            <Button variant="outline" onClick={scrollToContact} className="px-8 py-4 text-lg">
              📞 {t('home.finalCtaBtn2') as string}
            </Button>
          </div>
          <p className="text-sm text-[var(--text-muted)] mt-6">{t('home.finalCtaSub') as string}</p>
        </section>

      </main>

      <ContactSales />
      <Footer />
    </div>
  );
}