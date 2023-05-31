// Import the Category model from '../models'
const { Category } = require('../models');

// Array of category data to be inserted into the table
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Function to seed the Category table by bulk creating records using the categoryData array
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the seedCategories function
module.exports = seedCategories;

