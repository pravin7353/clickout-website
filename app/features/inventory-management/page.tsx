import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail Inventory Management Software | ClickOut',
  description: 'Real-time retail inventory tracking. Every QR scan updates stock instantly. Get low-stock alerts and AI-powered procurement suggestions.',
};

export default function InventoryManagementPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#EBEBE8]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-8 py-4 z-50 bg-[#0d0d0d]/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="text-2xl font-modern font-bold tracking-wide">
          <span className="text-white">Click</span><span className="text-[#00ff66]">Out</span>
        </Link>
        <Link href="/" className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-white text-sm transition border border-white/10">
          Back to Home
        </Link>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto space-y-16">
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-modern">Inventory Management</h1>
            <p className="text-xl text-[#00ff66] font-light">Real-time stock sync with every scan.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">What Is ClickOut Inventory Management?</h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              ClickOut Inventory Management is a real-time stock tracking system integrated directly with the self-checkout flow. Every product scanned at checkout automatically updates inventory counts, providing store managers with live stock levels, automated low-stock alerts, and AI-powered reorder suggestions.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                <h3 className="text-white font-semibold mb-2">Real-Time Stock Sync</h3>
                <p className="text-[#a1a1aa] text-sm">Inventory levels update instantly when customers scan products during self-checkout — no end-of-day reconciliation required.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                <h3 className="text-white font-semibold mb-2">Low Stock Alerts</h3>
                <p className="text-[#a1a1aa] text-sm">Automated alerts when any SKU falls below configurable threshold levels to prevent stockouts.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                <h3 className="text-white font-semibold mb-2">Procurement Engine</h3>
                <p className="text-[#a1a1aa] text-sm">AI-assisted procurement suggestions based on sales velocity and stock levels. Connects with vendor management.</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                <h3 className="text-white font-semibold mb-2">Leakage Detection</h3>
                <p className="text-[#a1a1aa] text-sm">Identifies discrepancies between scanned inventory and physical stock — a key indicator of theft or error.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Inventory Analytics</h2>
            <ul className="list-disc pl-5 text-[#a1a1aa] space-y-2">
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
      <footer className="w-full border-t border-gray-800 bg-black mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ClickOut. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}