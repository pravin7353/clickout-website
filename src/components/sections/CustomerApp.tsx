'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, ScanLine, ShoppingCart, CreditCard, ShieldCheck, Zap } from 'lucide-react';

// Google Play Icon
const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3.18 23.76c.37.2.8.2 1.16-.01l13.68-7.93-3.07-3.07-11.77 11.01zm-1.05-19.7C2.05 4.3 2 4.57 2 4.86v14.28c0 .29.05.56.13.8l.07.07 8-8v-.18L2.2 3.99l-.07.07zM20.49 10.7l-2.78-1.61-3.07 3.07 3.07 3.07 2.8-1.63c.8-.46.8-1.84-.02-2.9zM4.34.25L18.02 8.18l-3.07 3.07L7.41 3.73 4.34.25z"/>
  </svg>
);

// Proper Apple Logo SVG
const AppleIcon = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 50.3-11.4 69.5-34.3z"/>
  </svg>
);

const STEPS = [
  {
    id: 'scan',
    icon: <ScanLine size={28} />,
    label: 'Scan Product',
    sub: 'Point camera at barcode',
    detail: 'Maggi Noodles ₹14',
    accent: false,
  },
  {
    id: 'cart',
    icon: <ShoppingCart size={28} />,
    label: 'Cart Ready',
    sub: '3 items · ₹856',
    detail: 'Maggi ×2, Cola ×1',
    accent: false,
  },
  {
    id: 'pay',
    icon: <CreditCard size={28} />,
    label: 'UPI Payment',
    sub: 'Pay instantly',
    detail: 'Google Pay / PhonePe',
    accent: false,
  },
  {
    id: 'done',
    icon: <ShieldCheck size={28} />,
    label: 'Payment Done',
    sub: 'Transaction verified',
    detail: 'Ref: #CKT-8842',
    accent: true,
  },
  {
    id: 'pass',
    icon: <Zap size={28} />,
    label: 'Exit Pass',
    sub: 'Show QR at gate',
    detail: 'Valid for 10 mins',
    accent: true,
  },
  {
    id: 'verified',
    icon: <Smartphone size={28} />,
    label: 'Gate Verified',
    sub: 'Thank you, come again!',
    detail: 'Exit approved ✓',
    accent: true,
  },
];

const STEP_DURATION = 2000;

function PhoneDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setStep(s => (s + 1) % STEPS.length);
    }, STEP_DURATION);
    return () => clearInterval(t);
  }, []);

  const current = STEPS[step];
  const isSuccess = step >= 3;

  return (
    <div
      className="relative w-[260px] h-[500px] rounded-[2.8rem] flex flex-col overflow-hidden shadow-2xl flex-shrink-0"
      style={{
        background: 'var(--bg-card)',
        border: '6px solid var(--border-strong, #333)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 rounded-b-2xl z-20"
        style={{ background: 'var(--border-strong, #333)' }}
      />

      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-8 pb-2 z-10">
        <span className="text-[10px] font-bold" style={{ color: 'var(--text-muted)' }}>9:41</span>
        <div className="flex items-center gap-1">
          <span className="text-[8px]" style={{ color: 'var(--text-muted)' }}>●●●</span>
          <span className="text-[8px]" style={{ color: 'var(--text-muted)' }}>📶</span>
          <span className="text-[8px]" style={{ color: 'var(--text-muted)' }}>🔋</span>
        </div>
      </div>

      {/* App header */}
      <div
        className="px-4 py-2.5 flex items-center justify-between border-b z-10"
        style={{ borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center gap-2">
          <div 
            className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold"
            style={{ background: 'var(--accent)', color: '#1a1917' }}
          >
            C
          </div>
          <span className="text-[12px] font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
            ClickOut
          </span>
        </div>
        <div
          className="text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
          style={{
            background: 'var(--accent-bg)',
            color: 'var(--accent)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          LIVE
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-5 pt-4 pb-2 z-10">
        <div className="flex items-center gap-1.5">
          {STEPS.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                flex: i === step ? 2 : 1,
                background: i <= step ? 'var(--accent)' : 'var(--border-color)',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="h-1 rounded-full"
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[8px] font-medium" style={{ color: 'var(--text-muted)' }}>
            Step {step + 1} of {STEPS.length}
          </span>
          <span className="text-[8px] font-medium" style={{ color: 'var(--accent)' }}>
            {isSuccess ? '✓ Complete' : 'In Progress...'}
          </span>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 gap-4 relative overflow-hidden z-10">

        {/* Success glow background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: isSuccess ? 0.15 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ background: 'radial-gradient(circle at center, var(--accent), transparent 70%)' }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 24, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.88 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-4 relative z-10 w-full"
          >
            {/* Icon circle */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: isSuccess 
                  ? '0 0 30px rgba(0,200,83,0.3)' 
                  : '0 0 0px rgba(0,0,0,0)'
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: isSuccess ? 'var(--accent-bg)' : 'var(--bg-base)',
                border: `2px solid ${isSuccess ? 'var(--accent)' : 'var(--border-color)'}`,
                color: isSuccess ? 'var(--accent)' : 'var(--text-primary)',
              }}
            >
              {current.icon}
            </motion.div>

            {/* Labels */}
            <div className="text-center">
              <p
                className="text-[15px] font-bold leading-tight"
                style={{ color: isSuccess ? 'var(--accent)' : 'var(--text-primary)' }}
              >
                {current.label}
              </p>
              <p className="text-[11px] mt-1 font-medium" style={{ color: 'var(--text-secondary)' }}>
                {current.sub}
              </p>
              <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {current.detail}
              </p>
            </div>

            {/* QR Code for exit pass */}
            {step === 4 && (
              <motion.div
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="p-3 rounded-xl border-2"
                style={{ borderColor: 'var(--accent)', background: 'var(--bg-base)' }}
              >
                <div className="grid grid-cols-5 gap-1">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className="w-3 h-3 rounded-sm"
                      style={{
                        background: [0,1,2,4,5,6,10,12,14,15,16,18,20,22,23,24].includes(i)
                          ? 'var(--accent)'
                          : 'var(--border-color)',
                      }}
                    />
                  ))}
                </div>
                <p className="text-[8px] text-center mt-2 font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  EXIT QR • GATE 2
                </p>
              </motion.div>
            )}

            {/* Product card for scan step */}
            {step === 0 && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-full p-3 rounded-xl border flex items-center gap-3"
                style={{ borderColor: 'var(--border-color)', background: 'var(--bg-base)' }}
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-lg">
                  🍜
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold" style={{ color: 'var(--text-primary)' }}>Maggi Noodles</p>
                  <p className="text-[9px]" style={{ color: 'var(--text-muted)' }}>70g • Masala</p>
                </div>
                <span className="text-[12px] font-bold" style={{ color: 'var(--accent)' }}>₹14</span>
              </motion.div>
            )}

            {/* Cart items for cart step */}
            {step === 1 && (
              <div className="w-full space-y-2">
                {[
                  { name: 'Maggi Noodles', qty: 2, price: 28, icon: '🍜' },
                  { name: 'Coca Cola 1L', qty: 1, price: 68, icon: '🥤' },
                  { name: 'Parle-G 800g', qty: 1, price: 45, icon: '🍪' },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full p-2.5 rounded-xl border flex items-center gap-3"
                    style={{ borderColor: 'var(--border-color)', background: 'var(--bg-base)' }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold" style={{ color: 'var(--text-primary)' }}>{item.name}</p>
                      <p className="text-[8px]" style={{ color: 'var(--text-muted)' }}>Qty: {item.qty}</p>
                    </div>
                    <span className="text-[11px] font-bold" style={{ color: 'var(--text-primary)' }}>₹{item.price}</span>
                  </motion.div>
                ))}
                <div className="flex justify-between pt-2 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="text-[10px] font-bold" style={{ color: 'var(--text-primary)' }}>Total</span>
                  <span className="text-[12px] font-bold" style={{ color: 'var(--accent)' }}>₹856</span>
                </div>
              </div>
            )}

            {/* UPI options for pay step */}
            {step === 2 && (
              <div className="w-full space-y-2">
                {['Google Pay', 'PhonePe', 'Paytm'].map((app, i) => (
                  <motion.div
                    key={app}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="w-full p-3 rounded-xl border flex items-center gap-3 cursor-pointer"
                    style={{ borderColor: i === 0 ? 'var(--accent)' : 'var(--border-color)', background: 'var(--bg-base)' }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs">
                      {app === 'Google Pay' ? 'G' : app === 'PhonePe' ? 'P' : 'P'}
                    </div>
                    <span className="text-[11px] font-bold flex-1" style={{ color: 'var(--text-primary)' }}>{app}</span>
                    {i === 0 && <span className="text-[8px] px-2 py-0.5 rounded-full font-bold" style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>DEFAULT</span>}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA bar */}
      <div className="px-5 pb-6 pt-2 z-10">
        <motion.div
          animate={{
            background: isSuccess ? 'var(--accent)' : 'var(--text-primary)',
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-11 rounded-xl flex items-center justify-center gap-2"
        >
          {isSuccess && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-sm">✓</motion.span>}
          <span
            className="text-xs font-bold tracking-wide"
            style={{ color: isSuccess ? '#1a1917' : 'var(--bg-base)' }}
          >
            {step === 0 ? 'Scan Barcode' :
             step === 1 ? 'Review Cart' :
             step === 2 ? 'Pay ₹856' :
             step === 3 ? 'Payment Successful' :
             step === 4 ? 'Show at Gate' :
             'Exit Approved'}
          </span>
        </motion.div>
        <p className="text-[8px] text-center mt-2 font-medium" style={{ color: 'var(--text-muted)' }}>
          {isSuccess ? '🔒 Secured by ClickOut Fraud Engine' : '🔒 End-to-end encrypted'}
        </p>
      </div>
    </div>
  );
}

export default function CustomerApp() {
  return (
    <section
      id="customer-app"
      className="w-full py-24 border-t"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Section Label */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border"
            style={{
              background: 'var(--accent-bg)',
              borderColor: 'var(--accent-border)',
              color: 'var(--accent)',
            }}
          >
            <Smartphone size={14} />
            <span className="text-[11px] font-bold tracking-widest uppercase">Customer Shopping App</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Your customers shop in <span style={{ color: 'var(--accent)' }}>17 seconds</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            No queues. No waiting. Just scan, pay, and walk out. The ClickOut Customer App turns every shopper's phone into a self-checkout terminal.
          </p>
        </div>

        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-16 p-10 md:p-16 rounded-[2.5rem]"
          style={{
            background: 'var(--bg-base)',
            border: '1px solid var(--border-color)',
          }}
        >
          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left max-w-lg">
            
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Skip the line. Shop smarter.
            </h3>

            <p className="text-base mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              While you manage the store from the <strong>ClickOut Admin Command Center</strong>, your customers enjoy a frictionless, secure self-checkout experience on their own devices.
            </p>

            {/* How it works steps */}
            <div className="space-y-4 mb-8">
              {[
                { num: '01', title: 'Scan Product Barcode', desc: 'Customer opens app, points camera at any product barcode' },
                { num: '02', title: 'Review & Pay via UPI', desc: 'Cart auto-builds. One-tap UPI payment (GPay, PhonePe, Paytm)' },
                { num: '03', title: 'Get Exit QR Pass', desc: 'Digital gatepass generated. Guard scans at exit. Done!' },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 items-start">
                  <span 
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg shrink-0 mt-0.5"
                    style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-8">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: 'var(--text-primary)',
                  color: 'var(--bg-base)',
                }}
              >
                <PlayStoreIcon />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider opacity-70 leading-none mb-0.5">GET IT ON</div>
                  <div className="text-sm leading-none font-bold">Google Play</div>
                </div>
              </a>

              {/* App Store - Coming Soon */}
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-xl w-full sm:w-auto justify-center opacity-60"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)',
                }}
              >
                <AppleIcon />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider leading-none mb-0.5">Download on the</div>
                  <div className="text-sm leading-none font-bold">App Store</div>
                </div>
                <span 
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full ml-2"
                  style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                >
                  SOON
                </span>
              </div>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
              {[
                { icon: '⚡', label: '17 sec checkout' },
                { icon: '🔒', label: 'Fraud Protected' },
                { icon: '📷', label: 'QR Powered' },
                { icon: '💰', label: 'UPI Instant' },
              ].map(chip => (
                <div
                  key={chip.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — phone demo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <PhoneDemo />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <p className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>
                Live demo • Auto-playing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}