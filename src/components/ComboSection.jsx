import { combos } from '../data/products'

export default function ComboSection({ onAddToCart }) {
  const handleAddCombo = (combo) => {
    // Create a combo product
    onAddToCart({
      id: combo.id,
      name: combo.name,
      price: combo.price,
      image: combo.image,
      isCombo: true,
      products: combo.products,
    })
  }

  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-surface to-surface-container">
      <div className="text-center mb-6 lg:mb-16 px-4 lg:px-24">
        <h2 className="font-headline text-2xl lg:text-5xl font-bold text-stone-900 tracking-tight drop-shadow-sm">🎁 Combo Collections</h2>
      </div>
      <div className="flex overflow-x-auto gap-3 lg:gap-8 pb-4 scroll-smooth no-scrollbar lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-x-visible snap-x snap-mandatory lg:px-24">
        {combos.map((combo, index) => (
          <div
            key={combo.id}
            className={`w-[72vw] min-w-[240px] max-w-[300px] lg:w-auto lg:min-w-0 lg:max-w-none flex-shrink-0 lg:flex-shrink group relative overflow-hidden transition-all duration-500 snap-start shadow-md hover:shadow-2xl ${index === 0 ? 'ml-4 lg:ml-0' : ''} ${index === combos.length - 1 ? 'mr-4 lg:mr-0' : ''}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
              <img
                alt={combo.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                src={combo.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 z-10 pointer-events-none group-hover:from-black/97 group-hover:via-black/60 transition-all duration-700"></div>
              <div className="absolute inset-0 border border-white/15 group-hover:border-white/30 transition-colors duration-700 pointer-events-none shadow-inner"></div>
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-black px-2.5 py-1 text-[7px] lg:text-[9px] font-bold tracking-[0.2em] uppercase shadow-sm z-20">
                Combo
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-left z-20">
                <p className="font-body text-[8px] lg:text-[10px] text-stone-300 uppercase tracking-[0.2em] mb-1">{combo.products.length} Items</p>
                <h3 className="font-headline text-lg lg:text-2xl font-bold text-white mb-2 leading-tight">{combo.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-base lg:text-xl font-bold text-secondary">₹{combo.price}</span>
                    {combo.originalPrice && (
                      <span className="text-[10px] lg:text-xs text-stone-400 line-through">₹{combo.originalPrice}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddCombo(combo)}
                    className="px-4 py-1.5 rounded-lg border border-secondary text-white text-[9px] lg:text-[10px] uppercase tracking-widest font-semibold bg-secondary/10 hover:bg-secondary hover:text-black transition-all duration-300 active:scale-95 hover:shadow-lg"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
