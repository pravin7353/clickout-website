'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const TOTAL_PEOPLE = 8;
const WAVE_STAGGER = 180; // ms between each person reacting to wave

// Minimal stick figure
const PersonIcon = () => (
  <svg width="18" height="30" viewBox="0 0 22 38" fill="none">
    <circle cx="11" cy="6" r="5.5" fill="currentColor" />
    <line x1="11" y1="12" x2="11" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="3" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="11" y1="27" x2="4" y2="37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="11" y1="27" x2="18" y2="37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Phone icon that appears when wave hits
const PhoneIcon = () => (
  <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
    <rect x="1" y="1" width="14" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="4" y="4" width="8" height="14" rx="1" fill="currentColor" opacity="0.3"/>
    <circle cx="8" cy="22" r="1.5" fill="currentColor" opacity="0.6"/>
  </svg>
);

// Cashier counter
const CashierCounter = ({ fading }: { fading: boolean }) => (
  <motion.div
    animate={{ opacity: fading ? 0 : 1, scale: fading ? 0.8 : 1 }}
    transition={{ duration: 0.6, delay: fading ? 0.5 : 0 }}
    className="flex flex-col items-center gap-2"
  >
    <svg width="90" height="44" viewBox="0 0 90 44" fill="none">
      <rect x="0" y="12" width="90" height="32" rx="6" fill="currentColor" opacity="0.12"/>
      <rect x="8" y="4" width="34" height="22" rx="4" fill="currentColor" opacity="0.18"/>
      <rect x="11" y="7" width="28" height="15" rx="2" fill="currentColor" opacity="0.28"/>
      <rect x="48" y="20" width="32" height="7" rx="3" fill="currentColor" opacity="0.2"/>
    </svg>
    <span className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>
      Cashier
    </span>
  </motion.div>
);

// QR that replaces cashier
const QRIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" fill="none"/>
    <rect x="7" y="7" width="10" height="10" fill="currentColor" opacity="0.85"/>
    <rect x="30" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" fill="none"/>
    <rect x="35" y="7" width="10" height="10" fill="currentColor" opacity="0.85"/>
    <rect x="2" y="30" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" fill="none"/>
    <rect x="7" y="35" width="10" height="10" fill="currentColor" opacity="0.85"/>
    <rect x="30" y="30" width="8" height="8" fill="currentColor" opacity="0.65"/>
    <rect x="40" y="30" width="8" height="8" fill="currentColor" opacity="0.65"/>
    <rect x="30" y="40" width="8" height="8" fill="currentColor" opacity="0.65"/>
    <rect x="40" y="40" width="8" height="8" fill="currentColor" opacity="0.65"/>
  </svg>
);

type PersonState = 'queue' | 'phone' | 'gone';
type Phase = 'building' | 'waiting' | 'waving' | 'cleared';

export default function Hero() {
  const [phase, setPhase] = useState<Phase>('building');
  const [visibleCount, setVisibleCount] = useState(0);
  const [personStates, setPersonStates] = useState<PersonState[]>(
    Array(TOTAL_PEOPLE).fill('queue')
  );
  const [waveX, setWaveX] = useState(-60); // wave position across screen
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showText, setShowText] = useState<'none' | 'waiting' | 'cleared'>('none');
  const waveRef = useRef<NodeJS.Timeout | null>(null);

  // Phase 1: Build queue one by one
  useEffect(() => {
    if (phase !== 'building') return;
    if (visibleCount >= TOTAL_PEOPLE) {
      setTimeout(() => {
        setPhase('waiting');
        setShowText('waiting');
      }, 700);
      return;
    }
    const t = setTimeout(() => setVisibleCount(v => v + 1), 300);
    return () => clearTimeout(t);
  }, [phase, visibleCount]);

  // Phase 3: Wave animation
  const startWave = () => {
    if (phase !== 'waiting') return;
    setPhase('waving');
    setShowText('none');

    // Animate wave X from left to right across container
    let x = -60;
    const interval = setInterval(() => {
      x += 8;
      setWaveX(x);
      if (x > 300) clearInterval(interval);
    }, 16);

    // Stagger each person reacting to wave
    for (let i = TOTAL_PEOPLE - 1; i >= 0; i--) {
      // People are ordered top to bottom: index 0 = top of queue (furthest from cashier)
      // Wave comes from left sweeping right — we do top to bottom stagger
      setTimeout(() => {
        setPersonStates(prev => {
          const next = [...prev];
          next[i] = 'phone';
          return next;
        });
        // Then disappear
        setTimeout(() => {
          setPersonStates(prev => {
            const next = [...prev];
            next[i] = 'gone';
            return next;
          });
        }, 500);
      }, (TOTAL_PEOPLE - 1 - i) * WAVE_STAGGER);
    }

    // After all gone
    setTimeout(() => {
      setPhase('cleared');
      setShowText('cleared');
    }, TOTAL_PEOPLE * WAVE_STAGGER + 900);
  };

  const swipeProgress = Math.min(dragX / 200, 1);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-8 relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">

          {/* ── BUILDING + WAITING + WAVING ── */}
          {(phase === 'building' || phase === 'waiting' || phase === 'waving') && (
            <motion.div
              key="queue-scene"
              exit={{ opacity: 0, filter: 'blur(6px)', scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full"
            >

              {/* Top text */}
              <AnimatePresence mode="wait">
                {showText === 'waiting' && (
                  <motion.div
                    key="waiting-text"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mb-6 flex flex-col items-center gap-2"
                  >
                    <p className="text-2xl md:text-3xl font-bold font-modern" style={{ color: 'var(--text-primary)' }}>
                      This isn't checkout.
                    </p>
                    <p className="text-xl md:text-2xl font-light" style={{ color: 'var(--text-secondary)' }}>
                      It's waiting.
                    </p>
                  </motion.div>
                )}
                {showText === 'none' && phase === 'building' && (
                  <motion.p
                    key="building-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-bold tracking-[0.2em] uppercase mb-10"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Your customers. Every day.
                  </motion.p>
                )}
                {phase === 'waving' && (
                  <motion.div key="wave-spacer" className="mb-10" style={{ height: 72 }} />
                )}
              </AnimatePresence>

              {/* Queue visual */}
              <div className="relative flex flex-col items-center" style={{ minHeight: 320 }}>

                {/* Wave sweep line */}
                <AnimatePresence>
                  {phase === 'waving' && (
                    <motion.div
                      key="wave"
                      className="absolute inset-0 pointer-events-none z-20"
                      style={{ overflow: 'hidden' }}
                    >
                      <motion.div
                        initial={{ x: -80 }}
                        animate={{ x: 320 }}
                        transition={{ duration: (TOTAL_PEOPLE * WAVE_STAGGER + 200) / 1000, ease: 'easeInOut' }}
                        className="absolute top-0 bottom-0 w-12"
                        style={{
                          background: `linear-gradient(to right, transparent, var(--accent), transparent)`,
                          opacity: 0.25,
                          left: 0,
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* People queue — top to bottom, bottom person nearest cashier */}
                <div className="flex flex-col items-center gap-2 relative z-10">
                  {Array.from({ length: TOTAL_PEOPLE }).map((_, i) => {
                    const isVisible = i < visibleCount;
                    const pState = personStates[i];
                    // person 0 = top of queue, person TOTAL_PEOPLE-1 = nearest cashier
                    const isFirst = i === 0; // top person (stressed, waiting longest)

                    return (
                      <AnimatePresence key={i}>
                        {isVisible && (
                          <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.6 }}
                            animate={
                              pState === 'gone'
                                ? { opacity: 0, scale: 0.2, y: 20, filter: 'blur(4px)' }
                                : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                            }
                            transition={
                              pState === 'gone'
                                ? { duration: 0.45, ease: 'easeIn' }
                                : { type: 'spring', stiffness: 280, damping: 22 }
                            }
                            className="flex items-center gap-3 relative"
                          >
                            {/* Person figure */}
                            <motion.div
                              animate={
                                pState === 'phone'
                                  ? { x: [-3, 3, -3, 0], scale: 1.05 }
                                  : { x: 0, scale: 1 }
                              }
                              transition={{ duration: 0.3 }}
                              style={{
                                color: isFirst
                                  ? '#ef4444'
                                  : pState === 'phone'
                                  ? 'var(--accent)'
                                  : 'var(--text-secondary)',
                              }}
                            >
                              <PersonIcon />
                            </motion.div>

                            {/* Phone appears when wave hits */}
                            <AnimatePresence>
                              {pState === 'phone' && (
                                <motion.div
                                  initial={{ opacity: 0, x: -8, scale: 0.5 }}
                                  animate={{ opacity: 1, x: 0, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.3 }}
                                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                  style={{ color: 'var(--accent)' }}
                                >
                                  <PhoneIcon />
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Wait time badge for first person */}
                            {isFirst && pState === 'queue' && phase === 'waiting' && (
                              <motion.div
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold"
                                style={{
                                  background: 'rgba(239,68,68,0.08)',
                                  border: '1px solid rgba(239,68,68,0.2)',
                                  color: '#ef4444',
                                }}
                              >
                                <div className="w-1 h-1 rounded-full bg-red-400 animate-pulse" />
                                14 min wait
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
                  })}
                </div>

                {/* Connector line to cashier */}
                {visibleCount > 0 && phase !== 'waving' && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    className="w-px mt-3 mb-3 origin-top"
                    style={{
                      height: 24,
                      background: 'var(--border-color)',
                    }}
                  />
                )}

                {/* Cashier / QR */}
                <div className="mt-1" style={{ color: 'var(--text-secondary)' }}>
                  <CashierCounter fading={phase === 'waving'} />
                </div>
              </div>

              {/* Swipe CTA */}
              <AnimatePresence>
                {phase === 'waiting' && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 flex flex-col items-center gap-3"
                  >
                    <p className="text-[11px] tracking-widest uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>
                      Remove the queue
                    </p>
                    {/* Swipe pill */}
                    <div
                      className="relative w-64 h-14 rounded-full flex items-center p-1.5 overflow-hidden select-none"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-card)',
                      }}
                    >
                      {/* Fill */}
                      <div
                        className="absolute left-0 top-0 h-full rounded-full transition-none"
                        style={{
                          width: `${swipeProgress * 100}%`,
                          background: 'var(--accent-bg)',
                        }}
                      />
                      {/* Label */}
                      <span
                        className="absolute w-full text-center text-xs font-semibold tracking-wide z-0 pointer-events-none"
                        style={{ color: 'var(--text-muted)', opacity: 1 - swipeProgress * 1.5 }}
                      >
                        Swipe →
                      </span>
                      {/* Thumb */}
                      <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 200 }}
                        dragElastic={0.04}
                        onDrag={(_, info) => {
                          setIsDragging(true);
                          setDragX(Math.max(0, info.offset.x));
                        }}
                        onDragEnd={(_, info) => {
                          setIsDragging(false);
                          if (info.offset.x > 150) {
                            startWave();
                          } else {
                            setDragX(0);
                          }
                        }}
                        whileDrag={{ scale: 1.08 }}
                        className="w-11 h-11 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing relative z-10 flex-shrink-0"
                        style={{
                          background: 'var(--text-primary)',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
                        }}
                      >
                        <ArrowRight size={16} style={{ color: 'var(--bg-base)' }} />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── CLEARED ── */}
          {phase === 'cleared' && (
            <motion.div
              key="cleared"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center w-full gap-7"
            >
              {/* QR */}
              <motion.div
                initial={{ scale: 0.4, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.1 }}
                className="flex flex-col items-center gap-2"
                style={{ color: 'var(--accent)' }}
              >
                <QRIcon />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
                  Scan & Out
                </span>
              </motion.div>

              {/* Queue. Removed. */}
              <div className="flex flex-col items-center gap-1">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="text-6xl md:text-8xl font-bold font-modern tracking-tight leading-[1]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Queue.
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-6xl md:text-8xl font-bold font-modern tracking-tight leading-[1]"
                  style={{ color: 'var(--accent)' }}
                >
                  Removed.
                </motion.h1>
              </div>

              {/* Welcome line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-sm font-semibold tracking-[0.15em] uppercase"
                style={{ color: 'var(--text-muted)' }}
              >
                Welcome to ClickOut.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-base md:text-lg max-w-md leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                QR self-checkout. Real-time fraud control. Zero billing queues.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, type: 'spring' }}
              >
                <Button
                  onClick={() => window.location.href = 'https://clickout-cfa95.web.app/#/login'}
                  className="py-4 text-lg px-8"
                >
                  Enter Command Center <ChevronRight size={20} />
                </Button>
              </motion.div>

              {/* Replay */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1 }}
                onClick={() => {
                  setPhase('building');
                  setVisibleCount(0);
                  setDragX(0);
                  setWaveX(-60);
                  setShowText('none');
                  setPersonStates(Array(TOTAL_PEOPLE).fill('queue'));
                }}
                className="text-xs underline underline-offset-4"
                style={{ color: 'var(--text-muted)' }}
              >
                ↺ Replay
              </motion.button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
