import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | ClickOut',
  description: 'Learn how ClickOut collects, uses, and protects your data.',
};

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-[#00ff66] font-semibold uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-gray-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to ClickOut. We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your data when you use our smart retail POS and Command Center platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#00ff66]">
              <li><strong>Identity & Business Data:</strong> Name, business name, store locations, and employee roles.</li>
              <li><strong>Contact Data:</strong> Email address and phone numbers for operational alerts.</li>
              <li><strong>Financial Data:</strong> Payment details are processed securely by our certified payment partners. We do not store full credit card or UPI PINs on our servers.</li>
              <li><strong>Transaction & System Data:</strong> POS transaction logs, inventory sync records, and device IP addresses to detect fraud and ensure system stability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p>We use your data strictly to operate our platform effectively. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[#00ff66]">
              <li>Authenticating users and securing your store's Command Center.</li>
              <li>Processing subscriptions and generating invoices.</li>
              <li>Providing real-time analytics, fraud detection, and inventory alerts.</li>
              <li>Sending critical system updates and customer support responses.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security & Retention</h2>
            <p>We employ enterprise-grade encryption to secure your data in transit and at rest. Access is strictly limited to authorized personnel. We retain your business data only for as long as your subscription is active, or as required by law for tax and auditing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>For data deletion requests or privacy-related concerns, please contact our Data Protection Officer at:</p>
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