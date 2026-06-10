import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The 5-App Retail Ecosystem | ClickOut',
  description: 'Explore the ClickOut suite: Customer App, Cashier App, Security App, IDT Inventory App, and Admin Dashboard. A complete operating system for retail.',
};

export default function EcosystemPage() {
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
        <div className="max-w-[1000px] mx-auto space-y-20">
          
          {/* Header Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 bg-[#00ff66]/10 text-[#00ff66] text-xs font-bold tracking-wider rounded-full border border-[#00ff66]/20">THE COMPLETE SUITE</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-modern">One Ecosystem. <br />Five Applications.</h1>
            <p className="text-xl text-[#a1a1aa] font-light leading-relaxed">
              ClickOut isn't just a self-checkout feature. It is a highly engineered, interconnected suite of five independent applications working in perfect sync to automate every square foot of your retail store.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="space-y-12">
            
            {/* 1. Admin */}
            <div className="bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00ff66]"></div>
              <h2 className="text-3xl font-bold text-white mb-4">1. ClickOut Admin</h2>
              <p className="text-[#a1a1aa] mb-6 text-lg">The Master Command Center for Store Owners & Managers.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#D4D4D2]">
                <li className="flex items-center gap-2"><span className="text-[#00ff66]">✓</span> Live Revenue & Invoice Generation</li>
                <li className="flex items-center gap-2"><span className="text-[#00ff66]">✓</span> Centralized Inventory Management</li>
                <li className="flex items-center gap-2"><span className="text-[#00ff66]">✓</span> Offer Engine & Discount Rules</li>
                <li className="flex items-center gap-2"><span className="text-[#00ff66]">✓</span> Real-time Security & Staff Evaluation</li>
              </ul>
            </div>

            {/* 2. Customer */}
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-4">2. ClickOut Customer</h2>
              <p className="text-[#a1a1aa] mb-6 text-lg">The Queue-Killer Shopping Interface.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#D4D4D2]">
                <li className="flex items-center gap-2"><span className="text-[#00ff66]">✓</span> Scan Store QR to enter isolated session</li>
                <li className="flex items-center gap-2"><span className="text-[#00ff66]">✓</span> Barcode scanning for instant cart building</li>
                <li className="flex items-center gap-2"><span className="text-[#00ff66]">✓</span> Digital Checkout via UPI/Cards</li>
                <li className="flex items-center gap-2"><span className="text-[#00ff66]">✓</span> Hybrid "Pay by Cash" QR generation</li>
              </ul>
            </div>

            {/* 3. Cashier */}
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-4">3. ClickOut Cashier</h2>
              <p className="text-[#a1a1aa] mb-6 text-lg">The Hybrid Bridge for Offline Payments.</p>
              <p className="text-sm text-[#D4D4D2] mb-4 leading-relaxed">
                We know India still runs on cash. If a customer prefers cash, their app generates a "Cash QR". The cashier simply scans this QR, collects the cash, and hits approve. Instantly, the customer receives their digital Security Gatepass, completely avoiding traditional billing entry.
              </p>
            </div>

            {/* 4. Security */}
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-4">4. ClickOut Security</h2>
              <p className="text-[#a1a1aa] mb-6 text-lg">The AI-Driven Theft Prevention App.</p>
              <p className="text-sm text-[#D4D4D2] mb-4 leading-relaxed">
                The most critical app for store operations. Whether the customer paid online or via cash, they receive a secure Gatepass QR. The guard scans this QR at the exit, verifies the item count, and registers a successful exit. No more checking paper receipts.
              </p>
            </div>

            {/* 5. IDT */}
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-4">5. ClickOut IDT (Inventory Deposit Terminal)</h2>
              <p className="text-[#a1a1aa] mb-6 text-lg">The Lightning-Fast Onboarding Engine.</p>
              <p className="text-sm text-[#D4D4D2] mb-4 leading-relaxed">
                Staff install this app to bulk-scan physical products and feed their details. This data goes straight to the Admin terminal for a 1-click verification. Once the admin approves, the products go live instantly for customers to scan & shop.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}