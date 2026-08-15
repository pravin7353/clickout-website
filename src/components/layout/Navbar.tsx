'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-6 md:px-8 py-4 z-50 bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-[var(--text-primary)]">Click</span>
          <span className="text-[var(--accent)]">Out</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-[14px] font-medium items-center text-[var(--text-secondary)]">
          {/* Pricing Link — ACTIVE */}
          <Link 
            href="/pricing" 
            className={`px-3 py-1.5 rounded-lg transition-colors ${isActive('/pricing') ? 'text-[var(--accent)] bg-[var(--accent-bg)] font-semibold' : 'hover:text-[var(--text-primary)]'}`}
          >
            {t('nav.pricing') as string}
          </Link>
          
          <Link 
            href="/ecosystem" 
            className={`px-3 py-1.5 rounded-lg transition-colors ${isActive('/ecosystem') ? 'text-[var(--accent)] bg-[var(--accent-bg)] font-semibold' : 'hover:text-[var(--accent)]'}`}
          >
            {t('nav.ecosystem') as string}
          </Link>
          
          <Link 
            href="/blog" 
            className={`px-3 py-1.5 rounded-lg transition-colors font-semibold ${isActive('/blog') ? 'text-[var(--accent)] bg-[var(--accent-bg)]' : 'text-[var(--accent)] hover:text-[var(--text-primary)]'}`}
          >
            {t('nav.blog') as string}
          </Link>

          {/* Admin Panel Link */}
          <Link 
            href="/admin-panel" 
            className={`px-3 py-1.5 rounded-lg transition-colors ${isActive('/admin-panel') ? 'text-[var(--accent)] bg-[var(--accent-bg)] font-semibold' : 'hover:text-[var(--text-primary)]'}`}
          >
            {lang === 'hi' ? 'Admin Guide' : 'Admin Guide'}
          </Link>
          
          {/* Language Toggle */}
          {mounted && (
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-all"
              title={lang === 'en' ? 'Switch to Hinglish' : 'Switch to English'}
            >
              <Globe size={13} />
              {t('nav.lang') as string}
            </button>
          )}
          
          <a 
            href="https://clickout-cfa95.web.app/#/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-2 rounded-lg font-medium tracking-wide bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
          >
            {t('nav.login') as string}
          </a>
          
          {/* Theme Toggle */}
          {mounted && (
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-[var(--bg-card)] border border-[var(--border-color)] hover:text-[var(--accent)]"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[var(--text-primary)] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="md:hidden flex flex-col gap-4 pt-6 pb-4 border-t border-[var(--border-color)] mt-4 bg-[var(--bg-base)]"
          >
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} 
              className={`px-3 py-2 rounded-lg text-left font-medium ${isActive('/pricing') ? 'text-[var(--accent)] bg-[var(--accent-bg)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
              {t('nav.pricing') as string}
            </Link>
            <Link href="/ecosystem" onClick={() => setMobileMenuOpen(false)} 
              className={`px-3 py-2 rounded-lg text-left font-medium ${isActive('/ecosystem') ? 'text-[var(--accent)] bg-[var(--accent-bg)]' : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'}`}>
              {t('nav.ecosystem') as string}
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} 
              className={`px-3 py-2 rounded-lg text-left font-medium ${isActive('/blog') ? 'text-[var(--accent)] bg-[var(--accent-bg)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
              {t('nav.blog') as string}
            </Link>
            <Link href="/admin-panel" onClick={() => setMobileMenuOpen(false)} 
              className={`px-3 py-2 rounded-lg text-left font-medium ${isActive('/admin-panel') ? 'text-[var(--accent)] bg-[var(--accent-bg)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}>
              {lang === 'hi' ? 'Admin Guide' : 'Admin Guide'}
            </Link>
            
            {mounted && (
              <button 
                onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-left font-medium flex items-center gap-2 px-3 py-2"
              >
                <Globe size={16}/> {lang === 'en' ? 'Switch to हिंदी' : 'Switch to English'}
              </button>
            )}
            
            {mounted && (
               <button 
                 onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                 className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-left font-medium flex items-center gap-2 px-3 py-2"
               >
                 {theme === 'dark' ? <Sun size={16}/> : <Moon size={16}/>} Toggle Theme
               </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}