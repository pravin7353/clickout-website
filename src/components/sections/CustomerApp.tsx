'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3.18 23.76c.37.2.8.2 1.16-.01l13.68-7.93-3.07-3.07-11.77 11.01zm-1.05-19.7C2.05 4.3 2 4.57 2 4.86v14.28c0 .29.05.56.13.8l.07.07 8-8v-.18L2.2 3.99l-.07.07zM20.49 10.7l-2.78-1.61-3.07 3.07 3.07 3.07 2.8-1.63c.8-.46.8-1.84-.02-2.9zM4.34.25L18.02 8.18l-3.07 3.07L7.41 3.73 4.34.25z"/>
  </svg>
);

const STEPS = [
  {
    icon: '📷',
    label: 'Scan Product',
    sub: 'Point camera at barcode',
    color: 'var(--text-secondary)',
  },
  {
    icon: '🛒',
    label: 'Cart Ready',
    sub: '3 items · ₹856',
    color: 'var(--text-secondary)',
  },
  {
    icon: '💳',
    label: 'UPI Payment',
    sub: 'Pay instantly',
    color: 'var(--text-secondary)',
  },
  {
    icon: '✅',
    label: 'Payment Done',
    sub: 'Transaction verified',
    color: 'var(--accent)',
  },
  {
    icon: '🚪',
    label: 'Exit Pass',
    sub: 'Show QR at gate',
    color: 'var(--accent)',
  },
  {
    icon: '✔',
    label: 'Gate Verified',
    sub: 'Thank you, come again!',
    color: 'var(--accent)',
  },
];

const STEP_DURATION = 1800; // ms per step

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
      className="relative w-[260px] h-[480px] rounded-[2.8rem] flex flex-col overflow-hidden shadow-2xl flex-shrink-0"
      style={{
        background: 'var(--bg-card)',
        border: '6px solid var(--border-strong)',
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-2xl z-10"
        style={{ background: 'var(--border-strong)' }}
      />

      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-7 pb-2">
        <span className="text-[9px] font-bold" style={{ color: 'var(--text-muted)' }}>9:41</span>
        <span className="text-[9px] font-bold" style={{ color: 'var(--text-muted)' }}>●●●</span>
      </div>

      {/* App header */}
      <div
        className="px-4 py-2 flex items-center justify-between border-b"
        style={{ borderColor: 'var(--border-color)' }}
      >
        <span className="text-[11px] font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>
          ClickOut
        </span>
        <div
          className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: 'var(--accent-bg)',
            color: 'var(--accent)',
          }}
        >
          LIVE
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 pt-3 pb-1">
        {STEPS.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              width: i === step ? 16 : 5,
              background: i <= step ? 'var(--accent)' : 'var(--border-color)',
            }}
            transition={{ duration: 0.3 }}
            className="h-1.5 rounded-full"
          />
        ))}
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 gap-4 relative overflow-hidden">

        {/* Background tint on success */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isSuccess ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: 'var(--accent-bg)' }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.9 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex flex-col items-center gap-3 relative z-10"
          >
            {/* Icon */}
            <div
              className="w-18 h-18 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
              style={{
                background: isSuccess ? 'var(--accent-bg)' : 'var(--bg-base)',
                border: `1.5px solid ${isSuccess ? 'var(--accent-border)' : 'var(--border-color)'}`,
              }}
            >
              {current.icon}
            </div>

            {/* Label */}
            <div className="text-center">
              <p
                className="text-sm font-bold leading-tight"
                style={{ color: isSuccess ? 'var(--accent)' : 'var(--text-primary)' }}
              >
                {current.label}
              </p>
              <p className="text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {current.sub}
              </p>
            </div>

            {/* QR for exit pass step */}
            {step === 4 && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="grid grid-cols-4 gap-0.5 mt-1"
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-[2px]"
                    style={{
                      background: [0,1,4,5,8,10,11,14,15].includes(i)
                        ? 'var(--accent)'
                        : 'var(--border-color)',
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA bar */}
      <div className="px-4 pb-5 pt-2">
        <motion.div
          animate={{
            background: isSuccess ? 'var(--accent)' : 'var(--text-primary)',
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-10 rounded-xl flex items-center justify-center"
        >
          <span
            className="text-xs font-bold"
            style={{ color: isSuccess ? '#1a1917' : 'var(--bg-base)' }}
          >
            {step === 0 ? 'Start Scanning' :
             step === 1 ? 'Review Cart' :
             step === 2 ? 'Pay ₹856' :
             step === 3 ? 'Paid ✓' :
             step === 4 ? 'Show at Gate' :
             'Done ✓'}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function CustomerApp() {
  return (
    <section
      className="w-full py-20 border-t"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-16 p-10 md:p-16 rounded-[2rem]"
          style={{
            background: 'var(--bg-base)',
            border: '1px solid var(--border-color)',
          }}
        >
          {/* Left — text */}
          <div className="flex-1 text-center md:text-left max-w-md">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md mb-6"
              style={{
                background: 'var(--accent-bg)',
                border: '1px solid var(--accent-border)',
              }}
            >
              <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                For Shoppers
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold font-modern tracking-tight mb-4 leading-[1.15]"
              style={{ color: 'var(--text-primary)' }}
            >
              Give your customers the power to skip the line.
            </h2>

            <p className="text-base mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              17 second checkout using only their phone.
            </p>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              While you manage the store from the Command Center, your customers enjoy a frictionless, secure self-checkout on their own devices.
            </p>

            {/* Google Play only */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start mb-8">
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
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

              {/* iOS coming soon badge */}
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm w-full sm:w-auto justify-center"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)',
                }}
              >
                <span>🍎</span>
                <span className="text-xs">iOS Coming Soon</span>
              </div>
            </div>

            {/* 3 chips */}
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              {[
                { icon: '⚡', label: '17 sec checkout' },
                { icon: '🔒', label: 'Secure & Verified' },
                { icon: '📷', label: 'QR Powered' },
              ].map(chip => (
                <div
                  key={chip.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
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
            <p className="text-[10px] tracking-widest uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>
              Live demo · Auto-playing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
