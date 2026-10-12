'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calculator, TrendingUp, Users, Clock, ShieldCheck, 
  Printer, Laptop, AlertTriangle, ArrowRight, Sparkles 
} from 'lucide-react';

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    cashiers: 2,
    salary: 12000,
    dailyCustomers: 120,
    avgWaitMin: 8,
    monthlyLeakage: 5000,
    monthlyFraud: 3000,
    printerCost: 1500,
    posMachineCost: 25000,
  });

  const [results, setResults] = useState({
    totalSalary: 0,
    salarySave: 0,
    leakageSave: 0,
    fraudSave: 0,
    printerSave: 0,
    posSave: 0,
    extraCustomersPerDay: 0,
    revenueBoost: 0,
    totalSave: 0,
    totalBenefit: 0,
    paybackDays: 0,
  });

  useEffect(() => {
    const totalSalary = inputs.cashiers * inputs.salary;
    const neededCashiers = Math.max(1, Math.ceil(inputs.dailyCustomers / 180));
    const cashierReduction = Math.max(0, inputs.cashiers - neededCashiers);
    const salarySave = cashierReduction * inputs.salary;
    const leakageSave = Math.round(inputs.monthlyLeakage * 0.85);
    const fraudSave = Math.round(inputs.monthlyFraud * 0.95);
    const printerSave = inputs.printerCost;
    const posSave = Math.round((inputs.posMachineCost * inputs.cashiers) / 24); // amortized over 2 years
    
    // Self-checkout takes ~20 seconds (0.33 min) vs manual wait
    const clickOutTimeMin = 0.33;
    const timeSavedPerCustomer = Math.max(0, inputs.avgWaitMin - clickOutTimeMin);
    const totalTimeSavedPerDay = inputs.dailyCustomers * timeSavedPerCustomer;
    const extraCustomersPerDay = Math.floor(totalTimeSavedPerDay / Math.max(1, inputs.avgWaitMin));
    const revenueBoost = Math.round(extraCustomersPerDay * 30 * 150 * 0.15); // avg profit margin on extra throughput
    
    const totalSave = salarySave + leakageSave + fraudSave + printerSave + posSave;
    const totalBenefit = totalSave + revenueBoost;
    // Pro plan cost is 799/month
    const planCost = 799;
    const paybackDays = totalBenefit > 0 ? Math.max(1, Math.ceil(planCost / (totalBenefit / 30))) : 0;

    setResults({
      totalSalary,
      salarySave,
      leakageSave,
      fraudSave,
      printerSave,
      posSave,
      extraCustomersPerDay,
      revenueBoost,
      totalSave,
      totalBenefit,
      paybackDays,
    });
  }, [inputs]);

  const updateInput = (key: string, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  const formatCurrency = (num: number) => {
    if (num >= 100000) return `₹${(num / 100000).toFixed(1)}L`;
    if (num >= 1000) return `₹${(num / 1000).toFixed(0)}K`;
    return `₹${num}`;
  };

  const formatCurrencyFull = (num: number) => `₹${num.toLocaleString('en-IN')}`;

  const sliderFields = [
    { 
      key: 'cashiers', 
      label: 'Cashiers & Billing Staff', 
      sublabel: 'Kitne counters / cashiers hain?',
      icon: '👷', 
      min: 1, 
      max: 10, 
      step: 1, 
      suffix: 'Staff', 
      isCurrency: false 
    },
    { 
      key: 'salary', 
      label: 'Average Staff Salary', 
      sublabel: 'Per cashier monthly salary',
      icon: '💰', 
      min: 5000, 
      max: 30000, 
      step: 1000, 
      suffix: '', 
      isCurrency: true 
    },
    { 
      key: 'dailyCustomers', 
      label: 'Daily Footfall / Customers', 
      sublabel: 'Roz kitne grahak aate hain?',
      icon: '🛒', 
      min: 20, 
      max: 800, 
      step: 10, 
      suffix: 'Customers/day', 
      isCurrency: false 
    },
    { 
      key: 'avgWaitMin', 
      label: 'Average Billing Queue Wait', 
      sublabel: 'Peak time par line me kitna time lagta hai?',
      icon: '⏱️', 
      min: 2, 
      max: 20, 
      step: 1, 
      suffix: 'Minutes', 
      isCurrency: false 
    },
    { 
      key: 'monthlyLeakage', 
      label: 'Monthly Stock Leakage & Chori', 
      sublabel: 'Estimated stock jo track nahi hota',
      icon: '📉', 
      min: 0, 
      max: 30000, 
      step: 500, 
      suffix: '', 
      isCurrency: true 
    },
    { 
      key: 'monthlyFraud', 
      label: 'Billing Mismatches & Fraud', 
      sublabel: 'Counter cash discrepancy aur manual billing error',
      icon: '⚠️', 
      min: 0, 
      max: 20000, 
      step: 500, 
      suffix: '', 
      isCurrency: true 
    },
    { 
      key: 'printerCost', 
      label: 'Paper Rolls & Thermal Ink', 
      sublabel: 'Paper bills & printing ka monthly kharcha',
      icon: '🖨️', 
      min: 0, 
      max: 5000, 
      step: 100, 
      suffix: '', 
      isCurrency: true 
    },
  ];

  const savingsCards = [
    { 
      label: 'Staff Reassignment & Salary Saved', 
      value: results.salarySave, 
      desc: 'Cashiers ko sales & customer assist me shift karo',
      icon: <Users size={18} className="text-[var(--accent)]" />
    },
    { 
      label: '85% Stock Leakage Recovered', 
      value: results.leakageSave, 
      desc: 'Real-time barcode inventory & exit gatepass checking',
      icon: <ShieldCheck size={18} className="text-[var(--accent)]" />
    },
    { 
      label: '95% Fraud & Cash Discrepancy Stopped', 
      value: results.fraudSave, 
      desc: 'AI Risk Engine cart anomaly aur duplicate bill pakadta hai',
      icon: <AlertTriangle size={18} className="text-[var(--accent)]" />
    },
    { 
      label: '100% Paper Roll & Printer Savings', 
      value: results.printerSave, 
      desc: 'Digital WhatsApp bills & zero thermal printer maintenance',
      icon: <Printer size={18} className="text-[var(--accent)]" />
    },
    { 
      label: 'Queue Elimination & Extra Revenue', 
      value: results.revenueBoost, 
      desc: `Roz ~${results.extraCustomersPerDay} extra customers bina line ke shopping kar paate hain`,
      icon: <TrendingUp size={18} className="text-[var(--accent)]" />
    },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto my-24">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 border border-[var(--accent)]/30 bg-[var(--accent-bg)] text-[var(--accent)] shadow-sm">
          <Calculator size={14} />
          <span>ROI &amp; SAVINGS CALCULATOR</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
          Apni Dukaan Ki Monthly Bachat Calculate Karein
        </h2>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Dekhein kaise ClickOut traditional billing queues, fraud, aur manual POS machines ke mukable pehle hi hafte mein apna kharcha nikaal leta hai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: SLIDERS (7 COLS) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-[var(--border-color)]">
            <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <span className="text-xl">⚙️</span> Dukaan Ki Details Adjust Karein
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--bg-base)] text-[var(--text-secondary)] border border-[var(--border-color)]">
              Live Simulation
            </span>
          </div>

          <div className="space-y-6">
            {sliderFields.map((field) => {
              const currentVal = inputs[field.key as keyof typeof inputs];
              const pct = ((currentVal - field.min) / (field.max - field.min)) * 100;

              return (
                <div key={field.key} className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <label className="text-xs sm:text-sm font-bold flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
                        <span>{field.icon}</span> {field.label}
                      </label>
                      <p className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>
                        {field.sublabel}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-sm sm:text-base font-extrabold text-[var(--accent)]">
                        {field.isCurrency ? formatCurrencyFull(currentVal) : `${currentVal} ${field.suffix}`}
                      </span>
                    </div>
                  </div>

                  {/* Range Track */}
                  <div className="relative flex items-center py-1">
                    <input
                      type="range"
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={currentVal}
                      onChange={(e) => updateInput(field.key, Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border-color) ${pct}%, var(--border-color) 100%)`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: LIVE ESTIMATED SAVINGS (5 COLS) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border-2 border-[var(--accent)] bg-[var(--bg-card)] shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--border-color)]">
              <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <TrendingUp size={20} className="text-[var(--accent)]" />
                <span>Estimated Monthly Benefit</span>
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent)]">
                Pro Plan: ₹799/mo
              </span>
            </div>

            {/* Total Benefit Big Display */}
            <div className="p-5 rounded-2xl bg-[var(--accent-bg)] border border-[var(--accent)]/30 mb-6 text-center">
              <span className="text-xs font-bold uppercase tracking-wider block mb-1 text-[var(--accent)]">
                Kul Monthly Fayda (Savings + Growth)
              </span>
              <div className="text-4xl sm:text-5xl font-black text-[var(--accent)]">
                {formatCurrencyFull(results.totalBenefit)}
                <span className="text-sm font-semibold ml-1 text-[var(--text-secondary)]">/month</span>
              </div>
              <p className="text-xs mt-1 font-medium" style={{ color: 'var(--text-secondary)' }}>
                Direct cost savings: <strong style={{ color: 'var(--text-primary)' }}>{formatCurrencyFull(results.totalSave)}/mo</strong>
              </p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 mb-6">
              {savingsCards.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-color)]/60"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-xs font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                        {item.label}
                      </p>
                      <p className="text-[10px] leading-tight mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[var(--accent)] whitespace-nowrap">
                    +{formatCurrency(item.value)}/mo
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payback period box */}
          <div className="pt-4 border-t border-[var(--border-color)]">
            <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-color)] text-center">
              <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>
                💰 ClickOut Subscription Payback Period
              </p>
              <div className="text-3xl font-black text-[var(--accent)]">
                {results.paybackDays <= 1 ? 'Sirf 1 Din Mein Payback!' : `${results.paybackDays} Din Mein Poora Paisa Vasool`}
              </div>
              <p className="text-[11px] mt-1" style={{ color: 'var(--text-secondary)' }}>
                ClickOut Pro subscription (₹799/mo) aapki bachat ke mukable pehle 1–2 din mein hi pay ho jaata hai.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPARISON BANNER: Traditional POS Setup vs ClickOut */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
        <h4 className="text-base sm:text-lg font-bold mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2" style={{ color: 'var(--text-primary)' }}>
          <span>📊</span> Traditional Billing Counter Setup vs ClickOut Retail OS
        </h4>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-color)]">
            <span className="text-xs block text-[var(--text-secondary)] mb-1">Traditional Hardware Cost</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-red-500">₹75,000+</div>
            <span className="text-[11px] block mt-1 text-[var(--text-secondary)]">PC, POS terminal &amp; barcode reader</span>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--bg-base)] border border-[var(--border-color)]">
            <span className="text-xs block text-[var(--text-secondary)] mb-1">Traditional AMC &amp; Software</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-red-500">₹8,000–₹15,000/yr</div>
            <span className="text-[11px] block mt-1 text-[var(--text-secondary)]">Annual server &amp; software updates</span>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--accent-bg)] border border-[var(--accent)]/30">
            <span className="text-xs block text-[var(--accent)] mb-1">ClickOut Setup Cost</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--accent)]">₹0 Upfront</div>
            <span className="text-[11px] block mt-1 text-[var(--text-secondary)]">Works on any smartphone or tablet</span>
          </div>

          <div className="p-4 rounded-2xl bg-[var(--accent-bg)] border border-[var(--accent)]/30">
            <span className="text-xs block text-[var(--accent)] mb-1">ClickOut Subscription</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--accent)]">Starting ₹399/mo</div>
            <span className="text-[11px] block mt-1 text-[var(--text-secondary)]">Cloud backup, updates &amp; support included</span>
          </div>
        </div>
      </div>
    </div>
  );
}
