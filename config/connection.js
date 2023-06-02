// Import the Sequelize library
const Sequelize = require('sequelize');

// Import the dotenv library and load environment variables from .env file
require('dotenv').config();

let sequelize;

// Check if JAWSDB_URL environment variable exists (for Heroku deployment)
if (process.env.JAWSDB_URL) {
  // Create a Sequelize instance using JAWSDB_URL value
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Create a Sequelize instance using local database configuration
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'mysql'
  });
}

// Export the Sequelize instance
module.exports = sequelize;
