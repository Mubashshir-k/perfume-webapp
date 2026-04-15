/**
 * COPY-PASTE TEMPLATES FOR ADDING NEW ITEMS
 * Replace the bracketed values [like this] with your actual data
 * Never change the field names or structure!
 */

// ============================================================
// 🧴 PRODUCT TEMPLATE - Copy this for new products
// ============================================================

/*
To add a new product:
1. Copy the template below
2. Fill in all values (replace everything in [brackets])
3. Paste into the products array in src/data/products.js
4. Check browser console (F12) for validation messages

REQUIRED FIELDS:
- id: Unique number (check highest existing ID, use next number)
- name: Product name (string)
- category: "watch-buy" or "new-arrivals"
- collectionType: "for-him", "for-her", or "unisex"
- price: Current price in rupees (NUMBER, not string)
- image: Valid image URL (https://...)

OPTIONAL FIELDS:
- collection: Series/type name
- originalPrice: Price before discount
- discount: "30%" format
- isVideo: true if image is video thumbnail
- inStock: true/false
*/

const NEW_PRODUCT_TEMPLATE = {
  id: [8], // Change to next available number
  name: "[Product Name Here]", // Example: "Oud Paradise"
  category: "[watch-buy OR new-arrivals]", // Choose one
  collectionType: "[for-him OR for-her OR unisex]", // Which collection
  collection: "[Optional Series Name]", // Example: "Luxury Series"
  price: [1899], // Number - NO ₹ symbol
  originalPrice: [2499], // (Optional) Original price
  discount: "[24%]", // (Optional) Discount percentage
  image: "[https://your-image-url.jpg]", // Valid image URL
  isVideo: [false], // (Optional) true if video
  inStock: [true], // (Optional) defaults to true
};

// ============================================================
// 🎁 COMBO TEMPLATE - Copy this for new combo sets
// ============================================================

/*
To add a new combo:
1. Copy the template below
2. Fill in all values (replace [brackets])
3. Paste into the combos array in src/data/products.js
4. Product names MUST EXACTLY match existing products!

REQUIRED FIELDS:
- id: Unique number 100+ (check highest existing combo ID)
- name: Combo name (string)
- products: Array of product names (MUST match exactly)
- price: Combo price in rupees (NUMBER, not string)
- image: Valid image URL

OPTIONAL:
- originalPrice: Original combo price before discount
*/

const NEW_COMBO_TEMPLATE = {
  id: [104], // Use 100+ range
  name: "[Combo Name Here]", // Example: "Luxury Trio"
  products: [
    // Use EXACT product names
    "[Product Name 1]", // Example: "Golden Amber"
    "[Product Name 2]", // Example: "Cedar Mist"
    // Add more products if needed
  ],
  price: [3499], // Number - NO ₹ symbol
  originalPrice: [4299], // (Optional) Original price
  image: "[https://combo-image-url.jpg]", // Combo showcase image
};

// ============================================================
// 🏷️ COLLECTION TEMPLATE - For new collection categories
// ============================================================

/*
To add a new collection (RARELY NEEDED):
1. Usually only 3 collections exist: For Him, Unisex, For Her
2. Only add if creating completely new category
3. Copy template and fill values
4. Use ID 200+ range

REQUIRED:
- id: Unique number 200+ 
- name: Collection name
- image: Banner/hero image URL
*/

const NEW_COLLECTION_TEMPLATE = {
  id: [204], // Use 200+ range
  name: "[Collection Name]", // Example: "For Teens"
  image: "[https://collection-banner.jpg]", // Large banner image
  height: "[h-[600px]]", // (Optional) h-[600px], [700px], or [800px]
  marginTop: "[md:mt-12]", // (Optional) Tailwind margin class
};

// ============================================================
// 📝 FILLED EXAMPLE - See how a complete addition looks
// ============================================================

/*
This is what a completed entry looks like with real values:
*/

const EXAMPLE_PRODUCT = {
  id: 8,
  name: "Oud Paradise",
  category: "new-arrivals",
  collectionType: "for-him",
  collection: "Oriental Series",
  price: 2299,
  originalPrice: 3299,
  discount: "30%",
  image:
    "https://lh3.googleusercontent.com/example-oud-paradise-image-url-here",
  isVideo: false,
  inStock: true,
};

const EXAMPLE_COMBO = {
  id: 104,
  name: "Oud Luxury Bundle",
  products: ["Oud Paradise", "Obsidian Oud", "Cedar Mist"],
  price: 5999,
  originalPrice: 7697,
  image: "https://lh3.googleusercontent.com/example-oud-bundle-image-url-here",
};

// ============================================================
// ✅ VALIDATION CHECKLIST - Before saving products.js
// ============================================================

/*
□ All IDs are unique (no duplicates)
□ Product IDs are 1-99 range
□ Combo IDs are 100-199 range
□ Collection IDs are 200+ range
□ All REQUIRED fields are filled
□ All prices are NUMBERS (not "1599", just 1599)
□ All collectionTypes are exact: "for-him", "for-her", or "unisex"
□ All categories are exact: "watch-buy" or "new-arrivals"
□ All image URLs are valid (start with https://)
□ Combo product names EXACTLY match existing product names
□ No trailing commas on last items
□ No special characters in JSON

Then refresh browser and check F12 console:
✅ Look for green success messages
⚠️  Fix any yellow warnings
❌ Fix any red errors (product won't display!)
*/

// ============================================================
// 🔧 WHERE TO PASTE THESE
// ============================================================

/*
FILE: src/data/products.js

1. NEW PRODUCT? → Paste in products array (within the brackets [ ... ])
2. NEW COMBO? → Paste in combos array (within the brackets [ ... ])
3. NEW COLLECTION? → Paste in collections array (within the brackets [ ... ])

STRUCTURE in products.js:
-----------------------
export const products = [
  { existing product 1 },
  { existing product 2 },
  // ← PASTE YOUR NEW PRODUCT HERE
]

export const combos = [
  { existing combo 1 },
  { existing combo 2 },
  // ← PASTE YOUR NEW COMBO HERE
]

export const collections = [
  { existing collection 1 },
  // ← PASTE YOUR NEW COLLECTION HERE (rarely needed)
]
*/

// ============================================================
// 🖼️ IMAGE URL SOURCES
// ============================================================

/*
Where to get image URLs:

1. GOOGLE PHOTOS (Easiest)
   - Upload image to Google Photos
   - Right-click → Copy link
   - Opens in browser, grab the /d/ ID
   - Format: https://lh3.googleusercontent.com/...

2. IMGUR
   - Upload at imgur.com
   - Get "Direct Link" from right-click menu
   - Format: https://i.imgur.com/xxxxx.jpg

3. FIREBASE STORAGE
   - Upload to Firebase
   - Get download URL
   - Format: https://firebaseapp.com/...

4. CLOUDINARY
   - Upload at cloudinary.com
   - Get upload URL
   - Format: https://res.cloudinary.com/...

TIPS:
- Always use HTTPS (not HTTP)
- Test URL in browser to confirm image loads
- Use square images for products (400x500 works well)
- Use horizontal for combos (800x600 or wider)
*/

export default NEW_PRODUCT_TEMPLATE;
