import { useEffect } from 'react'

export default function DiscoveryPopup({ isOpen, onClose, onNavigateToDiscovery }) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"></div>

      {/* Modal Content */}
      <div 
        className="relative rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slideUpScale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-colors animate-fadeInDown"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image - Clickable */}
        <div 
          onClick={onNavigateToDiscovery}
          className="relative cursor-pointer group overflow-hidden bg-stone-100 animate-fadeIn"
          style={{animationDelay: '0.2s'}}
        >
          <img
            alt="The Discovery Set"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            src="/discovery_set.png"
          />
          
          {/* Decorative Border */}
          <div className="absolute inset-0 pointer-events-none border-4 border-secondary/30 rounded-lg" style={{margin: '-8px'}}></div>
          
          {/* Top Overlay - Exclusive Badge */}
          <div className="absolute top-6 left-6 z-10 animate-slideInLeft">
            <div className="inline-block px-4 py-2 bg-secondary text-on-secondary rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
              Exclusive
            </div>
          </div>

          {/* Dark Overlay - Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Bottom Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            {/* Hidden on default, shown on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-2">
              <p className="font-label text-xs tracking-[0.4em] uppercase mb-2 text-secondary animate-slideInUp">
                Limited Time Offer
              </p>
              <h2 className="font-headline text-3xl font-bold mb-3 animate-slideInUp" style={{animationDelay: '0.1s'}}>
                The Discovery Set
              </h2>
              <div className="flex items-center gap-4 mb-3 animate-slideInUp" style={{animationDelay: '0.2s'}}>
                <span className="text-2xl font-bold">₹999</span>
                <span className="text-lg line-through text-white/60">₹1,999</span>
              </div>
              <p className="font-body text-sm text-white/90 mb-4 animate-slideInUp" style={{animationDelay: '0.3s'}}>
                Six signature 2ml samples • Perfect for exploring
              </p>
              <span className="inline-block px-4 py-2 bg-white text-stone-900 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-secondary hover:text-on-secondary transition-all duration-300 animate-slideInUp" style={{animationDelay: '0.4s'}}>
                Click to View Details →
              </span>
            </div>

            {/* Default View - Just Title */}
            <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 animate-slideInUp" style={{animationDelay: '0.1s'}}>
              <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary font-bold">
                Click to Explore
              </span>
              <h2 className="font-headline text-4xl font-bold text-white mt-2">
                The Discovery Set
              </h2>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUpScale {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideUpScale {
          animation: slideUpScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out 0.2s both;
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.5s ease-out 0.2s both;
        }
      `}</style>
    </div>
  )
}
