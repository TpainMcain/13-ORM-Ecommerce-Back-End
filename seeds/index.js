// Import seed functions for different models
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Import the Sequelize instance from the connection configuration
const sequelize = require('../config/connection');

// Define an async function to seed all data
const seedAll = async () => {
  // Sync the database and force recreate the tables
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Call the seedCategories function to seed categories
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // Call the seedProducts function to seed products
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // Call the seedTags function to seed tags
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // Call the seedProductTags function to seed product tags
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  // Exit the process after seeding is complete
  process.exit(0);
};

// Call the seedAll function to start seeding
seedAll();
