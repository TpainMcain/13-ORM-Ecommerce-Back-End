// Import necessary modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the Sequelize instance from the connection configuration
const sequelize = require('../config/connection.js');

// Define the Category model by extending the Sequelize Model class
class Category extends Model {}

// Initialize the Category model with the table's attributes and options
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize, // Pass the Sequelize instance
    timestamps: false, // Disable timestamp fields (created_at and updated_at)
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use underscored naming convention for attributes
    modelName: 'category', // Set the model name
  }
);

// Export the Category model
module.exports = Category;
