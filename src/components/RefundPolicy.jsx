export default function RefundPolicy({ onBack }) {
  return (
    <section className="py-24 px-4 lg:px-24 bg-gradient-to-b from-surface to-surface-container min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-12 text-sm">
        <button onClick={onBack} className="text-secondary hover:text-secondary/80 transition-colors">Home</button>
        <span className="text-stone-400">›</span>
        <span className="text-stone-600">Refund & Return Policy</span>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
        <div className="space-y-8">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface mb-2">Refund & Return Policy</h1>
            <p className="text-stone-500 text-sm">Last updated: April 2026</p>
          </div>

          <div className="space-y-6 text-on-surface">
            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">1. Return Eligibility</h2>
              <p className="text-stone-700 leading-relaxed">Returns are accepted only in the following cases:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Product received is damaged or defective</li>
                <li>Wrong product was shipped</li>
                <li>Product doesn't match the description</li>
              </ul>
              <p className="text-stone-700 leading-relaxed mt-3">Used or opened products cannot be returned due to hygiene and safety reasons.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">2. Return Request & Timeline</h2>
              <p className="text-stone-700 leading-relaxed">You must contact us within 24 hours of delivery with:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Clear photographs or video of the damage/defect</li>
                <li>Your order number</li>
                <li>Brief description of the issue</li>
              </ul>
              <p className="text-stone-700 leading-relaxed mt-3">Please share these details via WhatsApp for faster processing.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">3. Return Process</h2>
              <ol className="list-decimal list-inside space-y-2 text-stone-700 ml-2">
                <li>Submit return request with proof within 24 hours</li>
                <li>We'll verify the damage/issue</li>
                <li>Once approved, we'll arrange pickup or provide return shipping details</li>
                <li>Product is received and inspected</li>
                <li>Refund is processed</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">4. Refunds Processing</h2>
              <p className="text-stone-700 leading-relaxed">Refunds will be processed to your original payment method after verification of the return. This typically takes:</p>
              <div className="bg-secondary/10 rounded-lg p-4 mt-3">
                <p className="font-body text-sm"><span className="font-bold">UPI/Debit Card:</span> 3-5 business days</p>
                <p className="font-body text-sm"><span className="font-bold">Credit Card:</span> 5-7 business days</p>
                <p className="font-body text-sm"><span className="font-bold">Bank Transfer:</span> 5-7 business days</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">5. Non-Returnable Items</h2>
              <p className="text-stone-700 leading-relaxed">The following items cannot be returned:</p>
              <ul className="list-disc list-inside space-y-2 text-stone-700 ml-2">
                <li>Used or partially used fragrances</li>
                <li>Opened/tampered packaging</li>
                <li>Products used beyond 24 hours of delivery</li>
                <li>Items purchased during final sale or clearance events</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">6. Order Cancellation</h2>
              <p className="text-stone-700 leading-relaxed">Orders can be cancelled at no charge if requested before dispatch. Once your order has been dispatched, cancellation is not possible, but you can initiate a return if eligible.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">7. Shipping Costs</h2>
              <p className="text-stone-700 leading-relaxed">For approved returns due to our error (wrong product, damage), we'll cover the return shipping costs. For returns initiated by the customer, return shipping must be prepaid.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">8. Defective Products</h2>
              <p className="text-stone-700 leading-relaxed">If a product is found to be defective or not as described, we'll provide a replacement or full refund without requiring you to cover return shipping.</p>
            </section>

            <section className="space-y-3">
              <h2 className="font-headline text-2xl font-bold">9. Contact & Support</h2>
              <p className="text-stone-700 leading-relaxed">For return/refund requests or questions:</p>
              <div className="bg-secondary/10 border border-secondary rounded-lg p-4 mt-3">
                <p className="font-body text-sm"><span className="font-bold">WhatsApp:</span> +91 7666885770</p>
                <p className="font-body text-sm"><span className="font-bold">Email:</span> returns@lessencepure.com</p>
              </div>
            </section>

            <div className="bg-stone-100 border-l-4 border-secondary p-4 mt-8 rounded">
              <p className="text-sm text-stone-700">We want you to be completely satisfied with your purchase. If you have any concerns, please reach out to us immediately. Your satisfaction and trust are paramount to us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
