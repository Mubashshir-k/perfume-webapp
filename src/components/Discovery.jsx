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
        <div className="flex-1 space-y-6 lg:space-y-8 px-4 lg:px-0">
          <div className="space-y-3 lg:space-y-4">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary font-bold">
              Finding Your Essence
            </span>
            <h2 className="font-headline text-2xl lg:text-5xl font-bold leading-tight">🔍 The Discovery Set</h2>
            <p className="font-body text-stone-600 text-xs lg:text-sm">
              Explore our curated collection. Six 2ml samples to find your signature scent.
            </p>
          </div>
          <button onClick={onStartJourney} className="px-8 py-3.5 border border-stone-800 text-stone-900 text-xs tracking-widest font-bold uppercase transition-all duration-300 hover:bg-stone-900 hover:text-stone-100 hover:shadow-lg active:shadow-md active:scale-95 rounded-lg">
            Start Discovery Journey
          </button>
        </div>
      </div>
    </section>
  )
}
