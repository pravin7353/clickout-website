'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, Shield, Sparkles, ArrowRight, Store, ArrowLeft } from 'lucide-react';

function SignupContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'trial';
  const billing = searchParams.get('billing') || 'monthly';

  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    phone: '',
    email: '',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const planInfo: Record<string, { name: string; price: string; badge: string; desc: string }> = {
    trial: {
      name: 'Free 14-Day Trial',
      price: '₹0 (No Card Needed)',
      badge: 'Full Features Access',
      desc: 'Test QR Self-Checkout, Cashier POS, Guard Console and Inventory in your store with zero risk.',
    },
    spark: {
      name: 'Spark Plan',
      price: billing === 'annual' ? '₹319/mo (₹3,828/yr)' : '₹399/mo',
      badge: 'Single Store',
      desc: 'Chhoti dukaan ka perfect start with 1 store (no add-ons), 500 txns/mo, 5 staff accounts, and 1 POS billing counter.',
    },
    pro: {
      name: 'Pro Plan',
      price: billing === 'annual' ? '₹639/mo (₹7,668/yr)' : '₹799/mo',
      badge: '⭐ Most Popular',
      desc: 'Puri dukaan, ek dashboard with 1 store base (up to 2 extra @ ₹299/mo each), 2,500 base txns/mo (+2,500 per extra store), HR module, 15 staff accounts, and 2 POS counters.',
    },
    growth: {
      name: 'Growth Plan',
      price: billing === 'annual' ? '₹1,199/mo (₹14,388/yr)' : '₹1,499/mo',
      badge: 'Multi-Store',
      desc: 'Multi-store retail chain with 1 store base (up to 4 extra @ ₹399/mo each), 6,000 base txns/mo (+6,000 per extra store), HR + Finance modules, 50 staff accounts, and 5 POS counters.',
    },
  };

  const current = planInfo[plan] || planInfo.trial;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-28 md:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link href="/pricing" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] mb-6 transition-colors">
        <ArrowLeft size={14} /> Back to Pricing
      </Link>

      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-10 shadow-xl">
        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[var(--accent-bg)] text-[var(--accent)] mx-auto flex items-center justify-center text-3xl mb-4 border border-[var(--accent)]">
              ✓
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              Store Registration Initiated!
            </h2>
            <p className="text-sm max-w-md mx-auto mb-6" style={{ color: 'var(--text-secondary)' }}>
              Namaste {formData.ownerName || 'Retailer'}, aapka <strong>{current.name}</strong> setup ready ho raha hai. Humara team aapko WhatsApp aur call pe 10 minute mein assist karega.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919323137353?text=Namaste!%20Maine%20abhi%20${encodeURIComponent(current.name)}%20ke%20liye%20sign%20up%20kiya%20hai%20meri%20dukaan%20${encodeURIComponent(formData.storeName || 'Store')}%20ke%20liye.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#25D366] text-white"
              >
                Connect on WhatsApp Now
              </a>
              <Link href="/pricing" className="px-6 py-3 rounded-xl font-bold text-sm bg-[var(--bg-base)] border border-[var(--border-color)]">
                Return to Pricing
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[var(--border-color)]">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent)]/30 mb-2 inline-block">
                  {current.badge}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                  Start with {current.name}
                </h1>
                <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  {current.desc}
                </p>
              </div>
              <div className="text-left sm:text-right bg-[var(--bg-base)] p-3 rounded-xl border border-[var(--border-color)] shrink-0">
                <span className="text-xs block text-[var(--text-secondary)]">Selected Plan</span>
                <span className="text-lg font-extrabold text-[var(--accent)]">{current.price}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Dukaan / Business Ka Naam *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    placeholder="e.g. Laxmi Supermarket"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] text-sm focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Aapka Naam (Owner) *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] text-sm focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] text-sm focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Email ID *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] text-sm focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                  City / Location
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Mumbai, Bengaluru, Jaipur"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] text-sm focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-color)] text-xs space-y-1.5" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-[var(--accent)]" />
                  <span>14 din free trial included — koi credit card required nahi hai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[var(--accent)]" />
                  <span>Proper GST invoice with ITC claim available on paid subscriptions</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm bg-[var(--accent)] text-black hover:opacity-95 shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Create Account &amp; Start Store <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Navbar />
      <Suspense fallback={<div className="pt-36 text-center text-sm">Loading signup...</div>}>
        <SignupContent />
      </Suspense>
      <Footer />
    </div>
  );
}
