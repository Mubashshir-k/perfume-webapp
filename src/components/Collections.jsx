import { collections } from '../data/products'

export default function Collections({ onSelectCollection }) {
  const collectionMappings = {
    'For Him': 'for-him',
    'Unisex': 'unisex',
    'For Her': 'for-her'
  }

  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-surface-container-low to-surface">
      <div className="text-center mb-6 lg:mb-16 space-y-1.5 lg:space-y-4 px-4 lg:px-24">
        <span className="font-label text-xs tracking-[0.5em] uppercase text-secondary font-bold">The Archives</span>
        <h2 className="font-headline text-2xl lg:text-5xl font-bold">Collections for Every Soul</h2>
        <p className="font-body text-stone-600 max-w-2xl mx-auto text-xs lg:text-base">Discover our curated collections, each telling a unique story of elegance and innovation.</p>
      </div>
      <div className="flex overflow-x-auto gap-6 lg:gap-8 pb-4 scroll-smooth no-scrollbar lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-x-visible items-start snap-x snap-mandatory lg:px-24">
        {collections.map((collection, index) => (
          <button
            key={collection.id}
            onClick={() => onSelectCollection({ name: collection.name, type: collectionMappings[collection.name] })}
            className={`min-w-[85vw] sm:min-w-[calc(55%-12px)] lg:min-w-0 flex-shrink-0 lg:flex-shrink group relative overflow-hidden transition-all duration-700 ${collection.height} ${collection.marginTop} text-left cursor-pointer snap-start ${index === 0 ? 'ml-4 lg:ml-0' : ''} ${index === collections.length - 1 ? 'mr-4 lg:mr-0' : ''} rounded-lg lg:rounded-2xl shadow-md hover:shadow-2xl`}
          >
            <img
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              src={collection.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none group-hover:from-black/95 group-hover:via-black/50 transition-all duration-700"></div>
            <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 rounded-lg lg:rounded-2xl transition-colors duration-700 pointer-events-none shadow-inner"></div>
            <div className={`absolute bottom-6 left-6 lg:bottom-10 lg:left-10 transition-all duration-500 group-hover:bottom-7 group-hover:left-7 lg:group-hover:bottom-12 lg:group-hover:left-12 ${collection.name === 'Unisex' ? 'bottom-8 left-8 lg:bottom-14 lg:left-14' : ''}`}>
              <h3 className={`font-headline text-white mb-2 lg:mb-3 font-bold group-hover:text-secondary transition-colors duration-500 ${collection.name === 'Unisex' ? 'text-3xl lg:text-5xl lg:mb-4' : 'text-2xl lg:text-4xl'}`}>
                {collection.name}
              </h3>
              <div className="text-white font-label text-[8px] lg:text-[10px] tracking-widest uppercase border-b-2 border-secondary group-hover:border-white group-hover:text-secondary transition-all duration-500 inline-block pb-1.5 font-semibold">
                Explore Collection
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
