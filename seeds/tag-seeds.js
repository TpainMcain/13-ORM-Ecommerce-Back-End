// Import the Tag model from '../models'
const { Tag } = require('../models');

// Array of tag data to be inserted into the table
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Function to seed the Tag table by bulk creating records using the tagData array
const seedTags = () => Tag.bulkCreate(tagData);

// Export the seedTags function
module.exports = seedTags;
