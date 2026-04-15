export default function TermsOfService({ onBack }) {
  return (
    <section className="py-24 px-4 lg:px-24 bg-gradient-to-b from-surface to-surface-container min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-12 text-sm">
        <button onClick={onBack} className="text-secondary hover:text-secondary/80 transition-colors">Home</button>
        <span className="text-stone-400">›</span>
        <span className="text-stone-600">Terms of Service</span>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
        <div className="space-y-8">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface mb-2">Terms of Service</h1>
            <p className="text-stone-500 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-6 text-on-surface">
            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">1. Agreement & Acceptance</h2>
              <p className="text-stone-700 leading-relaxed">By accessing and using this website, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please refrain from using our website.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">2. Order & Purchase</h2>
              <p className="text-stone-700 leading-relaxed">When you place an order through our website or WhatsApp:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>You confirm that all provided information is accurate</li>
                <li>You provide valid contact details for order confirmation</li>
                <li>You acknowledge the order amount and payment terms</li>
                <li>We reserve the right to accept or reject any order</li>
                <li>Confirmation via WhatsApp constitutes acceptance of your order</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">3. Pricing & Payment</h2>
              <p className="text-stone-700 leading-relaxed">All prices are displayed in Indian Rupees (₹) and are subject to change without prior notice. We accept various payment methods including:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>UPI/Digital wallets</li>
                <li>Debit and credit cards</li>
                <li>Bank transfers</li>
                <li>Cash on delivery (where available)</li>
              </ul>
              <p className="text-stone-700 leading-relaxed mt-3">Payment must be completed before order dispatch.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">4. Product Information</h2>
              <p className="text-stone-700 leading-relaxed">We strive to ensure all product details, descriptions, images, and prices are accurate. However, we do not guarantee:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>100% accuracy of product information</li>
                <li>That images exactly match the physical product</li>
                <li>Availability of all products at all times</li>
              </ul>
              <p className="text-stone-700 leading-relaxed mt-3">If you find any discrepancies, please contact us immediately.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">5. Intellectual Property Rights</h2>
              <p className="text-stone-700 leading-relaxed">All content on this website including text, images, logos, and designs are owned by L'Essence Pure or used with permission. They are protected by copyright and cannot be reproduced, distributed, or transmitted without written permission.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">6. User Conduct</h2>
              <p className="text-stone-700 leading-relaxed">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Engage in any fraudulent or illegal activity</li>
                <li>Provide false or misleading information</li>
                <li>Harass or abuse our staff via any channel</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our website for unsolicited marketing</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">7. Limitation of Liability</h2>
              <p className="text-stone-700 leading-relaxed">To the extent permitted by law, L'Essence Pure is not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits or data</li>
                <li>Physical reactions to fragrances (allergies, sensitivities)</li>
                <li>Website downtime or errors</li>
                <li>Third-party actions or logistics delays</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">8. Age Restrictions</h2>
              <p className="text-stone-700 leading-relaxed">Our products are intended for adults. By placing an order, you confirm that you are at least 18 years of age.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">9. Third-Party Links</h2>
              <p className="text-stone-700 leading-relaxed">Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external sites. Access them at your own discretion.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">10. Modifications to Terms</h2>
              <p className="text-stone-700 leading-relaxed">We may update these terms at any time without prior notice. Your continued use of the website after any changes constitutes acceptance of the updated terms.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">11. Dispute Resolution</h2>
              <p className="text-stone-700 leading-relaxed">Any disputes arising from these terms or your use of our website shall be resolved through mutual discussion and negotiation. If unresolved, disputes will be subject to the jurisdiction of courts in India.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">12. Contact Information</h2>
              <p className="text-stone-700 leading-relaxed">For any questions or concerns regarding these terms:</p>
              <div className="bg-secondary/10 border border-secondary rounded-lg p-4 mt-3">
                <p className="font-body text-sm"><span className="font-bold">Email:</span> legal@lessencepure.com</p>
                <p className="font-body text-sm"><span className="font-bold">WhatsApp:</span> +91 XXXXXXXXXX</p>
              </div>
            </section>

            <div className="bg-stone-100 border-l-4 border-secondary p-4 mt-8 rounded">
              <p className="text-sm text-stone-700">Thank you for choosing L'Essence Pure. We're committed to providing you with an exceptional fragrance experience while maintaining the highest standards of service and integrity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
