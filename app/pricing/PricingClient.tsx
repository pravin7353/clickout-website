'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check, X, Sparkles, Shield, Zap, ArrowRight, Lock,
  HelpCircle, ChevronDown, Store, Users, ShoppingCart,
  MessageSquare, PhoneCall, Headphones, Clock, Gift
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ROICalculator from '@/components/pricing/ROICalculator';

// Pricing data structures
const prices = {
  spark: { monthly: 399, annual: 319, annualTotal: 3828 },
  pro: { monthly: 799, annual: 639, annualTotal: 7668 },
  growth: { monthly: 1499, annual: 1199, annualTotal: 14388 },
};

const WHATSAPP_LINK = "https://wa.me/919323137353?text=Namaste!%20Main%20ClickOut%20plans%20aur%20pricing%20ke%20baare%20mein%20baat%20karna%20chahta%20hoon.";
const ENTERPRISE_WHATSAPP_LINK = "https://wa.me/919323137353?text=Namaste!%20Main%20Enterprise%20(5%2B%20stores%20ya%20franchise)%20ke%20liye%20baat%20karna%20chahta%20hoon.";

export default function PricingClient() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const isAnnual = billing === 'annual';

  // Section 3: Full Comparison Table categories
  const comparisonCategories = [
    {
      category: 'Core Operations',
      rows: [
        { feature: 'QR Self-Checkout App', spark: 'yes', pro: 'yes', growth: 'yes' },
        { feature: 'Cashier POS + Billing', spark: 'yes', pro: 'yes', growth: 'yes' },
        { feature: 'Guard Exit Verification', spark: 'yes', pro: 'yes', growth: 'yes' },
        { feature: 'Basic Inventory Management', spark: 'yes', pro: 'yes', growth: 'yes' },
      ],
    },
    {
      category: 'Inventory & Procurement',
      rows: [
        { feature: 'Products / Services Catalog', spark: 'Unlimited', pro: 'Unlimited', growth: 'Unlimited' },
        { feature: 'Vendors / Suppliers Directory', spark: 'yes', pro: 'yes', growth: 'yes' },
        { feature: 'Low-Stock Alerts (SMS & App)', spark: 'yes', pro: 'yes', growth: 'yes' },
        { feature: 'Purchase Orders & GRN', spark: 'yes', pro: 'yes', growth: 'yes' },
      ],
    },
    {
      category: 'HR & Workforce',
      rows: [
        { feature: 'Basic Attendance Log', spark: 'yes', pro: 'yes', growth: 'yes' },
        { feature: 'Full Attendance (Geo-fence & Shifts)', spark: 'no', pro: 'yes', growth: 'yes' },
        { feature: 'Leave Management System', spark: 'no', pro: 'yes', growth: 'yes' },
        { feature: 'Salary, Overtime & Incentives', spark: 'no', pro: 'yes', growth: 'yes' },
      ],
    },
    {
      category: 'Finance',
      rows: [
        { feature: 'Basic GST Reports', spark: 'yes', pro: 'yes', growth: 'yes' },
        { feature: 'Advanced GST Reports (CA-grade)', spark: 'no', pro: 'no', growth: 'yes' },
        { feature: 'General Ledger & Day Book', spark: 'no', pro: 'no', growth: 'yes' },
        { feature: 'Auditor & CA Export Panel', spark: 'no', pro: 'no', growth: 'yes' },
        { feature: 'Refunds & Returns Management', spark: 'no', pro: 'no', growth: 'yes' },
      ],
    },
    {
      category: 'Security',
      rows: [
        { feature: 'Basic Fraud Rules', spark: 'yes', pro: 'yes', growth: 'yes' },
        { feature: 'AI Fraud Detection', spark: 'no', pro: 'yes', growth: 'yes' },
        { feature: 'Risk Engine & Anomaly Flags', spark: 'no', pro: 'yes', growth: 'yes' },
        { feature: 'Anti-Mock Location & GPS Lock', spark: 'no', pro: 'yes', growth: 'yes' },
      ],
    },
    {
      category: 'Growth Radar — Customer Marketing',
      rows: [
        { feature: 'Push Notifications', spark: 'no', pro: 'Unlimited', growth: 'Unlimited' },
        { feature: 'SMS Campaigns', spark: 'no', pro: 'coming-soon', growth: 'coming-soon' },
        { feature: 'WhatsApp Campaigns', spark: 'no', pro: 'coming-soon', growth: 'coming-soon' },
        { feature: 'Churn Radar Predictive AI', spark: 'no', pro: 'no', growth: 'yes' },
        { feature: 'Auto Winback Campaigns', spark: 'no', pro: 'no', growth: 'yes' },
      ],
    },
    {
      category: 'Multi-Store',
      rows: [
        { feature: 'Extra Stores Add-on', spark: 'Not available', pro: 'Up to 2 add-ons (₹299/mo each, +2,500 txns)', growth: 'Up to 4 add-ons (₹399/mo each, +6,000 txns)' },
        { feature: 'Cross-Store Inventory Transfer', spark: 'no', pro: 'no', growth: 'yes' },
        { feature: 'Consolidated Owner Dashboard', spark: 'no', pro: 'no', growth: 'yes' },
      ],
    },
    {
      category: 'Limits',
      rows: [
        { feature: 'Transactions / month included', spark: '500 txns / month', pro: '2,500 base + 2,500 per extra store', growth: '6,000 base + 6,000 per extra store' },
        { feature: 'Staff Accounts included', spark: '5 accounts', pro: '15 accounts', growth: '50 accounts' },
        { feature: 'POS Billing Counters included', spark: '1 counter', pro: '2 counters', growth: '5 counters' },
        { feature: 'Stores Included in Base Plan', spark: '1 store', pro: '1 store', growth: '1 store' },
      ],
    },
  ];

  // Section 4: Add-Ons
  const addOns = [
    {
      title: 'Extra Store Add-on',
      price: '₹299–₹399',
      period: '/store/month',
      desc: 'Add extra branch locations. Each store includes its own transaction quota. Pro: max 2 stores. Growth: max 4 stores.',
      badge: 'Scale Branches',
      proPrice: 'Pro: ₹299/mo per store (+2,500 txns)',
      growthPrice: 'Growth: ₹399/mo per store (+6,000 txns)',
    },
    {
      title: 'Extra POS Counter',
      price: '₹199',
      period: '/counter/month',
      desc: 'Add dedicated cashier billing terminals for festival or peak rush hours.',
      badge: 'Faster Billing',
    },
    {
      title: 'Staff Block +10',
      price: '₹199',
      period: '/month',
      desc: '10 additional staff accounts with role-based access for helpers, billing, and floor staff.',
      badge: 'Team Access',
    },
    {
      title: 'ERP & Tally Sync',
      price: '₹499',
      period: '/month',
      desc: 'Automated 2-way sync with TallyPrime, Busy, Marg ERP, and custom accounting systems.',
      badge: 'Automation',
    },
    {
      title: 'Dedicated Ops Specialist',
      price: '₹1,499',
      period: '/month',
      desc: 'Dedicated retail operations specialist on direct WhatsApp call with 2-hour emergency SLA.',
      badge: 'VIP Support',
    },
    {
      title: 'Onboarding Session',
      price: '₹999',
      period: '/session',
      desc: '1-on-1 staff video training, bulk barcode catalog import & thermal printer configuration.',
      badge: 'Done-For-You',
    },
  ];

  // Section 5: FAQs
  const faqs = [
    {
      q: 'What happens after my 15-day trial?',
      a: "If you don't choose a paid plan, your account automatically moves to our free Spark Lite plan — 1 store, 100 transactions/month, forever free. You can upgrade anytime.",
    },
    {
      q: 'Do extra stores get their own transaction quota?',
      a: 'Yes. On Pro, each extra store adds 2,500 transactions/month to your account. On Growth, each extra store adds 6,000 transactions/month.',
    },
    {
      q: 'What is the maximum number of stores I can have?',
      a: 'Pro supports up to 3 stores total (1 base + 2 add-ons). Growth supports up to 5 stores total (1 base + 4 add-ons). For more, contact us for Enterprise.',
    },
    {
      q: 'GST invoice milega?',
      a: 'Haan. ClickOut har subscription par proper GST invoice provide karta hai jisme aap input tax credit (ITC) claim kar sakte ho.',
    },
    {
      q: 'Kya main plans beech mein change kar sakta hu?',
      a: 'Haan, anytime upgrade kar sakte ho. Downgrade next billing cycle se effective hoti hai.',
    },
    {
      q: 'Annual plan refund hoga agar band karna ho?',
      a: 'Proportional refund milega remaining months ka. No lock-in.',
    },
  ];

  const renderCellContent = (val: string) => {
    if (val === 'yes') {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--accent-bg)] text-[var(--accent)] font-bold text-sm">
          <Check size={15} strokeWidth={2.5} />
        </span>
      );
    }
    if (val === 'no') {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/5 dark:bg-white/5 text-[var(--text-secondary)] opacity-50">
          <X size={15} strokeWidth={2} />
        </span>
      );
    }
    if (val === 'coming-soon') {
      return (
        <span
          title="SMS & WhatsApp campaigns are in development. Existing customers will be notified when available."
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/30 cursor-help"
        >
          <Clock size={12} className="shrink-0" />
          <span>Coming Soon</span>
        </span>
      );
    }
    if (val === 'Unlimited' || val === 'unlimited') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent)]/30">
          <Check size={14} strokeWidth={2.5} className="shrink-0" />
          <span>Unlimited</span>
        </span>
      );
    }
    return (
      <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--bg-base)] text-[var(--text-primary)] border border-[var(--border-color)]">
        {val}
      </span>
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Navbar />

      <main className="pt-28 md:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* ========================================================= */}
        {/* SECTION 1: HERO */}
        {/* ========================================================= */}
        <section className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 border border-[var(--accent)]/30 bg-[var(--accent-bg)] text-[var(--accent)] shadow-sm">
            <Sparkles size={14} />
            <span>TRANSPARENT RETAIL OS PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-[1.15]" style={{ color: 'var(--text-primary)' }}>
            Simple pricing. Powerful retail.
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Start free. Grow at your own pace. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="inline-flex items-center p-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
              <button
                type="button"
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${billing === 'monthly'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-base)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBilling('annual')}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${billing === 'annual'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-base)] shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
              >
                <span>Annual</span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent)] text-black">
                  Save up to 20%
                </span>
              </button>
            </div>

            <p className="text-xs font-medium tracking-wide uppercase" style={{ color: 'var(--text-secondary)' }}>
              All prices exclude 18% GST
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: FREE TRIAL BANNER & PLAN CARDS */}
        {/* ========================================================= */}
        <section className="mb-24">
          {/* Free Trial Banner (above cards) */}
          <div className="max-w-[1240px] mx-auto mb-10 p-5 sm:p-6 rounded-2xl md:rounded-3xl border border-[var(--accent)]/40 bg-[var(--accent-bg)] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--accent)]/30 flex items-center justify-center text-2xl shrink-0 shadow-sm">
                🎁
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold flex items-center justify-center sm:justify-start gap-2" style={{ color: 'var(--text-primary)' }}>
                  Start with a FREE 14-Day Trial
                </h3>
                <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Full access to all features. No credit card required.
                </p>
              </div>
            </div>

            <Link
              href="/signup?plan=trial"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[var(--accent)] text-black hover:opacity-95 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
            >
              Start Free Trial <ArrowRight size={16} />
            </Link>
          </div>

          {/* Plan Cards Grid: Spark | Pro | Growth */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1240px] mx-auto items-stretch">
            {/* 1. SPARK CARD */}
            <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] p-7 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      Spark
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                      Single Store
                    </span>
                  </div>
                  <p className="text-sm italic font-medium" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;Chhoti dukaan ka perfect start&rdquo;
                  </p>
                </div>

                <div className="w-full h-px bg-[var(--border-color)] mb-6" />

                {/* Pricing Display */}
                <div className="mb-6">
                  {isAnnual ? (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                          ₹{prices.spark.annual}
                        </span>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          /month
                        </span>
                      </div>
                      <p className="text-xs font-medium mt-1" style={{ color: 'var(--accent)' }}>
                        ₹{prices.spark.annualTotal.toLocaleString('en-IN')}/year billed annually
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                          ₹{prices.spark.monthly}
                        </span>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          /month
                        </span>
                      </div>
                      <p className="text-xs font-medium mt-1" style={{ color: 'var(--text-secondary)' }}>
                        (billed monthly)
                      </p>
                    </div>
                  )}
                  <p className="text-[11px] font-semibold tracking-wide uppercase mt-1.5" style={{ color: 'var(--text-muted)' }}>
                    + 18% GST
                  </p>
                </div>

                {/* Primary CTA */}
                <Link
                  href={`/signup?plan=spark&billing=${billing}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm bg-[var(--bg-base)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-primary)] transition-all shadow-sm hover:shadow"
                >
                  Start Spark <ArrowRight size={16} />
                </Link>

                <div className="w-full h-px bg-[var(--border-color)] my-6" />

                {/* Prominent Specs Banner */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-color)] mb-6 flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
                    <Store size={15} className="text-[var(--accent)]" /> 1 Store (no add-ons)
                  </span>
                  <span className="text-xs font-bold text-[var(--accent)] bg-[var(--accent-bg)] px-2.5 py-1 rounded-md">
                    500 txn/month
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>1 Store included (no add-ons)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>500 transactions/month</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>5 Staff Accounts</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>1 POS Billing Counter</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>QR Self-Checkout App</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Cashier POS + Billing</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Guard Exit Verification</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Inventory Management &amp; Low-Stock Alerts</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Procurement &amp; Suppliers Directory</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Basic GST Reports</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>WhatsApp Support</span>
                  </div>

                  {/* Locked features */}
                  <div className="pt-2 border-t border-[var(--border-color)]/60 space-y-2.5 opacity-60">
                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                      <Lock size={15} className="shrink-0 mt-0.5" />
                      <span>No HR module (Pro only)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                      <Lock size={15} className="shrink-0 mt-0.5" />
                      <span>No Finance module (Growth only)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                      <Lock size={15} className="shrink-0 mt-0.5" />
                      <span>Extra Store add-ons not available</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                      <Lock size={15} className="shrink-0 mt-0.5" />
                      <span>AI Fraud Detection (Pro only)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. PRO CARD (MOST POPULAR BADGE - GREEN) */}
            <div className="bg-[var(--bg-card)] rounded-3xl border-2 border-[var(--accent)] p-7 md:p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(0,200,83,0.14)] relative group scale-[1.02] z-10">
              {/* Green Most Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--accent)] text-black shadow-lg">
                <Sparkles size={13} fill="currentColor" />
                <span>⭐ Most Popular</span>
              </div>

              <div>
                {/* Header */}
                <div className="mb-6 pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      Pro
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent)]/30">
                      Best for Retailers
                    </span>
                  </div>
                  <p className="text-sm italic font-medium" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;Puri dukaan, ek dashboard&rdquo;
                  </p>
                </div>

                <div className="w-full h-px bg-[var(--border-color)] mb-6" />

                {/* Pricing Display */}
                <div className="mb-6">
                  {isAnnual ? (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                          ₹{prices.pro.annual}
                        </span>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          /month
                        </span>
                      </div>
                      <p className="text-xs font-bold mt-1" style={{ color: 'var(--accent)' }}>
                        ₹{prices.pro.annualTotal.toLocaleString('en-IN')}/year billed annually
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                          ₹{prices.pro.monthly}
                        </span>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          /month
                        </span>
                      </div>
                      <p className="text-xs font-medium mt-1" style={{ color: 'var(--text-secondary)' }}>
                        (billed monthly)
                      </p>
                    </div>
                  )}
                  <p className="text-[11px] font-semibold tracking-wide uppercase mt-1.5" style={{ color: 'var(--text-muted)' }}>
                    + 18% GST
                  </p>
                </div>

                {/* Primary CTA (Green Filled Button) */}
                <Link
                  href={`/signup?plan=pro&billing=${billing}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm bg-[var(--accent)] text-black hover:opacity-95 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  Start Pro <ArrowRight size={16} />
                </Link>

                <div className="w-full h-px bg-[var(--border-color)] my-6" />

                {/* Prominent Specs Banner */}
                <div className="p-3.5 rounded-xl bg-[var(--accent-bg)] border border-[var(--accent)]/30 mb-6 flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
                    <Store size={15} className="text-[var(--accent)] shrink-0" /> 1 Store (+2 extra @ ₹299/mo each, +2,500 txns each)
                  </span>
                  <span className="text-xs font-bold text-[var(--accent)] bg-[var(--bg-card)] px-2.5 py-1 rounded-md shadow-xs border border-[var(--accent)]/30 shrink-0 ml-2">
                    2,500 txn/month
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2.5 font-bold" style={{ color: 'var(--accent)' }}>
                    <Check size={17} className="shrink-0 mt-0.5" />
                    <span>Everything in Spark, plus:</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>1 Store included base</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>2,500 transactions/month base</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Extra Store add-on: up to 2 stores @ ₹299/mo each</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Each extra store includes +2,500 transactions/month</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent)]/30">
                      Max 2 extra stores — Need more? Upgrade to Growth
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>15 Staff Accounts</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>2 POS Billing Counters</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>
                      HR module included (Attendance, Leaves, Salary, Overtime &amp; Incentives)
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>AI Fraud Detection &amp; Risk Engine</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-color)] space-y-2">
                    <div className="text-xs font-bold text-[var(--accent)] flex items-center gap-1.5">
                      <Sparkles size={13} />
                      <span>Growth Radar — Customer Marketing</span>
                    </div>
                    <div className="space-y-1.5 pl-1 text-xs">
                      <div className="flex items-center gap-2 font-medium text-[var(--text-primary)]">
                        <Check size={14} className="text-[var(--accent)] shrink-0" />
                        <span>Push Notifications — Unlimited (included)</span>
                      </div>
                      <div
                        className="flex items-center gap-2 text-amber-500 font-medium cursor-help"
                        title="SMS & WhatsApp campaigns are in development. Existing customers will be notified when available."
                      >
                        <Clock size={13} className="shrink-0" />
                        <span>SMS Campaigns — <strong className="font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/25 text-[10px]">Coming Soon</strong></span>
                      </div>
                      <div
                        className="flex items-center gap-2 text-amber-500 font-medium cursor-help"
                        title="SMS & WhatsApp campaigns are in development. Existing customers will be notified when available."
                      >
                        <Clock size={13} className="shrink-0" />
                        <span>WhatsApp Campaigns — <strong className="font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/25 text-[10px]">Coming Soon</strong></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Guard Console &amp; IDT Deposits</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Basic GST Reports</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Priority Support (8hr SLA)</span>
                  </div>

                  {/* Locked features */}
                  <div className="pt-2 border-t border-[var(--border-color)]/60 space-y-2.5 opacity-60">
                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                      <Lock size={15} className="shrink-0 mt-0.5" />
                      <span>No Finance module (General Ledger, CA Export &amp; Returns) (Growth)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                      <Lock size={15} className="shrink-0 mt-0.5" />
                      <span>Multi-Store Dashboard &amp; Stock Transfer (Growth)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                      <Lock size={15} className="shrink-0 mt-0.5" />
                      <span>Churn Radar &amp; Auto-Winback (Growth)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
                      <Lock size={15} className="shrink-0 mt-0.5" />
                      <span>Dedicated Account Manager (Growth)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. GROWTH CARD */}
            <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] p-7 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                      Growth
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-base)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                      Multi-Store &amp; Chains
                    </span>
                  </div>
                  <p className="text-sm italic font-medium" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;Multiple stores, ek dimag&rdquo;
                  </p>
                </div>

                <div className="w-full h-px bg-[var(--border-color)] mb-6" />

                {/* Pricing Display */}
                <div className="mb-6">
                  {isAnnual ? (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                          ₹{prices.growth.annual.toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          /month
                        </span>
                      </div>
                      <p className="text-xs font-medium mt-1" style={{ color: 'var(--accent)' }}>
                        ₹{prices.growth.annualTotal.toLocaleString('en-IN')}/year billed annually
                      </p>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                          ₹{prices.growth.monthly.toLocaleString('en-IN')}
                        </span>
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          /month
                        </span>
                      </div>
                      <p className="text-xs font-medium mt-1" style={{ color: 'var(--text-secondary)' }}>
                        (billed monthly)
                      </p>
                    </div>
                  )}
                  <p className="text-[11px] font-semibold tracking-wide uppercase mt-1.5" style={{ color: 'var(--text-muted)' }}>
                    + 18% GST
                  </p>
                </div>

                {/* Primary CTA */}
                <Link
                  href={`/signup?plan=growth&billing=${billing}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all shadow-sm"
                >
                  Start Growth <ArrowRight size={16} />
                </Link>

                <div className="w-full h-px bg-[var(--border-color)] my-6" />

                {/* Prominent Specs Banner */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-color)] mb-6 flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
                    <Store size={15} className="text-[var(--accent)] shrink-0" /> 1 Store (+4 extra @ ₹399/mo each, +6,000 txns each)
                  </span>
                  <span className="text-xs font-bold text-[var(--accent)] bg-[var(--accent-bg)] px-2.5 py-1 rounded-md shrink-0 ml-2">
                    6,000 txn/month
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2.5 font-bold" style={{ color: 'var(--accent)' }}>
                    <Check size={17} className="shrink-0 mt-0.5" />
                    <span>Everything in Pro, plus:</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>1 Store included base</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>6,000 transactions/month base</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Extra Store add-on: up to 4 stores @ ₹399/mo each</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Each extra store includes +6,000 transactions/month</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent)]/30">
                      Max 4 extra stores — Need more? Contact us for Enterprise
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>50 Staff Accounts</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>5 POS Billing Counters</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      HR module + Finance module included
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>
                      Full Finance &amp; CA Module (General Ledger, Day Book, CA Export, Refunds)
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Multi-Store Analytics Dashboard &amp; Consolidated P&amp;L</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Cross-Store Inventory Transfer</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Advanced CA-Grade GST Reports &amp; Combined GST</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Churn Radar &amp; Auto Winback Campaigns</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Growth Lock Tracker (renewal discount)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Dedicated Account Manager &amp; Monthly Review Call</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check size={17} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>Priority Support (4hr SLA)</span>
                  </div>
                </div>

                {/* Enterprise Note & Link */}
                <div className="mt-8 pt-5 border-t border-[var(--border-color)] text-center bg-[var(--bg-base)]/50 p-4 rounded-2xl">
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Enterprise? 5+ stores or franchise?
                  </p>
                  <a
                    href={ENTERPRISE_WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline"
                  >
                    Talk to us <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ROI & SAVINGS CALCULATOR */}
        {/* ========================================================= */}
        <section className="mb-24">
          <ROICalculator />
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: COMPARISON TABLE (FULL MODULE MATRIX) */}
        {/* ========================================================= */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              Compare All Features &amp; Modules
            </h2>
            <p className="text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
              Full breakdown across every tier. All core features stay active during your 14-day trial.
            </p>
          </div>

          <div className="w-full overflow-x-auto rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[var(--border-color)] bg-[var(--bg-base)]">
                  <th className="py-5 px-6 font-bold text-sm" style={{ color: 'var(--text-primary)', width: '40%' }}>
                    Feature / Module
                  </th>
                  <th className="py-5 px-6 text-center font-bold text-sm" style={{ color: 'var(--text-primary)', width: '20%' }}>
                    Spark
                    <div className="text-[11px] font-normal text-[var(--text-secondary)]">₹399/mo</div>
                  </th>
                  <th className="py-5 px-6 text-center font-bold text-sm bg-[var(--accent-bg)]/50 border-x border-[var(--accent)]/30" style={{ color: 'var(--accent)', width: '20%' }}>
                    <div className="flex items-center justify-center gap-1">
                      <span>Pro</span>
                      <Sparkles size={13} />
                    </div>
                    <div className="text-[11px] font-semibold text-[var(--accent)]">₹799/mo (Popular)</div>
                  </th>
                  <th className="py-5 px-6 text-center font-bold text-sm" style={{ color: 'var(--text-primary)', width: '20%' }}>
                    Growth
                    <div className="text-[11px] font-normal text-[var(--text-secondary)]">₹1,499/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((group, groupIndex) => (
                  <React.Fragment key={group.category}>
                    {/* Category Header Row */}
                    <tr className="border-t border-b border-[var(--border-color)] bg-[var(--bg-base)]/80">
                      <td colSpan={4} className="py-3 px-6 text-xs font-extrabold tracking-wider uppercase" style={{ color: 'var(--accent)' }}>
                        {group.category}
                      </td>
                    </tr>

                    {/* Category Detail Rows */}
                    {group.rows.map((row, rowIndex) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-[var(--border-color)]/60 hover:bg-[var(--bg-base)]/40 transition-colors ${rowIndex === group.rows.length - 1 && groupIndex === comparisonCategories.length - 1 ? 'border-b-0' : ''
                          }`}
                      >
                        <td className="py-4 px-6 text-xs sm:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {row.feature}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {renderCellContent(row.spark)}
                        </td>
                        <td className="py-4 px-6 text-center bg-[var(--accent-bg)]/20 border-x border-[var(--accent)]/20">
                          {renderCellContent(row.pro)}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {renderCellContent(row.growth)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: ADD-ONS STRIP */}
        {/* ========================================================= */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
              Add-Ons — Pay only for what you need
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Expand capacity and power tools anytime without having to upgrade your entire tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 flex flex-col justify-between hover:border-[var(--accent)] hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent)]/30">
                      {addon.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {addon.title}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                      {addon.price}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      {addon.period}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {addon.desc}
                  </p>

                  {(addon as any).proPrice && (
                    <div className="mt-3 pt-3 border-t border-[var(--border-color)]/60 text-[11px] font-semibold space-y-1">
                      <div className="text-[var(--text-primary)] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        {(addon as any).proPrice}
                      </div>
                      <div className="text-[var(--text-primary)] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        {(addon as any).growthPrice}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: FAQ SECTION */}
        {/* ========================================================= */}
        <section className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-3 bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent)]/30">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Sawaal &amp; Jawaab (FAQs)
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-base cursor-pointer hover:bg-[var(--bg-base)]/40 transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[var(--accent)] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm leading-relaxed border-t border-[var(--border-color)]/50" style={{ color: 'var(--text-secondary)' }}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: BOTTOM CTA */}
        {/* ========================================================= */}
        <section className="max-w-4xl mx-auto text-center p-8 sm:p-12 md:p-16 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-[var(--accent)]/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
              Abhi shuru karo — 14 din free, koi card nahi
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto mb-8" style={{ color: 'var(--text-secondary)' }}>
              Live in your store within 10 minutes. Zero hardware purchase necessary.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup?plan=trial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-[var(--accent)] text-black hover:opacity-95 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Start Free Trial <ArrowRight size={18} />
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-[#25D366] text-white hover:brightness-105 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>💬</span> Talk to Sales — WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
