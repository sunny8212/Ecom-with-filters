import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import axios from "axios";

function App() {
  // Sample product data

  const products = [
    {
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/150",
      price: 29.99,
      rating: 4.5,
      category: "Electronics",
      description: "High-quality wireless headphones with noise-cancellation.",
    },
    {
      name: "Bluetooth Speaker",
      image: "https://via.placeholder.com/150",
      price: 359.99,
      rating: 4.0,
      category: "Electronics",
      description: "Portable Bluetooth speaker with deep bass sound.",
    },
    {
      name: "Smartwatch",
      image: "https://via.placeholder.com/150",
      price: 159.99,
      rating: 4.7,
      category: "Wearables",
      description:
        "Stylish smartwatch with fitness tracking and heart rate monitor.",
    },
    {
      name: "Laptop",
      image: "https://via.placeholder.com/150",
      price: 599.99,
      rating: 4.2,
      category: "Electronics",
      description: "High-performance laptop for gaming and productivity.",
    },
    {
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/150",
      price: 39.99,
      rating: 4.5,
      category: "Electronics",
      description: "High-quality wireless headphones with noise-cancellation.",
    },
    {
      name: "Bluetooth Speaker",
      image: "https://via.placeholder.com/150",
      price: 59.99,
      rating: 4.0,
      category: "Electronics",
      description: "Portable Bluetooth speaker with deep bass sound.",
    },
    {
      name: "Smartwatch",
      image: "https://via.placeholder.com/150",
      price: 149.99,
      rating: 4.7,
      category: "Wearables",
      description:
        "Stylish smartwatch with fitness tracking and heart rate monitor.",
    },
    {
      name: "Laptop",
      image: "https://via.placeholder.com/150",
      price: 799.99,
      rating: 4.2,
      category: "Electronics",
      description: "High-performance laptop for gaming and productivity.",
    },
  ];

  const DB_PATH =
    "mongodb+srv://spadariya837:<db_password>@ecom.qo2bc.mongodb.net/?retryWrites=true&w=majority&appName=Ecom";

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        // Assuming response.data contains the list of products
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Filter states
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 1000]);
  const [ratingFilter, setRatingFilter] = useState(0);

  // Function to apply the filters
  const filterProducts = () => {
    return products.filter((product) => {
      return (
        (categoryFilter === "" || product.category === categoryFilter) &&
        product.price >= priceFilter[0] &&
        product.price <= priceFilter[1] &&
        product.rating >= ratingFilter
      );
    });
  };

  // Handle filter changes
  const handleCategoryChange = (e) => setCategoryFilter(e.target.value);
  const handlePriceChange = (e) =>
    setPriceFilter([0, parseInt(e.target.value)]);
  const handleRatingChange = (e) => setRatingFilter(parseInt(e.target.value));

  return (
    <div className="">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center py-6 px-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg">
        <div className="text-4xl font-extrabold tracking-wide">E-Shop</div>
        <div className="flex space-x-6 items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="cursor-pointer hover:bg-blue-600 px-4 py-2 rounded-full transition-all">
            Cart (0)
          </div>
        </div>
      </header>

      <h1 className="text-center text-4xl font-semibold mb-12 text-gray-800">
        Our Products
      </h1>

      {/* Main content wrapper */}
      <div className="flex px-8 gap-8">
        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filterProducts().map((product, index) => (
            <ProductList key={index} product={product} />
          ))}
        </div>

        {/* Filters Section */}
        <div className="w-1/4 p-6 bg-white rounded-lg shadow-lg flex-shrink-0 min-h-[400px] max-h-[600px] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Filters</h2>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Category
            </label>
            <select
              onChange={handleCategoryChange}
              value={categoryFilter}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Wearables">Wearables</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Price
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceFilter[1]}
              onChange={handlePriceChange}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{`$${priceFilter[0]} - $${priceFilter[1]}`}</span>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Rating
            </label>
            <select
              onChange={handleRatingChange}
              value={ratingFilter}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="0">All</option>
              <option value="4">4 Stars & Up</option>
              <option value="4.5">4.5 Stars & Up</option>
            </select>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-16 shadow-inner">
        <div>&copy; 2024 E-Shop. All Rights Reserved.</div>
        <div className="mt-6">
          <a
            href="#"
            className="text-white mx-4 hover:text-blue-400 transition-all"
          >
            About
          </a>
          <a
            href="#"
            className="text-white mx-4 hover:text-blue-400 transition-all"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-white mx-4 hover:text-blue-400 transition-all"
          >
            Terms & Conditions
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
