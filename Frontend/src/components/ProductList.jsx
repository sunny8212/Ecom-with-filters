import React from 'react';

const ProductList = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-rating">{product.rating} ★</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductList;
