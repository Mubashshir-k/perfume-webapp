const WHATSAPP_NUMBER = '917666885770' // +91 7666885770

export default function CartDrawer({ items, isOpen, onClose, onRemove, onUpdateQuantity }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const generateWhatsAppMessage = () => {
    let message = '*L\'ESSENCE PURE ORDER*\n\n'
    
    items.forEach((item, index) => {
      const itemTotal = item.price * item.quantity
      message += `${index + 1}. *${item.name}*\n`
      message += `   Quantity: ${item.quantity} x Rs. ${item.price} = Rs. ${itemTotal}\n`
      // Add simple image indicator without URL
      if (item.image) {
        message += `   [Product Image Available]\n`
      }
      message += `\n`
    })

    message += `==================\n`
    message += `*TOTAL: Rs. ${total}*\n\n`
    message += `Please confirm my order. Thank you!`

    return encodeURIComponent(message)
  }

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-surface shadow-2xl z-50 overflow-y-auto transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-surface-variant px-6 py-4 flex justify-between items-center">
          <h2 className="font-headline text-2xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-on-surface hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-6xl text-surface-variant mb-4 block">shopping_bag</span>
              <p className="text-on-surface/60 font-body">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-6 w-full px-6 py-3.5 bg-secondary hover:bg-secondary/90 text-on-secondary rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-surface-variant last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-headline text-sm font-bold">{item.name}</h3>
                    <p className="text-sm text-secondary font-bold mt-1">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-outline-variant rounded text-xs hover:bg-surface-container transition-colors"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-outline-variant rounded text-xs hover:bg-surface-container transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="ml-auto text-error hover:text-error/80 transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="sticky bottom-0 bg-surface border-t border-surface-variant px-6 py-6 space-y-4">
            <div className="flex justify-between items-center font-headline text-lg font-bold">
              <span>Total:</span>
              <span className="text-secondary">₹{total}</span>
            </div>
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3.5 bg-secondary hover:bg-secondary/90 text-on-secondary rounded-full text-sm tracking-widest font-bold uppercase transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Checkout via WhatsApp
            </button>
            <button
              onClick={onClose}
              className="w-full py-3.5 border-2 border-secondary text-secondary rounded-full text-sm tracking-widest font-bold uppercase transition-all duration-300 hover:bg-secondary hover:text-on-secondary hover:shadow-lg active:scale-95"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
