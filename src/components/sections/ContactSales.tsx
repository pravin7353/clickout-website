'use client';

import React, { useState, FormEvent } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function ContactSales() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '', business: '', email: '', phone: '', stores: '', message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const now = Date.now();
    
    // Throttling
    if (now - lastSubmitTime < 5000) {
        setToastMessage('Please wait before submitting again.');
        setTimeout(() => setToastMessage(''), 3000);
        return;
    }

    // Frontend Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
        setToastMessage('Please fill all required fields.');
        setTimeout(() => setToastMessage(''), 3000);
        return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setToastMessage('Your request has been sent successfully.');
        setFormData({ name: '', business: '', email: '', phone: '', stores: '', message: '' });
      } else throw new Error(data.error || 'Failed to send request.');
    } catch (error: any) {
      setToastMessage(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToastMessage(''), 4000);
    }
  };

  return (
    <section id="contact-sales" className="w-full py-24 md:py-32 relative bg-[var(--bg-base)] border-t border-[var(--border-color)] transition-colors duration-300">
      <AnimatePresence>
        {toastMessage && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-8 right-8 z-[100] bg-[var(--bg-card)] border border-[var(--border-color)] px-6 py-4 rounded-2xl shadow-[var(--shadow-main)] flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--accent-bg)] flex items-center justify-center"><Check size={16} className="text-[var(--accent)]" /></div>
            <p className="text-[var(--text-primary)] text-sm font-medium">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[800px] mx-auto px-6 md:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 font-modern">Talk to ClickOut Sales</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-12">Build the future of smart retail with ClickOut Command Center.</p>

        <form onSubmit={handleSubmit} className="bg-[var(--bg-card)] border border-[var(--border-color)] shadow-[var(--shadow-main)] rounded-3xl p-6 md:p-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Full Name</label>
              <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Business Name</label>
              <input required type="text" value={formData.business} onChange={(e) => setFormData({...formData, business: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl" placeholder="Acme Retail" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
              <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl" placeholder="john@acme.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Phone</label>
              <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="warm-input w-full px-4 py-3 rounded-xl" placeholder="+91 98765 43210" />
            </div>
          </div>

          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Number of Stores</label>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`w-full px-4 py-3 rounded-xl cursor-pointer flex justify-between items-center transition-all duration-200 bg-[var(--bg-input)] border ${isDropdownOpen ? 'border-[var(--accent)] shadow-[0_0_0_3px_var(--accent-bg)]' : 'border-[var(--border-color)]'}`}>
              <span className={formData.stores ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}>{formData.stores || 'Select scale'}</span>
              <ChevronDown className={`w-5 h-5 text-[var(--text-secondary)] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            {isDropdownOpen && (
              <div className="absolute z-50 w-full mt-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-xl overflow-hidden py-2">
                {['1-5', '6-20', '21-50', '50+'].map((val) => (
                  <div key={val} onClick={() => { setFormData({ ...formData, stores: val }); setIsDropdownOpen(false); }} className={`px-4 py-3 cursor-pointer transition-colors ${formData.stores === val ? 'bg-[var(--accent-bg)] text-[var(--accent)] font-medium' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-base)]'}`}>
                    {val} Stores
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-10">
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
            <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="warm-input w-full px-4 py-3 rounded-xl resize-none" placeholder="How can we help?" />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg">
            {isSubmitting ? (
              <><svg className="animate-spin h-5 w-5 text-[#1a1917]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...</>
            ) : 'Contact Sales'}
          </Button>
        </form>
      </div>
    </section>
  );
}