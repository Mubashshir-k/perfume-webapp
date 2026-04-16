const guarantees = [
  {
    id: 1,
    icon: 'support_agent',
    title: '24/7 CUSTOMER\nSUPPORT',
  },
  {
    id: 2,
    icon: 'verified_user',
    title: 'SECURE\nPAYMENTS',
  },
  {
    id: 3,
    icon: 'local_shipping',
    title: 'PAN INDIA\nFREE SHIPPING',
  },
  {
    id: 4,
    icon: 'science',
    title: '100%\nALCOHOL FREE',
  },
]

export default function Guarantee() {
  return (
    <section className="py-12 lg:py-24 px-4 lg:px-24 bg-gradient-to-b from-surface to-surface-container">
      <div className="text-center mb-6 lg:mb-16">
        <h2 className="font-headline text-2xl lg:text-5xl font-bold">Our Guarantee</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {guarantees.map(item => (
          <div key={item.id} className="group flex flex-col items-center text-center space-y-3 lg:space-y-6 transition-all duration-500 hover:scale-105">
            <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-none bg-transparent flex items-center justify-center text-stone-800 transition-all duration-500 border border-stone-300 group-hover:border-secondary group-hover:bg-stone-50 shadow-sm">
              <span className="material-symbols-outlined group-hover:text-secondary transition-colors" style={{ fontSize: '40px', fontVariationSettings: "'FILL' 0, 'wght' 200" }}>{item.icon}</span>
            </div>
            <h4 className="font-label font-bold text-[10px] lg:text-[11px] uppercase tracking-widest leading-tight lg:leading-relaxed whitespace-pre-line group-hover:text-secondary transition-colors">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
