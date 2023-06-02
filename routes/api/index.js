// Import the necessary modules
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use the categoryRoutes middleware for routes starting with '/categories'
router.use('/categories', categoryRoutes);

// Use the productRoutes middleware for routes starting with '/products'
router.use('/products', productRoutes);

// Use the tagRoutes middleware for routes starting with '/tags'
router.use('/tags', tagRoutes);

// Export the router
module.exports = router;

