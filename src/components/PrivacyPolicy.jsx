export default function PrivacyPolicy({ onBack }) {
  return (
    <section className="py-24 px-4 lg:px-24 bg-gradient-to-b from-surface to-surface-container min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-12 text-sm">
        <button onClick={onBack} className="text-secondary hover:text-secondary/80 transition-colors">Home</button>
        <span className="text-stone-400">›</span>
        <span className="text-stone-600">Privacy Policy</span>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
        <div className="space-y-8">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface mb-2">Privacy Policy</h1>
            <p className="text-stone-500 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-6 text-on-surface">
            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">1. Information We Collect</h2>
              <p className="text-stone-700 leading-relaxed">We may collect the following information when you interact with our website or place an order:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Name and contact information</li>
                <li>Phone number and email address</li>
                <li>Delivery address</li>
                <li>Order history and preferences</li>
                <li>Any information shared via WhatsApp or other communication channels</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">2. How We Use Your Information</h2>
              <p className="text-stone-700 leading-relaxed">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Process and confirm your orders</li>
                <li>Communicate with you regarding order status and updates</li>
                <li>Provide customer support via WhatsApp</li>
                <li>Improve our products and services</li>
                <li>Send promotional offers (only if you've opted in)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">3. Data Sharing</h2>
              <p className="text-stone-700 leading-relaxed">We do NOT sell, trade, or share your personal information with third parties for marketing purposes. Your data is only shared with logistics partners when necessary to process your delivery.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">4. Data Security</h2>
              <p className="text-stone-700 leading-relaxed">We take reasonable steps to protect your data from unauthorized access. However, we cannot guarantee 100% security of information transmitted over the internet.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">5. Cookies</h2>
              <p className="text-stone-700 leading-relaxed">Our website may use cookies and similar tracking technologies to enhance user experience, remember preferences, and analyze website usage.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">6. Your Rights</h2>
              <p className="text-stone-700 leading-relaxed">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Access your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">7. Contact Us</h2>
              <p className="text-stone-700 leading-relaxed">If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-secondary/10 border border-secondary rounded-lg p-4 mt-3">
                <p className="font-body text-sm"><span className="font-bold">Email:</span> contact@lessencepure.com</p>
                <p className="font-body text-sm"><span className="font-bold">Phone:</span> +91 XXXXXXXXXX</p>
              </div>
            </section>

            <div className="bg-stone-100 border-l-4 border-secondary p-4 mt-8 rounded">
              <p className="text-sm text-stone-700">By using our website, you agree to this Privacy Policy. We may update this policy at any time, and your continued use of the website indicates your acceptance of the updates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
