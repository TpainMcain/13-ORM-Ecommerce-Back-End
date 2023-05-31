// Import necessary modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import the Sequelize instance from the connection configuration
const sequelize = require('../config/connection.js');

// Define the Tag model by extending the Sequelize Model class
class Tag extends Model {}

// Initialize the Tag model with the table's attributes and options
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize, // Pass the Sequelize instance
    timestamps: false, // Disable timestamp fields (created_at and updated_at)
    freezeTableName: true, // Use the same table name as the model name
    underscored: true, // Use underscored naming convention for attributes
    modelName: 'tag', // Set the model name
  }
);

// Export the Tag model
module.exports = Tag;
