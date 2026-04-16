import { useState } from 'react'

export default function Footer({ onNavigatePage }) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactForm(prev => ({ ...prev, [name]: value }))
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    // In development (localhost), show success message without calling function
    // Production will use actual Netlify Functions when deployed
    if (import.meta.env.DEV || window.location.hostname === 'localhost') {
      setTimeout(() => {
        console.log('Development Mode - Form Data:', contactForm)
        alert('Thank you for reaching out! Your message has been received. We will get back to you shortly.')
        setContactForm({ name: '', email: '', message: '' })
        setIsLoading(false)
      }, 800)
      return
    }

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      })

      const data = await response.json()

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully. We will get back to you shortly.')
        setContactForm({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer id="footer" className="bg-gradient-to-b from-black via-stone-950 to-black/95 w-full py-12 lg:py-20 px-4 md:px-12 text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Contact Us Column */}
          <div className="space-y-4 hover:transform hover:translate-y-1 transition-transform duration-300">
            <h3 className="font-headline text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Contact Us</h3>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Have a question? We'd love to hear from you.
            </p>
            <form className="space-y-6 pt-2" onSubmit={handleContactSubmit}>
              <input
                className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-2 text-xs lg:text-sm font-body text-white placeholder-white/50 focus:outline-none focus:border-secondary focus:ring-0 transition-all rounded-none"
                placeholder="Name"
                name="name"
                value={contactForm.name}
                onChange={handleContactChange}
                type="text"
                required
              />
              <input
                className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-2 text-xs lg:text-sm font-body text-white placeholder-white/50 focus:outline-none focus:border-secondary focus:ring-0 transition-all rounded-none"
                placeholder="Email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                type="email"
                required
              />
              <textarea
                className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-2 text-xs lg:text-sm font-body text-white placeholder-white/50 focus:outline-none focus:border-secondary focus:ring-0 transition-all resize-none h-10 rounded-none"
                placeholder="Message"
                name="message"
                value={contactForm.message}
                onChange={handleContactChange}
                required
              ></textarea>
              <button type="submit" disabled={isLoading} className="w-full mt-4 py-3 border border-stone-800 text-stone-900 text-[9px] lg:text-[10px] tracking-[0.2em] font-bold uppercase transition-all hover:bg-stone-900 hover:text-stone-100 hover:shadow-lg active:shadow-md active:scale-95 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Quick links Column */}
          <div className="space-y-4 hover:transform hover:translate-y-1 transition-transform duration-300">
            <h4 className="font-body text-xs tracking-widest uppercase font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Quick links
            </h4>
            <ul className="space-y-3">
              <li>
                <a className="font-body text-xs text-white/70 hover:text-secondary transition-colors cursor-pointer duration-300 hover:translate-x-1 inline-block" onClick={() => onNavigatePage?.('privacy')}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="font-body text-xs text-white/70 hover:text-secondary transition-colors cursor-pointer duration-300 hover:translate-x-1 inline-block" onClick={() => onNavigatePage?.('refund')}>
                  Refund Policy
                </a>
              </li>
              <li>
                <a className="font-body text-xs text-white/70 hover:text-secondary transition-colors cursor-pointer duration-300 hover:translate-x-1 inline-block" onClick={() => onNavigatePage?.('shipping')}>
                  Shipping Policy
                </a>
              </li>
              <li>
                <a className="font-body text-xs text-white/70 hover:text-secondary transition-colors cursor-pointer duration-300 hover:translate-x-1 inline-block" onClick={() => onNavigatePage?.('terms')}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-4 hover:transform hover:translate-y-1 transition-transform duration-300">
            <h4 className="font-body text-xs tracking-widest uppercase font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              About
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 group cursor-pointer">
                <span className="material-symbols-outlined text-sm flex-shrink-0 group-hover:text-secondary transition-colors">location_on</span>
                <p className="font-body text-xs text-white/70 group-hover:text-white transition-colors">Mapp Media, Shop No B1, La Foyer, Nibm road, undri, 411060 Pune Maharashtra, India</p>
              </div>
              <div className="flex gap-3 group cursor-pointer">
                <span className="material-symbols-outlined text-sm flex-shrink-0 group-hover:text-secondary transition-colors">mail</span>
                <a href="mailto:Support@essscents.in" className="font-body text-xs text-white/70 hover:text-secondary transition-colors">Support@essscents.in</a>
              </div>
              <div className="flex gap-3 group cursor-pointer">
                <span className="material-symbols-outlined text-sm flex-shrink-0 group-hover:text-secondary transition-colors">phone</span>
                <a href="tel:919021644307" className="font-body text-xs text-white/70 hover:text-secondary transition-colors">91 90216 44307</a>
              </div>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="space-y-4 hover:transform hover:translate-y-1 transition-transform duration-300">
            <h4 className="font-body text-xs tracking-widest uppercase font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Follow Us
            </h4>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-black transition-all duration-300 hover:scale-110" title="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-black transition-all duration-300 hover:scale-110" title="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-black transition-all duration-300 hover:scale-110" title="X (Twitter)">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col justify-center items-center gap-4">
          <p className="font-body text-xs text-white/50 text-center">
            © 2024 L'Essence Pure. All rights reserved. Crafted for the Sensory Curator.
          </p>
        </div>
      </div>
    </footer>
  )
}
