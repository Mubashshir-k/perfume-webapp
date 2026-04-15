# L'Essence Pure - Installation & Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - VS Code recommended [Download](https://code.visualstudio.com/)
- **GitHub Account** - For deployment [Sign up](https://github.com/signup)
- **Netlify Account** - For hosting [Sign up](https://app.netlify.com/signup)

---

## 🎯 First-Time Setup

### Step 1: Clone or Extract Project

```bash
# If cloning from GitHub
git clone https://github.com/YOUR_USERNAME/purfume-web.git
cd purfume-web

# If you have the files locally, just open the folder
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- PostCSS
- Autoprefixer

### Step 3: Start Development Server

```bash
npm run dev
```

Output:
```
 VITE v5.4.21  ready in 334 ms
  ➜  Local:   http://localhost:5174/
  ➜  press h + enter to show help
```

✅ **Open http://localhost:5174 in your browser!**

---

## 🛠️ Available Commands

### Development
```bash
npm run dev
```
Starts local development server with hot reload.
- Edit files, save, and see changes instantly
- Includes error messages in console

### Production Build
```bash
npm run build
```
Creates optimized production build in `dist/` folder.
- Minifies and bundles code
- Optimizes images
- Generates source maps

### Preview Production
```bash
npm run preview
```
Previews production build locally.
- Similar to final deployment
- Helps test before deploying

---

## 📁 Project Structure Explained

```
purfume-web/
│
├── src/                          # All your application code
│   ├── components/              # React components
│   │   ├── Header.jsx           # Top navigation
│   │   ├── Hero.jsx             # Hero banner
│   │   ├── WatchBuy.jsx         # Best sellers carousel
│   │   ├── Collections.jsx      # Collection cards
│   │   ├── NewArrivals.jsx      # 4 featured products
│   │   ├── ComboSection.jsx     # Bundle deals
│   │   ├── CartDrawer.jsx       # Shopping cart
│   │   ├── DiscoveryPopup.jsx   # Welcome popup
│   │   ├── DiscoveryPage.jsx    # Full product details
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── PrivacyPolicy.jsx    # Privacy page
│   │   ├── ShippingPolicy.jsx   # Shipping info
│   │   ├── RefundPolicy.jsx     # Returns policy
│   │   └── TermsOfService.jsx   # Terms page
│   │
│   ├── data/
│   │   └── products.js          # 📌 All products, combos, collections
│   │
│   ├── utils/
│   │   └── productValidator.js  # Data validation
│   │
│   ├── App.jsx                  # Main routing logic
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global CSS styles
│
├── public/                       # Static assets
│   ├── collection_for_him.png
│   ├── collection_for_her.png
│   └── collection_unisex.png
│
├── dist/                         # Production build (created by `npm run build`)
│
├── node_modules/                # Dependencies (created by `npm install`)
│
├── index.html                    # HTML template
├── package.json                  # Project config & dependencies
├── package-lock.json            # Dependency version lock
├── vite.config.js               # Vite build config
├── tailwind.config.js           # Tailwind CSS config
├── postcss.config.js            # PostCSS config
├── netlify.toml                 # Netlify deployment config
│
├── README.md                     # Project documentation
├── GETTING_STARTED.md           # This file
├── DEPLOYMENT_GUIDE.md          # How to deploy
└── ADDING_PRODUCTS_GUIDE.md     # How to add/remove products
```

---

## 🔧 Configuration Files

### package.json
```json
{
  "name": "lessence-pure",        // Project name
  "version": "1.0.0",             // Version
  "scripts": {
    "dev": "vite",                // Development command
    "build": "vite build",        // Production build
    "preview": "vite preview"     // Preview production build
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],             // React support
  server: {
    port: 5173,                   // Dev server port
    open: true,                   // Auto-open browser
  },
});
```

### tailwind.config.js
Controls all styling:
- Colors
- Fonts
- Spacing
- Responsive breakpoints

### netlify.toml
Deployment configuration:
- Build command
- Publish directory
- Redirects for SPA routing

---

## 📦 Managing Products

### Quick Add Product

1. Open `src/data/products.js`
2. Find the `products` array
3. Add new product before closing `]`:

```javascript
{
  id: 21,
  name: "New Fragrance",
  category: "new-arrivals",
  collectionType: "for-him",
  isNewArrival: true,
  price: 1299,
  originalPrice: 1899,
  image: "https://image-url.jpg",
  isVideo: false,
  inStock: true,
}
```

4. Refresh browser - Product appears!

### Add Combo

```javascript
{
  id: 104,
  name: "Bundle Name",
  products: ["Product Name 1", "Product Name 2"],  // Exact names!
  price: 2199,
  image: "https://combo-image-url.jpg",
}
```

See [ADDING_PRODUCTS_GUIDE.md](../ADDING_PRODUCTS_GUIDE.md) for details.

---

## 🎨 Styling with Tailwind CSS

All styling uses Tailwind CSS utility classes.

### Example Component
```jsx
// src/components/WatchBuy.jsx
export default function WatchBuy() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-surface to-surface-container">
      <div className="text-center mb-8">
        <h2 className="font-headline text-4xl font-bold">Latest Products</h2>
      </div>
    </section>
  )
}
```

### Common Tailwind Classes
- `py-12` = padding top/bottom
- `lg:py-24` = padding on large screens
- `text-4xl` = large text
- `font-bold` = bold text
- `bg-surface` = background color
- `rounded-lg` = rounded corners
- `hover:bg-secondary` = hover effect

Learn more: [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🔗 Routing (Page Navigation)

The app routes based on state:

```javascript
// src/App.jsx
function App() {
  const [currentPage, setCurrentPage] = useState(null)
  const [selectedCollection, setSelectedCollection] = useState(null)
  const [showDiscovery, setShowDiscovery] = useState(false)

  // Based on state, different components render
  if (selectedCollection) return <CollectionProducts ... />
  if (showDiscovery) return <DiscoveryPage ... />
  if (currentPage === 'privacy') return <PrivacyPolicy ... />
  // ... etc

  // Default: Homepage
  return <HomePage ... />
}
```

**No URL routing** - Uses React state instead of React Router.

---

## 🛒 Cart System

### How Cart Works

1. **Add Product** → `addToCart(product)` function called
2. **Store in State** → `cartItems` state updated
3. **Save to LocalStorage** → Persists across sessions
4. **Display in CartDrawer** → Shows items with quantity

### Cart Data Structure
```javascript
[
  {
    id: 5,
    name: "Silk Peony",
    price: 1299,
    quantity: 2,
    image: "https://..."
  }
]
```

### WhatsApp Checkout
```javascript
// When "Checkout via WhatsApp" clicked:
1. Generate message with all cart items
2. Create WhatsApp link: wa.me/917666885770?text=MESSAGE
3. Open in new window
4. User sends message on WhatsApp
```

---

## 📱 Browser DevTools

### Check Cart in Console
```javascript
// In browser console (F12):
localStorage.getItem('cart')
// Returns: '[{"id":5,"name":"Silk Peony",...}]'
```

### Test Responsive Design
- Press F12 in browser
- Click device icons (top-left of DevTools)
- Select iPhone, iPad, etc. to test mobile

### Debug Components
- React DevTools extension recommended
- Install: [React DevTools Chrome Extension](https://chrome.google.com/webstore)
- Inspect component state and props

---

## 🐛 Common Issues & Solutions

### Issue: "npm: command not found"
**Solution**: 
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart terminal/VS Code
- Run `npm --version` to verify

### Issue: Port 5173 already in use
**Solution**:
- Another app using port 5173
- Vite auto-assigns 5174, 5175, etc.
- Or manually change in `vite.config.js`:
  ```javascript
  server: {
    port: 5175  // Change to different port
  }
  ```

### Issue: "Module not found"
**Solution**:
- Run `npm install` again
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again

### Issue: Images not showing
**Solution**:
- Check image URL is valid and public
- Ensure images in `public/` folder
- Use correct path: `/collection_name.png`

### Issue: Cart empty after refresh
**Solution**:
- Check `localStorage` is enabled
- Clear browser cache (Ctrl+Shift+Del)
- Check browser console for errors

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts server on localhost
- [ ] Homepage loads with all sections
- [ ] Products display with images
- [ ] "Add to Bag" buttons work
- [ ] Cart shows added items
- [ ] Collection filters work
- [ ] WhatsApp message sends properly
- [ ] Mobile view is responsive
- [ ] All policy pages load

---

## 🚀 Next Steps

### To Add More Products
→ See [ADDING_PRODUCTS_GUIDE.md](../ADDING_PRODUCTS_GUIDE.md)

### To Deploy Live
→ See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md)

### To Customize Design
1. Edit colors in `tailwind.config.js`
2. Modify images in `public/` folder
3. Change text in component files
4. Reload to see changes (auto-refresh)

### To Extend Features
- Add new components in `src/components/`
- Add new pages by creating new state in `App.jsx`
- Import and use in JSX
- Tailwind CSS will style automatically

---

## 📚 Learning Resources

- **React**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Vite**: [vitejs.dev](https://vitejs.dev)
- **JavaScript**: [developer.mozilla.org](https://developer.mozilla.org)

---

## 💡 Tips

1. **Save Often** - Ctrl+S regularly
2. **Check Console** - F12 shows all errors
3. **Commit Changes** - Use Git to track changes
4. **Test Mobile** - Always check responsiveness
5. **Clear Cache** - Ctrl+Shift+Del if changes not showing

---

## 📞 Quick Help

| Issue | Command |
|-------|---------|
| Dependencies missing | `npm install` |
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview production | `npm run preview` |
| Clear cache | `npm cache clean --force` |
| Update dependencies | `npm update` |

---

**Ready to build? Start with `npm run dev`!** 🚀

---

**Last Updated**: April 15, 2026
**Status**: ✅ Setup Complete
