import { useState } from 'react'

const menuItems = [
  { label: 'Crazy Deals', href: '#deals' },
  { label: 'New Arrivals', href: '#arrivals' },
  { label: 'Collections', href: '#collections' },
  { label: 'Discovery Set', href: '#discovery' },
  { label: 'Premium Combos', href: '#combos' },
  { label: 'Solid Perfumes', href: '#collections' },
  { label: 'Contact Us', href: '#footer' },
]

const handleNavClick = (href, closeMenu) => {
  closeMenu()
  const element = document.querySelector(href)
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
}

export default function Header({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-[#f9f9f9]/80 dark:bg-stone-950/80 backdrop-blur-xl fixed top-0 w-full z-50 shadow-[0_20px_50px_rgba(26,28,28,0.06)]">
        <div className="flex justify-between items-center px-4 lg:px-8 py-3 lg:py-6 max-w-full mx-auto">
          {/* Desktop Navigation */}
          <div className="flex-1 flex gap-4 items-center font-['Noto_Serif'] text-[10px] tracking-widest uppercase hidden lg:flex flex-wrap">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href, () => {})}
                className={`pb-1 transition-all duration-300 whitespace-nowrap ${
                  item.label === 'Collections'
                    ? 'text-[#C9A24A] border-b border-[#C9A24A]'
                    : 'text-stone-600 dark:text-stone-400 hover:text-[#C9A24A] hover:border-b hover:border-[#C9A24A]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex-1 text-center">
            <a className="text-lg lg:text-2xl font-serif tracking-tighter text-black dark:text-white uppercase font-bold" href="/">L'Essence Pure</a>
          </div>
          
          <div className="flex-1 flex justify-end items-center gap-3 lg:gap-6">
            <button className="scale-105 transition-transform text-stone-600 hover:text-[#C9A24A] hidden md:block">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              onClick={onCartClick}
              className="scale-105 transition-transform text-stone-600 hover:text-[#C9A24A] relative"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-on-secondary text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="scale-105 transition-transform text-stone-600 hover:text-[#C9A24A] lg:hidden"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 top-0" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed right-0 top-0 h-screen w-80 bg-white z-40 overflow-y-auto transition-transform duration-300 flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-4 lg:p-8 border-b">
          <h2 className="font-headline text-lg lg:text-2xl font-bold italic">Essents</h2>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-stone-600 hover:text-black transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex-1 p-4 lg:p-6 space-y-4 lg:space-y-6">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleNavClick(item.href, () => setIsMenuOpen(false))}
                className="font-body text-base text-black hover:text-secondary transition-colors font-medium w-full text-left"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="p-6 border-t flex justify-center items-center gap-6">
          <a href="#" className="text-stone-400 hover:text-black transition-colors" title="Instagram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="#" className="text-stone-400 hover:text-black transition-colors" title="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" className="text-stone-400 hover:text-black transition-colors" title="X (Twitter)">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
