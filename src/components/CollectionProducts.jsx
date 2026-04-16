import { products } from '../data/products'
import { useState, useEffect } from 'react'

export default function CollectionProducts({ collectionType, collectionName, onAddToCart, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [collectionType])

  const filteredProducts = products.filter(p => p.collectionType === collectionType)
  
  // Filter options
  const [filters, setFilters] = useState({ availability: 'all', priceRange: [0, 5000] })

  const displayedProducts = filteredProducts.filter(p => {
    if (filters.availability === 'in-stock') {
      return p.inStock !== false
    }
    return true
  }).filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

  return (
    <section className="py-24 px-4 lg:px-24 bg-gradient-to-b from-surface to-surface-container min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-12 text-sm">
        <button onClick={onBack} className="text-secondary hover:text-secondary/80 transition-colors font-medium">Home</button>
        <span className="text-stone-400">/</span>
        <button onClick={onBack} className="text-secondary hover:text-secondary/80 transition-colors font-medium">Collections</button>
        <span className="text-stone-400">/</span>
        <span className="text-stone-500 font-medium">{collectionName}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="hidden lg:block">
          <div className="sticky top-32 space-y-8 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            {/* Availability Filter */}
            <div className="space-y-4">
              <h3 className="font-headline text-base lg:text-lg font-bold text-stone-900">Availability</h3>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.availability === 'all'}
                  onChange={() => setFilters({ ...filters, availability: 'all' })}
                  className="w-4 h-4 rounded border-stone-300 text-secondary accent-secondary"
                />
                <span className="text-sm text-stone-700 group-hover:text-secondary transition-colors">All Products ({filteredProducts.length})</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.availability === 'in-stock'}
                  onChange={() => setFilters({ ...filters, availability: 'in-stock' })}
                  className="w-4 h-4 rounded border-stone-300 text-secondary accent-secondary"
                />
                <span className="text-sm text-stone-700 group-hover:text-secondary transition-colors">In stock (0)</span>
              </label>
            </div>

            {/* Price Filter */}
            <div className="space-y-4">
              <h3 className="font-headline text-lg font-bold">Price</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs">₹</span>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => setFilters({ ...filters, priceRange: [parseInt(e.target.value), filters.priceRange[1]] })}
                  className="w-20 px-2 py-1 text-xs border rounded"
                />
                <span>to</span>
                <span className="text-xs">₹</span>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters({ ...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)] })}
                  className="w-20 px-2 py-1 text-xs border rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Header */}
          <div className="flex justify-between items-start lg:items-center mb-12">
            <div>
              <h1 className="font-headline text-3xl lg:text-5xl font-bold mb-2">{collectionName}</h1>
              <p className="text-stone-600 font-body text-sm lg:text-base">{displayedProducts.length} products</p>
            </div>
            <div className="hidden md:block">
              <select className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm font-body bg-white hover:border-secondary transition-colors">
                <option>Best selling</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {displayedProducts.length > 0 ? (
              displayedProducts.map(product => (
                <div key={product.id} className="group flex flex-col">
                  <div className="relative aspect-[4/5] bg-surface-container overflow-hidden mb-4 shadow-md hover:shadow-2xl transition-all duration-700 rounded-lg lg:rounded-xl border border-white/10 group-hover:border-white/20">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      src={product.image}
                    />
                    <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-lg lg:rounded-xl transition-colors duration-700 pointer-events-none shadow-inner"></div>
                  </div>
                  
                  <div className="text-left space-y-2 lg:space-y-1.5 px-0.5 flex-1">
                    <h3 className="font-headline text-sm lg:text-lg font-bold leading-tight truncate text-stone-900 group-hover:text-secondary transition-colors">{product.name}</h3>
                    <p className="font-body text-xs lg:text-sm font-semibold text-secondary pt-0.5">
                      ₹{product.price}
                      <span className="text-stone-400 text-[8px] lg:text-[10px] line-through ml-2 font-normal">₹{product.originalPrice}</span>
                    </p>
                  </div>
                  
                  <button
                     onClick={() => onAddToCart(product)}
                     className="w-full mt-3.5 py-2.5 border border-stone-800 text-stone-900 text-[9px] tracking-[0.2em] font-bold uppercase transition-all duration-300 hover:bg-stone-900 hover:text-stone-100 hover:shadow-lg active:shadow-md active:scale-95 rounded-lg"
                  >
                    Add to Bag
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-stone-600 text-lg">No products found in this collection</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
