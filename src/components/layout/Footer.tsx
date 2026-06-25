import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--bg-card)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[var(--text-secondary)] text-sm text-center md:text-left">
          © {new Date().getFullYear()} ClickOut. All rights reserved.
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] justify-center mb-2">
            <span className="text-[var(--text-primary)] font-semibold">Features & Industries:</span>
            <Link href="/features/self-checkout" className="hover:text-[var(--accent)] transition-colors">Self-Checkout</Link>
            <Link href="/features/inventory-management" className="hover:text-[var(--accent)] transition-colors">Inventory</Link>
            <Link href="/industries/supermarkets" className="hover:text-[var(--accent)] transition-colors">Supermarkets</Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] justify-center">
            <Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">About</Link>
            <Link href="/pricing" className="hover:text-[var(--text-primary)] transition-colors">Pricing</Link>
            <Link href="/faq" className="hover:text-[var(--text-primary)] transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-[var(--text-primary)] transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}