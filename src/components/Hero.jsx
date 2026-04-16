import { useState, useEffect } from 'react'

const heroImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDN5k-UwDW9nVlwIqGKBAs0XJEk_N8zyHintuM7f8SODCAYJpVdeNYuvLvg8UHEQbbK7vUPYHIolG_Ja2-Ln0Yf5XYwMcytFFpC0ZNBY2YgR5q0hSOxc9jWnUpaGLoRRJ98bR4ro8ApXtHMU8XoRk9lznEzDCrJ8i7KPrG-ps8Ojj15vNEQbtJQAiD7UnGG_CW9Na8xCYITOP1ZOkO0El57SEcic8lkpVWZ6z1ulkXCT4ztjvwiGSOxBGlRyEdEzgoJ-yfv8gG_LZM",
  "/discovery_set.png"
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[921px] flex items-center px-4 lg:px-24 overflow-hidden bg-gradient-to-br from-surface-container-low via-surface to-surface-container">
      <div className="absolute inset-0 z-0 flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {heroImages.map((image, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0">
            <img
              alt={`Luxury perfume ${idx + 1}`}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              src={image}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-5"></div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full ${idx === currentSlide ? 'bg-white w-8 h-2' : 'bg-white/40 w-2 h-2 hover:bg-white/70'}`}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-2xl space-y-8 mt-12 lg:mt-0 animate-fade-in">
        <div className="space-y-2 lg:space-y-6">
          <span className="font-body text-[9px] lg:text-xs tracking-[0.4em] uppercase text-stone-300/80 block">
            ✨ Exclusive Seasonal Curations
          </span>
          <h1 className="font-headline text-3xl lg:text-7xl font-bold leading-tight tracking-wide text-white drop-shadow-2xl animate-slide-up">
            BUY ANY 4 <br />
            <span className="bg-gradient-to-r from-secondary via-secondary to-yellow-400 bg-clip-text text-transparent font-medium tracking-normal text-2xl lg:text-6xl">@ ₹1299</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button onClick={() => document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 bg-gradient-to-r from-stone-100 to-stone-200 text-stone-900 rounded-xl font-body text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:shadow-xl hover:from-white hover:to-stone-100 hover:scale-105 active:scale-95">
            Shop Now
          </button>
          <button onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/50 text-white rounded-xl font-body text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white/20 hover:border-white transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  )
}
