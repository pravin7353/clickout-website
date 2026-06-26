import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | ClickOut',
  description: 'Learn how ClickOut collects, uses, and protects your data.',
};

export default function PrivacyPolicy() {
  const lastUpdated = "June 3, 2026";

  return (
    <div className="min-h-screen font-sans transition-colors duration-300" style={{background:'var(--bg-base)', color:'var(--text-secondary)'}}>
      <nav className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-xl border-b" style={{background:'var(--bg-nav)', borderColor:'var(--border-color)'}}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-modern font-bold tracking-wide">
            <span style={{color:'var(--text-primary)'}}>Click</span><span style={{color:'var(--accent)'}}>Out</span>
          </Link>
          <Link href="/" className="px-4 py-2 rounded-lg text-sm transition" style={{background:'var(--bg-card)', color:'var(--text-primary)', border:'1px solid var(--border-color)'}}>
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-32">
        <header className="mb-12 border-b pb-8" style={{borderColor:'var(--border-color)'}}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" style={{color:'var(--text-primary)'}}>Privacy Policy</h1>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{color:'var(--accent)'}}>
            Last Updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>1. Introduction</h2>
            <p>Welcome to ClickOut. We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your data when you use our smart retail POS and Command Center platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>2. The Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2" style={{marker: 'var(--accent)'}}>
              <li><strong style={{color:'var(--text-primary)'}}>Identity & Business Data:</strong> Name, business name, store locations, and employee roles.</li>
              <li><strong style={{color:'var(--text-primary)'}}>Contact Data:</strong> Email address and phone numbers for operational alerts.</li>
              <li><strong style={{color:'var(--text-primary)'}}>Financial Data:</strong> Payment details are processed securely by our certified payment partners. We do not store full credit card or UPI PINs on our servers.</li>
              <li><strong style={{color:'var(--text-primary)'}}>Transaction & System Data:</strong> POS transaction logs, inventory sync records, and device IP addresses to detect fraud and ensure system stability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>3. How We Use Your Data</h2>
            <p>We use your data strictly to operate our platform effectively. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4" style={{marker: 'var(--accent)'}}>
              <li>Authenticating users and securing your store's Command Center.</li>
              <li>Processing subscriptions and generating invoices.</li>
              <li>Providing real-time analytics, fraud detection, and inventory alerts.</li>
              <li>Sending critical system updates and customer support responses.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>4. Data Security & Retention</h2>
            <p>We employ enterprise-grade encryption to secure your data in transit and at rest. Access is strictly limited to authorized personnel. We retain your business data only for as long as your subscription is active, or as required by law for tax and auditing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>5. Contact Us</h2>
            <p>For data deletion requests or privacy-related concerns, please contact our Data Protection Officer at:</p>
            <a href="mailto:legal@clickout.com" className="hover:underline font-semibold mt-2 inline-block" style={{color:'var(--accent)'}}>legal@clickout.com</a>
          </section>
        </div>
      </main>

      <footer className="w-full mt-12 border-t" style={{background:'var(--bg-footer)', borderColor:'var(--border-color)'}}>
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm" style={{color:'var(--text-muted)'}}>
          © {new Date().getFullYear()} ClickOut. All rights reserved.
        </div>
      </footer>
    </div>
  );
}