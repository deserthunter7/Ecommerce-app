import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Watch from "../../assets/images/watch.jpg";
import Iphone15 from "../../assets/images/Iphone15.jpg";
import Iphone152 from "../../assets/images/Iphone152.jpg";
import sony1 from "../../assets/images/sony1.jpg";
import buds from "../../assets/images/buds_2.jpg";
import macbook from "../../assets/images/macbook.jpg";
import { useNavigate } from "react-router-dom"; // Ensure this path is correct

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  navigate("/cart");

  // Dummy product data for demonstration
  const products = [
    {
      id: 1,
      name: "SAMSUNG Galaxy Watch4",
      price: 10000,
      quantity: 1,
      image: Watch,
      description: "Health and fitness tracker",
    },
    {
      id: 2,
      name: "iPhone 15",
      price: 79999,
      quantity: 1,
      image: Iphone15,
      description: "128Gb Memory, 5G Connectivity",
    },
    {
      id: 3,
      name: "Realme Buds Air 5",
      price: 49999,
      quantity: 1,
      image: buds,
      description: " Wireless in-Ear Earbuds with 50dB ANC",
    },
    {
      id: 4,
      name: "MacBook Air M2",
      price: 109999,
      quantity: 1,
      image: macbook,
      description: "256GB Memory, Apple's New M2 Processor",
    },
    {
      id: 5,
      name: "Iphone 15",
      price: 65990,
      quantity: 1,
      image: Iphone152,
      description: "128GB Memory, 5G Connectivity",
    },
    {
      id: 6,
      name: "Sony BassHeads 5",
      price: 7999,
      quantity: 1,
      image: sony1,
      description: "Wireless Headsets with Alexa Voice Control",
    },
    {
      id: 7,
      name: "MacBook Air M2",
      price: 109999,
      quantity: 1,
      image: macbook,
      description: "256GB Memory, Apple's New M2 Processor",
    },
    {
      id: 8,
      name: "MacBook Air M2",
      price: 109999,
      quantity: 1,
      image: macbook,
      description: "256GB Memory, Apple's New M2 Processor",
    },
  ];

  return (
    <div className="container-xxl d-flex flex-wrap" style={{ gap: "1rem" }}>
      {products.map((product) => (
        <div
          key={product.id}
          className="card"
          style={{ flex: "1 1 calc(50% - 1rem)", maxWidth: "calc(25% - 1rem)" }}
        >
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="button text-decoration-none"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
