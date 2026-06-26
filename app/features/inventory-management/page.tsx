import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail Inventory Management Software | ClickOut',
  description: 'Real-time retail inventory tracking. Every QR scan updates stock instantly. Get low-stock alerts and AI-powered procurement suggestions.',
};

export default function InventoryManagementPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-secondary)' }}>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 backdrop-blur-xl border-b"
        style={{ background: 'var(--bg-nav)', borderColor: 'var(--border-color)' }}
      >
        <Link href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span style={{ color: 'var(--text-primary)' }}>Click</span>
          <span style={{ color: 'var(--accent)' }}>Out</span>
        </Link>
        <Link
          href="/"
          className="px-4 py-2 rounded-lg text-sm transition border"
          style={{ background: 'var(--accent-bg)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
        >
          Back to Home
        </Link>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto space-y-16">

          <div className="space-y-4">
            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight font-modern"
              style={{ color: 'var(--text-primary)' }}
            >
              Inventory Management
            </h1>
            <p className="text-xl font-light" style={{ color: 'var(--accent)' }}>
              Real-time stock sync with every scan.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              What Is ClickOut Inventory Management?
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              ClickOut Inventory Management is a real-time stock tracking system integrated directly with the self-checkout flow. Every product scanned at checkout automatically updates inventory counts, providing store managers with live stock levels, automated low-stock alerts, and AI-powered reorder suggestions.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Real-Time Stock Sync',
                  desc: 'Inventory levels update instantly when customers scan products during self-checkout — no end-of-day reconciliation required.',
                },
                {
                  title: 'Low Stock Alerts',
                  desc: 'Automated alerts when any SKU falls below configurable threshold levels to prevent stockouts.',
                },
                {
                  title: 'Procurement Engine',
                  desc: 'AI-assisted procurement suggestions based on sales velocity and stock levels. Connects with vendor management.',
                },
                {
                  title: 'Leakage Detection',
                  desc: 'Identifies discrepancies between scanned inventory and physical stock — a key indicator of theft or error.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl border"
                  style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                >
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              Inventory Analytics
            </h2>
            <ul className="list-disc pl-5 space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>Top-selling SKUs by hour, day, and week</li>
              <li>Slow-moving inventory identification</li>
              <li>Category-level performance metrics</li>
              <li>Shrinkage rate tracking</li>
              <li>Demand forecasting for seasonal trends</li>
            </ul>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer
        className="w-full border-t mt-20"
        style={{ background: 'var(--bg-footer)', borderColor: 'var(--border-color)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} ClickOut. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
