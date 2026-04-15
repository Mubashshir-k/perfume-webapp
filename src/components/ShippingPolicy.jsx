export default function ShippingPolicy({ onBack }) {
  return (
    <section className="py-24 px-4 lg:px-24 bg-gradient-to-b from-surface to-surface-container min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-12 text-sm">
        <button onClick={onBack} className="text-secondary hover:text-secondary/80 transition-colors">Home</button>
        <span className="text-stone-400">›</span>
        <span className="text-stone-600">Shipping Policy</span>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
        <div className="space-y-8">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface mb-2">Shipping Policy</h1>
            <p className="text-stone-500 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-6 text-on-surface">
            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">1. Order Processing</h2>
              <p className="text-stone-700 leading-relaxed">Orders are carefully processed within 1–2 business days after confirmation via WhatsApp. We take extra care to ensure your fragrance arrives in perfect condition.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">2. Delivery Time</h2>
              <p className="text-stone-700 leading-relaxed">Standard delivery typically takes 3–7 business days depending on your location within India. Delivery times may vary during peak seasons or holidays.</p>
              <div className="bg-secondary/10 rounded-lg p-4 mt-3">
                <p className="font-body text-sm"><span className="font-bold">Metro cities:</span> 2-4 business days</p>
                <p className="font-body text-sm"><span className="font-bold">Tier 2 cities:</span> 4-6 business days</p>
                <p className="font-body text-sm"><span className="font-bold">Remote areas:</span> 6-7 business days</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">3. Shipping Charges</h2>
              <p className="text-stone-700 leading-relaxed">Free shipping is available on orders above ₹1,000. For orders below ₹1,000, shipping charges will be calculated and clearly communicated during order confirmation.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">4. Delivery Areas</h2>
              <p className="text-stone-700 leading-relaxed">We currently deliver across India to most addresses. If your location is not serviceable, we'll notify you immediately so alternative arrangements can be made.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">5. Shipping Methods</h2>
              <p className="text-stone-700 leading-relaxed">We partner with trusted logistics providers to ensure safe and timely delivery of your orders. Your order is packaged securely to protect the integrity of the fragrance.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">6. Delays & Exceptions</h2>
              <p className="text-stone-700 leading-relaxed">Delivery may be delayed due to unforeseen circumstances including:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Severe weather conditions</li>
                <li>Logistics provider delays</li>
                <li>Holiday periods</li>
                <li>Address clarity issues</li>
                <li>Natural disasters or emergencies</li>
              </ul>
              <p className="text-stone-700 leading-relaxed mt-3">We will keep you informed of any delays via WhatsApp.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">7. Tracking Your Order</h2>
              <p className="text-stone-700 leading-relaxed">Once your order ships, you'll receive a tracking number via WhatsApp so you can monitor your package's journey in real-time.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">8. Damage During Shipping</h2>
              <p className="text-stone-700 leading-relaxed">If your product arrives damaged, please notify us within 24 hours with photographic evidence. We'll arrange a replacement immediately at no additional cost.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">9. Contact Us</h2>
              <p className="text-stone-700 leading-relaxed">For shipping-related queries or concerns:</p>
              <div className="bg-secondary/10 border border-secondary rounded-lg p-4 mt-3">
                <p className="font-body text-sm"><span className="font-bold">WhatsApp:</span> +91 7666885770</p>
                <p className="font-body text-sm"><span className="font-bold">Email:</span> support@lessencepure.com</p>
              </div>
            </section>

            <div className="bg-stone-100 border-l-4 border-secondary p-4 mt-8 rounded">
              <p className="text-sm text-stone-700">We're committed to delivering your L'Essence Pure fragrances safely and on time. Your satisfaction is our priority!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
