import React from "react";
import "../components/MainProductPage.css";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$25.00",
    description: "This is a great product.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$40.00",
    description: "This is another great product.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30.00",
    description: "You will love this product.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const MainProductPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>{product.price}</strong>
                </p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProductPage;
