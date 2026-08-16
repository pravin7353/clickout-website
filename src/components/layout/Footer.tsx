import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-(--border-color) bg-(--bg-card) transition-colors duration-300">
      {/* Trust Strip Repeat */}
      <div className="border-b border-(--border-color) py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6 text-xs text-(--text-secondary)">
          <span className="flex items-center gap-1">🔒 Bank-Level Security</span>
          <span className="flex items-center gap-1">✅ GST Ready</span>
          <span className="flex items-center gap-1">🏦 UPI Certified</span>
          <span className="flex items-center gap-1">🤖 AI Fraud Detection</span>
          <span className="flex items-center gap-1">☁️ Cloud Synced</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold tracking-wide mb-3">
              <span className="text-foreground">Click</span><span className="text-(--accent)">Out</span>
            </div>
            <p className="text-sm text-(--text-secondary) mb-4">
              India ki sabse tez self-checkout app. ₹299/month se shuru.
            </p>
            <div className="flex gap-3 text-xl">
              <a href="https://wa.me/919XXXXXXXXX?text=Namaste!%20Main%20ClickOut%20ke%20baare%20mein%20jaanna%20chahta%20hoon." target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">💬</a>
              <a href="https://play.google.com/store/apps/details?id=com.clickout" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-(--text-secondary)">
              <Link href="/" className="hover:text-(--accent) transition-colors">Home</Link>
              <Link href="/pricing" className="hover:text-(--accent) transition-colors">Pricing</Link>
              <Link href="/ecosystem" className="hover:text-(--accent) transition-colors">Ecosystem</Link>
              <Link href="/about" className="hover:text-(--accent) transition-colors">About</Link>
              <Link href="/faq" className="hover:text-(--accent) transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Products</h4>
            <div className="flex flex-col gap-2 text-sm text-(--text-secondary)">
              <Link href="/ecosystem" className="hover:text-(--accent) transition-colors">ClickOut Admin</Link>
              <Link href="/ecosystem" className="hover:text-(--accent) transition-colors">ClickOut Customer</Link>
              <Link href="/ecosystem" className="hover:text-(--accent) transition-colors">ClickOut Cashier</Link>
              <Link href="/ecosystem" className="hover:text-(--accent) transition-colors">ClickOut Security</Link>
              <Link href="/ecosystem" className="hover:text-(--accent) transition-colors">ClickOut IDT</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-(--text-secondary)">
              <span className="flex items-center gap-2">📞 +91 9323137353</span>
              <span className="flex items-center gap-2">📧 animusitmanagement@gmail.com</span>
              <span className="flex items-center gap-2">📍 Mumbai, India</span>
              <span className="flex items-center gap-2">⏰ Support: 9AM - 9PM IST</span>
              <span className="text-xs text-(--text-muted) mt-1">GST: 27APHPJ6004K1ZV</span>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-(--border-color) pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-(--text-secondary)">
          <p>© {new Date().getFullYear()} ClickOut Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-foreground transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}