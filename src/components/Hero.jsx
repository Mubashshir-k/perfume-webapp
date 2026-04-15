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
              className="w-full h-full object-cover opacity-70 hover:opacity-80 transition-opacity"
              src={image}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-5"></div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-none ${idx === currentSlide ? 'bg-white w-8 h-1' : 'bg-white/30 w-4 h-1 hover:bg-white/60'}`}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-2xl space-y-8 mt-12 lg:mt-0">
        <div className="space-y-4 lg:space-y-6">
          <span className="font-body text-[10px] lg:text-xs tracking-[0.4em] uppercase text-stone-300">Exclusive Seasonal Curations</span>
          <h1 className="font-headline text-4xl lg:text-7xl font-bold leading-tight tracking-wide text-white drop-shadow-2xl">
            BUY ANY 4 <br />
            <span className="text-secondary font-medium tracking-normal text-3xl lg:text-6xl">@ ₹1299</span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button onClick={() => document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-3.5 bg-stone-100 text-stone-900 rounded-none font-body text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-stone-300">
            Shop Now
          </button>
          <button onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-3.5 bg-transparent border border-white/50 text-white rounded-none font-body text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black transition-all duration-300">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  )
}
