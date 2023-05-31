// Import necessary modules from Sequelize
const { Model, DataTypes } = require('sequelize');
// Import the Sequelize instance from the connection configuration
const sequelize = require('../config/connection');

// Define the Product model by extending the Sequelize Model class
class Product extends Model {}

// Initialize the Product model with the table's attributes and options
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize, // Pass the Sequelize instance
    timestamps: false, // Disable timestamp fields (created_at and updated_at)
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use underscored naming convention for attributes
    modelName: 'product', // Set the model name
  }
);

// Export the Product model
module.exports = Product;
