# L'Essence Pure - Premium Fragrances

🌹 **Welcome to L'Essence Pure** - Your destination for premium fragrances defining contemporary elegance and timeless appeal.

---

## 📱 Live Website

🌐 **[L'Essence Pure - Coming Soon](#)** (Deploy on Netlify)

---

## ✨ Features

### 🛍️ Shopping Experience
- **Watch & Buy Carousel** - Best sellers at the top
- **Latest Arrivals** - 4 carefully curated new products
- **Collections** - For Him, For Her, Unisex categories
- **Premium Combos** - Bundle deals with special pricing
- **Discovery Set** - Animated welcome popup

### 🛒 Cart & Checkout
- **Real-time Cart** - Add/remove products instantly
- **WhatsApp Integration** - Direct order via +91 7666885770
- **LocalStorage** - Cart persists across sessions
- **Responsive Design** - Works on all devices

### 📜 Legal & Information
- **Privacy Policy** - Complete data handling information
- **Shipping Policy** - Delivery times and procedures
- **Refund Policy** - Returns and refund procedures
- **Terms of Service** - Legal agreement and policies

### 🎨 Design
- **Luxury Aesthetic** - Premium color scheme and typography
- **Responsive** - Mobile, tablet, and desktop optimized
- **Fast Performance** - Optimized images and lazy loading
- **Accessible** - WCAG compliant navigation

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5174 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

---

## 📦 Project Structure

```
purfume-web/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── WatchBuy.jsx
│   │   ├── Collections.jsx
│   │   ├── NewArrivals.jsx
│   │   ├── ComboSection.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── DiscoveryPopup.jsx
│   │   ├── DiscoveryPage.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── ShippingPolicy.jsx
│   │   ├── RefundPolicy.jsx
│   │   └── TermsOfService.jsx
│   ├── data/
│   │   └── products.js      # All products, combos, collections
│   ├── utils/
│   │   └── productValidator.js
│   ├── App.jsx              # Main routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Images and assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── netlify.toml             # Netlify deployment config
├── tailwind.config.js       # Tailwind CSS
├── postcss.config.js        # PostCSS
├── README.md                # This file
├── DEPLOYMENT_GUIDE.md      # Deployment instructions
├── GETTING_STARTED.md       # Setup guide
├── ADDING_PRODUCTS_GUIDE.md # How to add/remove products
└── .gitignore               # Git ignore rules
```

---

## 📊 Data Structure

### Products (20 Total)
- **Watch & Buy**: 3 products (best sellers)
- **Latest Arrivals**: 4 featured new products
- **Collections**: Divided by type (For Him, For Her, Unisex)
- **All products**: Managed in `src/data/products.js`

### Product Object
```javascript
{
  id: 9,
  name: "Mahogany Woods",
  category: "new-arrivals",
  collectionType: "for-him",
  isNewArrival: true,           // Shows in Latest Arrivals
  price: 1449,
  originalPrice: 2099,
  discount: "31%",
  image: "https://...",
  isVideo: false,
  inStock: true,
  collection: "Luxury Series"   // Optional: Series name
}
```

---

## 🛒 WhatsApp Integration

### Configuration
- **WhatsApp Number**: +91 7666885770 (in `src/components/CartDrawer.jsx`)
- **Message Format**: Clean text with product details
- **How It Works**: Customer clicks "Checkout via WhatsApp" → Message sent to your business number

### To Update Number
Edit `src/components/CartDrawer.jsx`:
```javascript
const WHATSAPP_NUMBER = '917666885770'  // Change this
```

---

## 🔧 Adding Products

To add a new product:

1. **Open** `src/data/products.js`
2. **Add product object** before the closing bracket:

```javascript
{
  id: 21,
  name: "Your Product Name",
  category: "new-arrivals",
  collectionType: "for-him",        // "for-him", "for-her", or "unisex"
  isNewArrival: true,               // true = shows in Latest Arrivals
  price: 1299,
  originalPrice: 1899,
  image: "https://image-url.jpg",
  isVideo: false,
  inStock: true,
  collection: "Series Name"
}
```

3. **Refresh page** - Product appears automatically!

See [ADDING_PRODUCTS_GUIDE.md](ADDING_PRODUCTS_GUIDE.md) for complete details.

---

## 📁 Project Structure Detail

```
src/
├── components/          # React components
│   ├── Collections.jsx
│   ├── Offers.jsx
│   ├── Discovery.jsx
│   ├── NewArrivals.jsx
│   ├── ComboSection.jsx
│   ├── Guarantee.jsx
│   ├── Footer.jsx
│   └── CartDrawer.jsx
├── data/
│   └── products.js      # Product & combo data
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles

📦 Configuration Files
├── package.json         # Dependencies & scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS settings
└── postcss.config.js    # PostCSS configuration
```

## 🛒 Cart System

### How It Works

1. **Add to Cart**: Click "Add to Bag" on any product
2. **View Cart**: Click the shopping bag icon in header
3. **Manage Items**: 
   - Increase/decrease quantity
   - Remove items
4. **Checkout**: Opens WhatsApp with pre-filled order message

### Cart Persistence

Cart data is automatically saved to browser's localStorage:
- Survives page refreshes
- Cleared when user clears browser data
- View location: DevTools → Application → Local Storage

## � WhatsApp Checkout Configuration

### Update Your WhatsApp Number

Edit [src/components/CartDrawer.jsx](src/components/CartDrawer.jsx):

```javascript
const WHATSAPP_NUMBER = '919876543210' // ← Change this
```

Format: Country code without `+` (e.g., India = 91)

**Example WhatsApp Numbers:**
- India: `919876543210`
- USA: `12125551111`
- UK: `442071838750`

### Message Format

Generated message includes:
- Product names
- Quantities
- Individual prices
- Total amount
- Professional format for easy order processing

## 📦 Managing Products

### Edit Products

All product data is in [src/data/products.js](src/data/products.js)

#### Adding a New Product

```javascript
{
  id: 8,                    // Unique ID
  name: "Your Fragrance",   // Product name
  category: "new-arrivals", // or "watch-buy"
  collection: "Series Name", // Collection name
  price: 1299,              // Current price
  originalPrice: 1899,      // Original price (for discount)
  image: "https://...",     // Product image URL
}
```

#### Available Categories
- `watch-buy` - Featured watch & buy section
- `new-arrivals` - Latest arrivals grid

### Update Images

Replace image URLs in `products.js`:

```javascript
image: "https://new-image-url.com/perfume.jpg"
```

**Image Requirements:**
- Aspect ratio: 3:4 for watch-buy, 1:1 for new arrivals
- Minimum width: 400px
- Format: JPG, PNG, WebP

### Manage Collections

Edit collections array in [src/data/products.js](src/data/products.js):

```javascript
{
  id: 204,
  name: "Collection Name",
  image: "https://...",
  height: "h-[600px]",      // Customize height
  marginTop: "md:mt-12",    // Customize spacing
}
```

### Combo Bundles

Add combos in `combos` array:

```javascript
{
  id: 101,
  name: "Bundle Name",
  products: ["Product 1", "Product 2"],
  price: 1999,
  image: "https://...",
}
```

## 🎨 Customize Styling

### Tailwind Colors

Colors are defined in [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  secondary: "#795900",     // Gold/tan
  "on-secondary": "#ffffff",
  // ... more colors
}
```

### Update Brand Color

Primary brand colors:
- **Secondary (Gold)**: `#795900` 
- **Gold Accent**: `#C9A24A`

Change in:
1. `tailwind.config.js` (color variables)
2. `src/components/Header.jsx` (gold text)
3. Component styles as needed

### Fonts

Fonts are loaded in [index.html](index.html):

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@300;400;600;700&family=Manrope..." />
```

Configured in [tailwind.config.js](tailwind.config.js):

```javascript
fontFamily: {
  headline: ["Noto Serif"],
  body: ["Manrope"],
  label: ["Manrope"],
}
```

## 🎁 Manage Offers

### Update Offer Cards

Edit [src/components/Offers.jsx](src/components/Offers.jsx):

```javascript
<h3 className="font-headline text-4xl font-bold">Buy 3 @ ₹999</h3>
<p>Your offer description...</p>
```

### Hero Section Promotion

Edit [src/components/Hero.jsx](src/components/Hero.jsx):

```javascript
<h1>BUY ANY 4 AT ₹1299</h1>
```

### Announcement Banner

Edit [src/components/AnnouncementBar.jsx](src/components/AnnouncementBar.jsx):

```javascript
<span>Your announcement text...</span>
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm`: 640px
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)

Add responsive classes:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# Update vite.config.js
export default defineConfig({
  base: '/repository-name/',
  ...
})

# Build and deploy
npm run build
# Commit dist folder to gh-pages branch
```

### Manual Deployment

```bash
# Build production files
npm run build

# Upload 'dist' folder to your hosting
# (Vercel, Netlify, AWS S3, etc.)
```

## 🔧 Environment Variables

Create `.env` file if needed:

```env
# Example for future backend integration
VITE_WHATSAPP_NUMBER=919876543210
VITE_API_URL=https://api.example.com
```

Currently, the app runs entirely on the client with no backend.

## 🎨 Design System

### Color Palette
- **Primary**: `#5e5e5e` (Gray)
- **Secondary**: `#795900` (Gold/Brown)
- **Surface**: `#f9f9f9` (Off-white)
- **On-surface**: `#1a1c1c` (Dark text)

### Typography Hierarchy

**Headlines**: Noto Serif
- H1: 56px (large) / 36px (mobile)
- H2: 36px
- H3: 24px

**Body**: Manrope
- Default: 14px
- Small: 12px

### Spacing
Uses Tailwind default scale (4px base):
- `px-8`: 32px horizontal (mobile)
- `lg:px-24`: 96px horizontal (desktop)
- `py-24`: 96px vertical

### No-Border Design
- Uses layered backgrounds instead of borders
- Uses subtle shadows for depth
- Elevation via `bg-surface-container-*` colors

## 🐛 Troubleshooting

### Cart Not Persisting
Check browser localStorage:
1. Open DevTools (F12)
2. Application → Local Storage
3. Look for `cart` key
4. Clear if corrupted: `localStorage.clear()`

### Images Not Loading
- Verify image URL is public/accessible
- Check image format (JPG, PNG, WebP)
- Ensure correct aspect ratios

### WhatsApp Not Opening
- Verify phone number format (no + sign)
- Include country code (e.g., 91 for India)
- Test number in WhatsApp first

### Styles Not Applying
- Run `npm run dev` to rebuild
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind class names are exact

## 📚 Dependencies

- **react**: UI library
- **react-dom**: React rendering
- **tailwindcss**: Utility CSS framework
- **vite**: Build tool & dev server
- **postcss**: CSS processing
- **autoprefixer**: CSS vendor prefixes

## 📝 License

Built for L'Essence Pure © 2024

## 🤝 Support

For customization questions:
1. Check this README
2. Review component comments
3. Explore Tailwind docs: https://tailwindcss.com
4. Vite docs: https://vitejs.dev

## 🚀 Future Enhancements

Potential features to add:
- User authentication
- Wishlist functionality
- Product reviews/ratings
- Advanced filtering
- Payment integration (Stripe, Razorpay)
- Inventory management
- Email notifications
- Newsletter signup

---

**Ready to launch?** 
1. Update WhatsApp number
2. Customize products
3. Deploy to your hosting
4. Share with customers! 🎉
#   p e r f u m e - w e b a p p  
 