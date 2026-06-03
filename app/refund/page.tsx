import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy | ClickOut',
  description: 'Cancellation and refund policies for ClickOut subscriptions.',
};

export default function RefundPolicy() {
  const lastUpdated = "June 3, 2026";

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-300 font-sans">
      <nav className="w-full border-b border-gray-800 bg-[#0d0d0d]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-white tracking-tighter">
            Click<span className="text-[#00ff66]">Out</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Refund & Cancellation Policy</h1>
          <p className="text-sm text-[#00ff66] font-semibold uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-gray-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Subscription Cancellations</h2>
            <p>You can cancel your ClickOut subscription at any time through your Admin Dashboard or by contacting support. If you cancel, your account will remain active until the end of your current billing cycle (monthly or annual). We do not charge cancellation fees.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Non-Refundable Policy</h2>
            <p>Because ClickOut provides immediate access to proprietary software, cloud infrastructure, and operational tools, <strong>all subscription fees are strictly non-refundable</strong> once processed. We do not provide prorated refunds for mid-cycle cancellations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Exceptions & Errors</h2>
            <p>Refunds will only be considered in the following exceptional circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[#00ff66]">
              <li>You were charged incorrectly due to a technical error on our billing system.</li>
              <li>A duplicate payment was processed against your account.</li>
            </ul>
            <p className="mt-4">In such cases, you must notify us within 7 days of the erroneous charge.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Process for Requesting a Refund</h2>
            <p>If you believe you qualify for an exception, please email us with your store ID and transaction receipt. Approved refunds will be credited back to your original payment method within 5-7 business days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Support</h2>
            <p>For billing disputes or cancellation help, reach out to our billing team:</p>
            <a href="mailto:support@clickout.com" className="text-[#00ff66] hover:underline font-semibold mt-2 inline-block">support@clickout.com</a>
          </section>
        </div>
      </main>

      <footer className="w-full border-t border-gray-800 bg-black mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ClickOut. All rights reserved.
        </div>
      </footer>
    </div>
  );
}