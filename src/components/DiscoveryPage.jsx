import { useEffect } from 'react'

export const discoveryProduct = {
  id: 301,
  name: "The Discovery Set",
  price: 999,
  originalPrice: 1999,
  category: "discovery",
  image: "/discovery_set.png"
}

export default function DiscoveryPage({ onAddToCart, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <section className="py-24 px-4 lg:px-24 bg-gradient-to-b from-surface to-surface-container min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-12 text-sm">
        <button onClick={onBack} className="text-secondary hover:text-secondary/80 transition-colors">Home</button>
        <span className="text-stone-400">›</span>
        <span className="text-stone-600">The Discovery Set</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <div className="flex-1 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="The Discovery Set"
              className="w-full h-auto object-cover"
              src={discoveryProduct.image}
            />
          </div>
        </div>
        
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary font-bold">
              Exclusive
            </span>
            <h1 className="font-headline text-4xl lg:text-5xl font-bold">The Discovery Set</h1>
            <p className="font-body text-2xl text-secondary font-bold">
              ₹{discoveryProduct.price} <span className="text-stone-400 text-lg line-through ml-2 font-normal">₹{discoveryProduct.originalPrice}</span>
            </p>
            
            <p className="font-body text-stone-600 leading-relaxed text-lg pt-4">
              Experience the full range of L'Essence Pure before committing to a full bottle. Six 2ml vials of our most celebrated fragrances curated for your journey of olfactory discovery.
            </p>

            <div className="py-6 border-y border-stone-200 my-8 space-y-4">
              <h3 className="font-headline font-bold text-lg text-on-surface">What's included:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-secondary material-symbols-outlined">check_circle</span>
                  <span className="font-body text-sm">Midnight Bergamot & Golden Amber</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary material-symbols-outlined">check_circle</span>
                  <span className="font-body text-sm">Obsidian Oud & Silk Peony</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary material-symbols-outlined">check_circle</span>
                  <span className="font-body text-sm">Velvet Rose & Cedar Mist</span>
                </li>
              </ul>
            </div>
            
            <button 
              onClick={() => onAddToCart(discoveryProduct)}
              className="w-full py-4 bg-secondary text-on-secondary rounded-full text-sm font-bold tracking-widest uppercase hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
