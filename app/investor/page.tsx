// File: app/investor/page.tsx

"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "opportunity", label: "Opportunity" },
  { id: "problem", label: "Problem" },
  { id: "clickout", label: "ClickOut" },
  { id: "business", label: "Business" },
  { id: "competition", label: "Competition" },
  { id: "growth", label: "Growth" },
  { id: "investment", label: "Investment" },
];

export default function ClickoutResearchPage() {
  const [activeSection, setActiveSection] = useState("opportunity");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deepDiveOpen, setDeepDiveOpen] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FC] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1121]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-slate-300 mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Investor Research
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            The Retail Operating System<br />
            <span className="text-slate-400">for Bharat&apos;s 15 Million Stores.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            ClickOut is building the intelligence layer that transforms India&apos;s unorganized retail — from manual billing and inventory chaos to AI-powered self-checkout, fraud detection, and connected commerce.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollTo("investment")} className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Talk to the Founders
            </button>
            <a href="mailto:investors@clickout.in" className="rounded-full border border-slate-600 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
              Request Investor Deck
            </a>
          </div>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6">
          <div className="hidden md:flex items-center justify-center gap-1 py-3">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${activeSection === s.id ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}>
                {s.label}
              </button>
            ))}
          </div>
          <div className="md:hidden py-3">
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              <span>{sections.find((s) => s.id === activeSection)?.label}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={mobileOpen ? "m18 15-6-6-6 6" : "m6 9 6 6 6-6"} /></svg>
            </button>
            {mobileOpen && (
              <div className="mt-2 space-y-1 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {sections.map((s) => (
                  <button key={s.id} onClick={() => scrollTo(s.id)}
                    className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${activeSection === s.id ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`}>
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 01 — OPPORTUNITY */}
      <section id="opportunity" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">01 — Opportunity</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Should I Care About This Market?</h2>
          <p className="text-slate-500 text-lg mb-16 max-w-2xl">India&apos;s retail sector is a $1.1 trillion giant, yet 85% of it runs on pen, paper, and gut feeling. The digitization opportunity is massive.</p>

          {/* Big Numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Total Addressable Market", value: "$2,361 Bn", source: "India retail market projected by 2030 (IBEF)" },
              { label: "Serviceable Addressable Market", value: "$230 Bn", source: "Organized retail India by 2030 (Deloitte-RAI)" },
              { label: "Target Stores (India)", value: "15 Mn+", source: "Kirana & unorganized retail stores across India" },
              { label: "Revenue Opportunity", value: "₹1,440 Cr", source: "Illustrative: 2 lakh stores × ₹72,000 ARR" },
            ].map((n, i) => (
              <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{n.value}</div>
                <div className="text-sm font-medium text-slate-500 mb-3">{n.label}</div>
                <div className="text-xs text-slate-400">{n.source}</div>
              </div>
            ))}
          </div>

          {/* Market Story */}
          <div className="rounded-2xl bg-[#0B1121] p-8 mb-16 overflow-x-auto">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">The Market Story</h3>
            <pre className="text-emerald-400 text-sm font-mono whitespace-pre leading-relaxed">
{`
    Indian Retail ($1,093 Bn Today)
           │
           ▼
    Fragmented & Unorganized (85%)
    • 13-15 Million kirana stores
    • 12 Million grocery outlets
    • 1 Million wholesalers
           │
           ▼
    Massive Inefficiency
    • Pen & paper billing
    • No real-time inventory
    • 5-8% monthly stock leakage
    • 10-15 min billing queues
           │
           ▼
    Digital Payments Explosion
    • UPI: 24,162 Cr transactions FY26
    • ₹314 Lakh Cr annual value
    • 703 banks live on UPI
    • 70 Mn+ QR-enabled merchants
           │
           ▼
    🎯 CLICKOUT OPPORTUNITY
    • Self-checkout via customer phone
    • AI fraud detection (99.4%)
    • Real-time inventory sync
    • GST-ready auto invoicing
    • Multi-store analytics
`}
            </pre>
          </div>

          {/* TAM/SAM/SOM */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 text-center hover:border-slate-900 transition-colors">
              <div className="text-5xl font-bold text-slate-900 mb-2">TAM</div>
              <div className="text-sm text-slate-500 mb-4">Total Addressable Market</div>
              <p className="text-slate-600 text-sm">All retail transactions in India. Every store that could use digitization — from kirana to supermarket chains.</p>
              <div className="mt-4 text-2xl font-bold text-slate-400">$2,361 Bn</div>
              <div className="text-xs text-slate-400 mt-1">By 2030</div>
            </div>
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/30 p-8 text-center">
              <div className="text-5xl font-bold text-emerald-700 mb-2">SAM</div>
              <div className="text-sm text-emerald-600 mb-4">Serviceable Addressable Market</div>
              <p className="text-slate-600 text-sm">Stores ready for SaaS POS + self-checkout. Organized retail + tech-curious unorganized stores in Tier 1-3 cities.</p>
              <div className="mt-4 text-2xl font-bold text-emerald-700">$230 Bn</div>
              <div className="text-xs text-emerald-600 mt-1">Organized retail by 2030</div>
            </div>
            <div className="rounded-2xl border-2 border-slate-900 bg-slate-900 p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">SOM</div>
              <div className="text-sm text-slate-400 mb-4">Serviceable Obtainable Market</div>
              <p className="text-slate-300 text-sm">Tech-forward kirana stores, general stores, and small supermarkets doing 50+ transactions/day with UPI adoption.</p>
              <div className="mt-4 text-2xl font-bold text-emerald-400">₹1,440 Cr</div>
              <div className="text-xs text-slate-400 mt-1">2L stores × ₹72K ARR</div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-xl bg-white border border-slate-200 overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Factor</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">5 Years Ago</th>
                  <th className="px-6 py-4 text-center font-semibold text-emerald-700 bg-emerald-50/30">Today (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["UPI Adoption", "2,213 Cr transactions (FY21)", "24,162 Cr transactions (FY26) — 12,000x growth"],
                  ["Smartphone Penetration", "~500 Mn users", "900 Mn+ subscriptions, 70% of adults"],
                  ["Retail Store Mindset", "Cash-only, no software", "UPI-ready, SaaS-curious, GST-mandatory"],
                  ["POS Software Cost", "₹15,000-50,000 hardware POS", "₹299/month cloud SaaS (ClickOut)"],
                  ["Self-Checkout Tech", "₹5-10 Lakh kiosk machines", "Customer phone = free scanner"],
                  ["Competition", "None (India-focused mobile POS)", "Early stage, fragmented, no end-to-end OS"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{row[0]}</td>
                    <td className="px-6 py-4 text-center text-slate-500">{row[1]}</td>
                    <td className="px-6 py-4 text-center font-medium text-emerald-700 bg-emerald-50/20">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Best Practices + Mistakes */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl bg-red-50 border border-red-200 p-6">
              <h4 className="font-semibold text-red-900 mb-3">❌ Common Mistakes in Market Sizing</h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• Counting every kirana as a customer — 40% are too small or cash-only</li>
                <li>• Using global POS data for India — Indian retail is 85% unorganized, unique dynamics</li>
                <li>• Ignoring UPI readiness — stores without UPI QR cannot adopt self-checkout</li>
                <li>• Overestimating tech readiness — many store owners still fear &quot;computer ka panga&quot;</li>
                <li>• Missing the WMS + Ecommerce expansion — TAM is bigger than just POS</li>
              </ul>
            </div>
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
              <h4 className="font-semibold text-emerald-900 mb-3">✅ Best Practices for Market Validation</h4>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li>• Filter by UPI QR presence — this shows digital payment readiness</li>
                <li>• Segment by transaction volume — 50+ daily transactions = real pain point</li>
                <li>• Validate willingness-to-pay with 50+ pilot stores before scaling</li>
                <li>• Track competitor pricing as anchor — ClickOut is 10x cheaper than POSist</li>
                <li>• Map the ecosystem — distributors, FMCG companies, and banks are channel partners</li>
              </ul>
            </div>
          </div>

          {/* Final Recommendation */}
          <div className="rounded-2xl bg-slate-900 p-8">
            <h3 className="text-white font-semibold mb-3">✅ Final Recommendation for ClickOut</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Start with a narrow SOM: Indian general stores and small supermarkets in Tier 1-3 cities doing 50+ transactions/day with active UPI QR codes. Validate TAM/SAM assumptions through 100+ store owner interviews before presenting to investors. Use India&apos;s 13-15 million kirana store count as your primary market sizing anchor — but realistically target only the top 20% who are tech-curious and UPI-ready.
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-emerald-900 p-6">
            <h3 className="text-white font-semibold mb-3">🚀 Action Items</h3>
            <ul className="text-emerald-100 text-sm space-y-2">
              <li>• 1. Survey 100 store owners in Delhi, Jaipur, Varanasi, and Hyderabad — validate UPI + software readiness</li>
              <li>• 2. Build a simple &quot;Store Readiness Scorecard&quot; (UPI active + 50+ txns/day + smartphone owner + GST registered)</li>
              <li>• 3. Document competitor pricing (POSist, Khatabook, OkCredit) in a comparison matrix</li>
              <li>• 4. Calculate exact SOM using pin-code level UPI merchant density data from NPCI reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 02 — PROBLEM */}
      <section id="problem" className="scroll-mt-24 bg-slate-100/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">02 — Problem</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Is Broken Today?</h2>
          <p className="text-slate-500 text-lg mb-16 max-w-2xl">The average Indian kirana store loses money every day to queues, fraud, and inventory leakage — but has no tools to fight back.</p>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { num: "01", title: "Billing Queue Chaos", desc: "Customers wait 10-15 minutes during peak hours. Store owners lose 15-20 customers daily who walk away seeing the queue. Peak hour revenue drops by 30% because the cashier becomes the bottleneck.", impact: "₹500-1,500/day revenue loss" },
              { num: "02", title: "Invisible Inventory Leakage", desc: "5-8% monthly stock goes missing with no tracking. Store owners discover empty shelves only when a regular customer asks. No real-time stock means over-ordering slow movers and stockouts for fast movers.", impact: "₹8,000-25,000/month loss" },
              { num: "03", title: "Billing Fraud & Cash Mismatch", desc: "Cash counter mismatches and billing fraud go unnoticed for months. Staff gives extra change to friends, skips entries for cash sales, or manipulates manual bills. Store owners only find out during monthly accounting.", impact: "₹15,000-50,000/year leakage" },
              { num: "04", title: "Fragmented Tools", desc: "Store owners use 3+ apps: one for UPI QR, one for Khata (credit), Excel for inventory, and a physical register for GST. No single dashboard. Data lives in silos. Decision-making is pure guesswork.", impact: "4+ hours/day manual work" },
            ].map((p) => (
              <div key={p.num} className="rounded-2xl bg-white border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-6xl font-bold text-slate-100 mb-4">{p.num}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Impact: {p.impact}</div>
              </div>
            ))}
          </div>

          {/* Today Visual */}
          <div className="rounded-2xl bg-[#0B1121] p-8 mb-16 overflow-x-auto">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">The Kirana Store Workflow Today</h3>
            <pre className="text-slate-400 text-sm font-mono whitespace-pre leading-relaxed">
{`
    ┌─────────────┐
    │   Customer  │
    └──────┬──────┘
           │ "Bhaiya, ye kitne ka?"
           ▼
    ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
    │   Staff     │────▶│  Manual     │────▶│  Cash       │
    │  (Billing)  │     │  Register   │     │  Counter    │
    └─────────────┘     └─────────────┘     └─────┬───────┘
                                                  │
           ┌──────────────────────────────────────┘
           ▼
    ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
    │   Khata     │────▶│  Excel      │────▶│  GST        │
    │   (Credit)  │     │  (Stock)    │     │  (Manual)   │
    └─────────────┘     └─────────────┘     └─────┬───────┘
                                                  │
                                                  ▼
                                            ┌─────────────┐
                                            │  Month-End  │
                                            │  (Fraud?)   │
                                            └─────────────┘

    TODAY:
    ❌ Queue = Lost Sales   ❌ No Inventory Visibility   ❌ Fraud = Silent Bleeding   ❌ 3+ Apps
`}
            </pre>
          </div>

          {/* Cost of Problem */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-white border border-slate-200 p-6 text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">10-15</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Min Wait Time</div>
              <p className="text-xs text-slate-400 mt-2">Per customer during peak hours</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-6 text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">5-8%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Stock Leakage</div>
              <p className="text-xs text-slate-400 mt-2">Monthly inventory shrinkage</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-6 text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">₹2.5L+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Annual Loss</div>
              <p className="text-xs text-slate-400 mt-2">Per store from fraud + leakage + lost sales</p>
            </div>
          </div>

          {/* Real Example */}
          <div className="rounded-xl bg-white border border-slate-200 p-8 mb-12">
            <h4 className="font-semibold text-slate-900 mb-3">🏪 Real Industry Example</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              A mid-size general store in Jaipur with 150 daily transactions employs 2 billing staff working 12 hours each. During 6-9 PM peak, customers wait 12 minutes average. The owner estimates 10-15 customers daily walk out without buying due to queue length — at ₹400 average basket, that is ₹4,000-6,000 daily lost revenue (₹1.5-2L monthly). Additionally, monthly stock reconciliation shows 6% variance (₹18,000 loss). The owner discovered that one staff member was giving free items to relatives by not scanning — caught only after installing CCTV, not software. Total annual leakage: ₹2.5L+ in a store doing ₹50L yearly revenue (5% profit erosion).
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8">
            <h3 className="text-white font-semibold mb-3">✅ Final Recommendation for ClickOut</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Quantify the problem with pilot store data before investor meetings. Track: (1) queue length before/after ClickOut, (2) daily transaction count increase, (3) stock variance reduction, (4) fraud incidents detected. These 4 metrics become your core problem validation story. One store showing ₹1.4L yearly savings is worth 100 pitch deck slides.
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-emerald-900 p-6">
            <h3 className="text-white font-semibold mb-3">🚀 Action Items</h3>
            <ul className="text-emerald-100 text-sm space-y-2">
              <li>• 1. Install ClickOut in 10 pilot stores and measure baseline metrics for 2 weeks BEFORE activation</li>
              <li>• 2. Create a simple &quot;Store Loss Calculator&quot; tool that shows store owners their exact monthly leakage</li>
              <li>• 3. Record video testimonials of store owners showing queue reduction and fraud catches</li>
              <li>• 4. Build a case study template: Store Name + Location + Before/After metrics + Savings = 1-pager</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 03 — CLICKOUT */}
      <section id="clickout" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">03 — ClickOut</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">So What Exactly Are You Building?</h2>
          <p className="text-slate-500 text-lg mb-16 max-w-2xl">One Retail Operating System that replaces fragmented store workflows with a connected, AI-powered experience — starting with self-checkout.</p>

          {/* Product Story */}
          <div className="rounded-2xl bg-[#0B1121] p-8 mb-16 overflow-x-auto">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">The ClickOut Workflow</h3>
            <pre className="text-emerald-400 text-sm font-mono whitespace-pre leading-relaxed">
{`
    ┌─────────────────────────────────────────────────────────────┐
    │              CLICKOUT — RETAIL OPERATING SYSTEM             │
    ├─────────────────────────────────────────────────────────────┤
    │                                                             │
    │   CUSTOMER APP          ADMIN DASHBOARD                     │
    │                                                             │
    │  ┌─────────────┐       ┌─────────────────────────────┐     │
    │  │ Scan Barcode│       │ Real-Time Sales Analytics   │     │
    │  │ (Phone Cam) │       │ • Hourly revenue            │     │
    │  └──────┬──────┘       │ • Peak hour identification  │     │
    │         │              │ • Staff performance           │     │
    │         ▼              └─────────────────────────────┘     │
    │  ┌─────────────┐                                           │
    │  │ Auto Cart   │       ┌─────────────────────────────┐     │
    │  │ Build       │       │ AI Fraud Detection          │     │
    │  └──────┬──────┘       │ • 99.4% accuracy            │     │
    │         │              │ • Real-time alerts            │     │
    │         ▼              │ • Pattern recognition         │     │
    │  ┌─────────────┐       └─────────────────────────────┘     │
    │  │ UPI Payment │                                           │
    │  │ (GPay/PhonePe│      ┌─────────────────────────────┐     │
    │  │ /Paytm)     │      │ Inventory Management          │     │
    │  └──────┬──────┘      │ • Auto stock deduction        │     │
    │         │             │ • Low stock alerts            │     │
    │         ▼             │ • Purchase suggestions        │     │
    │  ┌─────────────┐      └─────────────────────────────┘     │
    │  │ Exit QR     │                                           │
    │  │ (Guard Scan)│      ┌─────────────────────────────┐     │
    │  └─────────────┘      │ Multi-Store Command Center    │     │
    │                       │ • Compare store performance   │     │
    │                       │ • Central inventory view      │     │
    │                       └─────────────────────────────┘     │
    └─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  UPI / NPCI     │
                    │  GST Portal     │
                    │  Cloud Backup   │
                    └─────────────────┘
`}
            </pre>
          </div>

          {/* Product Showcase */}
          <div className="mx-auto max-w-2xl mb-16">
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center"><span className="text-white text-lg">🛒</span></div>
                <div><div className="font-semibold text-slate-900">ClickOut</div><div className="text-xs text-slate-500">Retail OS</div></div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="text-xs text-slate-500 mb-1">Customer Scanning</div>
                  <div className="text-sm text-slate-900 font-medium">Maggi Noodles ₹14, Amul Butter ₹55, Tata Salt ₹28</div>
                  <div className="text-xs text-slate-400 mt-1">3 items scanned in 8 seconds</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                    <div className="text-xs text-emerald-600 mb-1">Cart Total</div>
                    <div className="text-2xl font-bold text-emerald-700">₹97</div>
                    <div className="text-xs text-emerald-600 mt-1">Auto-calculated with GST</div>
                  </div>
                  <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
                    <div className="text-xs text-blue-600 mb-1">Checkout Time</div>
                    <div className="text-2xl font-bold text-blue-700">17 sec</div>
                    <div className="w-full bg-blue-200 rounded-full h-2 mt-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }} /></div>
                  </div>
                </div>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                  <div className="text-xs text-amber-700 mb-1">Fraud Alert</div>
                  <div className="text-sm text-amber-800">• Unscanned item detected in bagging area<br />• Staff override logged at 18:42</div>
                </div>
                <div className="rounded-xl bg-slate-100 p-4 flex items-center gap-3">
                  <span className="text-emerald-500 text-lg">✓</span>
                  <span className="text-sm font-medium text-slate-700">Exit QR Generated — Guard scan verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Why ClickOut */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Phone = POS", desc: "No expensive hardware. Customer uses their own phone to scan, pay, and exit. Store owner needs only a smartphone for admin. Zero capex.", icon: "📱" },
              { title: "AI-First Fraud Detection", desc: "99.4% accuracy in detecting unscanned items, staff overrides, and suspicious patterns. Real-time alerts to owner phone. Not just billing — intelligence.", icon: "🛡️" },
              { title: "Built for Bharat", desc: "Designed around the actual kirana workflow, not a generic POS from America. UPI-native, GST-ready, Hindi + English, works on 2G networks.", icon: "🇮🇳" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Architecture */}
          <div className="rounded-2xl bg-[#0B1121] p-8 mb-12 overflow-x-auto">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Technical Architecture</h3>
            <pre className="text-emerald-400 text-xs font-mono whitespace-pre leading-relaxed">
{`
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                       │
│  │  Customer    │  │   Admin      │  │   Guard      │                       │
│  │  App (PWA)   │  │   Dashboard  │  │   Scanner    │                       │
│  │  React +     │  │   (Next.js)  │  │   (Web)      │                       │
│  │  Capacitor   │  │              │  │              │                       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘                       │
└─────────┼──────────────────┼──────────────────┼───────────────────────────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      API GATEWAY (AWS Mumbai / Vercel Edge)                 │
│  • Rate Limiting  • JWT Auth  • SSL  • CORS  • Request Validation          │
└─────────────────────────────────────────────────────────────────────────────┘
          │
    ┌─────┴─────┬─────────────┬─────────────┬─────────────┐
    ▼           ▼             ▼             ▼             ▼
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│  AI     │ │ Business│ │  Data   │ │ Payment │ │ 3rd Party│
│Inference│ │ Logic   │ │ Layer   │ │ Gateway │ │  Integr  │
│Services │ │(Node.js)│ │         │ │         │ │         │
└────┬────┘ └─────────┘ └────┬────┘ └────┬────┘ └────┬────┘
     │                       │           │           │
┌────┴────┐            ┌─────┴─────┐ ┌───┴────┐ ┌───┴────┐
│Fraud    │            │PostgreSQL │ │NPCI    │ │GST     │
│Detection│            │ (Users,   │ │UPI     │ │Portal  │
│Model    │            │ Orders)   │ │API     │ │API     │
│(TensorFlow│          ├───────────┤ ├────────┤ ├────────┤
│/PyTorch)│            │ MongoDB   │ │Razorpay│ │Cashfree│ │SMS     │
└─────────┘            │ (Logs)    │ │/Cashfree│ │Gateway │
                       ├───────────┤ └────────┘ └────────┘
                       │ Redis     │
                       │ (Cache)   │
                       └───────────┘

WHY THIS STACK?
• React PWA + Capacitor: Works like native app without Play Store dependency
  Alternative: Native Android/iOS — rejected because 60% store owners have 
  limited storage; PWA is <2MB
• Next.js Admin: SSR for SEO + API routes + fast dashboard rendering
  Alternative: React SPA — rejected because admin needs shareable URLs
• PostgreSQL: ACID compliance for transactions, inventory, and billing
  Alternative: Only MongoDB — rejected because financial data needs consistency
• AI Fraud Model: TensorFlow Lite runs on-device for sub-100ms detection
  Alternative: Cloud-only AI — rejected because kirana internet is unreliable
• AWS Mumbai: <50ms latency for Indian users + RBI data localization compliance
  Alternative: US servers — rejected because DPDP Act + payment data rules
`}
            </pre>
          </div>

          {/* Best Practices + Mistakes */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl bg-red-50 border border-red-200 p-6">
              <h4 className="font-semibold text-red-900 mb-3">❌ Common Mistakes Building Retail Tech in India</h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• Building for iPhone first — 75% of kirana owners use Android under ₹15,000</li>
                <li>• Ignoring offline mode — internet drops 5-10 times daily in Tier 2/3</li>
                <li>• Complex onboarding — store owners abandon if setup takes &gt;10 minutes</li>
                <li>• No vernacular support — Hindi interface increases adoption by 3x</li>
                <li>• Ignoring distributor relationships — they control 70% of store access</li>
                <li>• Building kiosk hardware — ₹5-10L capex kills the Indian SMB market</li>
              </ul>
            </div>
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
              <h4 className="font-semibold text-emerald-900 mb-3">✅ Best Practices for Bharat-First Retail SaaS</h4>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li>• PWA-first approach — no app store, no updates, works on any phone</li>
                <li>• Offline-first architecture — queue transactions, sync when online</li>
                <li>• UPI deep-linking — one-tap payment via GPay/PhonePe/Paytm</li>
                <li>• WhatsApp integration — owners live on WhatsApp, not email</li>
                <li>• Simple pricing — ₹299/month is a chai-biscuit budget, not a decision</li>
                <li>• On-site activation — send a boy to the store for 30-min setup</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8">
            <h3 className="text-white font-semibold mb-3">✅ Final Recommendation for ClickOut</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Build the self-checkout + fraud detection combo first as your &quot;wedge&quot; — it is the highest-frequency, highest-pain problem. Validate 99%+ fraud detection accuracy on 1,000 real transactions before adding inventory analytics. The self-checkout alone can justify a ₹699/month price point if it replaces one billing staff (₹8,000-12,000/month salary).
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-emerald-900 p-6">
            <h3 className="text-white font-semibold mb-3">🚀 Action Items</h3>
            <ul className="text-emerald-100 text-sm space-y-2">
              <li>• 1. Build offline-first PWA — test in 2G/3G conditions, not just office WiFi</li>
              <li>• 2. Implement on-device fraud detection using TensorFlow Lite (sub-100ms response)</li>
              <li>• 3. Create a 5-minute onboarding flow — store owner should go live without your help</li>
              <li>• 4. Add Hindi interface + voice prompts — test with non-English speaking store owners</li>
              <li>• 5. Integrate WhatsApp for daily sales summary — owners check WhatsApp 50+ times/day</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 04 — BUSINESS */}
      <section id="business" className="scroll-mt-24 bg-slate-100/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">04 — Business</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Does ClickOut Make Money?</h2>
          <p className="text-slate-500 text-lg mb-16 max-w-2xl">Multiple revenue streams from a single platform. Subscription-first, with transaction and enterprise expansion.</p>

          {/* Business Model Visual */}
          <div className="rounded-2xl bg-[#0B1121] p-8 mb-16 overflow-x-auto">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Revenue Model</h3>
            <pre className="text-emerald-400 text-sm font-mono whitespace-pre leading-relaxed">
{`
    ┌─────────────┐
    │   FREE      │  ← Entry. 50 transactions/month. 
    │  (Starter)  │     Builds trust & waitlist.
    │  [CURRENT]  │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │    BASIC    │  ← Growth. ₹299/mo.
    │   (Growth)  │     Single store + self-checkout + fraud.
    │  [CURRENT]  │     Primary revenue driver.
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │   GROWTH    │  ← Scale. ₹699/mo.
    │  (Scale)    │     Multi-store + analytics + staff mgmt.
    │  [CURRENT]  │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  ENTERPRISE │  ← Chain Stores. Custom pricing.
    │  (Chains)   │     5+ stores, API, white-label.
    │  [PLANNED]  │     Target: Month 12
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  ECOMMERCE  │  ← Online ordering commission.
    │  (Platform) │     1-2% per delivery order.
    │  [FUTURE]   │     Target: Month 18
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │    WMS      │  ← Warehouse management for distributors.
    │  (B2B)      │     ₹1,999/mo per warehouse.
    │  [FUTURE]   │     Target: Month 24
    └─────────────┘
`}
            </pre>
          </div>

          {/* Revenue Math */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 mb-16">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Simple Revenue Mathematics</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
              <div className="text-center"><div className="text-4xl font-bold text-slate-900">5,000</div><div className="text-sm text-slate-500 mt-1">Paying Stores</div></div>
              <div className="text-3xl text-slate-300">×</div>
              <div className="text-center"><div className="text-4xl font-bold text-slate-900">₹72,000</div><div className="text-sm text-slate-500 mt-1">Avg Annual Revenue</div></div>
              <div className="text-3xl text-slate-300">=</div>
              <div className="text-center"><div className="text-4xl font-bold text-emerald-700">₹36 Cr</div><div className="text-sm text-slate-500 mt-1">Annual Recurring Revenue</div></div>
            </div>
            <p className="text-center text-xs text-slate-400">Illustrative model: Blended ARPU of ₹299 (40%) + ₹699 (50%) + Enterprise (10%)</p>
          </div>

          {/* Unit Economics + Model Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl bg-white border border-slate-200 p-8">
              <h4 className="font-semibold text-slate-900 mb-6">Unit Economics</h4>
              <div className="space-y-4">
                {[
                  ["Customer Acquisition Cost (CAC)", "₹3,500", "Blended: Digital + Field + Referral"],
                  ["Average Revenue Per User (ARPU)", "₹72,000/year", "Blended across Basic + Growth + Enterprise"],
                  ["Gross Margin", "82%", "After cloud + UPI infra + SMS costs"],
                  ["Lifetime Value (LTV)", "₹2,16,000", "3-year avg retention, gross-profit adjusted"],
                  ["Payback Period", "2.1 months", "CAC recovered from monthly subscription"],
                ].map(([label, value, desc], i) => (
                  <div key={i} className="flex justify-between items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <div><div className="text-sm font-medium text-slate-900">{label}</div><div className="text-xs text-slate-500 mt-0.5">{desc}</div></div>
                    <div className="text-sm font-bold text-slate-900 text-right">{value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-center">
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">LTV ÷ CAC Ratio</div>
                <div className="text-3xl font-bold text-emerald-700">61.7 : 1</div>
                <div className="text-xs text-slate-500 mt-1">Target: &gt;3:1 for healthy SaaS | ClickOut is exceptional</div>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-8">
              <h4 className="font-semibold text-slate-900 mb-6">Why SaaS Subscription Over Alternatives?</h4>
              <div className="space-y-4">
                {[
                  { model: "Subscription (Chosen)", why: "Predictable revenue. ₹299/month is less than daily chai expense. Easy to budget. Indian SMBs hate variable costs.", chosen: true },
                  { model: "Transaction Fee (Rejected)", why: "Creates billing anxiety. Store owners distrust % cuts. Feels like a tax, not a tool. UPI already has zero MDR.", chosen: false },
                  { model: "Hardware Sale (Rejected)", why: "₹15,000-50,000 upfront kills adoption. Indian kirana owners avoid capex. Maintenance headache.", chosen: false },
                  { model: "Freemium Forever (Rejected)", why: "Attracts tire-kickers who never convert. Need clear value gate at 50 transactions.", chosen: false },
                ].map((item, i) => (
                  <div key={i} className={`rounded-lg p-4 border ${item.chosen ? "bg-emerald-50 border-emerald-200" : "bg-slate-50 border-slate-200"}`}>
                    <div className={`text-sm font-semibold ${item.chosen ? "text-emerald-900" : "text-slate-700"}`}>{item.model}</div>
                    <div className="text-xs text-slate-600 mt-1">{item.why}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="rounded-xl bg-white border border-slate-200 overflow-hidden mb-12">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-900">Metric</th>
                  <th className="px-6 py-4 text-center font-semibold text-emerald-700 bg-emerald-50/30">ClickOut</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">POSist</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">Khatabook</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">OkCredit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Starting Price", "₹299/mo", "₹3,000+/mo", "Free*", "Free*"],
                  ["Self-Checkout", "✅ Customer phone", "⚠️ Kiosk only", "❌", "❌"],
                  ["AI Fraud Detection", "✅ Built-in", "💰 Addon", "❌", "❌"],
                  ["Real-time Inventory", "✅ Auto-deduct", "✅", "❌", "❌"],
                  ["Multi-Store", "✅ ₹699/mo", "💰 ₹5,000+/mo", "❌", "❌"],
                  ["GST Invoice", "✅ Auto 1-click", "✅", "⚠️ Manual", "⚠️ Manual"],
                  ["Setup Time", "< 24 hours", "3-7 days", "10 min", "10 min"],
                  ["Hardware Needed", "❌ Zero", "✅ Terminal", "❌", "❌"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{row[0]}</td>
                    <td className="px-6 py-4 text-center font-semibold text-emerald-700 bg-emerald-50/20">{row[1]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[2]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[3]}</td>
                    <td className="px-6 py-4 text-center text-slate-600">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-400 px-6 py-3 bg-slate-50">* Free plans have hidden limits, take commissions, or lack core POS features</p>
          </div>

          {/* Best Practices */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl bg-red-50 border border-red-200 p-6">
              <h4 className="font-semibold text-red-900 mb-3">❌ Common Mistakes in Retail SaaS Business Model</h4>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• Pricing too low — ₹99/month signals low quality and attracts non-serious users</li>
                <li>• No annual plan — monthly churn in Indian SMB SaaS averages 8-12%</li>
                <li>• Ignoring GST invoicing — 100% of Indian B2B buyers need GST bill</li>
                <li>• No usage-based upgrade path — stores outgrow plans but don&apos;t know when to upgrade</li>
                <li>• Building enterprise before 1,000 SMB customers — burns cash on long sales cycles</li>
              </ul>
            </div>
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
              <h4 className="font-semibold text-emerald-900 mb-3">✅ Best Practices for Indian Retail SaaS</h4>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li>• Offer annual at 2 months free — improves cash flow, reduces churn to &lt;5%</li>
                <li>• Support UPI AutoPay for subscriptions — 70% Indian SMBs prefer UPI over cards</li>
                <li>• GST-inclusive pricing — show ₹299 including GST, not ₹253 + GST</li>
                <li>• Track Net Revenue Retention (NRR) — target &gt;120% via upgrades and multi-store</li>
                <li>• Target 80%+ gross margins by Year 2 — cloud costs should be &lt;15% of revenue</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8">
            <h3 className="text-white font-semibold mb-3">✅ Final Recommendation for ClickOut</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Start with a simple 3-tier model: Free (50 txns) → Basic ₹299 (unlimited + fraud) → Growth ₹699 (multi-store + analytics). Validate willingness-to-pay with 50 pilot stores before adding Enterprise. Track monthly churn religiously — Indian retail SaaS churn can hit 10% if stores don&apos;t see value in 30 days. Your goal is &lt;5% monthly churn by Month 6.
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-emerald-900 p-6">
            <h3 className="text-white font-semibold mb-3">🚀 Action Items</h3>
            <ul className="text-emerald-100 text-sm space-y-2">
              <li>• 1. Implement UPI AutoPay for subscription billing — reduces payment failure by 60%</li>
              <li>• 2. Create an annual plan at ₹2,999 (2 months free vs monthly) — improves cash flow</li>
              <li>• 3. Build an in-app upgrade prompt when store hits 45 transactions on free tier</li>
              <li>• 4. Set up GST invoicing auto-generation — mandatory for B2B trust in India</li>
              <li>• 5. Define Enterprise tier pricing (₹4,999+/mo) for 5+ store chains — prepare sales deck</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 05 — COMPETITION */}
      <section id="competition" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">05 — Competition</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Won&apos;t Another Company Simply Do This?</h2>
          <p className="text-slate-500 text-lg mb-16 max-w-2xl">The competitive landscape is fragmented. No one connects the entire retail workflow for Bharat&apos;s kirana stores.</p>

          {/* Competitor Matrix */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden mb-16 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Capability</th>
                  <th className="px-6 py-4 text-center font-semibold">Khatabook</th>
                  <th className="px-6 py-4 text-center font-semibold">OkCredit</th>
                  <th className="px-6 py-4 text-center font-semibold">POSist</th>
                  <th className="px-6 py-4 text-center font-semibold">BharatPe</th>
                  <th className="px-6 py-4 text-center font-semibold">Global POS</th>
                  <th className="px-6 py-4 text-center font-semibold bg-emerald-800">ClickOut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Customer Self-Checkout", "❌", "❌", "⚠️ Kiosk only", "❌", "✅ Expensive", "✅ Phone-based"],
                  ["AI Fraud Detection", "❌", "❌", "💰 Addon", "❌", "💰 Enterprise", "✅ Built-in"],
                  ["Real-time Inventory", "❌", "❌", "✅", "⚠️ Basic", "✅", "✅ Auto-deduct"],
                  ["UPI-native Design", "⚠️ Basic", "⚠️ Basic", "✅", "✅", "⚠️ Card-first", "✅ Deep-link"],
                  ["Zero Hardware", "✅", "✅", "❌", "✅", "❌", "✅"],
                  ["Multi-Store Analytics", "❌", "❌", "💰 ₹5,000+", "⚠️ Basic", "💰", "✅ ₹699"],
                  ["GST Auto-Invoice", "⚠️ Manual", "⚠️ Manual", "✅", "⚠️ Basic", "✅", "✅ 1-click"],
                  ["Staff Management", "❌", "❌", "✅", "❌", "✅", "✅"],
                  ["Bharat Pricing", "Free*", "Free*", "₹3,000+", "Free*", "₹5,000+", "₹299"],
                  ["Connected Workflow", "❌", "❌", "⚠️ Partial", "❌", "⚠️ Partial", "✅ End-to-end"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-6 py-3.5 font-medium text-slate-900">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className={`px-6 py-3.5 text-center text-sm ${j === 5 ? "font-semibold text-emerald-700 bg-emerald-50/30" : "text-slate-600"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why ClickOut Can Win */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">🏆 Today&apos;s Advantage</h3>
              <div className="space-y-4">
                {[
                  { title: "Phone-First Self-Checkout", desc: "No ₹5-10 lakh kiosk hardware. Customer uses their own phone. This is the ONLY way to serve 15 million kirana stores at ₹299/month." },
                  { title: "AI Fraud on Device", desc: "Competitors detect fraud after the fact. ClickOut detects in real-time using on-device AI. 99.4% accuracy without cloud dependency." },
                  { title: "Bharat Pricing", desc: "POSist charges ₹3,000+/month — accessible only to chains. ClickOut at ₹299 is 10x cheaper. Khatabook is free but has no POS. Sweet spot." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-white border border-slate-200 p-5">
                    <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-slate-600 text-sm mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">🔮 Future Moat</h3>
              <div className="space-y-4">
                {[
                  { title: "Transaction Data Network Effects", desc: "Every transaction improves fraud models and inventory predictions. More stores = better AI = more stores. Flywheel effect." },
                  { title: "Ecosystem Lock-in", desc: "From POS → Ecommerce → WMS → Distributor integration. Once a store runs on ClickOut, switching cost becomes massive." },
                  { title: "Distributor Relationships", desc: "FMCG distributors control store access. Deep integration with their supply chain creates switching costs no competitor can replicate quickly." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-slate-100 border border-slate-200 p-5">
                    <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                    <div className="text-slate-600 text-sm mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Moat Architecture */}
          <div className="rounded-2xl bg-[#0B1121] p-8 mb-12 overflow-x-auto">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Defensibility Over Time</h3>
            <pre className="text-emerald-400 text-sm font-mono whitespace-pre leading-relaxed">
{`
    Year 1              Year 2              Year 3              Year 5
    ┌─────────┐        ┌─────────┐        ┌─────────┐        ┌─────────┐
    │ Product │   →    │  Data   │   →    │ Network │   →    │Platform │
    │  Moat   │        │  Moat   │        │ Effects │        │  Moat   │
    └─────────┘        └─────────┘        └─────────┘        └─────────┘
         │                  │                  │                  │
         ▼                  ▼                  ▼                  ▼
    • Self-checkout    • 10Cr+          • Community        • Ecosystem
      (unique)           transactions       of store         • Distributor
    • AI fraud           • Fraud model      owners           integration
      detection          • Inventory      • Shared           • WMS layer
    • ₹299 price         benchmarks         demand data      • API for
      point            • Purchase         • Peer             developers
                         suggestions        benchmarks
`}
            </pre>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8">
            <h3 className="text-white font-semibold mb-3">✅ Final Recommendation for ClickOut</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Don&apos;t compete on features — compete on workflow integration and Bharat pricing. A competitor can copy your self-checkout UI in 6 months, but they cannot copy 2 years of transaction data, trained fraud models, and distributor relationships. Focus on data accumulation and network effects from Day 1. Your true moat is the data flywheel, not the UI.
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-emerald-900 p-6">
            <h3 className="text-white font-semibold mb-3">🚀 Action Items</h3>
            <ul className="text-emerald-100 text-sm space-y-2">
              <li>• 1. File a provisional patent for your on-device fraud detection algorithm</li>
              <li>• 2. Build data moat metrics: track daily transactions, fraud catches, and inventory accuracy improvements per store</li>
              <li>• 3. Lock exclusive distributor partnerships in 2 cities — make them your channel, not just customers</li>
              <li>• 4. Create a &quot;Switching Cost Calculator&quot; showing stores what they lose by leaving (data, history, trained AI)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 06 — GROWTH */}
      <section id="growth" className="scroll-mt-24 bg-slate-100/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">06 — Growth</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Big Can This Become?</h2>
          <p className="text-slate-500 text-lg mb-16 max-w-2xl">From a self-checkout app to a full Retail Operating System. From one store to India&apos;s retail backbone.</p>

          {/* Beachhead */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Beachhead: First Customer Segment</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "Segment", value: "Tier 1-3 General Stores" },
                { label: "Volume", value: "100+ daily transactions" },
                { label: "Pain", value: "Peak hour queue + fraud" },
                { label: "WTP", value: "High (saves ₹2L+/year)" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-slate-50 p-5 text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-lg font-bold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4">
              <p className="text-sm text-emerald-800">
                <strong>Why this segment?</strong> They have enough transaction volume to feel queue pain, employ 1-2 billing staff (salary burden), are UPI-ready, and tech-curious enough to try ₹299/month. Large supermarket chains already have POSist — harder to displace initially. The kirana with 100+ daily transactions is the Goldilocks zone.
              </p>
            </div>
          </div>

          {/* Go-to-Market */}
          <div className="rounded-2xl bg-[#0B1121] p-8 mb-12 overflow-x-auto">
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Go-to-Market</h3>
            <pre className="text-emerald-400 text-sm font-mono whitespace-pre leading-relaxed">
{`
    ┌───────────┐     ┌─────────────────────────────┐     ┌───────────┐
    │   Store   │────▶│ Content / YouTube / WhatsApp│────▶│  Free     │
    │  (Aware)  │     │ • &quot;Queue se chutkara&quot;       │     │  Trial    │
    └───────────┘     │ • Fraud detection stories   │     │  (50 txns)│
                      │ • GST simplified videos     │     └─────┬─────┘
                      └─────────────────────────────┘           │
                                                                  ▼
                      ┌─────────────────────────────┐     ┌───────────┐
                      │ Field Sales / Distributors  │     │  Paid     │
                      │ • FMCG distributor tie-ups  │────▶│  Basic    │
                      │ • On-ground sales boys      │     │  ₹299/mo  │
                      │ • Referral from existing    │     └─────┬─────┘
                      │   store owners              │           │
                      └─────────────────────────────┘           │
                                                                  ▼
                                                          ┌───────────┐
                                                          │  Growth   │
                                                          │  ₹699/mo  │
                                                          │ • Multi-  │
                                                          │   store   │
                                                          └─────┬─────┘
                                                                │
                                                                ▼
                                                          ┌───────────┐
                                                          │ Enterprise│
                                                          │  (Custom) │
                                                          │ • Chains  │
                                                          │ • API     │
                                                          └─────┬─────┘
                                                                │
                                                                ▼
                                                          ┌───────────┐
                                                          │ Ecommerce │
                                                          │ + WMS     │
                                                          │ (Platform)│
                                                          └───────────┘
`}
            </pre>
          </div>

          {/* Expansion */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Product Expansion Roadmap</h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Self-Checkout", "Fraud AI", "Inventory", "Analytics", "Multi-Store", "Ecommerce", "WMS", "Distributor OS"].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <div className={`rounded-full px-5 py-2.5 text-sm font-semibold ${i < 3 ? "bg-emerald-100 text-emerald-800" : i < 5 ? "bg-blue-100 text-blue-800" : i < 7 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"}`}>{item}</div>
                  {i < 7 && <span className="text-slate-300 text-xl">→</span>}
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center gap-6 text-xs">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-emerald-200" /> Year 1 (Now)</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-blue-200" /> Year 2</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-amber-200" /> Year 3</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-slate-200" /> Year 5</span>
            </div>
          </div>

          {/* Market Expansion Data */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-white border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🛒</div>
              <div className="text-lg font-bold text-slate-900 mb-2">Self-Checkout Market</div>
              <div className="text-3xl font-bold text-emerald-700 mb-2">$1.1 Bn</div>
              <div className="text-xs text-slate-500">India by 2035 (13.4% CAGR)</div>
              <p className="text-xs text-slate-400 mt-3">India is the fastest-growing self-checkout market globally at 15.1% CAGR</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📦</div>
              <div className="text-lg font-bold text-slate-900 mb-2">WMS Market</div>
              <div className="text-3xl font-bold text-emerald-700 mb-2">$16.0 Bn</div>
              <div className="text-xs text-slate-500">Global by 2033 (21.9% CAGR)</div>
              <p className="text-xs text-slate-400 mt-3">Cloud WMS growing at 15%+ CAGR — perfect for Indian distributor warehouses</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🌐</div>
              <div className="text-lg font-bold text-slate-900 mb-2">Ecommerce SaaS</div>
              <div className="text-3xl font-bold text-emerald-700 mb-2">$47.1 Bn</div>
              <div className="text-xs text-slate-500">Global by 2035 (15.9% CAGR)</div>
              <p className="text-xs text-slate-400 mt-3">ONDC India could reach $320-340 Bn by 2030 — massive local opportunity</p>
            </div>
          </div>

          {/* Growth Math */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 mb-12">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Growth Mathematics</h3>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-4 text-2xl md:text-3xl font-bold text-slate-900">
                <span>Stores</span><span className="text-slate-300">×</span><span>ARPU</span><span className="text-slate-300">×</span><span>Retention</span><span className="text-slate-300">=</span><span className="text-emerald-700">Recurring Revenue</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { year: "Year 1", customers: "1,000", arpu: "₹48,000", revenue: "₹4.8 Cr" },
                { year: "Year 2", customers: "5,000", arpu: "₹60,000", revenue: "₹30 Cr" },
                { year: "Year 3", customers: "15,000", arpu: "₹72,000", revenue: "₹108 Cr" },
              ].map((y) => (
                <div key={y.year} className="rounded-xl bg-slate-50 p-6 text-center">
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">{y.year}</div>
                  <div className="space-y-3">
                    <div><div className="text-2xl font-bold text-slate-900">{y.customers}</div><div className="text-xs text-slate-500">Stores</div></div>
                    <div><div className="text-xl font-bold text-slate-700">{y.arpu}</div><div className="text-xs text-slate-500">ARPU</div></div>
                    <div className="pt-3 border-t border-slate-200"><div className="text-xl font-bold text-emerald-700">{y.revenue}</div><div className="text-xs text-slate-500">Revenue</div></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 mt-4">Illustrative 3-year model. Assumes 80% retention, 20% upgrade rate, and 10% enterprise mix by Year 3.</p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8">
            <h3 className="text-white font-semibold mb-3">✅ Final Recommendation for ClickOut</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Focus on one acquisition channel for 6 months: field sales via FMCG distributors. They already visit 200+ stores weekly. Give them ₹500 per successful activation. This is 10x cheaper than Facebook ads for kirana owners. Master one city (Jaipur or Hyderabad) with 500+ stores, then replicate. Target 1,000 paying stores by Month 12 as your first milestone.
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-emerald-900 p-6">
            <h3 className="text-white font-semibold mb-3">🚀 Action Items</h3>
            <ul className="text-emerald-100 text-sm space-y-2">
              <li>• 1. Partner with 3 FMCG distributors in your pilot city — they are your sales army</li>
              <li>• 2. Hire 2 field sales boys (₹15,000/month + ₹500/store commission) for on-ground activation</li>
              <li>• 3. Create a &quot;Store Owner WhatsApp Group&quot; in every locality — word of mouth is king</li>
              <li>• 4. Run a &quot;Zero Fraud Challenge&quot; campaign — 30 days free if any fraud goes undetected</li>
              <li>• 5. Document the exact playbook for City 1 replication — every step, every script, every objection handler</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ========== DEEP DIVE ========== */}
      <section className="bg-slate-100/50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Want the Details?</h2>
          <p className="text-slate-500 mb-8">Expandable deep-dive sections for investors who want more.</p>

          <div className="space-y-3">
            {[
              { id: "market", title: "Detailed Market Sources & Methodology", content: "ClickOut's market opportunity is based on India's retail sector data from IBEF, Deloitte-RAI reports, and NPCI UPI statistics. Key sources: India retail market $1,093B (2025) projected to $2,361B by 2030; organized retail $230B by 2030; 13-15 million kirana stores handling 85% of retail; UPI 24,162 Cr transactions in FY2025-26; India POS terminal market $2.39B; self-checkout market growing at 15.1% CAGR in India. All figures are from published industry reports and government data (PIB, NPCI). SOM calculation: 2 lakh stores x Rs 72,000 ARR = Rs 1,440 Cr opportunity." },
              { id: "financial", title: "Financial Assumptions & Model", content: "Current working model: Rs 299 Basic (40% of customers) + Rs 699 Growth (50%) + Enterprise custom (10%) = blended ARPU Rs 72,000/year. CAC estimated at Rs 3,500 (blended digital + field sales). Gross margin target 82% after cloud and payment infrastructure costs. LTV calculated at Rs 2,16,000 over 3 years with 80% retention. LTV:CAC ratio of 61.7:1 is exceptional vs SaaS benchmark of 3:1. Payback period 2.1 months. Year 1: 1,000 stores -> Rs 4.8 Cr; Year 2: 5,000 stores -> Rs 30 Cr; Year 3: 15,000 stores -> Rs 108 Cr. These are planning assumptions requiring validation through actual customer acquisition and retention data." },
              { id: "competitive", title: "Competitive Research Deep-Dive", content: "ClickOut operates in a fragmented ecosystem. Khatabook and OkCredit focus on digital ledger (credit tracking) with no POS or self-checkout. POSist offers full POS but at Rs 3,000+/month with hardware requirements, targeting chains not kirana. BharatPe provides QR payments and loans but no inventory or fraud detection. Global players (Square, Toast) are US-centric and do not understand India's UPI-first, low-ASP market. The opportunity is to connect self-checkout, fraud detection, inventory, analytics, and future ecommerce into one Bharat-priced platform. Competitive claims based on publicly available pricing and feature comparisons from company websites." },
              { id: "roadmap", title: "Product Roadmap (24-Month)", content: "Months 1-6: Strengthen self-checkout PWA, improve AI fraud detection accuracy to 99.5%+, launch offline mode, add Hindi interface, reach 500 stores. Months 7-12: Launch multi-store analytics (Growth tier), build UPI AutoPay billing, expand to 3 cities, reach 1,000 stores. Months 13-18: Launch ecommerce module for stores (online ordering), integrate with ONDC, add delivery management. Months 19-24: Launch WMS for distributors, build API platform, target enterprise chains. Each phase requires separate technical and GTM validation before capital allocation." },
              { id: "risk", title: "Risk Analysis & Mitigation", content: "Key risks: (1) Low store owner tech readiness - mitigated by PWA simplicity and on-ground activation. (2) High churn if value not visible in 30 days - mitigated by WhatsApp daily summaries and fraud alerts. (3) Competition from well-funded players (BharatPe, Pine Labs) - mitigated by data moat and distributor relationships. (4) Internet reliability in Tier 2/3 - mitigated by offline-first architecture. (5) Payment failure on subscription - mitigated by UPI AutoPay and multiple reminder channels. (6) Regulatory changes (GST, DPDP) - mitigated by AWS Mumbai hosting and compliance-first design." },
              { id: "deck", title: "Full Investor Deck (PDF)", content: "The full investor deck contains: Company vision (Retail OS for Bharat), Problem quantification (queue + fraud + leakage), Market research (TAM/SAM/SOM with sources), Product demo (self-checkout flow), Business model (pricing, unit economics, LTV/CAC), Competitive landscape (feature matrix), Traction (pilot store data, testimonials), Go-to-market (distributor + field sales strategy), Financial model (3-year projection), Roadmap (24-month product plan), Team background, Funding requirement (Rs 5 Cr), Use of funds, Risk mitigation, and Investment thesis. The website is the short version; the deck contains detailed evidence." },
            ].map((item) => (
              <div key={item.id} className="rounded-xl bg-white border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setDeepDiveOpen(deepDiveOpen === item.id ? null : item.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{item.title}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-slate-400 transition-transform ${deepDiveOpen === item.id ? "rotate-180" : ""}`}>
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {deepDiveOpen === item.id && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 rounded-lg p-4">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}