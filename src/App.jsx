import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WatchBuy from './components/WatchBuy'
import Collections from './components/Collections'
import Discovery from './components/Discovery'
import NewArrivals from './components/NewArrivals'
import ComboSection from './components/ComboSection'
import Guarantee from './components/Guarantee'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import CollectionProducts from './components/CollectionProducts'
import DiscoveryPage from './components/DiscoveryPage'
import DiscoveryPopup from './components/DiscoveryPopup'
import PrivacyPolicy from './components/PrivacyPolicy'
import ShippingPolicy from './components/ShippingPolicy'
import RefundPolicy from './components/RefundPolicy'
import TermsOfService from './components/TermsOfService'
import { products as importedProducts, combos as importedCombos, collections as importedCollections } from './data/products'
import { validateAllProducts, validateAllCombos, validateAllCollections } from './utils/productValidator'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedCollection, setSelectedCollection] = useState(null)
  const [showDiscovery, setShowDiscovery] = useState(false)
  const [showDiscoveryPopup, setShowDiscoveryPopup] = useState(true)
  const [currentPage, setCurrentPage] = useState(null) // null, 'privacy', 'shipping', 'refund', 'terms'

  // Validate all data on app load
  useEffect(() => {
    console.log('🚀 L\'Essence Pure - Initializing...')
    const validatedProducts = validateAllProducts(importedProducts)
    const validatedCombos = validateAllCombos(importedCombos)
    const validatedCollections = validateAllCollections(importedCollections)
    console.log('✅ App data validation complete!')
  }, [])

  // Initialize cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ))
    }
  }

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage, selectedCollection, showDiscovery])

  // Show collection products if selected
  if (selectedCollection) {
    return (
      <div className="bg-surface min-h-screen overflow-x-hidden">
        <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
        <main className="pt-24">
          <CollectionProducts
            collectionType={selectedCollection.type}
            collectionName={selectedCollection.name}
            onAddToCart={addToCart}
            onBack={() => setSelectedCollection(null)}
          />
        </main>
        <Footer onNavigatePage={setCurrentPage} />
        {isCartOpen && (
          <CartDrawer
            items={cartItems}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    )
  }

  // Show discovery page if selected
  if (showDiscovery) {
    return (
      <div className="bg-surface min-h-screen overflow-x-hidden">
        <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
        <main className="pt-24">
          <DiscoveryPage
            onAddToCart={addToCart}
            onBack={() => setShowDiscovery(false)}
          />
        </main>
        <Footer onNavigatePage={setCurrentPage} />
        {isCartOpen && (
          <CartDrawer
            items={cartItems}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    )
  }

  // Show policy pages
  if (currentPage === 'privacy') {
    return (
      <div className="bg-surface min-h-screen overflow-x-hidden">
        <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
        <main className="pt-24">
          <PrivacyPolicy onBack={() => setCurrentPage(null)} />
        </main>
        <Footer onNavigatePage={setCurrentPage} />
        {isCartOpen && (
          <CartDrawer
            items={cartItems}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    )
  }

  if (currentPage === 'shipping') {
    return (
      <div className="bg-surface min-h-screen overflow-x-hidden">
        <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
        <main className="pt-24">
          <ShippingPolicy onBack={() => setCurrentPage(null)} />
        </main>
        <Footer onNavigatePage={setCurrentPage} />
        {isCartOpen && (
          <CartDrawer
            items={cartItems}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    )
  }

  if (currentPage === 'refund') {
    return (
      <div className="bg-surface min-h-screen overflow-x-hidden">
        <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
        <main className="pt-24">
          <RefundPolicy onBack={() => setCurrentPage(null)} />
        </main>
        <Footer onNavigatePage={setCurrentPage} />
        {isCartOpen && (
          <CartDrawer
            items={cartItems}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    )
  }

  if (currentPage === 'terms') {
    return (
      <div className="bg-surface min-h-screen overflow-x-hidden">
        <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
        <main className="pt-24">
          <TermsOfService onBack={() => setCurrentPage(null)} />
        </main>
        <Footer onNavigatePage={setCurrentPage} />
        {isCartOpen && (
          <CartDrawer
            items={cartItems}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </div>
    )
  }

  return (
    <div className="bg-surface min-h-screen overflow-x-hidden">
      <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <main className="pt-24">
        <section id="home">
          <Hero />
        </section>
        <section id="watch-buy">
          <WatchBuy onAddToCart={addToCart} />
        </section>
        <section id="collections">
          <Collections onSelectCollection={setSelectedCollection} />
        </section>
        <section id="discovery">
          <Discovery onStartJourney={() => setShowDiscovery(true)} />
        </section>
        <section id="arrivals">
          <NewArrivals onAddToCart={addToCart} />
        </section>
        <section id="combos">
          <ComboSection onAddToCart={addToCart} />
        </section>
        <section id="guarantee">
          <Guarantee />
        </section>
      </main>
      <Footer onNavigatePage={setCurrentPage} />
      {isCartOpen && (
        <CartDrawer
          items={cartItems}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}
      <DiscoveryPopup
        isOpen={showDiscoveryPopup}
        onClose={() => setShowDiscoveryPopup(false)}
        onNavigateToDiscovery={() => {
          setShowDiscoveryPopup(false)
          setShowDiscovery(true)
        }}
      />
    </div>
  )
}

export default App
