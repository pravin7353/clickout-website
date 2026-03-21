'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xreydjeq', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: data.get('name'),
    store: data.get('store'),
    city: data.get('city'),
    phone: data.get('phone'),
    email: data.get('email'),
  }),
});
      if (res.ok) {
        alert('Demo request submitted! We will contact you within 24 hours.');
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#080B08', color: '#F0F0F0', fontFamily: "'DM Sans', sans-serif", overflowX: 'hidden' }}>

      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .green { color: #00FF88; }
        .btn-green {
          background: #00FF88;
          color: #080B08;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          display: inline-block;
        }
        .btn-green:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,255,136,0.3); }
        .btn-outline {
          background: transparent;
          color: #F0F0F0;
          border: 1.5px solid rgba(240,240,240,0.3);
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          display: inline-block;
        }
        .btn-outline:hover { border-color: #00FF88; color: #00FF88; }
        .card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 32px;
        }
        .pain-card {
          background: rgba(255,60,60,0.06);
          border: 1px solid rgba(255,60,60,0.15);
          border-radius: 16px;
          padding: 28px;
        }
        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }
        .feature-icon {
          width: 44px;
          height: 44px;
          background: rgba(0,255,136,0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        input, select {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 14px 16px;
          color: #F0F0F0;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }
        input:focus { border-color: #00FF88; }
        input::placeholder { color: rgba(240,240,240,0.35); }
        label { display: block; font-size: 13px; color: rgba(240,240,240,0.55); margin-bottom: 8px; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase; }
        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 42px !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .nav-cta { display: none !important; }
          .owner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5%',
        height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,11,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800, letterSpacing: '-0.5px' }}>
          Click<span style={{ color: '#00FF88' }}>Out</span>
        </div>
        <a href="#owner-section" className="btn-outline nav-cta" style={{ padding: '10px 24px', fontSize: '14px' }}>
          For Store Owners ↓
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 5% 80px', position: 'relative' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', color: '#00FF88', fontWeight: 500, marginBottom: '32px', letterSpacing: '0.5px' }}>
            🚀 NOW LIVE IN MUMBAI
          </div>

          <h1 className="hero-title" style={{ fontFamily: "'Syne', sans-serif", fontSize: '72px', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '28px' }}>
            Skip The Queue.<br />
            <span style={{ color: '#00FF88' }}>Scan. Pay. Walk Out.</span>
          </h1>

          <p style={{ fontSize: '19px', color: 'rgba(240,240,240,0.6)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 48px', fontWeight: 300 }}>
            Shop smarter at your favourite malls and supermarkets. No waiting. No cashier. Just freedom.
          </p>

          <div className="hero-btns" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
            <a href="#" className="btn-green" style={{ fontSize: '16px', padding: '16px 36px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="#" className="btn-green" style={{ fontSize: '16px', padding: '16px 36px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.18.96.04l13.07-7.53-2.75-2.75-11.28 10.24zm-1.15-20.2C1.84 3.83 2 4.12 2 4.46v15.08c0 .34-.16.63-.97.9l11.13-10.15L2.03 3.56zM20.12 10.3l-2.86-1.65L14.2 12l3.06 3.06 2.86-1.65c.82-.47.82-1.64 0-2.11zM4.14.24L17.21 7.77l-2.75 2.75L3.18.28C3.5.14 3.84.07 4.14.24z"/></svg>
              Google Play
            </a>
          </div>

          <p style={{ fontSize: '13px', color: 'rgba(240,240,240,0.3)', letterSpacing: '0.5px' }}>
            Available at select stores in Mumbai · Free to download
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '80px 5%', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#00FF88', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Simple by design</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '42px', fontWeight: 800, letterSpacing: '-1px' }}>3 Steps to Freedom</h2>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            {[
              { step: '01', emoji: '📱', title: 'Scan', desc: 'Open ClickOut app. Scan any product barcode with your phone camera.' },
              { step: '02', emoji: '💳', title: 'Pay', desc: 'Pay instantly via UPI, card, or wallet. Safe, fast, and secure.' },
              { step: '03', emoji: '🚶', title: 'Walk Out', desc: 'Show your exit QR pass to the guard. No queue. No counter. Done.' },
            ].map((item) => (
              <div key={item.step} className="card" style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '12px', color: 'rgba(240,240,240,0.2)', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>{item.step}</div>
                <div style={{ fontSize: '42px', marginBottom: '20px' }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#00FF88' }}>{item.title}</h3>
                <p style={{ color: 'rgba(240,240,240,0.55)', lineHeight: 1.7, fontSize: '15px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSUMER PAIN POINTS ── */}
      <section style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: 'rgba(255,80,80,0.8)', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>We feel your pain</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '42px', fontWeight: 800, letterSpacing: '-1px' }}>We Know The Struggle</h2>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '64px' }}>
            {[
              { emoji: '⏱️', title: '20 min billing queues', desc: 'Weekend grocery run becomes a 2-hour ordeal because of slow billing counters.' },
              { emoji: '🧾', title: 'Cashier errors in your bill', desc: 'Wrong item scanned, duplicate charges — and you only notice at home.' },
              { emoji: '😤', title: 'Weekend rush nightmare', desc: 'Peak hours turn simple shopping into a frustrating, exhausting experience.' },
            ].map((item) => (
              <div key={item.title} className="pain-card">
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(240,240,240,0.5)', lineHeight: 1.7, fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Transition bridge */}
          <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(0,255,136,0.04)', border: '1px dashed rgba(0,255,136,0.2)', borderRadius: '16px' }}>
            <p style={{ fontSize: '13px', color: 'rgba(240,240,240,0.4)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>psst...</p>
            <p style={{ fontSize: '20px', fontWeight: 500, color: '#00FF88' }}>
              Are you a Mall Manager or Store Owner? ↓
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(240,240,240,0.45)', marginTop: '8px' }}>
              ClickOut is not just for shoppers — it's a complete retail operating system.
            </p>
            <a href="#owner-section" style={{ display: 'inline-block', marginTop: '20px', color: '#00FF88', textDecoration: 'none', fontSize: '14px', fontWeight: 600, borderBottom: '1px solid rgba(0,255,136,0.4)', paddingBottom: '2px' }}>
              See what ClickOut does for your business →
            </a>
          </div>
        </div>
      </section>

      {/* ── OWNER SECTION ── */}
      <section id="owner-section" style={{ padding: '100px 5%', background: 'rgba(0,255,136,0.02)', borderTop: '1px solid rgba(0,255,136,0.08)' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', color: '#00FF88', fontWeight: 600, marginBottom: '24px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              For Mall Owners & Retail Chains
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '20px' }}>
              Run Your Retail Store<br />
              <span style={{ color: '#00FF88' }}>Like a Pro.</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(240,240,240,0.5)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              ClickOut is a complete multi-tenant retail operating system — billing, inventory, fraud detection, and AI-powered growth — all in one.
            </p>
          </div>

          {/* Features */}
          <div className="owner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '64px' }}>
            {[
              { icon: '🧠', title: 'AI Growth Radar', desc: 'Detect customer churn before it happens. Get AI-powered alerts on sales patterns, peak hours, and revenue leaks.' },
              { icon: '🧾', title: 'Smart Billing Engine', desc: 'Zero billing errors. Real-time transaction logs. Support for UPI, card, wallet, and cash — all in one dashboard.' },
              { icon: '📦', title: 'Inventory Control', desc: 'Live stock tracking across all your counters. Low stock alerts. Expiry management. Supplier order automation.' },
              { icon: '🛡️', title: 'Fraud Detection', desc: 'Real-time guard verification. Exit QR scanning. Alert system for suspicious transaction patterns.' },
            ].map((f) => (
              <div key={f.title} className="card">
                <div className="feature-row">
                  <div className="feature-icon">{f.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h3>
                    <p style={{ color: 'rgba(240,240,240,0.5)', lineHeight: 1.7, fontSize: '14px' }}>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#demo-form" className="btn-green" style={{ fontSize: '17px', padding: '18px 48px' }}>
              Book a Free Demo →
            </a>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(240,240,240,0.3)' }}>No credit card required · 30-min onboarding call</p>
          </div>
        </div>
      </section>

      {/* ── DEMO FORM ── */}
      <section id="demo-form" style={{ padding: '100px 5%', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#00FF88', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Get started</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '40px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '16px' }}>Let's Get You Started</h2>
            <p style={{ color: 'rgba(240,240,240,0.45)', fontSize: '16px', lineHeight: 1.7 }}>Fill in your details. Our team will reach out within 24 hours.</p>
          </div>

          <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label>Full Name</label>
                <input name="name" type="text" placeholder="Pravin Shah" required />
              </div>
              <div>
                <label>Store / Mall Name</label>
                <input name="store" type="text" placeholder="Phoenix Mall" required />
              </div>
            </div>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label>City</label>
                <input name="city" type="text" placeholder="Mumbai" required />
              </div>
              <div>
                <label>Phone Number</label>
                <input name="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>
            </div>
            <div>
              <label>Email Address</label>
              <input name="email" type="email" placeholder="you@yourstore.com" required />
            </div>
            <button type="submit" className="btn-green" style={{ width: '100%', padding: '18px', fontSize: '17px', marginTop: '8px', borderRadius: '8px', cursor: 'pointer', border: 'none', fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Request Demo →
            </button>
            <p style={{ textAlign: 'center', fontSize: '13px', color: 'rgba(240,240,240,0.3)' }}>
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '32px 5%', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 800 }}>
          Click<span style={{ color: '#00FF88' }}>Out</span>
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(240,240,240,0.3)' }}>© 2025 ClickOut. All rights reserved.</p>
        <a href="/login" style={{ fontSize: '13px', color: 'rgba(240,240,240,0.3)', textDecoration: 'none' }}>Store Owner Login →</a>
      </footer>
    </div>
  );
}
