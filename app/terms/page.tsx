import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | ClickOut',
  description: 'Terms and conditions for using the ClickOut retail operating system.',
};

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-sm text-[#00ff66] font-semibold uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-gray-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By registering for and using the ClickOut platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our software.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>ClickOut provides a cloud-based retail operating system, including Smart POS, Inventory Management, and AI Fraud Detection (collectively, the "Service"). We reserve the right to modify or discontinue features of the Service at any time with prior notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Account Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#00ff66]">
              <li>You must provide accurate business information during registration.</li>
              <li>You are responsible for maintaining the security of your admin and cashier accounts.</li>
              <li>You are strictly prohibited from using ClickOut for any illegal activities or unauthorized transactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Billing and Payments</h2>
            <p>Subscription fees are billed in advance on a monthly or annual basis. Failure to pay may result in immediate suspension of your Command Center access. All fees are exclusive of applicable taxes unless stated otherwise.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>ClickOut is provided on an "AS IS" basis. In no event shall ClickOut be liable for any indirect, incidental, or consequential damages, including but not limited to loss of profits, data loss, or business interruption arising out of the use of our platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
            <p>For legal inquiries or questions regarding these terms, contact us at:</p>
            <a href="mailto:legal@clickout.com" className="text-[#00ff66] hover:underline font-semibold mt-2 inline-block">legal@clickout.com</a>
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