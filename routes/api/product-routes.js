// Import the necessary modules
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// GET route for '/api/products'
router.get('/', (req, res) => {
  // Find all products and include associated Category and Tag data
  Product.findAll({
    attributes: ['id', 'product_name', 'price', 'stock'],
    include: [
      {
        model: Category,
        attributes: ['category_name']
      },
      {
        model: Tag,
        attributes: ['tag_name']
      }
    ]
  })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET route for '/api/products/:id'
router.get('/:id', (req, res) => {
  // Find a product by its id and include associated Category and Tag data
  Product.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'product_name', 'price', 'stock'],
    include: [
      {
        model: Category,
        attributes: ['category_name']
      },
      {
        model: Tag,
        attributes: ['tag_name']
      }
    ]
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST route for '/api/products'
router.post('/', (req, res) => {
  // Create a new product
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id,
    tagIds: req.body.tagIds
  })
    .then((product) => {
      // If there are product tags, create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // If no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// PUT route for '/api/products/:id'
router.put('/:id', (req, res) => {
  // Update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // Find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // Get a list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // Create a filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // Figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // Run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// DELETE route for '/api/products/:id'
router.delete('/:id', (req, res) => {
  // Delete one product by its id value
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductData => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Export the router
module.exports = router;
