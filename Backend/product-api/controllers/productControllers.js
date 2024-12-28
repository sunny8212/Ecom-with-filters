const Product = require('../models/product');

// Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new product
const createProduct = async (req, res) => {
  const { name, price, category } = req.body;

  const product = new Product({ name, price, category });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getProducts, createProduct };
