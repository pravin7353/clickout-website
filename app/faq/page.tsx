'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQPage() {
  const { t, lang, setLang } = useLanguage();

  // Dynamically pull 20 FAQs using translation keys
  const faqs = Array.from({ length: 20 }, (_, i) => ({
    q: t(`faq.q${i + 1}`) as string,
    a: t(`faq.a${i + 1}`) as string,
  }));

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: 'var(--bg-base)', color: 'var(--text-secondary)' }}>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 backdrop-blur-xl border-b"
        style={{ background: 'var(--bg-nav)', borderColor: 'var(--border-color)' }}
      >
        <Link href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span style={{ color: 'var(--text-primary)' }}>Click</span>
          <span style={{ color: 'var(--accent)' }}>Out</span>
        </Link>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="px-3 py-1 rounded-full text-xs font-bold border transition"
            style={{borderColor:'var(--accent)', color:'var(--accent)'}}
          >
            {t('nav.lang')}
          </button>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg text-sm transition border hover:bg-[var(--bg-card)]"
            style={{
              background: 'var(--accent-bg)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)',
            }}
          >
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold mb-12 font-modern text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('faq.pageTitle')}
          </h1>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                }))
              })
            }}
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 border transition-all duration-300 hover:shadow-md"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {faq.q}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer
        className="w-full border-t mt-20"
        style={{ background: 'var(--bg-footer)', borderColor: 'var(--border-color)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} ClickOut. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}