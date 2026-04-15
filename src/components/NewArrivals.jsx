import { products } from '../data/products'

export default function NewArrivals({ onAddToCart }) {
  const newArrivals = products.filter(p => p.isNewArrival === true)

  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-surface to-surface-container">
      <div className="text-center mb-8 lg:mb-16 space-y-2 lg:space-y-4 px-4 lg:px-24">
        <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary">The New Chapter</span>
        <h2 className="font-headline text-4xl lg:text-5xl font-bold">Latest Arrivals</h2>
        <p className="font-body text-stone-600 max-w-2xl mx-auto">Fresh fragrances that define contemporary elegance and timeless appeal.</p>
      </div>
      <div className="flex overflow-x-auto gap-3 lg:gap-8 pb-4 scroll-smooth no-scrollbar lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-x-visible snap-x snap-mandatory lg:px-24">
        {newArrivals.map((product, index) => (
          <div key={product.id} className={`w-[65vw] min-w-[220px] max-w-[280px] lg:w-auto lg:min-w-0 lg:max-w-none flex-shrink-0 lg:flex-shrink group snap-start ${index === 0 ? 'ml-4 lg:ml-0' : ''} ${index === newArrivals.length - 1 ? 'mr-4 lg:mr-0' : ''}`}>
            <div className="relative aspect-[4/5] bg-gradient-to-br from-surface-container-low to-surface-container overflow-hidden mb-3 lg:mb-5 shadow-sm hover:shadow-2xl transition-all duration-700">
              <img
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src={product.image}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-black px-2.5 py-1 text-[7px] lg:text-[9px] font-bold tracking-[0.2em] uppercase shadow-sm">
                New
              </div>
              <button
                onClick={() => onAddToCart(product)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] py-3 bg-white/95 backdrop-blur lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 font-label text-[9px] lg:text-[10px] tracking-[0.2em] font-medium uppercase hover:bg-black hover:text-white hidden lg:block"
              >
                Add to Bag
              </button>
            </div>
            
            <div className="text-left space-y-1 lg:space-y-1.5 px-0.5">
              <h4 className="font-body text-[8px] lg:text-[10px] text-stone-500 uppercase tracking-[0.2em] truncate">{product.collection}</h4>
              <h3 className="font-headline text-sm lg:text-lg font-bold truncate leading-tight text-stone-900">{product.name}</h3>
              <p className="font-body text-[11px] lg:text-sm font-semibold text-secondary pt-0.5">
                ₹{product.price}
                <span className="text-stone-400 text-[9px] lg:text-[11px] line-through ml-2 font-normal">₹{product.originalPrice}</span>
              </p>
            </div>
            
            <button
               onClick={() => onAddToCart(product)}
               className="w-full mt-3.5 lg:hidden py-2.5 border border-stone-300 text-stone-700 text-[9px] tracking-[0.2em] font-medium uppercase transition-all active:bg-stone-100"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
