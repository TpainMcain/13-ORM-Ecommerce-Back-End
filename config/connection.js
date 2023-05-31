// Load environment variables from a .env file
require('dotenv').config();

// Import the Sequelize library
const Sequelize = require('sequelize');

// Create a Sequelize instance based on the environment configuration
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Use JawsDB URL if available (for deployment)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost', // Local database host
      dialect: 'mysql', // Database type is MySQL
      dialectOptions: {
        decimalNumbers: true, // Enable support for decimal numbers
      },
    });

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;

