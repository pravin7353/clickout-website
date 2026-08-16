'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// =========================================
// TYPES
// =========================================
type Lang = 'en' | 'hi';
type TranslationValue = string | string[];

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => TranslationValue;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// =========================================
// TRANSLATIONS
// NOTE: 'hi' here means HINGLISH (Roman script Hindi+English mix), not Devanagari.
// =========================================
const translations: Record<Lang, Record<string, TranslationValue>> = {
  en: {
    // Navbar
    'nav.pricing': 'Pricing',
    'nav.ecosystem': 'Ecosystem',
    'nav.blog': 'Blog',
    'nav.login': 'Login',
    'nav.lang': 'Hinglish',

    // Trust badges
    'trust.gst': 'GST Compliant',
    'trust.secure': 'Bank-Level Security',
    'trust.ai': 'AI Fraud Detection',
    'trust.analytics': 'Real-Time Analytics',
    'trust.cloud': 'Cloud-Based & Always Updated',

    // Homepage — Problem section
    'home.problemLabel': 'The Problem',
    'home.problemTitle': 'Manual billing is costing you more than you think',
    'home.problemDesc': 'Long queues, stock leakage, and fraud eat into your profit — every single day.',
    'home.problemCard1': 'Customers wait 10-15 minutes in billing queues during peak hours',
    'home.problemCard2': '5-8% monthly stock goes missing with no way to track where',
    'home.problemCard3': 'Cash counter mismatches and billing fraud go unnoticed for months',

    // Homepage — Solution section
    'home.solutionLabel': 'The Solution',
    'home.solutionTitle': 'One system. Self-checkout, inventory, and fraud detection — together.',
    'home.solutionDesc': 'ClickOut replaces 3 separate tools with one simple app your staff learns in a day.',
    'home.step1Title': 'Customer Scans & Pays',
    'home.step1Desc': 'Shopper scans items with their phone and pays via UPI — no queue, no cashier needed.',
    'home.step2Title': 'Stock Updates Instantly',
    'home.step2Desc': 'Inventory updates in real-time the moment an item is scanned — no manual counting.',
    'home.step3Title': 'You Get Full Visibility',
    'home.step3Desc': 'See sales, stock, and fraud alerts on one dashboard — from your phone, anywhere.',
    'home.ctaTrial': 'Start Your Free Trial',

    // Homepage — Testimonials
    'home.testimonialLabel': 'Customer Stories',
    'home.testimonialTitle': 'Real stores, real results',
    'home.testimonialDesc': "Here's what store owners across India are saying",
    'home.quote1': 'Billing queue is gone. My customers actually enjoy shopping now.',
    'home.quote2': 'I caught 3 fraud cases in the first month itself. This pays for itself.',
    'home.quote3': 'Zero fraud in 6 months with 2000+ transactions. I trust this system completely.',
    'home.quote4': 'Scaled from 1 store to 3 in just 8 months — ClickOut made it manageable.',

    // Homepage — Comparison
    'home.compareLabel': 'Comparison',
    'home.compareTitle': 'How ClickOut is different',
    'home.compareDesc': 'Khatabook and OkCredit track your accounts. ClickOut runs your entire store.',

    // Homepage — FAQ
    'home.faqTitle': 'Frequently Asked Questions',
    'home.faqDesc': 'Everything you need to know before getting started',

    // Homepage — Final CTA
    'home.finalCtaTitle': 'Ready to stop losing money on manual billing?',
    'home.finalCtaDesc': 'Join hundreds of stores already saving time and money with ClickOut.',
    'home.finalCtaBtn1': 'Start Free Trial',
    'home.finalCtaBtn2': 'Talk to Sales',
    'home.finalCtaSub': 'No credit card required. Setup in under 24 hours.',

    // Pricing page
    'pricing.limitedOffer': 'Limited Time Offer',
    'pricing.choosePlan': 'Choose Your Plan',
    'pricing.planDesc': 'Simple, honest pricing. No hidden fees, no surprise charges — pick the plan that fits your store.',
    'pricing.monthlyBtn': 'Monthly',
    'pricing.yearlyBtn': 'Yearly',
    'pricing.save20': 'Save 20%',
    'pricing.mostPopularBadge': 'Most Popular',
    'pricing.bestValueBadge': 'Best Value',
    'pricing.customPrice': 'Custom',
    'pricing.customPriceSub': 'Tailored to your business',
    'pricing.perMonth': '/month',
    'pricing.billedYearly': 'billed yearly',
    'pricing.terminals': 'Terminals',
    'pricing.txPerMonth': 'Transactions/mo',
    'pricing.includes': 'Everything Includes',
    'pricing.modulesIncluded': 'Modules Included',
    'pricing.contactSales': 'Contact Sales',
    'pricing.startTrial': 'Start Free Trial',
    'pricing.honestPricing': 'Honest pricing — no setup fees, no hidden charges, cancel anytime.',
    'pricing.guarantee': '30-Day Money-Back Guarantee',
    'pricing.faqTeaser': 'Still have questions?',
    'pricing.faqDesc': 'Check our FAQ page for detailed answers about billing, setup, and support.',
    'pricing.viewFaq': 'View FAQ',

    // ROI Calculator
    'roi.badge': 'ROI Calculator',
    'roi.title': 'See How Much You Will Save',
    'roi.subtitle': 'Move the sliders to match your store — see your real monthly savings with ClickOut.',
    'roi.inputLabel': 'Your Current Setup',
    'roi.cashierCount': 'Number of Cashiers',
    'roi.suffix.cashiers': 'cashiers',
    'roi.cashierSalary': 'Cashier Monthly Salary',
    'roi.suffix.rupees': '',
    'roi.dailyCustomers': 'Daily Customers',
    'roi.suffix.customers': 'customers/day',
    'roi.avgWait': 'Average Checkout Wait',
    'roi.suffix.minutes': 'min',
    'roi.leakage': 'Monthly Stock Leakage',
    'roi.fraud': 'Monthly Fraud Loss',
    'roi.printerCost': 'Printer & Paper Cost',
    'roi.posCost': 'POS Machine Cost',
    'roi.suffix.rupeeUnit': 'one-time',
    'roi.totalSalary': 'Total Monthly Salary Cost',
    'roi.resultLabel': 'Your Monthly Savings',
    'roi.salarySave': 'Cashier Salary Saved',
    'roi.salarySaveDesc': 'Fewer cashiers needed with self-checkout',
    'roi.leakageSave': 'Stock Leakage Reduced',
    'roi.leakageSaveDesc': 'Real-time inventory tracking cuts leakage',
    'roi.fraudSave': 'Fraud Prevented',
    'roi.fraudSaveDesc': 'AI fraud detection catches theft early',
    'roi.printerSave': 'Printer Cost Eliminated',
    'roi.printerSaveDesc': 'No more paper receipts or ribbon costs',
    'roi.posSave': 'POS Hardware Saved',
    'roi.posSaveDesc': 'No expensive POS machines needed',
    'roi.extraCustomers': 'Extra Revenue, Faster Checkout',
    'roi.extraCustomersDesc': 'Cutting wait from {wait} min brings {extra} more customers/day',
    'roi.totalMonthlySavings': 'Total Monthly Savings',
    'roi.extraRevenue': 'Extra Revenue',
    'roi.totalMonthlyBenefit': 'Total Monthly Benefit',
    'roi.benefitSub': 'Savings + extra revenue combined',
    'roi.paybackTitle': 'Payback Period',
    'roi.paybackDays': 'Pays for itself in {days} days',
    'roi.paybackInstant': 'Pays for itself instantly',
    'roi.paybackDesc': 'ClickOut cost is recovered in just {days} days',
    'roi.paybackDescInstant': 'Your savings exceed the subscription cost from day one',
    'roi.comparisonTitle': 'Traditional POS vs ClickOut:',
    'roi.comparisonDesc': 'see the real cost difference',
    'roi.tradSetup': 'Traditional Setup Cost',
    'roi.tradAmc': 'Traditional AMC',
    'roi.clickoutBasic': 'ClickOut Basic',
    'roi.clickoutSetup': 'ClickOut Setup Cost',
    'roi.perYear': '/yr',

    // Plans
    'plan.mini': 'Mini',
    'plan.mini.desc': 'For small shops just getting started',
    'plan.mini.features': [
      '1 Terminal — QR Self-Checkout',
      'Up to 500 transactions/month',
      'Basic Inventory Tracking',
      'Email Support',
    ],
    'plan.mini.modules': 'Self-Checkout + Inventory',

    'plan.basic': 'Basic',
    'plan.basic.desc': 'For growing stores that need full control',
    'plan.basic.features': [
      '3 Terminals — QR Self-Checkout',
      'Up to 2,500 transactions/month',
      'Full Inventory + Low-Stock Alerts',
      'AI Fraud Detection',
      'Priority Email + Chat Support',
    ],
    'plan.basic.modules': 'Self-Checkout + Inventory + Fraud Detection',

    'plan.growth': 'Growth',
    'plan.growth.desc': 'For multi-terminal stores scaling fast',
    'plan.growth.features': [
      '10 Terminals — QR Self-Checkout',
      'Up to 15,000 transactions/month',
      'Multi-Store Analytics Dashboard',
      'AI Fraud Detection + Staff Verification',
      'Automated GST Reports',
      'Dedicated Account Manager',
    ],
    'plan.growth.modules': 'Everything in Basic + Multi-Store Analytics + Staff Verification',

    'plan.enterprise': 'Enterprise',
    'plan.enterprise.desc': 'For chains and franchises at scale',
    'plan.enterprise.features': [
      'Unlimited Terminals',
      'Unlimited Transactions',
      'Custom Integrations & API Access',
      'Dedicated Infrastructure & SLA',
      'White-Glove Onboarding',
      '24/7 Priority Support',
    ],
    'plan.enterprise.modules': 'Everything in Growth + Custom Integrations + Dedicated Support',

    // Ecosystem Page Keys (NEW)
    'eco.heroLabel': 'THE COMPLETE SUITE',
    'eco.heroTitle': 'One Ecosystem. Five Applications.',
    'eco.heroDesc': 'ClickOut isn\'t just a self-checkout feature. It is a highly engineered, interconnected suite of five independent applications working in perfect sync.',
    
    'eco.stat1': '500+ Stores',
    'eco.stat2': '17 Sec Checkout',
    'eco.stat3': '60% Less Fraud',
    'eco.stat4': '99.9% Uptime',

    'eco.app1.label': 'FOR STORE OWNERS',
    'eco.app1.title': '1. ClickOut Admin',
    'eco.app1.desc': 'The Master Command Center. Get a bird\'s-eye view of your entire retail operation.',
    'eco.app1.feat1': 'Live Intelligence: Real-time revenue tracking and staffing radar.',
    'eco.app1.feat2': 'Super Auditor: Perform Order Autopsies with AI Fraud Scores.',
    'eco.app1.feat3': 'Quantum Offers: AI-driven promotion engine and dynamic bundle pricing.',
    'eco.app1.feat4': 'Procurement: Automated PO generation based on stock velocity.',

    'eco.app2.label': 'FOR SHOPPERS',
    'eco.app2.title': '2. ClickOut Customer',
    'eco.app2.desc': 'The Queue-Killer Shopping Interface. Scan products, apply digital combos, and generate your exit gatepass without standing in line.',
    'eco.app2.feat1': 'Instant Entry: Scan Store QR to enter an isolated shopping session.',
    'eco.app2.feat2': 'Smart Cart: Real-time barcode scanning with dynamic discount locking.',
    'eco.app2.feat3': 'Digital Checkout: Pay via UPI/Cards or generate a Hybrid Cash QR.',
    'eco.app2.feat4': 'Digital Gatepass: Get a verified QR code for the security guard.',

    'eco.app3.label': 'FOR CASH COUNTERS',
    'eco.app3.title': '3. ClickOut Cashier',
    'eco.app3.desc': 'The Hybrid Bridge for Offline Payments. India still runs on cash, and we ensure cash-paying customers don\'t break your automated ecosystem.',
    'eco.app3.feat1': 'Scan Cash QR: Instantly scan the Pay by Cash QR generated on the customer phone.',
    'eco.app3.feat2': 'One-Tap Approval: Collect cash and hit approve to push the digital Gatepass.',
    'eco.app3.feat3': 'Live Analytics: Track daily cash collections and successful scans in real-time.',

    'eco.app4.label': 'FOR GUARDS & SECURITY',
    'eco.app4.title': '4. ClickOut Security',
    'eco.app4.desc': 'The ultimate gatekeeper. AI-driven theft prevention that replaces manual receipt checking with lightning-fast QR validation.',
    'eco.app4.feat1': 'Instant Verification: Scan customer exit QRs to instantly verify payment status.',
    'eco.app4.feat2': 'AI Spot Audits: Automatically flags high-value carts for physical verification.',
    'eco.app4.feat3': 'Ghost Visitor Alerts: Detects and stops unpaid or incomplete checkout attempts.',

    'eco.app5.label': 'FOR STORE STAFF',
    'eco.app5.title': '5. ClickOut IDT',
    'eco.app5.desc': 'The Inventory Deposit Terminal. Empower your staff to digitize physical products at lightning speed using AI and mobile cameras.',
    'eco.app5.feat1': 'Rapid Scanning: Turn any standard smartphone into an enterprise barcode scanner.',
    'eco.app5.feat2': 'AI Auto-Fill: Scan a packet and let AI extract product details, MRP, and weight.',
    'eco.app5.feat3': 'Direct Admin Sync: Pushes scanned inventory directly to the Admin Dashboard.',
  },

  hi: {
    // Navbar
    'nav.pricing': 'Pricing',
    'nav.ecosystem': 'Ecosystem',
    'nav.blog': 'Blog',
    'nav.login': 'Login',
    'nav.lang': 'English',

    // Trust badges
    'trust.gst': 'GST Compliant',
    'trust.secure': 'Bank-Level Security',
    'trust.ai': 'AI Fraud Detection',
    'trust.analytics': 'Real-Time Analytics',
    'trust.cloud': 'Cloud-Based, Hamesha Updated',

    // Homepage — Problem section
    'home.problemLabel': 'Problem Yeh Hai',
    'home.problemTitle': 'Manual billing aapko sochne se zyada mehenga pad raha hai',
    'home.problemDesc': 'Lambi queue, stock leakage, aur fraud — roz aapka profit kha rahe hain.',
    'home.problemCard1': 'Peak hours mein customers 10-15 minute billing queue mein khade rehte hain',
    'home.problemCard2': 'Har mahine 5-8% stock gayab ho jaata hai, pata hi nahi chalta kahan gaya',
    'home.problemCard3': 'Cash counter ka hisaab match nahi hota, fraud mahino tak pakad mein nahi aata',

    // Homepage — Solution section
    'home.solutionLabel': 'Solution Yeh Hai',
    'home.solutionTitle': 'Ek hi system — self-checkout, inventory aur fraud detection, sab saath mein',
    'home.solutionDesc': 'ClickOut 3 alag tools ki jagah leta hai — ek simple app jo staff ek din mein seekh leta hai.',
    'home.step1Title': 'Customer Scan Karke Pay Karta Hai',
    'home.step1Desc': 'Shopper apne phone se items scan karta hai aur UPI se pay karta hai — koi queue nahi, koi cashier nahi chahiye.',
    'home.step2Title': 'Stock Turant Update Hota Hai',
    'home.step2Desc': 'Item scan hote hi inventory turant update ho jaati hai — manual counting ki zaroorat nahi.',
    'home.step3Title': 'Aapko Poori Visibility Milti Hai',
    'home.step3Desc': 'Sales, stock aur fraud alerts ek hi dashboard par — apne phone se, kahin se bhi.',
    'home.ctaTrial': 'Free Trial Shuru Karein',

    // Homepage — Testimonials
    'home.testimonialLabel': 'Dukaan Owners Ki Kahani',
    'home.testimonialTitle': 'Real dukaan, real results',
    'home.testimonialDesc': 'Dekhiye poore India ke dukaan owners kya keh rahe hain',
    'home.quote1': 'Billing ki line khatam ho gayi. Ab customers khush hoke shopping karte hain.',
    'home.quote2': 'Pehle hi mahine mein 3 fraud cases pakad liye. Yeh apna kharcha khud nikal leta hai.',
    'home.quote3': '6 mahino mein 2000+ transactions, zero fraud. Ab main is system pe pura bharosa karti hoon.',
    'home.quote4': 'Sirf 8 mahino mein 1 se 3 dukaan ho gayi — ClickOut ne sab manageable bana diya.',

    // Homepage — Comparison
    'home.compareLabel': 'Comparison',
    'home.compareTitle': 'ClickOut Alag Kaise Hai',
    'home.compareDesc': 'Khatabook aur OkCredit sirf hisaab rakhte hain. ClickOut poori dukaan chalata hai.',

    // Homepage — FAQ
    'home.faqTitle': 'Aapke Sawal, Hamare Jawab',
    'home.faqDesc': 'Shuru karne se pehle jo bhi jaanna zaroori hai',

    // Homepage — Final CTA
    'home.finalCtaTitle': 'Manual billing mein paisa gawana band karna hai?',
    'home.finalCtaDesc': 'Sainkdo dukaano ke saath judiye jo ClickOut se time aur paisa bacha rahe hain.',
    'home.finalCtaBtn1': 'Free Trial Shuru Karein',
    'home.finalCtaBtn2': 'Sales Se Baat Karein',
    'home.finalCtaSub': 'Koi credit card nahi chahiye. 24 ghante mein setup ho jaata hai.',

    // Pricing page
    'pricing.limitedOffer': 'Limited Time Offer',
    'pricing.choosePlan': 'Apna Plan Chuniye',
    'pricing.planDesc': 'Simple, honest pricing. Koi chhupa hua charge nahi — apni dukaan ke hisaab se plan chuniye.',
    'pricing.monthlyBtn': 'Monthly',
    'pricing.yearlyBtn': 'Yearly',
    'pricing.save20': '20% Bachaiye',
    'pricing.mostPopularBadge': 'Sabse Popular',
    'pricing.bestValueBadge': 'Best Value',
    'pricing.customPrice': 'Custom',
    'pricing.customPriceSub': 'Aapke business ke hisaab se',
    'pricing.perMonth': '/month',
    'pricing.billedYearly': 'yearly billed',
    'pricing.terminals': 'Terminals',
    'pricing.txPerMonth': 'Transactions/month',
    'pricing.includes': 'Sab Kuch Included',
    'pricing.modulesIncluded': 'Included Modules',
    'pricing.contactSales': 'Sales Se Baat Karein',
    'pricing.startTrial': 'Free Trial Shuru Karein',
    'pricing.honestPricing': 'Honest pricing — koi setup fee nahi, koi chhupa charge nahi, kabhi bhi cancel karein.',
    'pricing.guarantee': '30-Din Money-Back Guarantee',
    'pricing.faqTeaser': 'Abhi bhi sawal hain?',
    'pricing.faqDesc': 'Billing, setup aur support ke baare mein jaanne ke liye hamara FAQ page dekhein.',
    'pricing.viewFaq': 'FAQ Dekhein',

    // ROI Calculator
    'roi.badge': 'ROI Calculator',
    'roi.title': 'Dekhiye Aap Kitna Bachayenge',
    'roi.subtitle': 'Apni dukaan ke hisaab se sliders set karein — ClickOut se har mahine ki asli bachat dekhein.',
    'roi.inputLabel': 'Aapka Current Setup',
    'roi.cashierCount': 'Cashiers Ki Sankhya',
    'roi.suffix.cashiers': 'cashiers',
    'roi.cashierSalary': 'Cashier Ki Monthly Salary',
    'roi.suffix.rupees': '',
    'roi.dailyCustomers': 'Daily Customers',
    'roi.suffix.customers': 'customers/din',
    'roi.avgWait': 'Average Checkout Wait',
    'roi.suffix.minutes': 'min',
    'roi.leakage': 'Monthly Stock Leakage',
    'roi.fraud': 'Monthly Fraud Loss',
    'roi.printerCost': 'Printer & Paper Cost',
    'roi.posCost': 'POS Machine Cost',
    'roi.suffix.rupeeUnit': 'one-time',
    'roi.totalSalary': 'Total Monthly Salary Cost',
    'roi.resultLabel': 'Aapki Monthly Savings',
    'roi.salarySave': 'Cashier Salary Bachat',
    'roi.salarySaveDesc': 'Self-checkout se kam cashiers ki zaroorat',
    'roi.leakageSave': 'Stock Leakage Kam',
    'roi.leakageSaveDesc': 'Real-time inventory tracking se leakage kam hoti hai',
    'roi.fraudSave': 'Fraud Ruka',
    'roi.fraudSaveDesc': 'AI fraud detection chori jaldi pakadta hai',
    'roi.printerSave': 'Printer Cost Khatam',
    'roi.printerSaveDesc': 'Ab paper receipt ya ribbon ka kharcha nahi',
    'roi.posSave': 'POS Hardware Bachat',
    'roi.posSaveDesc': 'Mehengi POS machine ki zaroorat nahi',
    'roi.extraCustomers': 'Fast Billing Se Extra Kamai',
    'roi.extraCustomersDesc': '{wait} min wait kam hone se {extra} zyada customers/din aate hain',
    'roi.totalMonthlySavings': 'Total Monthly Savings',
    'roi.extraRevenue': 'Extra Revenue',
    'roi.totalMonthlyBenefit': 'Total Monthly Benefit',
    'roi.benefitSub': 'Savings + extra revenue milaakar',
    'roi.paybackTitle': 'Payback Period',
    'roi.paybackDays': '{days} dino mein kharcha vasool',
    'roi.paybackInstant': 'Turant kharcha vasool',
    'roi.paybackDesc': 'ClickOut ka kharcha sirf {days} dino mein vasool ho jaata hai',
    'roi.paybackDescInstant': 'Pehle hi din se aapki savings subscription cost se zyada hai',
    'roi.comparisonTitle': 'Traditional POS vs ClickOut:',
    'roi.comparisonDesc': 'asli cost ka farak dekhein',
    'roi.tradSetup': 'Traditional Setup Cost',
    'roi.tradAmc': 'Traditional AMC',
    'roi.clickoutBasic': 'ClickOut Basic',
    'roi.clickoutSetup': 'ClickOut Setup Cost',
    'roi.perYear': '/year',

    // Plans
    'plan.mini': 'Mini',
    'plan.mini.desc': 'Nayi shuruaat karne wali chhoti dukaano ke liye',
    'plan.mini.features': [
      '1 Terminal — QR Self-Checkout',
      'Mahine mein 500 tak transactions',
      'Basic Inventory Tracking',
      'Email Support',
    ],
    'plan.mini.modules': 'Self-Checkout + Inventory',

    'plan.basic': 'Basic',
    'plan.basic.desc': 'Poora control chahne wali badhti dukaano ke liye',
    'plan.basic.features': [
      '3 Terminals — QR Self-Checkout',
      'Mahine mein 2,500 tak transactions',
      'Full Inventory + Low-Stock Alerts',
      'AI Fraud Detection',
      'Priority Email + Chat Support',
    ],
    'plan.basic.modules': 'Self-Checkout + Inventory + Fraud Detection',

    'plan.growth': 'Growth',
    'plan.growth.desc': 'Tezi se badh rahe multi-terminal stores ke liye',
    'plan.growth.features': [
      '10 Terminals — QR Self-Checkout',
      'Mahine mein 15,000 tak transactions',
      'Multi-Store Analytics Dashboard',
      'AI Fraud Detection + Staff Verification',
      'Automated GST Reports',
      'Dedicated Account Manager',
    ],
    'plan.growth.modules': 'Basic ka sab kuch + Multi-Store Analytics + Staff Verification',

    'plan.enterprise': 'Enterprise',
    'plan.enterprise.desc': 'Badi chains aur franchise ke liye',
    'plan.enterprise.features': [
      'Unlimited Terminals',
      'Unlimited Transactions',
      'Custom Integrations & API Access',
      'Dedicated Infrastructure & SLA',
      'White-Glove Onboarding',
      '24/7 Priority Support',
    ],
    'plan.enterprise.modules': 'Growth ka sab kuch + Custom Integrations + Dedicated Support',

    // Ecosystem Page Keys (NEW)
    'eco.heroLabel': 'POORA SUITE',
    'eco.heroTitle': 'Ek Ecosystem. Paanch Apps.',
    'eco.heroDesc': 'ClickOut sirf self-checkout nahi hai. Yeh paanch alag-alag apps ka interconnected system hai jo aapki poori dukaan ko automate kar deta hai.',
    
    'eco.stat1': '500+ Dukaanein',
    'eco.stat2': '17 Sec Checkout',
    'eco.stat3': '60% Kam Fraud',
    'eco.stat4': '99.9% Uptime',

    'eco.app1.label': 'STORE OWNERS KE LIYE',
    'eco.app1.title': '1. ClickOut Admin',
    'eco.app1.desc': 'Master Command Center. Ghar baithe poori dukaan dekho — live sales aur staff activity.',
    'eco.app1.feat1': 'Live Intelligence: Real-time revenue aur staffing radar track karo.',
    'eco.app1.feat2': 'Super Auditor: AI Fraud Score ke saath Order Autopsy karo.',
    'eco.app1.feat3': 'Quantum Offers: AI-driven promotions aur bundle pricing lagao.',
    'eco.app1.feat4': 'Procurement: Stock history dekh kar automatic PO generate karo.',

    'eco.app2.label': 'CUSTOMERS KE LIYE',
    'eco.app2.title': '2. ClickOut Customer',
    'eco.app2.desc': 'Queue-Killer Shopping Interface. Products scan karo, digital combos lagao, aur bina line mein khade hue gatepass generate karo.',
    'eco.app2.feat1': 'Instant Entry: Store QR scan karo aur shopping shuru karo.',
    'eco.app2.feat2': 'Smart Cart: Live barcode scanning aur discount locking.',
    'eco.app2.feat3': 'Digital Checkout: UPI se pay karo ya Cash QR generate karo.',
    'eco.app2.feat4': 'Digital Gatepass: Security guard ko dikhane ke liye QR paao.',

    'eco.app3.label': 'CASH COUNTER KE LIYE',
    'eco.app3.title': '3. ClickOut Cashier',
    'eco.app3.desc': 'Cash Payments Ka Bridge. India abhi bhi cash pe chalta hai, Cashier app cash customers ko digital ecosystem mein laata hai.',
    'eco.app3.feat1': 'Scan Cash QR: Customer ke phone pe bana Pay by Cash QR scan karo.',
    'eco.app3.feat2': 'One-Tap Approval: Cash lo aur turant digital Gatepass bhej do.',
    'eco.app3.feat3': 'Live Analytics: Daily cash collection aur successful scans live dekho.',

    'eco.app4.label': 'GUARDS & SECURITY KE LIYE',
    'eco.app4.title': '4. ClickOut Security',
    'eco.app4.desc': 'Ultimate Gatekeeper. AI-driven theft prevention jo manual receipt checking ko hata kar fast QR validation laata hai.',
    'eco.app4.feat1': 'Instant Verification: Customer ka exit QR verify karo.',
    'eco.app4.feat2': 'AI Spot Audits: Suspicious carts ko automatically physical verification ke liye roko.',
    'eco.app4.feat3': 'Ghost Visitor Alerts: Bina pay kiye nikalne walo ko gate pe roko.',

    'eco.app5.label': 'STORE STAFF KE LIYE',
    'eco.app5.title': '5. ClickOut IDT',
    'eco.app5.desc': 'Inventory Deposit Terminal. Staff ko smartphone se products digitize karne do — zero typing, AI se auto-fill.',
    'eco.app5.feat1': 'Rapid Scanning: Kisi bhi phone ko enterprise barcode scanner banao.',
    'eco.app5.feat2': 'AI Auto-Fill: Product packet scan karo aur AI details khud nikaal lega.',
    'eco.app5.feat3': 'Direct Admin Sync: Scanned stock direct Admin Dashboard pe approval ke liye bhejo.',
  }
};

// =========================================
// PROVIDER
// =========================================
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('clickout_lang');
    if (saved === 'en' || saved === 'hi') setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('clickout_lang', l);
  };

  const t = (key: string): TranslationValue => {
    return translations[lang][key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// =========================================
// HOOK
// =========================================
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
