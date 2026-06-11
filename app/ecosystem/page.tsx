import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The 5-App Retail Ecosystem | ClickOut',
  description: 'Explore the ClickOut suite: Customer App, Cashier App, Security App, IDT Inventory App, and Admin Dashboard. A complete operating system for retail.',
};

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#EBEBE8] overflow-x-hidden">
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
        <div className="max-w-[1200px] mx-auto space-y-24">
          
          {/* Header Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-20">
            <div className="inline-block px-3 py-1 bg-[#00ff66]/10 text-[#00ff66] text-xs font-bold tracking-wider rounded-full border border-[#00ff66]/20">THE COMPLETE SUITE</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-modern">One Ecosystem. <br />Five Applications.</h1>
            <p className="text-xl text-[#a1a1aa] font-light leading-relaxed">
              ClickOut isn't just a self-checkout feature. It is a highly engineered, interconnected suite of five independent applications working in perfect sync to automate every square foot of your retail store.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="space-y-16">
            
            {/* 1. ClickOut Admin (WITH NEXT.JS IMAGES) */}
            <div className="bg-gradient-to-r from-[#00ff66]/[0.02] to-transparent border border-[#00ff66]/10 p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00ff66] to-[#10b981]"></div>
              
              <div className="z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse shadow-[0_0_8px_#00ff66]" />
                  <span className="text-[#00ff66] text-xs font-bold tracking-wider">FOR STORE OWNERS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">1. ClickOut Admin</h2>
                <p className="text-[#a1a1aa] mb-8 text-lg leading-relaxed">The Master Command Center. Get a bird's-eye view of your entire retail operation, track live shoppers, and automate procurement seamlessly.</p>
                <ul className="space-y-4 text-sm text-[#D4D4D2]">
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Live Intelligence:</strong> Real-time revenue tracking, staffing radar, and active VIP shoppers.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Super Auditor:</strong> Perform 'Order Autopsies' with AI Fraud Scores and global audit ledgers.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Quantum Offers:</strong> AI-driven promotion engine and dynamic bundle pricing.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Procurement:</strong> Automated PO generation based on stock velocity and dead stock alerts.</li>
                </ul>
              </div>

              {/* Desktop Overlapping Windows Design */}
              <div className="relative h-[250px] sm:h-[350px] md:h-[400px] w-full mt-10 lg:mt-0 perspective-1000">
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#00ff66]/10 blur-[100px] rounded-full pointer-events-none" />
                
                {/* Back Window (Procurement) */}
                <div className="absolute right-0 top-0 w-[85%] rounded-xl border border-white/10 opacity-30 shadow-xl transform hover:-translate-y-6 hover:-translate-x-4 hover:opacity-100 hover:rotate-[-2deg] transition-all duration-500 hover:z-40 cursor-pointer overflow-hidden">
                  <Image src="/images/admin-procurement.jpg" alt="Procurement Screen" width={800} height={450} className="w-full h-auto object-cover" />
                </div>

                {/* Middle Window (Audit) */}
                <div className="absolute right-4 top-6 w-[85%] rounded-xl border border-white/20 opacity-60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-6 hover:-translate-x-2 hover:opacity-100 hover:rotate-[-1deg] transition-all duration-500 z-20 hover:z-40 cursor-pointer overflow-hidden">
                  <Image src="/images/admin-audit.jpg" alt="Super Auditor Screen" width={800} height={450} className="w-full h-auto object-cover" />
                </div>

                {/* Front Window (Main Dashboard) */}
                <div className="absolute right-8 top-12 w-[85%] rounded-xl border-2 border-[#00ff66]/30 shadow-[0_20px_50px_rgba(0,255,102,0.15)] z-30 transform group-hover:scale-[1.02] transition-all duration-500 overflow-hidden bg-black">
                  <div className="w-full h-4 bg-[#1a1a1a] flex items-center gap-1.5 px-3 border-b border-white/10 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#ff4d4d]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffcc00]" />
                    <div className="w-2 h-2 rounded-full bg-[#00ff66]" />
                  </div>
                  <Image src="/images/admin-main.jpg" alt="Admin Dashboard Screen" width={800} height={450} className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>

            {/* 2. Customer App (WITH NEXT.JS IMAGES) */}
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4d4d]/10 border border-[#ff4d4d]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#ff4d4d] animate-pulse" />
                  <span className="text-[#ff4d4d] text-xs font-bold tracking-wider">FOR SHOPPERS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">2. ClickOut Customer</h2>
                <p className="text-[#a1a1aa] mb-8 text-lg leading-relaxed">The Queue-Killer Shopping Interface. Scan products, apply digital combos, and generate your exit gatepass without standing in line.</p>
                <ul className="space-y-4 text-sm text-[#D4D4D2]">
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Instant Entry:</strong> Scan Store QR to enter an isolated shopping session.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Smart Cart:</strong> Real-time barcode scanning with dynamic combo and discount locking.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Digital Checkout:</strong> Pay via UPI/Cards or generate a Hybrid "Cash QR".</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Digital Gatepass:</strong> Get a verified QR code for the security guard to scan.</li>
                </ul>
              </div>

              {/* 3D Overlapping Image Layout */}
              <div className="relative h-[500px] w-full flex justify-center items-center mt-10 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff4d4d]/20 blur-[100px] rounded-full pointer-events-none" />
                
                {/* Left Image (Cart) */}
                <div className="absolute left-0 md:left-4 z-10 transform -rotate-6 scale-90 opacity-80 hover:opacity-100 hover:z-40 hover:scale-100 transition-all duration-500 shadow-2xl rounded-[2rem] overflow-hidden border-4 border-[#222]">
                  <Image src="/images/customer-cart.png" alt="Cart Screen" width={220} height={450} className="object-cover" />
                </div>
                
                {/* Right Image (Gatepass) */}
                <div className="absolute right-0 md:right-4 z-10 transform rotate-6 scale-90 opacity-80 hover:opacity-100 hover:z-40 hover:scale-100 transition-all duration-500 shadow-2xl rounded-[2rem] overflow-hidden border-4 border-[#222]">
                  <Image src="/images/customer-gatepass.png" alt="Gatepass Screen" width={220} height={450} className="object-cover" />
                </div>

                {/* Center Image (Scan - Main) */}
                <div className="absolute z-30 transform hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden border-4 border-[#444]">
                  <Image src="/images/customer-scan.jpg" alt="Scan Screen" width={240} height={500} className="object-cover" />
                </div>
              </div>
            </div>

            {/* ... Other Apps (We will fill these next) ... */}
            {/* 3. ClickOut Cashier (WITH NEXT.JS IMAGES) */}
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
              <div className="z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                  <span className="text-[#00e5ff] text-xs font-bold tracking-wider">FOR CASH COUNTERS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">3. ClickOut Cashier</h2>
                <p className="text-[#a1a1aa] mb-8 text-lg leading-relaxed">The Hybrid Bridge for Offline Payments. India still runs on cash, and we ensure cash-paying customers don't break your automated ecosystem.</p>
                <ul className="space-y-4 text-sm text-[#D4D4D2]">
                  <li className="flex items-start gap-3"><span className="text-[#00e5ff] mt-0.5">✓</span> <strong>Scan Cash QR:</strong> Instantly scan the "Pay by Cash" QR generated on the customer's phone.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00e5ff] mt-0.5">✓</span> <strong>One-Tap Approval:</strong> Collect the cash and hit approve to instantly push the digital Gatepass to the customer.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00e5ff] mt-0.5">✓</span> <strong>Live Analytics:</strong> Track daily cash collections, pending approvals, and successful scans in real-time.</li>
                </ul>
              </div>

              {/* Single Phone UI Design */}
              <div className="relative h-[450px] w-full flex justify-center items-center mt-10 lg:mt-0 perspective-1000">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#00e5ff]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden border-4 border-[#333]">
                  <Image src="/images/cashier-main.png" alt="Cashier Portal" width={240} height={500} className="object-cover" />
                </div>
              </div>
            </div>
            {/* 4. ClickOut Security (WITH NEXT.JS IMAGES) */}
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
              
              {/* Left Side: Overlapping Phones */}
              <div className="order-2 lg:order-1 relative h-[450px] w-full flex justify-center items-center mt-10 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#ffcc00]/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Back Phone (Spot Audit) */}
                <div className="absolute left-0 md:left-10 z-10 transform -rotate-6 scale-90 opacity-70 hover:opacity-100 hover:z-30 hover:scale-95 transition-all duration-500 shadow-2xl rounded-[2rem] overflow-hidden border-4 border-[#222]">
                  <Image src="/images/security-audit.jpg" alt="Spot Audit Screen" width={220} height={450} className="object-cover" />
                </div>

                {/* Front Phone (Approve Exit) */}
                <div className="absolute right-0 md:right-16 z-20 transform rotate-2 hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden border-4 border-[#444]">
                  <Image src="/images/security-approve.jpg" alt="Approve Exit Screen" width={230} height={470} className="object-cover" />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="order-1 lg:order-2 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffcc00]/10 border border-[#ffcc00]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse" />
                  <span className="text-[#ffcc00] text-xs font-bold tracking-wider">FOR GUARDS & SECURITY</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">4. ClickOut Security</h2>
                <p className="text-[#a1a1aa] mb-8 text-lg leading-relaxed">The ultimate gatekeeper. AI-driven theft prevention that replaces manual receipt checking with lightning-fast QR validation.</p>
                <ul className="space-y-4 text-sm text-[#D4D4D2]">
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Instant Verification:</strong> Scan customer exit QRs to instantly verify payment status and cart contents.</li>
                  <li className="flex items-start gap-3"><span className="text-[#ffcc00] mt-0.5">✓</span> <strong>AI Spot Audits:</strong> Automatically flags high-value or suspicious carts for mandatory physical verification.</li>
                  <li className="flex items-start gap-3"><span className="text-[#ff4d4d] mt-0.5">✓</span> <strong>Ghost Visitor Alerts:</strong> Detects and stops unpaid or incomplete checkout attempts at the door.</li>
                </ul>
              </div>
            </div>
            {/* 5. ClickOut IDT (WITH NEXT.JS IMAGES) */}
            <div className="bg-gradient-to-r from-white/[0.02] to-transparent border border-white/5 p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
              
              {/* Left Side: Overlapping Phones */}
              <div className="order-2 lg:order-1 relative h-[450px] w-full flex justify-center items-center mt-10 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#00ff66]/10 blur-[80px] rounded-full pointer-events-none" />

                {/* Back Phone (Home) */}
                <div className="absolute left-0 md:left-10 z-10 transform -rotate-6 scale-90 opacity-70 hover:opacity-100 hover:z-30 hover:scale-95 transition-all duration-500 shadow-2xl rounded-[2rem] overflow-hidden border-4 border-[#222]">
                  <Image src="/images/idt-home.jpg" alt="IDT Home Screen" width={220} height={450} className="object-cover" />
                </div>

                {/* Front Phone (Entry Form) */}
                <div className="absolute right-0 md:right-16 z-20 transform rotate-2 hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden border-4 border-[#444]">
                  <Image src="/images/idt-entry.jpg" alt="IDT Entry Screen" width={230} height={470} className="object-cover" />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="order-1 lg:order-2 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                  <span className="text-[#00ff66] text-xs font-bold tracking-wider">FOR STORE STAFF</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5. ClickOut IDT</h2>
                <p className="text-[#a1a1aa] mb-8 text-lg leading-relaxed">The Inventory Deposit Terminal. Empower your staff to digitize physical products at lightning speed using AI and mobile cameras, with zero manual typing.</p>
                <ul className="space-y-4 text-sm text-[#D4D4D2]">
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Rapid Scanning:</strong> Turn any standard smartphone into an enterprise-grade barcode scanner.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>AI Auto-Fill:</strong> Simply scan a product packet and let AI extract product details, MRP, and weight instantly.</li>
                  <li className="flex items-start gap-3"><span className="text-[#00ff66] mt-0.5">✓</span> <strong>Direct Admin Sync:</strong> Pushes scanned inventory directly to the Admin Dashboard for a secure 1-click approval.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}