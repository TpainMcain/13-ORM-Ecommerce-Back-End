// Import the necessary modules
const router = require('express').Router();
const apiRoutes = require('./api');

// Define a route for '/api' and attach the apiRoutes middleware
router.use('/api', apiRoutes);

// Default route for any other route that doesn't match
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

// Export the router
module.exports = router;
