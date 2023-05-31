// Import the necessary modules
const express = require('express');
const routes = require('./routes');
// Import the sequelize connection (not shown in the provided code)

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3001; // Set the port number

// Middleware to parse request bodies as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the defined routes for handling incoming requests
app.use(routes);

// Sync sequelize models to the database, then start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
