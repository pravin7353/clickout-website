import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy | ClickOut',
  description: 'Cancellation and refund policies for ClickOut subscriptions.',
};

export default function RefundPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" style={{color:'var(--text-primary)'}}>Refund & Cancellation Policy</h1>
          <p className="text-sm font-semibold uppercase tracking-wider" style={{color:'var(--accent)'}}>
            Last Updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed" style={{color:'var(--text-secondary)'}}>
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>1. Subscription Cancellations</h2>
            <p>You can cancel your ClickOut subscription at any time through your Admin Dashboard or by contacting support. If you cancel, your account will remain active until the end of your current billing cycle (monthly or annual). We do not charge cancellation fees.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>2. Non-Refundable Policy</h2>
            <p>Because ClickOut provides immediate access to proprietary software, cloud infrastructure, and operational tools, <strong style={{color:'var(--text-primary)'}}>all subscription fees are strictly non-refundable</strong> once processed. We do not provide prorated refunds for mid-cycle cancellations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>3. Exceptions & Errors</h2>
            <p>Refunds will only be considered in the following exceptional circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4" style={{marker: 'var(--accent)'}}>
              <li>You were charged incorrectly due to a technical error on our billing system.</li>
              <li>A duplicate payment was processed against your account.</li>
            </ul>
            <p className="mt-4">In such cases, you must notify us within 7 days of the erroneous charge.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>4. Process for Requesting a Refund</h2>
            <p>If you believe you qualify for an exception, please email us with your store ID and transaction receipt. Approved refunds will be credited back to your original payment method within 5-7 business days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{color:'var(--text-primary)'}}>5. Contact Support</h2>
            <p>For billing disputes or cancellation help, reach out to our billing team:</p>
            <a href="mailto:support@clickout.com" className="hover:underline font-semibold mt-2 inline-block" style={{color:'var(--accent)'}}>support@clickout.com</a>
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