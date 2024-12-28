const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController'); // Import controller functions

const router = express.Router();

// Define the route for getting all products
router.get('/', getProducts);

// Define the route for adding a new product
router.post('/', createProduct);

module.exports = router;
