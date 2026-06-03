'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { 
  Store, ShieldCheck, CreditCard, Check, QrCode, Zap, 
  ChevronRight, BarChart3, AlertTriangle, Fingerprint, 
  Users, Cpu, TrendingUp, ChevronDown, Smartphone, Apple,
  Activity, Lock, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Contact Form Data
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    stores: '',
    message: ''
  });

  const handleLoginRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://clickout-cfa95.web.app/#/login';
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false); // Mobile menu close on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setToastMessage('Your request has been sent successfully.');
        setFormData({ name: '', business: '', email: '', phone: '', stores: '', message: '' });
        setTimeout(() => setToastMessage(''), 4000);
      } else {
        setToastMessage('Failed to send request. Please try again.');
        setTimeout(() => setToastMessage(''), 4000);
      }
    } catch (error) {
      setToastMessage('An error occurred. Please try again.');
      setTimeout(() => setToastMessage(''), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { q: "How does ClickOut work?", a: "Customers scan, shop, pay, and exit securely without standing in billing queues." },
    { q: "Is ClickOut secure?", a: "Yes. Every session is encrypted with real-time fraud protection and QR verification." },
    { q: "Can stores track live shoppers?", a: "Yes. ClickOut provides live customer analytics, VIP tracking, and ghost visitor monitoring." },
    { q: "Which payment methods are supported?", a: "UPI, Debit/Credit Cards, Wallets, and Cash Counter verification." },
    { q: "Does ClickOut support multiple store branches?", a: "Yes. The Command Center is built for enterprise multi-store operations." },
    { q: "How fast is the checkout process?", a: "Customers can complete shopping and exit verification within seconds." }
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#EBEBE8] overflow-x-hidden selection:bg-[#00C853]/30">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        * { font-family: 'Inter', sans-serif; }
        .font-modern { font-family: 'Outfit', sans-serif; }
        
        .warm-input {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .warm-input:focus {
          border-color: #00ff66;
          box-shadow: 0 0 15px rgba(0, 255, 102, 0.1);
          outline: none;
        }
        .warm-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
        }
      `}} />

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-[100] bg-[#111] border border-[#00ff66]/30 px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,255,102,0.15)] flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-[#00ff66]/20 flex items-center justify-center">
              <Check size={16} className="text-[#00ff66]" />
            </div>
            <p className="text-white text-sm font-medium">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FIXED NAVBAR WITH MOBILE MENU */}
      <nav className="fixed top-0 left-0 right-0 w-full px-6 md:px-8 py-4 z-50 bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-modern font-bold tracking-wide cursor-pointer" onClick={() => scrollToSection('command-center')}>
            <span className="text-white">Click</span><span className="text-[#00ff66]">Out</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-[14px] text-[#A6A5A0] font-medium items-center">
            <button onClick={() => scrollToSection('skip-billing-queue')} className="hover:text-white transition">Customer App</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition">Pricing</button>
            <a href="/blog" className="hover:text-white transition font-semibold text-[#00ff66]">Blog</a>
            <button onClick={() => scrollToSection('contact-sales')} className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-white transition border border-white/10">Contact sales</button>
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden flex flex-col gap-4 pt-6 pb-4 border-t border-white/10 mt-4 overflow-hidden"
            >
              <button onClick={() => scrollToSection('skip-billing-queue')} className="text-[#A6A5A0] hover:text-white text-left font-medium">Customer App</button>
              <button onClick={() => scrollToSection('pricing')} className="text-[#A6A5A0] hover:text-white text-left font-medium">Pricing</button>
              <a href="/blog" className="text-[#00ff66] hover:text-white text-left font-semibold">Blog</a>
              <button onClick={() => scrollToSection('contact-sales')} className="bg-white/5 hover:bg-white/10 px-4 py-3 rounded-lg text-white text-center font-medium border border-white/10 mt-2">Contact sales</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* PREMIUM SAAS COMMAND CENTER HERO SECTION */}
      <main id="command-center" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d] pt-32 pb-24">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[800px] h-[400px] bg-[#00ff66]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#10b981]/15 blur-[150px] rounded-full pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,102,0.1)]">
                <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_8px_#00ff66]" />
                <span className="text-[#00ff66] text-xs font-bold tracking-widest uppercase">Live in Mumbai</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-[80px] font-bold text-white mb-6 tracking-tight leading-[1.05] font-modern">
                Control fast,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#10b981]">scale faster.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-[#a1a1aa] mb-10 max-w-xl leading-relaxed font-light">
                Command in dashboard, execute in store.<br />
                The ultimate retail operating system.
              </p>

              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = 'https://clickout-cfa95.web.app/#/login'}
                className="group relative inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-b from-[#00ff66] to-[#10b981] rounded-2xl text-black font-bold text-lg shadow-[0_0_30px_rgba(0,255,102,0.3)] hover:shadow-[0_0_50px_rgba(0,255,102,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Enter Command Center</span>
                <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-8 text-sm text-[#a1a1aa] font-medium">
                <div className="flex items-center gap-2"><Check size={16} className="text-[#00ff66]" /> Secure Enterprise Access</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-[#00ff66]" /> Real-time Store Intelligence</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-[#00ff66]" /> AI Fraud Protection</div>
              </div>
            </motion.div>

            {/* FIXED: Mobile par properly scale karne ke liye overflow aur scale adjust kiya hai */}
            <motion.div initial={{ opacity: 0, scale: 0.95, rotateY: 10, rotateX: 5 }} animate={{ opacity: 1, scale: 1, rotateY: -5, rotateX: 2 }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative w-full h-[500px] lg:h-[650px] mt-12 lg:mt-0" style={{ perspective: '2000px' }}>
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="w-full h-full bg-[#111111]/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative z-10">
                <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 sm:px-6 bg-white/[0.02] shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#ff4d4d]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffcc00]" />
                    <div className="w-3 h-3 rounded-full bg-[#00ff66]" />
                    <span className="ml-2 sm:ml-4 text-white/50 text-xs font-semibold tracking-widest uppercase hidden sm:block">Store Command Center</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 sm:px-3 py-1 bg-[#00ff66]/10 rounded-md border border-[#00ff66]/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
                    <span className="text-[#00ff66] text-[10px] font-bold tracking-widest hidden sm:block">SYSTEM SECURE: NO ANOMALIES</span>
                    <span className="text-[#00ff66] text-[10px] font-bold tracking-widest sm:hidden">SECURE</span>
                  </div>
                </div>

                <div className="flex-1 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 overflow-y-auto overflow-x-hidden">
                  <div className="md:col-span-4 bg-white/5 rounded-2xl p-5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-[#a1a1aa] text-xs font-medium mb-4"><BarChart3 size={14} /> LIVE REVENUE</div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1 font-modern">₹84,500</div>
                      <div className="text-[#00ff66] text-sm font-semibold flex items-center gap-1"><TrendingUp size={14}/> +12% vs last hour</div>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-white/5 rounded-2xl p-5 border border-white/5 flex flex-col justify-between hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-[#a1a1aa] text-xs font-medium mb-4"><ShieldCheck size={14} /> DIRECT UPI AUTH</div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1 font-modern">142</div>
                      <div className="text-[#a1a1aa] text-sm">txns verified instantly</div>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#ff4d4d]/5 rounded-2xl p-5 border border-[#ff4d4d]/20 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#ff4d4d]/10 blur-xl rounded-full" />
                    <div className="flex items-center gap-2 text-[#ff4d4d] text-xs font-medium mb-4"><AlertTriangle size={14} /> FRAUD CONTROL</div>
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-center justify-between text-xs text-white/80 bg-black/40 px-3 py-2 rounded-lg"><span>QR Bailout</span><span className="text-[#00ff66]">Active</span></div>
                      <div className="flex items-center justify-between text-xs text-white/80 bg-black/40 px-3 py-2 rounded-lg"><span>Risk Engine</span><span className="text-[#00ff66]">Active</span></div>
                    </div>
                  </div>

                  <div className="md:col-span-7 bg-white/5 rounded-2xl p-5 border border-white/5 flex flex-col justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 text-[#a1a1aa] text-xs font-medium mb-3"><Users size={14} /> COMMAND ROSTER</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/5 border border-white/5 rounded-lg p-2 text-center text-xs text-white hover:bg-white/10 transition-colors cursor-pointer">Cashier</div>
                          <div className="bg-white/5 border border-white/5 rounded-lg p-2 text-center text-xs text-white hover:bg-white/10 transition-colors cursor-pointer">Guard</div>
                          <div className="bg-white/5 border border-white/5 rounded-lg p-2 text-center text-xs text-white hover:bg-white/10 transition-colors cursor-pointer">Auditor</div>
                          <div className="bg-white/5 border border-white/5 rounded-lg p-2 text-center text-xs text-white hover:bg-white/10 transition-colors cursor-pointer">IDT</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-[#a1a1aa] text-xs font-medium mb-3"><Fingerprint size={14} /> TRACK CUSTOMERS</div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center"><span className="text-xs text-white/60">Live Shoppers</span><span className="text-xs text-white font-bold bg-white/10 px-2 py-0.5 rounded">48</span></div>
                          <div className="flex justify-between items-center"><span className="text-xs text-[#ffcc00]/80">VIP Customers</span><span className="text-xs text-[#ffcc00] font-bold bg-[#ffcc00]/10 px-2 py-0.5 rounded">12</span></div>
                          <div className="flex justify-between items-center"><span className="text-xs text-[#ff4d4d]/80">Ghost Visitors</span><span className="text-xs text-[#ff4d4d] font-bold bg-[#ff4d4d]/10 px-2 py-0.5 rounded">2</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-white/5 rounded-2xl p-5 border border-white/5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-[#a1a1aa] text-xs font-medium mb-4"><Cpu size={14} /> PROCUREMENT ENGINE</div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-[10px] text-white/50 uppercase mb-2"><span>Inventory Sync</span><span>78% Optimal</span></div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[78%] h-full bg-gradient-to-r from-[#00ff66] to-[#10b981]" /></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1.5 bg-white/5 rounded-md border border-white/10 text-[10px] text-white flex items-center gap-1"><Check size={10} className="text-[#00ff66]"/> Barcode Sync</span>
                        <span className="px-2 py-1.5 bg-[#ff4d4d]/10 rounded-md border border-[#ff4d4d]/20 text-[10px] text-[#ff4d4d] flex items-center gap-1"><AlertTriangle size={10}/> Low Stock (5)</span>
                        <span className="px-2 py-1.5 bg-[#00ff66]/10 rounded-md border border-[#00ff66]/20 text-[10px] text-[#00ff66]">Vendor AI Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -z-10 top-1/4 right-0 w-32 h-32 bg-[#00ff66]/30 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute -z-10 bottom-1/4 left-10 w-40 h-40 bg-[#10b981]/30 rounded-full blur-[80px]" />
            </motion.div>

          </div>
        </div>
      </main>

      {/* PREMIUM SAAS HOW IT WORKS SECTION */}
      <section id="skip-billing-queue" className="w-full py-20 md:py-32 relative overflow-hidden bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-6 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_8px_#00ff66]" />
                <span className="text-[#00ff66] text-xs font-bold tracking-wider">LIVE & SECURE</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] font-modern">
                Skip the billing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] to-[#10b981]">queue.</span>
              </h2>
              <p className="text-lg md:text-xl text-[#A0A09C] mb-8 max-w-lg leading-relaxed">
                Scan, shop, pay and walk out securely in seconds using ClickOut.
              </p>

              {/* DOWNLOAD BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-black px-6 py-3.5 rounded-xl transition-all font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.523 15.3414C17.5024 12.193 20.0827 10.6384 20.1982 10.5658C18.6657 8.32456 16.3359 8.00693 15.5255 7.91508C13.5683 7.71261 11.6669 9.07663 10.6627 9.07663C9.64214 9.07663 8.08386 7.93557 6.46736 7.96205C4.3411 7.99042 2.37077 9.18844 1.28581 11.0829C-0.923838 14.9272 0.720336 20.597 2.87186 23.7042C3.92395 25.2177 5.14371 26.9205 6.74567 26.8617C8.28629 26.7997 8.87532 25.867 10.7423 25.867C12.5936 25.867 13.1251 26.8617 14.7303 26.8324C16.3861 26.7997 17.4208 25.2974 18.4552 23.7828C19.6586 22.0223 20.1557 20.3129 20.1834 20.2227C20.1479 20.2076 17.545 19.2081 17.523 15.3414ZM14.4984 5.34292C15.3459 4.31682 15.918 2.89885 15.7621 1.48706C14.5422 1.53631 13.0232 2.29917 12.1466 3.31349C11.3619 4.20521 10.6728 5.65487 10.8521 7.04273C12.2155 7.14815 13.626 6.38466 14.4984 5.34292Z" transform="scale(0.85)"/></svg>
                  Download for iOS
                </a>
                <a href="#" className="flex items-center justify-center gap-3 bg-[#111] hover:bg-[#222] border border-white/10 text-white px-6 py-3.5 rounded-xl transition-all font-semibold shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#00ff66]/50">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#00ff66]"><path d="M17.52 11.23l-13-7.5C3.89 3.37 3 3.75 3 4.48v15.04c0 .74.89 1.12 1.52.75l13-7.5c.64-.37.64-1.17 0-1.54zm-2.88 1.15L5.4 17.7V6.3l9.24 5.33l-1.4 1.4-7.84-4.54v7.02l7.84-4.53 1.4 1.4z"/></svg>
                  Download for Android
                </a>
              </div>

              {/* Glassmorphism Card for Steps */}
              <div className="relative p-6 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group hover:bg-white/[0.03] transition-colors duration-500">
                <div className="absolute left-[2.75rem] md:left-[3.25rem] top-10 bottom-32 w-0.5 bg-gradient-to-b from-[#00ff66]/50 via-white/10 to-transparent z-0 hidden sm:block" />
                <div className="space-y-6 relative z-10">
                  {[
                    { num: 1, title: "Scan Store QR", desc: "Scan the secure store QR code and enter instantly." },
                    { num: 2, title: "Scan Product Barcode", desc: "Use your phone camera to scan products while shopping." },
                    { num: 3, title: "Add to Cart", desc: "Products are added to your digital cart in real-time." },
                    { num: 4, title: "Checkout & Pay", desc: "Pay securely using UPI, Card or Cash." },
                    { num: 5, title: "Get Exit QR", desc: "Receive a secure verification QR after payment." },
                    { num: 6, title: "Verify & Exit", desc: "Show QR to security and exit in seconds." }
                  ].map((step, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.5 }} className="flex gap-4 md:gap-6 group/step cursor-default">
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-white font-bold text-xs md:text-sm group-hover/step:border-[#00ff66] group-hover/step:text-[#00ff66] transition-all duration-300 relative z-10">{step.num}</div>
                      <div className="flex-1 pb-6 md:pb-2">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-white font-semibold text-base md:text-lg group-hover/step:text-[#00ff66] transition-colors">{step.title}</h3>
                          <Check size={16} className="text-[#00ff66] opacity-0 group-hover/step:opacity-100 transition-opacity duration-300" />
                        </div>
                        <p className="text-[#8A8A86] text-xs md:text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-y-4 gap-x-2">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#A0A09C]"><Lock size={14} className="text-[#00ff66]" /> Encrypted Session</div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#A0A09C]"><ShieldCheck size={14} className="text-[#00ff66]" /> Fraud Protected</div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#A0A09C]"><Activity size={14} className="text-[#00ff66]" /> Real-time Verify</div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-[#A0A09C]"><Zap size={14} className="text-[#00ff66]" /> Instant Checkout</div>
                </div>
              </div>
            </motion.div>

            {/* FIXED: 'hidden lg:flex' hata diya, aur mobile par 'scale-[0.70]' laga diya taaki overflow na kare */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[450px] md:h-[600px] lg:h-[700px] w-full flex items-center justify-center scale-[0.75] md:scale-90 lg:scale-100 origin-top mt-4 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00ff66]/10 blur-[100px] rounded-full" />

              <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute right-0 md:right-8 top-16 w-[280px] h-[580px] rounded-[2.5rem] bg-[#111] border-[8px] border-[#222] shadow-[20px_20px_60px_rgba(0,0,0,0.8)] opacity-60 scale-90 rotate-[-8deg] overflow-hidden">
                <div className="w-full h-full bg-[#1a1a1a] p-6 relative">
                  <div className="w-full h-8 flex justify-between items-center opacity-40">
                    <div className="w-12 h-3 bg-white/20 rounded" />
                    <div className="flex gap-1"><div className="w-3 h-3 bg-white/20 rounded-sm"/><div className="w-3 h-3 bg-white/20 rounded-sm"/></div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="w-full h-40 rounded-2xl bg-white/5 animate-pulse" />
                    <div className="w-2/3 h-6 rounded bg-white/5 animate-pulse" />
                    <div className="w-full h-20 rounded-2xl bg-white/5 animate-pulse" />
                    <div className="w-full h-20 rounded-2xl bg-white/5 animate-pulse" />
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="absolute left-0 md:left-8 top-24 w-[300px] h-[620px] rounded-[3rem] bg-black border-[10px] border-[#2a2a2a] shadow-[-20px_30px_60px_rgba(0,0,0,0.9)] z-10 rotate-[3deg] overflow-hidden">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20 flex items-center justify-between px-2">
                   <div className="w-2 h-2 rounded-full bg-[#00ff66] opacity-50 animate-pulse" />
                   <div className="w-3 h-3 rounded-full bg-[#111] border border-white/10" />
                </div>
                
                <div className="w-full h-full bg-[#0d0d0d] relative flex flex-col">
                  <div className="absolute top-0 w-full h-28 bg-gradient-to-b from-[#1E1D1A] to-transparent z-10" />
                  <div className="pt-20 px-6 flex-1 flex flex-col relative z-0">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Store size={20} className="text-[#00ff66]" /></div>
                      <div className="text-white font-bold tracking-widest text-sm font-modern">CLICKOUT</div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><QrCode size={18} className="text-white" /></div>
                    </div>
                    
                    <div className="w-full aspect-square rounded-[2rem] border-2 border-dashed border-[#00ff66]/40 relative flex items-center justify-center mb-8 overflow-hidden bg-[#00ff66]/[0.02]">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#00ff66]/0 via-[#00ff66]/10 to-[#00ff66]/0 animate-[scan_3s_ease-in-out_infinite]" />
                      <div className="w-3/4 h-0.5 bg-[#00ff66] absolute top-1/2 -translate-y-1/2 shadow-[0_0_15px_#00ff66]" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="w-full p-4 rounded-2xl bg-white/5 flex items-center justify-between border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
                          <div><div className="w-20 h-3 bg-white/20 rounded mb-2" /><div className="w-12 h-2 bg-white/10 rounded" /></div>
                        </div>
                        <div className="text-[#00ff66] font-bold">₹249</div>
                      </div>
                      <div className="w-full p-4 rounded-2xl bg-white/5 flex items-center justify-between border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
                          <div><div className="w-24 h-3 bg-white/20 rounded mb-2" /><div className="w-10 h-2 bg-white/10 rounded" /></div>
                        </div>
                        <div className="text-[#00ff66] font-bold">₹89</div>
                      </div>
                    </div>

                    <div className="w-full h-14 bg-[#00ff66] rounded-2xl mb-8 flex items-center justify-center font-bold text-black shadow-[0_0_20px_rgba(0,255,102,0.3)] cursor-pointer">
                      Pay ₹338
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute top-32 -right-4 md:right-0 z-20 px-4 py-3 rounded-2xl bg-[#1E1D1A]/80 backdrop-blur-xl border border-white/10 flex items-center gap-3 shadow-2xl">
                <div className="w-8 h-8 rounded-full bg-[#00ff66]/20 flex items-center justify-center"><Check size={16} className="text-[#00ff66]" /></div>
                <div><div className="text-white text-xs font-bold">Verified</div><div className="text-[#A0A09C] text-[10px]">Inside Store</div></div>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 2 }} className="absolute bottom-40 -left-8 md:-left-6 z-20 px-4 py-3 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#00ff66]/30 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,255,102,0.15)]">
                <div className="w-8 h-8 rounded-full bg-[#00ff66] flex items-center justify-center"><CreditCard size={16} className="text-black" /></div>
                <div><div className="text-white text-xs font-bold">Payment Successful</div><div className="text-[#00ff66] text-[10px] font-medium">Gate Pass Generated</div></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `@keyframes scan { 0% { transform: translateY(-100%); } 50% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }`}} />
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="font-modern text-4xl md:text-5xl mb-6 text-white font-semibold">Explore Plans</h2>
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-lg">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isYearly ? 'bg-white/10 text-white shadow-lg' : 'text-[#85847E] hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isYearly ? 'bg-white/10 text-white shadow-lg' : 'text-[#85847E] hover:text-white'}`}
            >
              Yearly <span className="text-[#00ff66] text-[10px] bg-[#00ff66]/10 px-2 py-0.5 rounded-full border border-[#00ff66]/20">20% OFF</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* MINI */}
          <div className="warm-card h-full p-8 rounded-3xl flex flex-col hover:border-white/20 transition-all hover:translate-y-[-4px]">
            <h3 className="font-modern text-xl mb-1 text-white font-semibold">Mini</h3>
            <p className="text-[#85847E] text-sm mb-6">For independent retail stores & services</p>
            <div className="text-4xl font-modern text-white mb-2 font-bold">₹{isYearly ? Math.floor(99 * 0.8) : 99}</div>
            <p className="text-[#85847E] text-xs mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && 'billed yearly'}</p>
            <div className="space-y-3 mb-8 flex-1">
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> 1 Terminal License</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> 100 Transactions / month</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Real-Time UPI & QR Settlement</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Product & Service Ledger Access</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Smart Inventory Visibility</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Basic Revenue Dashboard</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> IDT Deposit Validation</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Cashier & Guard Verification</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Isolated Tenant Accounting</div>
              
              <div className="pt-4 border-t border-white/5 mt-4">
                <span className="text-[10px] text-[#00ff66] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                <span className="text-xs text-[#A0A09C] leading-relaxed">Dashboard Core, Product Control, Service Control, IDT Deposits</span>
              </div>
            </div>
            <button onClick={() => scrollToSection('command-center')} className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl text-sm font-semibold transition-all mt-auto">Start Mini</button>
          </div>

          {/* BASIC */}
          <div className="warm-card h-full p-8 rounded-3xl flex flex-col border-[#00ff66]/30 shadow-[0_0_30px_rgba(0,255,102,0.05)] relative hover:translate-y-[-4px] transition-transform">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00ff66] to-[#10b981] text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(0,255,102,0.5)]">Most Popular</div>
            <h3 className="font-modern text-xl mb-1 text-white font-semibold">Basic</h3>
            <p className="text-[#85847E] text-sm mb-6">For scaling shops & growing supermarkets</p>
            <div className="text-4xl font-modern text-white mb-2 font-bold">₹{isYearly ? Math.floor(299 * 0.8) : 299}</div>
            <p className="text-[#85847E] text-xs mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && 'billed yearly'}</p>
            <div className="space-y-3 mb-8 flex-1">
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> 3 Terminal Licenses</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> 1,000 Smart Transactions / mo.</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Customer Intelligence Reports</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Refund Monitoring Engine</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Growth Radar Analytics</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Staff Command Management</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Promotion & Offer Engine</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Financial Leakage Detection</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Procurement Lite Access</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Advanced Revenue Insights</div>
              
              <div className="pt-4 border-t border-white/5 mt-auto">
                <span className="text-[10px] text-[#00ff66] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                <span className="text-xs text-[#A0A09C] leading-relaxed">Everything in MINI, Super Manager, Growth Radar, Refund Engine, Fraud Detection Basic, Procurement Lite</span>
              </div>
            </div>
            <button onClick={() => scrollToSection('command-center')} className="w-full bg-gradient-to-b from-[#00ff66] to-[#10b981] hover:brightness-110 text-black py-3 rounded-xl text-sm font-semibold transition-all mt-auto">Start Basic</button>
          </div>

          {/* GROWTH */}
          <div className="warm-card h-full p-8 rounded-3xl flex flex-col hover:border-[#00ff66]/30 transition-all hover:translate-y-[-4px] group">
            <h3 className="font-modern text-xl mb-1 text-white font-semibold group-hover:text-[#00ff66] transition-colors">Growth</h3>
            <p className="text-[#85847E] text-sm mb-6">For enterprise retail operations</p>
            <div className="text-4xl font-modern text-white mb-2 font-bold">₹{isYearly ? Math.floor(699 * 0.8) : 699}</div>
            <p className="text-[#85847E] text-xs mb-8 uppercase tracking-wide font-semibold">Per month {isYearly && 'billed yearly'}</p>
            <div className="space-y-3 mb-8 flex-1">
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> 10 Terminal Licenses</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Unlimited Transaction Processing</div>
              <div className="flex items-start gap-3 text-[13px] text-white font-medium"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> AI Fraud Intelligence</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Vendor Intelligence Directory</div>
              <div className="flex items-start gap-3 text-[13px] text-white font-medium"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Multi-Store Analytics</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Super Auditor Suite</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Smart Guard Monitoring</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> QR Bailout Protection</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> AI Promotion Optimization</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Enterprise Procurement System</div>
              <div className="flex items-start gap-3 text-[13px] text-white font-medium"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Operational Intelligence Layer</div>

              <div className="pt-4 border-t border-white/5 mt-auto">
                <span className="text-[10px] text-[#00ff66] font-bold tracking-wider uppercase mb-1 block">Modules Included</span>
                <span className="text-xs text-[#A0A09C] leading-relaxed">Everything in BASIC, Procurement Full, Super Auditor, Super Guard, Risk Engine AI, Fraud Control Advanced, QR Bailout</span>
              </div>
            </div>
            <button onClick={() => scrollToSection('command-center')} className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-xl text-sm font-semibold transition-all mt-auto">Start Growth</button>
          </div>

          {/* ENTERPRISE */}
          <div className="warm-card h-full p-8 rounded-3xl flex flex-col bg-gradient-to-b from-white/[0.05] to-transparent border-white/10 hover:-translate-y-1 transition-transform">
            <h3 className="font-modern text-xl mb-1 text-white font-semibold">Enterprise</h3>
            <p className="text-[#85847E] text-sm mb-6">For large chains & custom deployments</p>
            <div className="text-4xl font-modern text-white mb-2 font-bold">Custom</div>
            <p className="text-[#85847E] text-xs mb-8 uppercase tracking-wide font-semibold">Contact us for tailored pricing</p>
            <div className="space-y-3 mb-8 flex-1">
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Unlimited Terminals</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Dedicated Infrastructure</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Custom API Integrations</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> White Label Deployment</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Centralized Command Center</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Enterprise Risk Automation</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Dedicated Account Manager</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Real-Time AI Intelligence Suite</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Advanced Compliance & Audit Controls</div>
              <div className="flex items-start gap-3 text-[13px] text-[#D4D4D2]"><Check size={16} className="text-[#00ff66] mt-0.5 shrink-0" /> Custom Transaction Pricing</div>

              <div className="pt-4 border-t border-white/5 mt-auto">
                <span className="text-[10px] text-[#00ff66] font-bold tracking-wider uppercase mb-1 block">Includes</span>
                <span className="text-xs text-[#A0A09C] leading-relaxed">Full ClickOut Ecosystem, Custom Modules, Enterprise SLA Support</span>
              </div>
            </div>
            <button onClick={() => scrollToSection('contact-sales')} className="w-full bg-white hover:bg-gray-200 text-black py-3 rounded-xl text-sm font-semibold transition-all mt-auto">Schedule Demo</button>
          </div>
        </div>

        {/* TRUST BADGES STRIP */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 border-t border-white/5 pt-12">
          <div className="flex items-center gap-2 text-sm text-[#A0A09C] font-medium"><Check size={16} className="text-[#00ff66]" /> GST Ready</div>
          <div className="flex items-center gap-2 text-sm text-[#A0A09C] font-medium"><Check size={16} className="text-[#00ff66]" /> Multi-Store Secure</div>
          <div className="flex items-center gap-2 text-sm text-[#A0A09C] font-medium"><Check size={16} className="text-[#00ff66]" /> AI Fraud Detection</div>
          <div className="flex items-center gap-2 text-sm text-[#A0A09C] font-medium"><Check size={16} className="text-[#00ff66]" /> Real-Time Analytics</div>
          <div className="flex items-center gap-2 text-sm text-[#A0A09C] font-medium"><Check size={16} className="text-[#00ff66]" /> Cloud Synced</div>
        </div>
      </section>

      {/* CONTACT SALES SECTION */}
      <section id="contact-sales" className="w-full py-24 md:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff66]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[800px] mx-auto px-6 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-modern">Talk to ClickOut Sales</h2>
          <p className="text-lg md:text-xl text-[#A0A09C] mb-12">Build the future of smart retail with ClickOut Command Center.</p>

          <form onSubmit={handleContactSubmit} className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-12 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#A0A09C] mb-2">Full Name</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl text-white bg-black/20" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A0A09C] mb-2">Business Name</label>
                <input required type="text" value={formData.business} onChange={(e) => setFormData({...formData, business: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl text-white bg-black/20" placeholder="Acme Retail" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#A0A09C] mb-2">Email Address</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl text-white bg-black/20" placeholder="john@acme.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A0A09C] mb-2">Phone Number</label>
                <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl text-white bg-black/20" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#A0A09C] mb-2">Number of Stores</label>
              <select required value={formData.stores} onChange={(e) => setFormData({...formData, stores: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl text-white bg-black/20 appearance-none">
                <option value="" disabled>Select scale</option>
                <option value="1-5">1 - 5 Stores</option>
                <option value="6-20">6 - 20 Stores</option>
                <option value="21-50">21 - 50 Stores</option>
                <option value="50+">50+ Stores</option>
              </select>
            </div>

            <div className="mb-10">
              <label className="block text-sm font-medium text-[#A0A09C] mb-2">Message</label>
              <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="warm-input w-full px-4 py-3 rounded-xl text-white bg-black/20 resize-none" placeholder="How can we help your business grow?" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#00ff66] to-[#10b981] hover:brightness-110 text-black font-bold py-4 rounded-xl text-lg transition-all shadow-[0_0_20px_rgba(0,255,102,0.2)] disabled:opacity-70">
              {isSubmitting ? 'Sending Request...' : 'Contact Sales'}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="max-w-[900px] mx-auto px-6 md:px-8 py-24 border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 font-modern">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-colors">
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left gap-4">
                <span className="text-white font-medium text-base md:text-lg">{faq.q}</span>
                <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }} transition={{ duration: 0.3 }} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <ChevronDown size={16} className={openFaq === idx ? "text-[#00ff66]" : "text-white/50"} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-6 pb-6 text-[#A0A09C] text-sm md:text-base leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <footer className="w-full border-t border-gray-800 bg-black mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ClickOut. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 justify-center">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}