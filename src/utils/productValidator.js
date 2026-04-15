/**
 * Product & Data Validation Utility
 * Ensures all products, combos, and collections display properly
 */

// Define required fields for each data type
const REQUIRED_PRODUCT_FIELDS = [
  "id",
  "name",
  "category",
  "collectionType",
  "price",
  "image",
];
const REQUIRED_COMBO_FIELDS = ["id", "name", "products", "price", "image"];
const REQUIRED_COLLECTION_FIELDS = ["id", "name", "image"];

// Validation colors
const LOG_COLORS = {
  error: "\x1b[31m", // Red
  warning: "\x1b[33m", // Yellow
  success: "\x1b[32m", // Green
  info: "\x1b[36m", // Cyan
  reset: "\x1b[0m",
};

/**
 * Validates a single product and returns safe data with fallbacks
 */
export const validateProduct = (product) => {
  const errors = [];
  const warnings = [];

  // Check required fields
  REQUIRED_PRODUCT_FIELDS.forEach((field) => {
    if (!product[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Validate specific fields
  if (product.id && typeof product.id !== "number") {
    errors.push("ID must be a number");
  }

  if (
    product.category &&
    !["watch-buy", "new-arrivals"].includes(product.category)
  ) {
    warnings.push(
      `Unknown category: ${product.category}. Should be 'watch-buy' or 'new-arrivals'`,
    );
  }

  if (
    product.collectionType &&
    !["for-him", "for-her", "unisex"].includes(product.collectionType)
  ) {
    errors.push(
      `Invalid collectionType: ${product.collectionType}. Must be 'for-him', 'for-her', or 'unisex'`,
    );
  }

  if (product.price && typeof product.price !== "number") {
    errors.push("Price must be a number");
  }

  // Return safe product with fallbacks
  const safeProduct = {
    id: product.id || Math.random(),
    name: product.name || "Unnamed Product",
    category: product.category || "new-arrivals",
    collectionType: product.collectionType || "unisex",
    collection: product.collection || null,
    price: product.price || 0,
    originalPrice: product.originalPrice || product.price || 0,
    discount: product.discount || null,
    image: product.image || "https://via.placeholder.com/400x500?text=No+Image",
    isVideo: product.isVideo || false,
    inStock: product.inStock !== false, // Default to true if not specified
  };

  return { safeProduct, errors, warnings };
};

/**
 * Validates a single combo and returns safe data with fallbacks
 */
export const validateCombo = (combo) => {
  const errors = [];
  const warnings = [];

  REQUIRED_COMBO_FIELDS.forEach((field) => {
    if (!combo[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  if (combo.id && typeof combo.id !== "number") {
    errors.push("ID must be a number");
  }

  if (combo.price && typeof combo.price !== "number") {
    errors.push("Price must be a number");
  }

  if (combo.products && !Array.isArray(combo.products)) {
    errors.push("Products must be an array");
  }

  const safeCombo = {
    id: combo.id || Math.random(),
    name: combo.name || "Unnamed Combo",
    products: Array.isArray(combo.products) ? combo.products : [],
    price: combo.price || 0,
    originalPrice: combo.originalPrice || combo.price || 0,
    image: combo.image || "https://via.placeholder.com/400x500?text=No+Image",
  };

  return { safeCombo, errors, warnings };
};

/**
 * Validates a single collection and returns safe data with fallbacks
 */
export const validateCollection = (collection) => {
  const errors = [];
  const warnings = [];

  REQUIRED_COLLECTION_FIELDS.forEach((field) => {
    if (!collection[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  if (collection.id && typeof collection.id !== "number") {
    errors.push("ID must be a number");
  }

  const safeCollection = {
    id: collection.id || Math.random(),
    name: collection.name || "Unnamed Collection",
    image:
      collection.image || "https://via.placeholder.com/800x600?text=No+Image",
    height: collection.height || "h-[600px]",
    marginTop: collection.marginTop || "",
  };

  return { safeCollection, errors, warnings };
};

/**
 * Validate all products and report issues
 */
export const validateAllProducts = (products) => {
  console.log(
    `${LOG_COLORS.info}🔍 Validating ${products.length} products...${LOG_COLORS.reset}`,
  );

  const validatedProducts = [];
  let hasErrors = false;

  products.forEach((product, index) => {
    const { safeProduct, errors, warnings } = validateProduct(product);
    validatedProducts.push(safeProduct);

    if (errors.length > 0) {
      console.log(
        `${LOG_COLORS.error}❌ Product #${index + 1} (ID: ${product.id}): "${product.name}"${LOG_COLORS.reset}`,
      );
      errors.forEach((err) =>
        console.log(`   ${LOG_COLORS.error}• ${err}${LOG_COLORS.reset}`),
      );
      hasErrors = true;
    }

    if (warnings.length > 0) {
      console.log(
        `${LOG_COLORS.warning}⚠️  Product #${index + 1} (ID: ${product.id}): "${product.name}"${LOG_COLORS.reset}`,
      );
      warnings.forEach((warn) =>
        console.log(`   ${LOG_COLORS.warning}• ${warn}${LOG_COLORS.reset}`),
      );
    }
  });

  if (!hasErrors) {
    console.log(
      `${LOG_COLORS.success}✅ All products validated successfully!${LOG_COLORS.reset}`,
    );
  }

  return validatedProducts;
};

/**
 * Validate all combos and report issues
 */
export const validateAllCombos = (combos) => {
  console.log(
    `${LOG_COLORS.info}🔍 Validating ${combos.length} combos...${LOG_COLORS.reset}`,
  );

  const validatedCombos = [];
  let hasErrors = false;

  combos.forEach((combo, index) => {
    const { safeCombo, errors, warnings } = validateCombo(combo);
    validatedCombos.push(safeCombo);

    if (errors.length > 0) {
      console.log(
        `${LOG_COLORS.error}❌ Combo #${index + 1} (ID: ${combo.id}): "${combo.name}"${LOG_COLORS.reset}`,
      );
      errors.forEach((err) =>
        console.log(`   ${LOG_COLORS.error}• ${err}${LOG_COLORS.reset}`),
      );
      hasErrors = true;
    }

    if (warnings.length > 0) {
      console.log(
        `${LOG_COLORS.warning}⚠️  Combo #${index + 1} (ID: ${combo.id}): "${combo.name}"${LOG_COLORS.reset}`,
      );
      warnings.forEach((warn) =>
        console.log(`   ${LOG_COLORS.warning}• ${warn}${LOG_COLORS.reset}`),
      );
    }
  });

  if (!hasErrors) {
    console.log(
      `${LOG_COLORS.success}✅ All combos validated successfully!${LOG_COLORS.reset}`,
    );
  }

  return validatedCombos;
};

/**
 * Validate all collections and report issues
 */
export const validateAllCollections = (collections) => {
  console.log(
    `${LOG_COLORS.info}🔍 Validating ${collections.length} collections...${LOG_COLORS.reset}`,
  );

  const validatedCollections = [];
  let hasErrors = false;

  collections.forEach((collection, index) => {
    const { safeCollection, errors, warnings } = validateCollection(collection);
    validatedCollections.push(safeCollection);

    if (errors.length > 0) {
      console.log(
        `${LOG_COLORS.error}❌ Collection #${index + 1} (ID: ${collection.id}): "${collection.name}"${LOG_COLORS.reset}`,
      );
      errors.forEach((err) =>
        console.log(`   ${LOG_COLORS.error}• ${err}${LOG_COLORS.reset}`),
      );
      hasErrors = true;
    }

    if (warnings.length > 0) {
      console.log(
        `${LOG_COLORS.warning}⚠️  Collection #${index + 1} (ID: ${collection.id}): "${collection.name}"${LOG_COLORS.reset}`,
      );
      warnings.forEach((warn) =>
        console.log(`   ${LOG_COLORS.warning}• ${warn}${LOG_COLORS.reset}`),
      );
    }
  });

  if (!hasErrors) {
    console.log(
      `${LOG_COLORS.success}✅ All collections validated successfully!${LOG_COLORS.reset}`,
    );
  }

  return validatedCollections;
};
