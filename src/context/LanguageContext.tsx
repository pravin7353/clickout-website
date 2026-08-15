'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Check, Sparkles, Shield, Zap, Clock, ArrowRight, 
  Calculator, TrendingUp, Users
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

// =========================================
// ROI CALCULATOR COMPONENT
// =========================================
function ROICalculator() {
  const { t, lang } = useLanguage();

  const [inputs, setInputs] = useState({
    cashiers: 2,
    salary: 12000,
    dailyCustomers: 80,
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
    const neededCashiers = Math.max(1, Math.ceil(inputs.dailyCustomers / 150));
    const cashierReduction = Math.max(0, inputs.cashiers - neededCashiers);
    const salarySave = cashierReduction * inputs.salary;
    const leakageSave = inputs.monthlyLeakage * 0.85;
    const fraudSave = inputs.monthlyFraud * 0.95;
    const printerSave = inputs.printerCost;
    const posSave = (inputs.posMachineCost * inputs.cashiers) / 24;
    const clickOutTimeMin = 17 / 60;
    const timeSavedPerCustomer = Math.max(0, inputs.avgWaitMin - clickOutTimeMin);
    const totalTimeSavedPerDay = inputs.dailyCustomers * timeSavedPerCustomer;
    const extraCustomersPerDay = Math.floor(totalTimeSavedPerDay / inputs.avgWaitMin);
    const revenueBoost = extraCustomersPerDay * 30 * 200;
    const totalSave = salarySave + leakageSave + fraudSave + printerSave + posSave;
    const totalBenefit = totalSave + revenueBoost;
    const paybackDays = totalBenefit > 0 ? Math.ceil(599 / (totalBenefit / 30)) : 0;

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

  const formatCurrencyFull = (num: number) => `₹${num.toLocaleString()}`;

  const fields = [
    { key: 'cashiers', label: t('roi.cashierCount') as string, icon: '👷', min: 1, max: 20, step: 1, suffix: t('roi.suffix.cashiers') as string, isCurrency: false },
    { key: 'salary', label: t('roi.cashierSalary') as string, icon: '💰', min: 3000, max: 100000, step: 1000, suffix: t('roi.suffix.rupees') as string, isCurrency: true },
    { key: 'dailyCustomers', label: t('roi.dailyCustomers') as string, icon: '🛒', min: 10, max: 1000, step: 10, suffix: t('roi.suffix.customers') as string, isCurrency: false },
    { key: 'avgWaitMin', label: t('roi.avgWait') as string, icon: '⏱️', min: 1, max: 30, step: 1, suffix: t('roi.suffix.minutes') as string, isCurrency: false },
    { key: 'monthlyLeakage', label: t('roi.leakage') as string, icon: '📉', min: 0, max: 100000, step: 500, suffix: t('roi.suffix.rupees') as string, isCurrency: true },
    { key: 'monthlyFraud', label: t('roi.fraud') as string, icon: '⚠️', min: 0, max: 50000, step: 500, suffix: t('roi.suffix.rupees') as string, isCurrency: true },
    { key: 'printerCost', label: t('roi.printerCost') as string, icon: '🖨️', min: 0, max: 10000, step: 100, suffix: t('roi.suffix.rupees') as string, isCurrency: true },
    { key: 'posMachineCost', label: t('roi.posCost') as string, icon: '💻', min: 0, max: 100000, step: 5000, suffix: t('roi.suffix.rupeeUnit') as string, isCurrency: true },
  ];

  const resultItems = [
    { label: t('roi.salarySave') as string, value: results.salarySave, icon: '👷', desc: t('roi.salarySaveDesc') as string },
    { label: t('roi.leakageSave') as string, value: results.leakageSave, icon: '📉', desc: t('roi.leakageSaveDesc') as string },
    { label: t('roi.fraudSave') as string, value: results.fraudSave, icon: '⚠️', desc: t('roi.fraudSaveDesc') as string },
    { label: t('roi.printerSave') as string, value: results.printerSave, icon: '🖨️', desc: t('roi.printerSaveDesc') as string },
    { label: t('roi.posSave') as string, value: results.posSave, icon: '💻', desc: t('roi.posSaveDesc') as string },
    { label: t('roi.extraCustomers') as string, value: results.revenueBoost, icon: '⚡', desc: (t('roi.extraCustomersDesc') as string).replace('{wait}', String(inputs.avgWaitMin)).replace('{extra}', String(results.extraCustomersPerDay)) },
  ];

  return (
    <div className="w-full max-w-[1100px] mx-auto mt-20 mb-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-4 border"
             style={{background:'var(--accent-bg)', color:'var(--accent)', borderColor:'var(--accent)'}}>
          <Calculator size={14} />
          {t('roi.badge')}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{color:'var(--text-primary)'}}>
          {t('roi.title')}
        </h2>
        <p className="text-base max-w-xl mx-auto" style={{color:'var(--text-secondary)'}}>
          {t('roi.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INPUTS SIDE */}
        <div className="p-6 md:p-8 rounded-3xl border" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{color:'var(--text-primary)'}}>
            <Users size={18} style={{color:'var(--accent)'}} />
            {t('roi.inputLabel')}
          </h3>

          <div className="mb-6 p-4 rounded-xl border" style={{background:'var(--accent-bg)', borderColor:'var(--accent)'}}>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium" style={{color:'var(--accent)'}}>{t('roi.totalSalary')}</span>
              <span className="text-xl font-bold" style={{color:'var(--accent)'}}>{formatCurrencyFull(results.totalSalary)}</span>
            </div>
          </div>

          <div className="space-y-5">
            {fields.map((field) => (
              <div key={field.key}>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium flex items-center gap-2" style={{color:'var(--text-primary)'}}>
                    <span>{field.icon}</span> {field.label}
                  </label>
                  <span className="text-sm font-bold" style={{color:'var(--accent)'}}>
                    {field.isCurrency 
                      ? `₹${inputs[field.key as keyof typeof inputs].toLocaleString()}`
                      : `${inputs[field.key as keyof typeof inputs]} ${field.suffix}`
                    }
                  </span>
                </div>
                <input
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  value={inputs[field.key as keyof typeof inputs]}
                  onChange={(e) => updateInput(field.key, Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${((inputs[field.key as keyof typeof inputs] - field.min) / (field.max - field.min)) * 100}%, var(--border-color) ${((inputs[field.key as keyof typeof inputs] - field.min) / (field.max - field.min)) * 100}%, var(--border-color) 100%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RESULTS SIDE */}
        <div className="p-6 md:p-8 rounded-3xl border flex flex-col" style={{background:'var(--bg-card)', borderColor:'var(--accent)'}}>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2" style={{color:'var(--text-primary)'}}>
            <TrendingUp size={18} style={{color:'var(--accent)'}} />
            {t('roi.resultLabel')}
          </h3>

          <div className="space-y-4 flex-1">
            {resultItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl" style={{background:'var(--bg-base)'}}>
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium" style={{color:'var(--text-primary)'}}>{item.label}</p>
                    <p className="text-[10px]" style={{color:'var(--text-muted)'}}>{item.desc}</p>
                  </div>
                </div>
                <span className="text-sm font-bold" style={{color:'var(--accent)'}}>+{formatCurrency(item.value)}/mo</span>
              </div>
            ))}

            <div className="mt-4 pt-4 border-t-2" style={{borderColor:'var(--accent)'}}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium" style={{color:'var(--text-secondary)'}}>{t('roi.totalMonthlySavings')}</span>
                <span className="text-xl font-bold" style={{color:'var(--accent)'}}>{formatCurrency(results.totalSave)}/mo</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium" style={{color:'var(--text-secondary)'}}>{t('roi.extraRevenue')}</span>
                <span className="text-xl font-bold" style={{color:'var(--accent)'}}>+{formatCurrency(results.revenueBoost)}/mo</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl" style={{background:'var(--accent-bg)'}}>
                <div>
                  <span className="text-sm font-bold block" style={{color:'var(--accent)'}}>{t('roi.totalMonthlyBenefit')}</span>
                  <span className="text-xs" style={{color:'var(--text-muted)'}}>{t('roi.benefitSub')}</span>
                </div>
                <span className="text-2xl font-bold" style={{color:'var(--accent)'}}>{formatCurrency(results.totalBenefit)}/mo</span>
              </div>
            </div>

            <div className="text-center p-4 rounded-xl border" style={{background:'var(--bg-base)', borderColor:'var(--accent)'}}>
              <p className="text-sm font-medium mb-1" style={{color:'var(--text-primary)'}}>
                💰 {t('roi.paybackTitle')}
              </p>
              <p className="text-3xl font-bold" style={{color:'var(--accent)'}}>
                {results.paybackDays === 0 ? t('roi.paybackInstant') : (t('roi.paybackDays') as string).replace('{days}', String(results.paybackDays))}
              </p>
              <p className="text-xs mt-1" style={{color:'var(--text-muted)'}}>
                {results.paybackDays === 0 ? t('roi.paybackDescInstant') : (t('roi.paybackDesc') as string).replace('{days}', String(results.paybackDays))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Banner */}
      <div className="mt-8 p-6 rounded-2xl border text-center" style={{background:'var(--bg-card)', borderColor:'var(--border-color)'}}>
        <p className="text-sm mb-4" style={{color:'var(--text-secondary)'}}>
          <strong style={{color:'var(--text-primary)'}}>{t('roi.comparisonTitle')}</strong> {t('roi.comparisonDesc')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl" style={{background:'var(--bg-base)'}}>
            <div className="text-2xl font-bold text-red-400">₹75K+</div>
            <div className="text-xs" style={{color:'var(--text-muted)'}}>{t('roi.tradSetup')}</div>
          </div>
          <div className="p-3 rounded-xl" style={{background:'var(--bg-base)'}}>
            <div className="text-2xl font-bold text-red-400">₹6K{t('roi.perYear')}</div>
            <div className="text-xs" style={{color:'var(--text-muted)'}}>{t('roi.tradAmc')}</div>
          </div>
          <div className="p-3 rounded-xl" style={{background:'var(--accent-bg)'}}>
            <div className="text-2xl font-bold" style={{color:'var(--accent)'}}>₹7.2K{t('roi.perYear')}</div>
            <div className="text-xs" style={{color:'var(--text-muted)'}}>{t('roi.clickoutBasic')}</div>
          </div>
          <div className="p-3 rounded-xl" style={{background:'var(--accent-bg)'}}>
            <div className="text-2xl font-bold" style={{color:'var(--accent)'}}>₹0</div>
            <div className="text-xs" style={{color:'var(--text-muted)'}}>{t('roi.clickoutSetup')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================
// MAIN PRICING PAGE
// =========================================
export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const { t, lang } = useLanguage();

  const getPrice = (monthly: number) => isYearly ? Math.floor(monthly * 0.8) : monthly;

  const plans = [
    { key: 'mini', price: 299, terminals: 1, txLimit: 500, popular: false },
    { key: 'basic', price: 599, terminals: 3, txLimit: 2500, popular: true },
    { key: 'growth', price: 999, terminals: 10, txLimit: 15000, popular: false },
    { key: 'enterprise', price: 0, terminals: 'Unlimited', txLimit: 'Unlimited', popular: false, custom: true }
  ];

  const trustBadges = [
    { icon: <Shield size={16} />, text: t('trust.gst') },
    { icon: <Check size={16} />, text: t('trust.secure') },
    { icon: <Sparkles size={16} />, text: t('trust.ai') },
    { icon: <Zap size={16} />, text: t('trust.analytics') },
    { icon: <Clock size={16} />, text: t('trust.cloud') },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300" style={{background:'var(--bg-base)', color:'var(--text-primary)'}}>
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 border"
                 style={{background:'var(--accent-bg)', color:'var(--accent)', borderColor:'var(--accent)'}}>
              <Sparkles size={14} />
              {t('pricing.limitedOffer')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{color:'var(--text-primary)'}}>
              {t('pricing.choosePlan')}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{color:'var(--text-secondary)'}}>
              {t('pricing.planDesc')}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm rounded-full p-1">
              <button 
                onClick={() => setIsYearly(false)} 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${!isYearly ? 'bg-[var(--text-primary)] text-[var(--bg-base)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                {t('pricing.monthlyBtn')}
              </button>
              <button 
                onClick={() => setIsYearly(true)} 
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${isYearly ? 'bg-[var(--text-primary)] text-[var(--bg-base)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                {t('pricing.yearlyBtn')}
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                      style={{color:'var(--accent)', background:'var(--accent-bg)', borderColor:'var(--accent)'}}>
                  {t('pricing.save20')}
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-[1400px] mx-auto">
            {plans.map((plan) => {
              const features = t(`plan.${plan.key}.features`);
              const featuresArray = Array.isArray(features) ? features : [];

              return (
                <div 
                  key={plan.key}
                  className={`bg-[var(--bg-card)] h-full p-8 rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-1 relative ${plan.popular ? 'border-2 shadow-lg' : 'border border-[var(--border-color)] hover:shadow-sm'}`}
                  style={plan.popular ? {borderColor: 'var(--accent)', boxShadow: '0 8px 32px var(--accent-bg)'} : {}}
                >
                  {/* Badges */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                         style={{background:'var(--accent)', color:'#1a1917'}}>
                      <Sparkles size={12} />
                      {t('pricing.mostPopularBadge')}
                    </div>
                  )}
                  {!plan.popular && !plan.custom && plan.key === 'growth' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                         style={{background:'var(--bg-base)', color:'var(--text-secondary)', borderColor:'var(--border-color)'}}>
                      {t('pricing.bestValueBadge')}
                    </div>
                  )}

                  {/* Plan Header */}
                  <h3 className="text-xl mb-1 font-semibold" style={{color:'var(--text-primary)'}}>
                    {t(`plan.${plan.key}`) as string}
                  </h3>
                  <p className="text-sm mb-6" style={{color:'var(--text-secondary)'}}>
                    {t(`plan.${plan.key}.desc`) as string}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    {plan.custom ? (
                      <div className="text-4xl font-bold" style={{color:'var(--text-primary)'}}>{t('pricing.customPrice')}</div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold" style={{color:'var(--text-primary)'}}>
                          ₹{getPrice(plan.price)}
                        </span>
                        {isYearly && (
                          <span className="text-sm line-through" style={{color:'var(--text-secondary)'}}>
                            ₹{plan.price}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] mb-6 uppercase tracking-wide font-semibold" style={{color:'var(--text-secondary)'}}>
                    {plan.custom 
                      ? t('pricing.customPriceSub')
                      : `${t('pricing.perMonth')} ${isYearly ? `(${t('pricing.billedYearly')})` : ''}`
                    }
                  </p>

                  {/* Terminal & TX Info */}
                  {!plan.custom && (
                    <div className="flex gap-2 mb-6">
                      <span className="text-[10px] px-2 py-1 rounded-full font-bold border" 
                            style={{background:'var(--bg-base)', borderColor:'var(--border-color)', color:'var(--text-secondary)'}}>
                        {plan.terminals} {t('pricing.terminals')}
                      </span>
                      <span className="text-[10px] px-2 py-1 rounded-full font-bold border" 
                            style={{background:'var(--bg-base)', borderColor:'var(--border-color)', color:'var(--text-secondary)'}}>
                        {typeof plan.txLimit === 'number' ? plan.txLimit.toLocaleString() : plan.txLimit} {t('pricing.txPerMonth')}
                      </span>
                    </div>
                  )}

                  {/* Features — SAFE ARRAY CHECK */}
                  <div className="space-y-3 mb-8 flex-1">
                    {featuresArray.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 text-[13px]" style={{color: plan.popular ? 'var(--text-primary)' : 'var(--text-secondary)'}}>
                        <Check size={16} className="shrink-0 mt-0.5" style={{color: plan.popular ? 'var(--accent)' : 'var(--text-secondary)'}} />
                        {f}
                      </div>
                    ))}

                    {/* Modules */}
                    <div className="pt-4 border-t mt-4" style={{borderColor:'var(--border-color)'}}>
                      <span className="text-[10px] font-bold tracking-wider uppercase mb-2 block" style={{color:'var(--accent)'}}>
                        {plan.key === 'enterprise' ? t('pricing.includes') : t('pricing.modulesIncluded')}
                      </span>
                      <span className="text-[11px] leading-relaxed" style={{color:'var(--text-secondary)'}}>
                        {t(`plan.${plan.key}.modules`) as string}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  {plan.custom ? (
                    <Button variant="outline" className="w-full py-3">
                      {t('pricing.contactSales')}
                    </Button>
                  ) : (
                    <Button className="w-full py-3 flex items-center justify-center gap-2">
                      {t('pricing.startTrial')}
                      <ArrowRight size={16} />
                    </Button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Strategic Note */}
          <div className="mt-8 p-4 rounded-xl border text-center" style={{background:'var(--accent-bg)', borderColor:'var(--accent)'}}>
            <p className="text-sm font-medium" style={{color:'var(--accent)'}}>
              💡 {t('pricing.honestPricing')}
            </p>
          </div>

          {/* Trust Strip */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 border-t pt-12" style={{borderColor:'var(--border-color)'}}>
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium" style={{color:'var(--text-secondary)'}}>
                <span style={{color:'var(--accent)'}}>{badge.icon}</span> {badge.text as string}
              </div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border"
                 style={{background:'var(--bg-card)', borderColor:'var(--border-color)', color:'var(--text-secondary)'}}>
              <Shield size={16} style={{color:'var(--accent)'}} />
              {t('pricing.guarantee')}
            </div>
          </div>

          {/* ROI CALCULATOR */}
          <ROICalculator />

          {/* FAQ Teaser */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>
              {t('pricing.faqTeaser')}
            </h2>
            <p className="mb-6" style={{color:'var(--text-secondary)'}}>
              {t('pricing.faqDesc')}
            </p>
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-medium hover:underline" style={{color:'var(--accent)'}}>
              {t('pricing.viewFaq')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}