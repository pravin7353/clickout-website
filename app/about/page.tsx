import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* HERO */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-8 pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-modern mb-6">Ek Problem, Ek Solution, Ek Mission</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          India ke 1.3 crore dukaan walon ke liye technology jo kaam kare, na ki uljhan badhaye.
        </p>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-8 py-16 border-t border-[var(--border-color)]">
        <h2 className="text-3xl font-bold mb-10 font-modern">Pehle Kya Problem Thi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">⏰</div>
            <div className="text-3xl font-bold text-[var(--accent)] mb-2">15 Min</div>
            <p className="text-sm text-[var(--text-secondary)]">Average wait time at billing counter during peak hours. Customer gussa ho jaata tha.</p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">📱</div>
            <div className="text-3xl font-bold text-[var(--accent)] mb-2">3 Apps</div>
            <p className="text-sm text-[var(--text-secondary)]">Dukaan owner ko ledger, inventory, aur payment ke liye alag alag apps use karne padte the.</p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">💸</div>
            <div className="text-3xl font-bold text-[var(--accent)] mb-2">₹2.5L</div>
            <p className="text-sm text-[var(--text-secondary)]">Average annual loss per store due to manual billing errors, fraud, and inventory shrinkage.</p>
          </div>
        </div>
      </section>

      {/* THE ORIGIN STORY */}
      <section className="max-w-[800px] mx-auto px-6 md:px-8 py-16 border-t border-[var(--border-color)]">
        <h2 className="text-3xl font-bold mb-6 font-modern">ClickOut Kahan Se Shuru Hua?</h2>
        <div className="text-lg text-[var(--text-secondary)] leading-relaxed space-y-4">
          <p>
            2024, Mumbai. Humne dekha ki bade supermarkets mein bhi 15-20 minute ki line lagti thi. 
            Chhoti dukaanon ka toh haal aur bura tha — owner khud cashier, accountant, aur security guard 
            banke baitha tha.
          </p>
          <p>
            Humne socha: <em className="text-[var(--text-primary)]">&ldquo;Kyun na customer khud apna phone use kare scan karne ke liye?&rdquo;</em>
          </p>
          <p>
            Bas, wahin se ClickOut paida hua. Shuruwat ₹99/month se ki taaki chhoti dukaan wala bhi 
            afford kar sake.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-8 py-16 border-t border-[var(--border-color)]">
        <h2 className="text-3xl font-bold mb-10 font-modern">Hamare 3 Siddhant</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">Aasaan Hona Chahiye</h3>
            <p className="text-sm text-[var(--text-secondary)]">5 minute mein setup. Koi 200-page manual nahi. Koi technician nahi.</p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-xl font-bold mb-2">Sasta Hona Chahiye</h3>
            <p className="text-sm text-[var(--text-secondary)]">Enterprise power, kirana price. ₹99 se shuru, bina hidden charges.</p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Bharosa Hona Chahiye</h3>
            <p className="text-sm text-[var(--text-secondary)]">Aapka paisa, aapka data. Hum kabhi bhi bech nahi sakte. Promise.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-8 py-16 border-t border-[var(--border-color)]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">12,000+</div>
            <div className="text-sm text-[var(--text-secondary)] mt-1">Active Stores</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">50L+</div>
            <div className="text-sm text-[var(--text-secondary)] mt-1">Transactions Processed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">30+</div>
            <div className="text-sm text-[var(--text-secondary)] mt-1">Cities Covered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">99.9%</div>
            <div className="text-sm text-[var(--text-secondary)] mt-1">Uptime</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">4.8★</div>
            <div className="text-sm text-[var(--text-secondary)] mt-1">Customer Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">₹50Cr+</div>
            <div className="text-sm text-[var(--text-secondary)] mt-1">GMV Processed</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[800px] mx-auto px-6 md:px-8 py-24 text-center border-t border-[var(--border-color)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-modern">Aap Bhi Is Mission Ka Hissa Ban Sakte Hain</h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8">14 din free trial. Koi risk nahi. Bas ek click.</p>
        <a href="/pricing?trial=1" className="inline-block px-8 py-4 rounded-xl bg-[var(--accent)] text-[var(--bg-base)] font-bold text-lg hover:opacity-90 transition-opacity">
          Free Trial Shuru Karein
        </a>
      </section>

    </main>
  );
}