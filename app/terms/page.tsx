import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | ClickOut',
  description: 'Terms and conditions for using the ClickOut retail operating system.',
};

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" style={{color:'var(--text-primary)'}}>Terms of Service</h1>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{color:'var(--accent)'}}>
            Last Updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>1. Acceptance of Terms</h2>
            <p>By registering for and using the ClickOut platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our software.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>2. Description of Service</h2>
            <p>ClickOut provides a cloud-based retail operating system, including Smart POS, Inventory Management, and AI Fraud Detection (collectively, the "Service"). We reserve the right to modify or discontinue features of the Service at any time with prior notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>3. Account Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2" style={{marker: 'var(--accent)'}}>
              <li>You must provide accurate business information during registration.</li>
              <li>You are responsible for maintaining the security of your admin and cashier accounts.</li>
              <li>You are strictly prohibited from using ClickOut for any illegal activities or unauthorized transactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>4. Billing and Payments</h2>
            <p>Subscription fees are billed in advance on a monthly or annual basis. Failure to pay may result in immediate suspension of your Command Center access. All fees are exclusive of applicable taxes unless stated otherwise.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>5. Limitation of Liability</h2>
            <p>ClickOut is provided on an "AS IS" basis. In no event shall ClickOut be liable for any indirect, incidental, or consequential damages, including but not limited to loss of profits, data loss, or business interruption arising out of the use of our platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>6. Contact Information</h2>
            <p>For legal inquiries or questions regarding these terms, contact us at:</p>
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