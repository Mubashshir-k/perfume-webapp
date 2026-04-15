export default function Discovery({ onStartJourney }) {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-surface-container-lowest to-surface-container-low overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 lg:px-24">
        <div className="flex-1 group w-full">
          <div className="relative shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-none lg:rounded-2xl overflow-hidden">
            <img
              alt="Discovery Set"
              className="shadow-xl group-hover:scale-105 transition-transform duration-700 w-full rounded-none lg:rounded-2xl"
              src="/discovery_set.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
        <div className="flex-1 space-y-8 px-4 lg:px-0">
          <div className="space-y-4">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary font-bold">
              Finding Your Essence
            </span>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold leading-tight">The Discovery Set</h2>
            <p className="font-body text-stone-600 leading-relaxed text-lg">
              Experience the full range of L'Essence Pure before committing to a full bottle. Six 2ml vials of our most celebrated fragrances curated for your journey of olfactory discovery.
            </p>
            <ul className="space-y-4 pt-6">
              <li className="flex items-start gap-4">
                <span className="text-secondary material-symbols-outlined text-sm mt-0.5" style={{ fontVariationSettings: "'wght' 300" }}>horizontal_rule</span>
                <span className="font-body text-sm tracking-wide text-stone-700">Six signature 2ml samples</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-secondary material-symbols-outlined text-sm mt-0.5" style={{ fontVariationSettings: "'wght' 300" }}>horizontal_rule</span>
                <span className="font-body text-sm tracking-wide text-stone-700">Perfect for travel or gifting</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-secondary material-symbols-outlined text-sm mt-0.5" style={{ fontVariationSettings: "'wght' 300" }}>horizontal_rule</span>
                <span className="font-body text-sm tracking-wide text-stone-700">Handcrafted, curated selection</span>
              </li>
            </ul>
          </div>
          <button onClick={onStartJourney} className="mt-4 px-8 py-3.5 border border-stone-800 text-stone-900 bg-transparent text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 hover:bg-stone-900 hover:text-white rounded-none">
            Start Discovery Journey
          </button>
        </div>
      </div>
    </section>
  )
}
