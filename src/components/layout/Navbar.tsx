'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-6 md:px-8 py-4 z-50 bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="text-2xl font-modern font-bold tracking-wide cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="text-[var(--text-primary)]">Click</span><span className="text-[var(--accent)]">Out</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-[14px] font-medium items-center text-[var(--text-secondary)]">
          <button onClick={() => scrollToSection('pricing')} className="hover:text-[var(--text-primary)] transition-colors">Pricing</button>
          <Link href="/ecosystem" className="hover:text-[var(--accent)] transition-colors">Ecosystem</Link>
          <a href="/blog" className="hover:text-[var(--text-primary)] transition-colors font-semibold text-[var(--accent)]">Blog</a>
          <a href="https://clickout-cfa95.web.app/#/login" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg font-medium tracking-wide bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all">
            Login
          </a>
          
          {mounted && (
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-[var(--bg-card)] border border-[var(--border-color)] hover:text-[var(--accent)]">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        <button className="md:hidden text-[var(--text-primary)] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden flex flex-col gap-4 pt-6 pb-4 border-t border-[var(--border-color)] mt-4 bg-[var(--bg-base)]">
            <button onClick={() => scrollToSection('pricing')} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-left font-medium">Pricing</button>
            <Link href="/ecosystem" className="text-[var(--text-secondary)] hover:text-[var(--accent)] text-left font-medium">Ecosystem</Link>
            {mounted && (
               <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-left font-medium flex items-center gap-2">
                 {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>} Toggle Theme
               </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}