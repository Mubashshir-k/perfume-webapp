import { products } from '../data/products'

export default function WatchBuy({ onAddToCart }) {
  const watchBuyProducts = products.filter(p => p.category === 'watch-buy')

  return (
    <section className="py-12 lg:py-24 space-y-8 lg:space-y-12 bg-gradient-to-b from-surface-bright to-surface">
      <div className="px-4 lg:px-24 flex justify-between items-end">
        <div>
          <h2 className="font-headline text-2xl lg:text-5xl font-bold">Watch & Buy</h2>
        </div>
        <button className="hidden lg:inline-block font-label text-xs tracking-widest uppercase border-b-2 border-secondary pb-2 hover:text-secondary transition-colors">
          View All Stories
        </button>
      </div>
      <div className="lg:px-24">
        <div className="flex overflow-x-auto gap-3 lg:gap-12 no-scrollbar pb-4 lg:pb-8 scroll-smooth lg:overflow-x-visible lg:grid lg:grid-cols-3 lg:auto-rows-max snap-x snap-mandatory lg:px-24">
          {watchBuyProducts.map((product, index) => (
            <div key={product.id} className={`w-[55vw] min-w-[170px] max-w-[240px] lg:w-auto lg:min-w-0 lg:max-w-none flex-shrink-0 lg:flex-shrink group cursor-pointer snap-start ${index === 0 ? 'ml-4 lg:ml-0' : ''} ${index === watchBuyProducts.length - 1 ? 'mr-4 lg:mr-0' : ''}`}>
              <div className="relative aspect-[9/16] bg-gradient-to-br from-surface-container-low to-surface-container overflow-hidden mb-3 lg:mb-5 shadow-md hover:shadow-2xl transition-all duration-700 rounded-lg lg:rounded-xl">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  src={product.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-lg lg:rounded-xl transition-colors duration-700 pointer-events-none shadow-inner"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-black px-2.5 py-1 text-[7px] lg:text-[9px] font-bold tracking-[0.2em] uppercase shadow-sm">
                  {product.discount}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                  <span className="material-symbols-outlined text-2xl lg:text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    play_circle
                  </span>
                </div>
              </div>
              
              <div className="text-left space-y-1 lg:space-y-1.5 px-0.5">
                <h3 className="font-headline text-sm lg:text-lg font-bold leading-tight truncate text-stone-900 group-hover:text-secondary transition-colors">{product.name}</h3>
                <p className="font-body text-[11px] lg:text-sm font-semibold text-secondary pt-0.5">
                  ₹{product.price}
                  <span className="text-stone-400 text-[9px] lg:text-[11px] line-through ml-2 font-normal">₹{product.originalPrice}</span>
                </p>
              </div>
              
              <button
                 onClick={() => onAddToCart(product)}
                 className="w-full mt-3.5 py-2.5 border border-stone-800 text-stone-900 text-[9px] tracking-[0.2em] font-bold uppercase transition-all duration-300 hover:bg-stone-900 hover:text-stone-100 hover:shadow-lg active:shadow-md active:scale-95 rounded-lg"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
