'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Zap, Database, Users, BarChart3, Lock, 
  ChevronDown, CheckCircle2, AlertTriangle, ArrowRight,
  Server, Cloud, Smartphone, Globe, FileText
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function AdminPanelPage() {
  const { t, lang } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>('what');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const Section = ({ id, icon, title, children }: { id: string; icon: React.ReactNode; title: string; children: React.ReactNode }) => (
    <div className="bg-(--bg-card) border border-(--border-color) rounded-2xl overflow-hidden mb-6">
      <button 
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between p-6 text-left gap-4 hover:bg-background/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-(--accent-bg) flex items-center justify-center text-(--accent)">
            {icon}
          </div>
          <span className="font-bold text-lg md:text-xl">{title}</span>
        </div>
        <motion.div animate={{ rotate: openSection === id ? 180 : 0 }}>
          <ChevronDown size={20} className="text-(--text-secondary)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {openSection === id && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 border-t border-(--border-color) pt-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-8 max-w-275 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
               style={{background:'var(--accent-bg)', borderColor:'var(--accent)', color:'var(--accent)'}}>
            <Shield size={14} />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              {lang === 'hi' ? 'Store Owner Ke Liye Guide' : 'Guide for Store Owners'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-modern">
            {lang === 'hi' ? 'ClickOut Admin Panel' : 'ClickOut Admin Panel'}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{color:'var(--text-secondary)'}}>
            {lang === 'hi' 
              ? 'Aapki dukaan ka "dimaag". Har cheez yahan se control hoti hai — staff, stock, paisa, aur fraud. Simple bhasha mein samjhein.'
              : 'The "brain" of your store. Everything is controlled from here — staff, stock, money, and fraud. Explained in simple language.'}
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16 p-8 rounded-3xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
          <h2 className="text-2xl font-bold mb-6 text-center">
            {lang === 'hi' ? 'ClickOut Kaise Kaam Karta Hai?' : 'How ClickOut Works?'}
          </h2>
          <pre className="text-xs md:text-sm overflow-x-auto p-6 rounded-xl bg-background border" style={{borderColor:'var(--border-color)', color:'var(--text-secondary)', lineHeight:'1.6'}}>
{`
┌─────────────────────────────────────────────────────────────────────────┐
│                    CLICKOUT RETAIL ECOSYSTEM                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   CUSTOMER                    CASHIER              GUARD                 │
│      │                          │                  │                     │
│      ▼                          ▼                  ▼                     │
│  ┌─────────┐              ┌─────────┐       ┌─────────┐               │
│  │  Scan   │──Product───▶│  Bill   │◄─────│  Verify │               │
│  │  Barcode│   Data      │  Print  │  QR   │  Exit   │               │
│  └────┬────┘              └────┬────┘       └────┬────┘               │
│       │                        │                 │                      │
│       └────────────┬───────────┘                 │                      │
│                    │                             │                      │
│                    ▼                             │                      │
│         ┌─────────────────┐                      │                      │
│         │  CLICKOUT ADMIN  │◄───────────────────┘                      │
│         │  (Command Center)│                                             │
│         │                  │                                             │
│         │  • Live Sales    │                                             │
│         │  • Inventory     │                                             │
│         │  • Staff Roles   │                                             │
│         │  • Fraud Alerts  │                                             │
│         │  • AI Reports    │                                             │
│         └────────┬─────────┘                                             │
│                  │                                                      │
│                  ▼                                                      │
│         ┌─────────────────┐                                             │
│         │  FIREBASE CLOUD  │                                             │
│         │  • Database      │                                             │
│         │  • Auth          │                                             │
│         │  • Functions     │                                             │
│         │  • Messaging     │                                             │
│         └─────────────────┘                                             │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
          </pre>
          <p className="text-sm mt-4 text-center" style={{color:'var(--text-secondary)'}}>
            {lang === 'hi'
              ? 'Customer scan karta hai → Cashier bill banata hai → Guard verify karta hai → Sab Admin mein dikhta hai'
              : 'Customer scans → Cashier bills → Guard verifies → Everything shows in Admin'}
          </p>
        </div>

        {/* Sections */}
        <Section id="what" icon={<Zap size={20} />} title={lang === 'hi' ? '1. ClickOut Admin Kya Hai?' : '1. What is ClickOut Admin?'}>
          <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{color:'var(--text-secondary)'}}>
            <p>
              {lang === 'hi'
                ? 'Socho aapke paas ek dukaan hai. Usme 4 log kaam karte hain: Cashier, Guard, Manager, aur aap (Owner). Har kisi ko alag kaam milta hai. ClickOut Admin ek aisa screen hai jahan se aap sabko control kar sakte ho.'
                : 'Imagine you have a store. 4 people work there: Cashier, Guard, Manager, and you (Owner). Everyone has different work. ClickOut Admin is one screen from where you control everyone.'}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl border" style={{background:'var(--bg-base)', borderColor:'var(--border-color)'}}>
                <h4 className="font-bold mb-2 text-foreground">
                  {lang === 'hi' ? 'Pehle (Bina ClickOut)' : 'Before (Without ClickOut)'}
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>❌ {lang === 'hi' ? '3 alag apps chalani padti thi' : '3 separate apps needed'}</li>
                  <li>❌ {lang === 'hi' ? 'Cashier ne kitna liya — pata nahi' : 'No idea how much cashier collected'}</li>
                  <li>❌ {lang === 'hi' ? 'Stock khatam ho gaya — pata nahi chala' : 'Stock finished — no alert'}</li>
                  <li>❌ {lang === 'hi' ? 'Chori hui — 1 mahine baad pata chali' : 'Theft found after 1 month'}</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border" style={{background:'var(--accent-bg)', borderColor:'var(--accent)'}}>
                <h4 className="font-bold mb-2 text-(--accent)">
                  {lang === 'hi' ? 'Ab (ClickOut Ke Saath)' : 'Now (With ClickOut)'}
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>✅ {lang === 'hi' ? 'Ek screen pe sab kuch' : 'Everything on one screen'}</li>
                  <li>✅ {lang === 'hi' ? 'Real-time paisa track karo' : 'Real-time money tracking'}</li>
                  <li>✅ {lang === 'hi' ? 'Stock khatam hone se pehle alert' : 'Alert before stock finishes'}</li>
                  <li>✅ {lang === 'hi' ? 'Fraud turant pakdi jati hai' : 'Fraud caught instantly'}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl border-l-4" style={{background:'var(--bg-base)', borderColor:'var(--accent)'}}>
              <p className="font-bold text-foreground mb-1">
                {lang === 'hi' ? 'Real Example:' : 'Real Example:'}
              </p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Ramesh ji ki dukaan Delhi mein hai. Pehle unhe cashier se roz shaam ko hisaab maangna padta tha. Ab ClickOut Admin se unko pata chal jaata hai — 2 baje tak ₹4,500 bik chuke hain, 3 UPI payment hue hain, aur 1 cash transaction pending hai. Bina dukaan gaye!'
                  : 'Ramesh\'s store is in Delhi. Earlier he had to ask cashier for accounts every evening. Now from ClickOut Admin he knows — by 2 PM ₹4,500 sold, 3 UPI payments done, 1 cash transaction pending. Without visiting the store!'}
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-(--accent)">✅ {lang === 'hi' ? 'Final Recommendation:' : 'Final Recommendation:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Har store owner ko ClickOut Admin chahiye — chahe dukaan chhoti ho ya badi. Ye aapki "CCTV nahi, par usse bhi zyada powerful" cheez hai.'
                  : 'Every store owner needs ClickOut Admin — whether store is small or big. This is "not CCTV, but even more powerful".'}
              </p>
              <p className="font-bold text-foreground mt-2">🚀 {lang === 'hi' ? 'Action Item:' : 'Action Item:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Aaj hi login karo https://clickout-cfa95.web.app pe. Apni dukaan ka naam daalo. 5 minute mein system ready.'
                  : 'Login today at https://clickout-cfa95.web.app. Enter your store name. System ready in 5 minutes.'}
              </p>
            </div>
          </div>
        </Section>

        <Section id="roles" icon={<Users size={20} />} title={lang === 'hi' ? '2. Kaun Kya Dekh Sakta Hai? (Roles)' : '2. Who Can See What? (Roles)'}>
          <div className="space-y-4">
            <p className="text-sm md:text-base" style={{color:'var(--text-secondary)'}}>
              {lang === 'hi'
                ? 'Aapke store mein alag-alag log hain. Sabko same screen nahi dikhni chahiye. Guard ko "sales report" kyun dikhe? ClickOut mein har bande ko sirf apna kaam dikhta hai.'
                : 'Different people work in your store. Everyone should not see the same screen. Why should Guard see "sales report"? In ClickOut, everyone sees only their work.'}
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2" style={{borderColor:'var(--border-color)'}}>
                    <th className="text-left py-3 px-3 font-bold text-foreground">{lang === 'hi' ? 'Role' : 'Role'}</th>
                    <th className="text-left py-3 px-3 font-bold text-foreground">{lang === 'hi' ? 'Kaam' : 'Work'}</th>
                    <th className="text-left py-3 px-3 font-bold text-foreground">{lang === 'hi' ? 'Kya Dekhta Hai?' : 'What They See?'}</th>
                  </tr>
                </thead>
                <tbody className="text-(--text-secondary)">
                  {[
                    [lang === 'hi' ? 'Super Admin' : 'Super Admin', lang === 'hi' ? 'Platform owner' : 'Platform owner', lang === 'hi' ? 'Saari dukaanein, billing, global stats' : 'All stores, billing, global stats'],
                    [lang === 'hi' ? 'Tenant Admin' : 'Tenant Admin', lang === 'hi' ? 'Dukaan owner' : 'Store owner', lang === 'hi' ? 'Apni dukaan, staff, reports' : 'Own store, staff, reports'],
                    [lang === 'hi' ? 'Manager' : 'Manager', lang === 'hi' ? 'Branch head' : 'Branch head', lang === 'hi' ? 'Stock, staff attendance, daily closing' : 'Stock, staff attendance, daily closing'],
                    [lang === 'hi' ? 'Cashier' : 'Cashier', lang === 'hi' ? 'Bill banana' : 'Make bills', lang === 'hi' ? 'POS screen, barcode scan, payment' : 'POS screen, barcode scan, payment'],
                    [lang === 'hi' ? 'Guard' : 'Guard', lang === 'hi' ? 'Gate pe check karna' : 'Check at gate', lang === 'hi' ? 'QR scan, exit approval, weight check' : 'QR scan, exit approval, weight check'],
                    [lang === 'hi' ? 'Auditor' : 'Auditor', lang === 'hi' ? 'Hisaab check karna' : 'Check accounts', lang === 'hi' ? 'Fraud logs, discrepancy, trust score' : 'Fraud logs, discrepancy, trust score'],
                    [lang === 'hi' ? 'Inventory Admin' : 'Inventory Admin', lang === 'hi' ? 'Maal manage karna' : 'Manage stock', lang === 'hi' ? 'Product list, CSV import, expiry' : 'Product list, CSV import, expiry'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b" style={{borderColor:'var(--border-color)'}}>
                      <td className="py-3 px-3 font-medium text-foreground">{row[0]}</td>
                      <td className="py-3 px-3">{row[1]}</td>
                      <td className="py-3 px-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 rounded-xl border-l-4" style={{background:'var(--bg-base)', borderColor:'var(--accent)'}}>
              <p className="font-bold text-foreground mb-1">
                {lang === 'hi' ? 'Best Practice:' : 'Best Practice:'}
              </p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Kabhi bhi Cashier ko "Admin" access mat do. Guard ko "sales report" mat dikhao. Har bande ko sirf apni zaroorat ka access do. Isse chori aur fraud kam hota hai.'
                  : 'Never give "Admin" access to Cashier. Never show "sales report" to Guard. Give everyone only what they need. This reduces theft and fraud.'}
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-(--accent)">✅ {lang === 'hi' ? 'Final Recommendation:' : 'Final Recommendation:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Chhoti dukaan mein 2 role kaafi hain: Admin (aap) aur Cashier. 2+ branches hain toh Manager role add karo.'
                  : 'Small store needs 2 roles: Admin (you) and Cashier. 2+ branches? Add Manager role.'}
              </p>
              <p className="font-bold text-foreground mt-2">🚀 {lang === 'hi' ? 'Action Item:' : 'Action Item:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Admin panel mein "Staff" section mein jaake apne Cashier ka phone number daalo. Usse OTP aayega. Bas — uska account ban gaya.'
                  : 'Go to "Staff" section in Admin panel. Enter Cashier\'s phone number. They will get OTP. Done — their account is created.'}
              </p>
            </div>
          </div>
        </Section>

        <Section id="engines" icon={<Server size={20} />} title={lang === 'hi' ? '3. Backend Engines (Dimaag)' : '3. Backend Engines (The Brain)'}>
          <div className="space-y-6">
            <p className="text-sm md:text-base" style={{color:'var(--text-secondary)'}}>
              {lang === 'hi'
                ? 'ClickOut sirf ek "app" nahi hai. Iske peeche 6 powerful engines chalte hain jo automatic kaam karte hain. Aapko kuch nahi karna — bas result dekho.'
                : 'ClickOut is not just an "app". Behind it, 6 powerful engines run automatically. You do nothing — just see the results.'}
            </p>

            {[
              {
                title: lang === 'hi' ? 'Engine 1: Quantum Financial Engine' : 'Engine 1: Quantum Financial Engine',
                icon: <BarChart3 size={18} />,
                what: lang === 'hi' ? 'Har bill ke baad automatic hisaab update karta hai' : 'Automatically updates accounts after every bill',
                why: lang === 'hi' ? 'Delta Math use karta hai — poora recalculate nahi, sirf "change" add karta hai. 1 bill ya 10,000 bill — same speed.' : 'Uses Delta Math — doesn\'t recalculate everything, only adds "change". 1 bill or 10,000 bills — same speed.',
                example: lang === 'hi' ? 'Subah 9 baje dukaan khuli. 10 baje tak 50 bill hue. Engine har bill pe "aaj ka total" update kar raha hai. Manager ko bina refresh kiye pata chal jaata hai.' : 'Store opened at 9 AM. 50 bills by 10 AM. Engine updates "today\'s total" on every bill. Manager knows without refreshing.',
              },
              {
                title: lang === 'hi' ? 'Engine 2: AI Auto-PO Engine' : 'Engine 2: AI Auto-PO Engine',
                icon: <FileText size={18} />,
                what: lang === 'hi' ? 'Stock khatam hone se pehle automatic "order" bana deta hai' : 'Automatically creates "order" before stock finishes',
                why: lang === 'hi' ? 'Roz kitna bikta hai, supplier kitne din mein deta hai — ye sab calculate karke "kitna maal mangwana chahiye" batata hai.' : 'Calculates daily sales, supplier delivery time — and tells "how much stock to order".',
                example: lang === 'hi' ? 'Maggi Noodles roz 20 packet bikta hai. Supplier 3 din mein deta hai. Jab stock 80 se neeche gaya, engine ne PO draft bana diya "100 packet order karo".' : 'Maggi Noodles sells 20 packets daily. Supplier takes 3 days. When stock went below 80, engine drafted PO "order 100 packets".',
              },
              {
                title: lang === 'hi' ? 'Engine 3: Fraud Detection Engine' : 'Engine 3: Fraud Detection Engine',
                icon: <AlertTriangle size={18} />,
                what: lang === 'hi' ? 'Har bill ko instantly check karta hai — kuch galat hai?' : 'Instantly checks every bill — something wrong?',
                why: lang === 'hi' ? 'Weight mismatch? Cashier ne UPI mein cash mark kiya? Guard ne override kiya? Sab automatic flag ho jaata hai.' : 'Weight mismatch? Cashier marked cash as UPI? Guard overrode? Everything auto-flags.',
                example: lang === 'hi' ? 'Customer ne 5kg rice kharida. Guard ne weigh kiya — 4.2kg nikla. System ne automatic fraud log bana diya. Auditor ko red alert aa gaya.' : 'Customer bought 5kg rice. Guard weighed — 4.2kg came out. System auto-created fraud log. Auditor got red alert.',
              },
              {
                title: lang === 'hi' ? 'Engine 4: Ghost Cleaner' : 'Engine 4: Ghost Cleaner',
                icon: <Database size={18} />,
                what: lang === 'hi' ? 'Product delete karo toh usse linked sab kuch uda de' : 'Delete product and everything linked to it',
                why: lang === 'hi' ? 'Firebase mein "foreign keys" nahi hote. Product delete kiya, par offer reh gaya toh app crash karega. Ye engine orphan data clean karta hai.' : 'Firebase has no "foreign keys". Deleted product but offer remained? App will crash. This engine cleans orphan data.',
                example: lang === 'hi' ? '"Coca Cola 1L" delete kiya. Uspe "Buy 2 Get 1" offer tha. Ghost Cleaner ne offer bhi uda diya. Customer ko invalid offer nahi dikha.' : 'Deleted "Coca Cola 1L". Had "Buy 2 Get 1" offer. Ghost Cleaner deleted offer too. Customer never saw invalid offer.',
              },
              {
                title: lang === 'hi' ? 'Engine 5: Data Archival' : 'Engine 5: Data Archival',
                icon: <Cloud size={18} />,
                what: lang === 'hi' ? '90 din purane bills automatic delete karta hai' : 'Automatically deletes 90-day old bills',
                why: lang === 'hi' ? 'Purane bills Firestore mein paisa kharch karte hain (read operations). 90 din baad GST requirement pura, toh archive karke cost bachao.' : 'Old bills cost money in Firestore (read operations). After 90 days GST requirement fulfilled, archive to save cost.',
                example: lang === 'hi' ? 'Aapke paas 50,000 purane bills hain. Har month ₹500 extra Firestore bill aa raha tha. Archival lagane ke baad ₹200 bacha.' : 'You had 50,000 old bills. Every month ₹500 extra Firestore bill. After archival, saved ₹200.',
              },
              {
                title: lang === 'hi' ? 'Engine 6: Smart Notifications' : 'Engine 6: Smart Notifications',
                icon: <Smartphone size={18} />,
                what: lang === 'hi' ? 'Customer ko spam nahi hone deta' : 'Doesn\'t let customer get spammed',
                why: lang === 'hi' ? '48 ghante mein ek hi marketing message. High priority alerts (payment failed, fraud) hamesha jaayenge.' : 'Only one marketing message in 48 hours. High priority alerts (payment failed, fraud) always go through.',
                example: lang === 'hi' ? 'Diwali sale message 500 customers ko bheja. Jo customer kal hi aaya tha, usse message nahi gaya. 48 ghante baad jaayega.' : 'Sent Diwali sale to 500 customers. Customer who came yesterday didn\'t get it. Will get after 48 hours.',
              },
            ].map((engine, i) => (
              <div key={i} className="p-5 rounded-xl border" style={{background:'var(--bg-base)', borderColor:'var(--border-color)'}}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-(--accent-bg) flex items-center justify-center text-(--accent)">
                    {engine.icon}
                  </div>
                  <h4 className="font-bold text-foreground">{engine.title}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-foreground">{lang === 'hi' ? 'Kya karta hai:' : 'What it does:'}</span> {engine.what}</p>
                  <p><span className="font-semibold text-foreground">{lang === 'hi' ? 'Kyun powerful:' : 'Why powerful:'}</span> {engine.why}</p>
                  <p className="p-2 rounded-lg border-l-2" style={{background:'var(--bg-card)', borderColor:'var(--accent)'}}>
                    <span className="font-semibold text-(--accent)">{lang === 'hi' ? 'Example:' : 'Example:'}</span> {engine.example}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-4">
              <p className="font-bold text-(--accent)">✅ {lang === 'hi' ? 'Final Recommendation:' : 'Final Recommendation:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Ye 6 engines aapke backend mein already hain. Aapko kuch setup nahi karna. Bas Growth plan lo — tabhi ye sab activate hote hain.'
                  : 'These 6 engines are already in your backend. You need no setup. Just get Growth plan — that\'s when all activate.'}
              </p>
              <p className="font-bold text-foreground mt-2">🚀 {lang === 'hi' ? 'Action Item:' : 'Action Item:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Admin dashboard pe "Daily Stats" section dekho. Wahan har engine ka result real-time dikhta hai.'
                  : 'Check "Daily Stats" section on Admin dashboard. Every engine\'s result shows there in real-time.'}
              </p>
            </div>
          </div>
        </Section>

        <Section id="security" icon={<Lock size={20} />} title={lang === 'hi' ? '4. Security & Fraud Kaise Roke?' : '4. How to Stop Security & Fraud?'}>
          <div className="space-y-4">
            <p className="text-sm md:text-base" style={{color:'var(--text-secondary)'}}>
              {lang === 'hi'
                ? 'Dukaan mein 3 tarah ki chori hoti hai: (1) Customer ne kuch scan nahi kiya, (2) Cashier ne paise apni jeb mein daale, (3) Guard ne bina check kiye jaane diya. ClickOut teeno ko rokta hai.'
                : '3 types of theft happen in stores: (1) Customer didn\'t scan something, (2) Cashier put money in own pocket, (3) Guard let go without checking. ClickOut stops all three.'}
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-xl border" style={{background:'var(--bg-base)', borderColor:'var(--border-color)'}}>
                <div className="text-2xl mb-2">🛡️</div>
                <h4 className="font-bold text-sm mb-2 text-foreground">{lang === 'hi' ? 'Exit Gate Check' : 'Exit Gate Check'}</h4>
                <p className="text-xs" style={{color:'var(--text-secondary)'}}>
                  {lang === 'hi'
                    ? 'Har customer ke phone pe QR code aata hai. Guard scan karega — agar payment nahi hua, system "STOP" bolega.'
                    : 'Every customer gets QR on phone. Guard scans — if payment not done, system says "STOP".'}
                </p>
              </div>
              <div className="p-4 rounded-xl border" style={{background:'var(--bg-base)', borderColor:'var(--border-color)'}}>
                <div className="text-2xl mb-2">⚖️</div>
                <h4 className="font-bold text-sm mb-2 text-foreground">{lang === 'hi' ? 'Weight Mismatch' : 'Weight Mismatch'}</h4>
                <p className="text-xs" style={{color:'var(--text-secondary)'}}>
                  {lang === 'hi'
                    ? 'System mein 5kg rice tha. Guard ne 4.2kg weigh kiya. 800g ka farq = automatic fraud alert.'
                    : 'System had 5kg rice. Guard weighed 4.2kg. 800g difference = automatic fraud alert.'}
                </p>
              </div>
              <div className="p-4 rounded-xl border" style={{background:'var(--bg-base)', borderColor:'var(--border-color)'}}>
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-bold text-sm mb-2 text-foreground">{lang === 'hi' ? 'Cash vs UPI Match' : 'Cash vs UPI Match'}</h4>
                <p className="text-xs" style={{color:'var(--text-secondary)'}}>
                  {lang === 'hi'
                    ? 'Cashier ne UPI mark kiya, par customer ne cash diya. System ne "discrepancy" flag laga diya. Auditor ko alert.'
                    : 'Cashier marked UPI, but customer gave cash. System flagged "discrepancy". Alert to auditor.'}
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl border-l-4" style={{background:'var(--bg-base)', borderColor:'red'}}>
              <p className="font-bold text-red-500 mb-1">
                {lang === 'hi' ? 'Common Mistake:' : 'Common Mistake:'}
              </p>
              <p className="text-sm" style={{color:'var(--text-secondary)'}}>
                {lang === 'hi'
                  ? 'Kuch dukaan wale Guard ko phone nahi dete — "mera guard imaandaar hai" keh ke. Lekin 6 mahine baad pata chalta hai ki ₹50,000 ki chori ho gayi. Trust nahi, system chahiye.'
                  : 'Some store owners don\'t give phone to Guard — saying "my guard is honest". But after 6 months they find ₹50,000 theft. Need system, not trust.'}
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-(--accent)">✅ {lang === 'hi' ? 'Final Recommendation:' : 'Final Recommendation:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Basic plan mein bhi fraud detection hai. Growth plan mein AI fraud intelligence milti hai. Shuru karo Basic se, upgrade karo jab zaroorat ho.'
                  : 'Fraud detection is in Basic plan too. AI fraud intelligence comes in Growth plan. Start with Basic, upgrade when needed.'}
              </p>
              <p className="font-bold text-foreground mt-2">🚀 {lang === 'hi' ? 'Action Item:' : 'Action Item:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Guard ko ek purana phone de do (₹3,000 ka). ClickOut Security app install karo. Bas — aapka gate secure.'
                  : 'Give Guard an old phone (₹3,000). Install ClickOut Security app. Done — your gate is secure.'}
              </p>
            </div>
          </div>
        </Section>

        <Section id="tech" icon={<Globe size={20} />} title={lang === 'hi' ? '5. Tech Stack — Kyun Ye Technology?' : '5. Tech Stack — Why This Technology?'}>
          <div className="space-y-4">
            <p className="text-sm md:text-base" style={{color:'var(--text-secondary)'}}>
              {lang === 'hi'
                ? 'ClickOut kaunsi technology pe bana hai? Aur kyun? Niche table mein har technology ke saath "kyun chuna" aur "kyun nahi chuna" likha hai.'
                : 'What technology is ClickOut built on? And why? Below table has "why chosen" and "why not chosen" for every tech.'}
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2" style={{borderColor:'var(--border-color)'}}>
                    <th className="text-left py-3 px-3 font-bold text-foreground">Technology</th>
                    <th className="text-left py-3 px-3 font-bold text-(--accent)">ClickOut Ne Kyun Chuna?</th>
                    <th className="text-left py-3 px-3 font-bold text-(--text-secondary)">Alternative</th>
                    <th className="text-left py-3 px-3 font-bold text-(--text-secondary)">Kyun Nahi Chuna?</th>
                  </tr>
                </thead>
                <tbody className="text-(--text-secondary)">
                  {[
                    ['Flutter Web', 'Ek code se Android, iOS, Web, Desktop sab. Admin panel web pe, par baad mein app bhi ban sakti hai.', 'React + React Native', 'Do alag codebases maintain karna padta. Flutter mein 1 team kaafi hai.'],
                    ['Firebase Auth', 'Phone OTP + Email + Custom Claims built-in. Role directly JWT token mein inject hota hai.', 'Auth0 / Cognito', 'Firebase Auth free tier mein 10k users/month. Auth0 mein pricing zyada hai.'],
                    ['Cloud Firestore', 'Real-time sync by default. Cashier ne bill ki, Manager ka screen instant update hua.', 'MongoDB Atlas', 'Mongo mein real-time sync alag se setup karna padta. Firestore mein by default.'],
                    ['Firebase Functions', 'Firestore triggers (onDocumentCreated) directly supported. Backend auto-chalta hai.', 'AWS Lambda', 'Lambda mein Firestore connect karne ke liye VPC lagta hai. Complexity zyada.'],
                    ['FCM (Push)', 'Free unlimited notifications. Topic-based subscription built-in.', 'OneSignal / Pusher', 'FCM free hai. OneSignal mein 10k subscribers ke baad paid.'],
                    ['fl_chart', 'Flutter native charting. 60fps smooth. WebView nahi chahiye.', 'Chart.js in WebView', 'WebView slow hota hai Flutter mein. Native chart better UX deta hai.'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b" style={{borderColor:'var(--border-color)'}}>
                      <td className="py-3 px-3 font-medium text-foreground">{row[0]}</td>
                      <td className="py-3 px-3">{row[1]}</td>
                      <td className="py-3 px-3">{row[2]}</td>
                      <td className="py-3 px-3">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <p className="font-bold text-(--accent)">✅ {lang === 'hi' ? 'Final Recommendation:' : 'Final Recommendation:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Ye tech stack "startup se enterprise" tak scale hota hai. Firebase free tier mein 50k reads/day deta hai. Paid mein unlimited. Aapko server manage karne ki tension nahi.'
                  : 'This tech stack scales from "startup to enterprise". Firebase free tier gives 50k reads/day. Paid is unlimited. No server management tension for you.'}
              </p>
              <p className="font-bold text-foreground mt-2">🚀 {lang === 'hi' ? 'Action Item:' : 'Action Item:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Aapko koi tech decision nahi karna. Bas app use karo. Backend humne already bana diya hai.'
                  : 'You don\'t need to make any tech decision. Just use the app. Backend is already built by us.'}
              </p>
            </div>
          </div>
        </Section>

        <Section id="mistakes" icon={<AlertTriangle size={20} />} title={lang === 'hi' ? '6. Common Mistakes (Jo Nahi Karna)' : '6. Common Mistakes (Don\'t Do These)'}>
          <div className="space-y-4">
            <div className="grid gap-4">
              {[
                {
                  mistake: lang === 'hi' ? 'Client side se "total" calculate karna' : 'Calculating "total" from client side',
                  whyBad: lang === 'hi' ? '2 cashiers same time pe bill karein toh total galat dikhna' : '2 cashiers billing simultaneously = wrong total',
                  fix: lang === 'hi' ? 'Hamesha server-side "daily_store_stats" se padho' : 'Always read from server-side "daily_store_stats"',
                },
                {
                  mistake: lang === 'hi' ? 'Staff delete kiya, par login reh gaya' : 'Deleted staff but login remained',
                  whyBad: lang === 'hi' ? 'Ex-employee aaj bhi login kar sakta hai, data dekh sakta hai' : 'Ex-employee can still login and see data',
                  fix: lang === 'hi' ? 'ClickOut mein "onStaffDeleted" trigger automatically Auth user uda deta hai' : 'ClickOut\'s "onStaffDeleted" trigger auto-deletes Auth user',
                },
                {
                  mistake: lang === 'hi' ? 'Product delete kiya, offer reh gaya' : 'Deleted product but offer remained',
                  whyBad: lang === 'hi' ? 'Customer purana offer scan karega toh app crash karega' : 'Customer scanning old offer will crash app',
                  fix: lang === 'hi' ? 'Ghost Cleaner engine automatically linked offers uda deta hai' : 'Ghost Cleaner engine auto-deletes linked offers',
                },
                {
                  mistake: lang === 'hi' ? 'Notification bina limit ke bhejna' : 'Sending notifications without limit',
                  whyBad: lang === 'hi' ? 'Customer irritate hoke app uninstall kar dega' : 'Customer gets irritated and uninstalls app',
                  fix: lang === 'hi' ? 'Smart Notifications engine 48h cooldown rakhta hai' : 'Smart Notifications engine maintains 48h cooldown',
                },
                {
                  mistake: lang === 'hi' ? 'Inventory ka "unit cost" 0 chhodna' : 'Leaving inventory "unit cost" as 0',
                  whyBad: lang === 'hi' ? 'Margin calculation Infinity ya NaN dega. Report galat hogi.' : 'Margin calculation gives Infinity or NaN. Wrong report.',
                  fix: lang === 'hi' ? 'Smart fallback: MRP ka 70% automatic le leta hai' : 'Smart fallback: automatically takes 70% of MRP',
                },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border-l-4" style={{background:'var(--bg-base)', borderColor:'red'}}>
                  <p className="font-bold text-red-400 text-sm mb-1">❌ {item.mistake}</p>
                  <p className="text-xs mb-1" style={{color:'var(--text-secondary)'}}><strong>Kyun galat:</strong> {item.whyBad}</p>
                  <p className="text-xs" style={{color:'var(--accent)'}}><strong>Sahi tareeka:</strong> {item.fix}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <p className="font-bold text-(--accent)">✅ {lang === 'hi' ? 'Final Recommendation:' : 'Final Recommendation:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Ye mistakes sirf unke saath hoti hain jo ClickOut ke "best practices" nahi padhte. Aap ye page padh rahe ho — aap safe ho.'
                  : 'These mistakes only happen to those who don\'t read ClickOut "best practices". You are reading this page — you are safe.'}
              </p>
              <p className="font-bold text-foreground mt-2">🚀 {lang === 'hi' ? 'Action Item:' : 'Action Item:'}</p>
              <p className="text-sm">
                {lang === 'hi'
                  ? 'Har naye staff ko onboard karte waqt "Common Mistakes" section 2 minute mein explain karo. Ya screenshot bhej do.'
                  : 'While onboarding every new staff, explain "Common Mistakes" section in 2 minutes. Or send screenshot.'}
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <div className="mt-16 text-center p-12 rounded-3xl border" style={{background:'var(--bg-card)', borderColor:'var(--accent)'}}>
          <h2 className="text-3xl font-bold mb-4">
            {lang === 'hi' ? 'Ab Samajh Aaya?' : 'Understood Everything?'}
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{color:'var(--text-secondary)'}}>
            {lang === 'hi'
              ? '14 din free trial. Koi risk nahi. Bas apni dukaan ka naam daalo aur shuru karo.'
              : '14-day free trial. No risk. Just enter your store name and start.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="px-8 py-4 text-lg">
              <Link href="https://clickout-cfa95.web.app/#/login" target="_blank">
                {lang === 'hi' ? 'Admin Panel Login Karein' : 'Login to Admin Panel'} →
              </Link>
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg">
              <Link href="/pricing">
                {lang === 'hi' ? 'Pricing Dekhein' : 'View Pricing'}
              </Link>
            </Button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}