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

    //FAQ's
    'faq.pageTitle': 'Frequently Asked Questions',
    'faq.q1': 'What is ClickOut?',
    'faq.a1': 'ClickOut is India\'s all-in-one retail operating system. It eliminates billing queues through QR-based self-checkout, while giving store owners real-time inventory management, employee authentication, fraud prevention, customer analytics, and a multi-store command center — all in one platform.',
    'faq.q2': 'How does the self-checkout process work?',
    'faq.a2': 'Customers scan a QR code at store entry, scan product barcodes as they shop using the ClickOut app, pay digitally via UPI or card, and exit through a quick gatepass scan. The entire checkout takes seconds with zero queues.',
    'faq.q3': 'Do customers need to download an app?',
    'faq.a3': 'Yes, customers use the ClickOut app to scan products and pay. It is available on Android and iOS. The app is lightweight and designed to work seamlessly even on low-end smartphones common across India.',
    'faq.q4': 'Which payment methods does ClickOut support?',
    'faq.a4': 'ClickOut supports UPI (Google Pay, PhonePe, Paytm, BHIM, etc.), debit and credit cards, and QR-based digital payments. Real-time UPI and QR settlement is included from the Mini plan onwards.',
    'faq.q5': 'Is ClickOut secure? Can customers manipulate the system?',
    'faq.a5': 'Every session uses encrypted QR tokens that expire after use. The Risk Engine AI scores each transaction in real time for fraud signals. Mandatory gatepass exit validation ensures no item leaves without a valid payment receipt. All data is end-to-end encrypted.',
    'faq.q6': 'What happens if a customer skips scanning an item?',
    'faq.a6': 'ClickOut\'s fraud detection engine monitors cart anomalies, scan gaps, and exit patterns. Suspicious sessions are flagged instantly and store staff are alerted. The system is designed to make shrinkage difficult without creating friction for honest shoppers.',
    'faq.q7': 'Can store owners track live shoppers inside the store?',
    'faq.a7': 'Yes. The ClickOut dashboard shows real-time active sessions — how many customers are currently shopping, their cart values, and time in store. This gives owners full visibility without needing physical counters.',
    'faq.q8': 'How does ClickOut handle returns and refunds?',
    'faq.a8': 'The Refund Monitoring Engine (available from the Basic plan) tracks all refund requests against original transactions. Store staff can approve or reject refunds from the dashboard, with a full audit trail maintained for every case.',
    'faq.q9': 'Does ClickOut work for multi-branch or chain stores?',
    'faq.a9': 'Yes. The Command Center is built specifically for multi-location retail chains. Owners and managers can monitor inventory, sales, staff activity, and fraud alerts across all branches from a single dashboard.',
    'faq.q10': 'What is the QR Bailout Protection feature?',
    'faq.a10': 'QR Bailout Protection (Growth plan and above) is a fallback mechanism that ensures checkout can proceed even if the primary QR system faces a temporary disruption. It prevents operational downtime during network or hardware issues.',
    'faq.q11': 'How does inventory management work in ClickOut?',
    'faq.a11': 'Every product scan during checkout automatically updates your live inventory count. Low-stock alerts, procurement tracking, and ledger management are built in. The Growth plan includes the full Procurement suite for automated reorder workflows.',
    'faq.q12': 'What is the difference between Mini, Basic, and Growth plans?',
    'faq.a12': 'Mini (₹99/mo) suits small independent stores with 1 terminal and 100 transactions per month. Basic (₹299/mo) is for growing shops needing 3 terminals, 1,000 transactions, fraud detection, and staff management. Growth (₹699/mo) adds 10 terminals, unlimited transactions, AI fraud intelligence, and multi-store analytics.',
    'faq.q13': 'Is there a free trial available?',
    'faq.a13': 'Please contact the ClickOut sales team or visit clickout.in to check current trial or demo availability. The team offers walkthroughs tailored to your store size and needs.',
    'faq.q14': 'How is employee authentication handled?',
    'faq.a14': 'ClickOut includes staff identity verification so only authorised employees can access manager dashboards, approve refunds, or override system alerts. Role-based access control limits what each staff member can see or action.',
    'faq.q15': 'Does ClickOut generate GST-compliant bills?',
    'faq.a15': 'Yes. ClickOut is GST-ready. Digital receipts generated after each checkout include all required tax fields and can be downloaded or sent to customers via the app.',
    'faq.q16': 'How fast is the actual checkout compared to a traditional billing counter?',
    'faq.a16': 'Most ClickOut checkouts complete in under 30 seconds. Traditional billing counters in busy supermarkets average 5–15 minutes of wait time. For high-traffic stores, this translates to significantly higher customer throughput and satisfaction.',
    'faq.q17': 'Can ClickOut integrate with our existing POS or ERP system?',
    'faq.a17': 'Custom API integrations are available on the Enterprise plan. For smaller plans, ClickOut operates as a standalone system. Contact the sales team to discuss specific integration requirements for your existing setup.',
    'faq.q18': 'What kind of analytics and reports does ClickOut provide?',
    'faq.a18': 'Depending on your plan, you get dashboards covering real-time revenue, transaction volume, peak hours, product-level sales, customer return frequency, staff performance, and fraud incident reports. The Growth plan includes the Super Auditor Suite for deep operational analysis.',
    'faq.q19': 'What happens if the internet goes down in my store?',
    'faq.a19': 'ClickOut is designed with connectivity resilience in mind. The QR Bailout Protection feature on the Growth plan provides offline fallback modes. For detailed offline capability specifics, reach out to the ClickOut team based on your store infrastructure.',
    'faq.q20': 'How do I get started with ClickOut?',
    'faq.a20': 'Visit clickout.in, choose a plan that fits your store size, and sign up. The onboarding team will guide you through terminal setup, staff training, and app configuration. Enterprise customers get a dedicated account manager for the full rollout.',
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

    //FAQ's
    'faq.pageTitle': 'Aksar Pooche Jaane Wale Sawal (FAQ)',
    'faq.q1': 'ClickOut kya hai?',
    'faq.a1': 'ClickOut India ka all-in-one retail operating system hai. Yeh QR-based self-checkout se billing ki linein khatam karta hai. Saath hi store owners ko real-time inventory management, employee authentication, fraud prevention, aur multi-store command center ek hi platform par deta hai.',
    'faq.q2': 'Self-checkout process kaise kaam karta hai?',
    'faq.a2': 'Customers store me entry par ek QR scan karte hain, ClickOut app se shopping karte waqt products scan karte hain, UPI/Card se digital payment karte hain, aur gatepass dikha kar exit karte hain. Poora process bina kisi line ke seconds mein ho jata hai.',
    'faq.q3': 'Kya customers ko koi app download karna padega?',
    'faq.a3': 'Haan, customers ko products scan aur pay karne ke liye ClickOut app use karna hota hai. Yeh Android aur iOS dono par available hai. App bahut halka hai aur saste smartphones par bhi smoothly kaam karta hai.',
    'faq.q4': 'ClickOut kaunse payment methods support karta hai?',
    'faq.a4': 'ClickOut UPI (GPay, PhonePe, Paytm aadi), Debit/Credit Cards aur QR-based payments support karta hai. Real-time UPI aur QR settlement Mini plan se hi available hai.',
    'faq.q5': 'Kya ClickOut secure hai? Kya customers dhokha kar sakte hain?',
    'faq.a5': 'Har session me encrypted QR tokens use hote hain jo expire ho jaate hain. Risk Engine AI fraud ke liye har transaction ko real-time me check karta hai. Exit par gatepass validation zaroori hai, isliye bina payment koi item baahar nahi jaa sakta.',
    'faq.q6': 'Agar customer koi item scan karna bhool jaye toh kya hoga?',
    'faq.a6': 'ClickOut ka fraud detection engine cart anomalies, scan gaps aur exit patterns monitor karta hai. Suspicious sessions turant flag ho jaate hain aur staff ko alert mil jata hai. System is tarah banaya gaya hai ki chori karna mushkil ho.',
    'faq.q7': 'Kya store owners live shoppers ko track kar sakte hain?',
    'faq.a7': 'Haan. ClickOut dashboard real-time me active sessions dikhata hai — kitne log abhi shop kar rahe hain, unka cart value kitna hai, aur unhe kitna time hua hai. Isse owner ko bina store me rahe poori jankari milti hai.',
    'faq.q8': 'Returns aur refunds kaise manage hote hain?',
    'faq.a8': 'Refund Monitoring Engine (Basic plan me) saari refund requests ko original transaction ke saath track karta hai. Staff dashboard se refund approve ya reject kar sakta hai, jiska poora record rehta hai.',
    'faq.q9': 'Kya ClickOut multi-branch chain stores ke liye kaam karta hai?',
    'faq.a9': 'Haan. Command Center multi-location retail chains ke liye hi banaya gaya hai. Ek hi dashboard se inventory, sales, staff aur fraud alerts sabhi branches ke liye monitor kiye jaa sakte hain.',
    'faq.q10': 'QR Bailout Protection feature kya hai?',
    'faq.a10': 'QR Bailout Protection (Growth plan aur upar) ek fallback system hai jo network ya hardware issue aane par bhi checkout rukkne nahi deta. Yeh offline mode jaisa kaam karta hai.',
    'faq.q11': 'Inventory management kaise kaam karta hai?',
    'faq.a11': 'Jaise hi koi product scan hota hai, live inventory auto-update ho jaati hai. Low-stock alerts aur ledger management built-in hai. Growth plan me automatic reorder ke liye poora Procurement suite milta hai.',
    'faq.q12': 'Mini, Basic aur Growth plans me kya farak hai?',
    'faq.a12': 'Mini (₹99/mo) chhoti dukaano ke liye hai (1 terminal, 100 txn). Basic (₹299/mo) badhti dukaano ke liye hai (3 terminal, 1000 txn, fraud detection). Growth (₹699/mo) me 10 terminal, unlimited txn, AI fraud intelligence aur multi-store analytics milta hai.',
    'faq.q13': 'Kya free trial available hai?',
    'faq.a13': 'Aap clickout.in visit kar sakte hain ya sales team se baat karke apne store size ke hisaab se trial ya demo schedule kar sakte hain.',
    'faq.q14': 'Staff authentication kaise hoti hai?',
    'faq.a14': 'ClickOut me staff identity verification hai, jisse sirf authorised log hi refunds approve ya alerts override kar sakte hain. Role-based access se tay hota hai kaun kya dekh ya kar sakta hai.',
    'faq.q15': 'Kya ClickOut GST-compliant bills generate karta hai?',
    'faq.a15': 'Haan. ClickOut poori tarah GST-ready hai. Digital receipts me saare zaroori tax details hote hain, aur customers inhe app se download kar sakte hain.',
    'faq.q16': 'Traditional billing counter ke mukable yeh kitna fast hai?',
    'faq.a16': 'Zyada tar ClickOut checkouts 30 seconds me poore ho jaate hain. Traditional billing me 5–15 minute lagte hain. Isse customers ka time bachta hai aur experience acha hota hai.',
    'faq.q17': 'Kya ClickOut existing POS/ERP ke saath integrate ho sakta hai?',
    'faq.a17': 'Enterprise plan me custom API integrations available hain. Chhote plans me ClickOut ek standalone system ki tarah kaam karta hai.',
    'faq.q18': 'ClickOut me kis tarah ki reports milti hain?',
    'faq.a18': 'Aapko real-time revenue, peak hours, product sales, staff performance aur fraud reports milti hain. Growth plan me deep analysis ke liye Super Auditor Suite bhi hai.',
    'faq.q19': 'Agar store ka internet band ho jaye toh kya hoga?',
    'faq.a19': 'Growth plan ka QR Bailout Protection offline mode me support deta hai. Connectivity issue ke dauran bhi transactions rukti nahi. Zyada details ke liye hamari team se baat karein.',
    'faq.q20': 'Main ClickOut kaise shuru kar sakta hoon?',
    'faq.a20': 'clickout.in par jayein, plan chunein aur sign up karein. Hamari onboarding team terminal setup aur staff training me madad karegi. Enterprise ke liye ek dedicated account manager diya jaata hai.',
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
