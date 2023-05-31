// Import necessary modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the Sequelize instance from the connection configuration
const sequelize = require('../config/connection');

// Define the ProductTag model by extending the Sequelize Model class
class ProductTag extends Model {}

// Initialize the ProductTag model with the table's attributes and options
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize, // Pass the Sequelize instance
    timestamps: false, // Disable timestamp fields (created_at and updated_at)
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use underscored naming convention for attributes
    modelName: 'product_tag', // Set the model name
  }
);

// Export the ProductTag model
module.exports = ProductTag;
