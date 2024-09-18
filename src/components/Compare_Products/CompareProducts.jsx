import React, { useState } from "react";
import "./CompareProducts";

const CompareProducts = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    // Add to cart functionality
    console.log(`Added ${quantity} item(s) to the cart`);
  };

  return (
    <div className="product-page">
      <div className="product-gallery">
        <img src="path/to/product-image.jpg" alt="Product" />
      </div>
      <div className="product-info">
        <h1>Product Title</h1>
        <p>$49.99</p>
        <p>Short description of the product.</p>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default CompareProducts;
