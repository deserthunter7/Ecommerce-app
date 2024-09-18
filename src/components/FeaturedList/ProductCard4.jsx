import React from "react";
import buds from "../../assets/images/buds.jpg";
import macbook from "../../assets/images/macbook.jpg";
const ProductCard = () => {
  return (
    <div className="container-xxl d-flex flex-wrap" style={{ gap: "1rem" }}>
      <div className="card" style={{ flex: "1 1 calc(20% - 1rem)" }}>
        <img src={macbook} className="card-img-top py-2" alt="Product" />
        <div className="card-body">
          <h5 className="card-title p-1">Apple MacBook AIR</h5>
          <p className="card-text">Apple M2 - (8 GB/256 GB SSD)</p>
          <a href="/store" className="button text-decoration-none">
            Buy Now
          </a>
        </div>
      </div>

      <div className="card" style={{ flex: "1 1 calc(20% - 1rem)" }}>
        <img src={buds} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">realme Buds Air 5</h5>
          <p className="card-text">Truly Wireless Earbuds with 50dB ANC</p>
          <a href="/store" className="button text-decoration-none">
            Buy Now
          </a>
        </div>
      </div>

      <div className="card" style={{ flex: "1 1 calc(20% - 1rem)" }}>
        <img src={buds} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">realme Buds Air 5</h5>
          <p className="card-text">Truly Wireless Earbuds with 50dB ANC</p>
          <a href="/store" className="button text-decoration-none">
            Buy Now
          </a>
        </div>
      </div>

      <div className="card" style={{ flex: "1 1 calc(20% - 1rem)" }}>
        <img src={buds} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">realme Buds Air 5</h5>
          <p className="card-text">Truly Wireless Earbuds with 50dB ANC</p>
          <a href="/store" className="button text-decoration-none">
            Buy Now
          </a>
        </div>
      </div>

      <div className="card" style={{ flex: "1 1 calc(20% - 1rem)" }}>
        <img src={macbook} className="card-img-top py-2" alt="Product" />
        <div className="card-body">
          <h5 className="card-title p-1">Apple MacBook AIR</h5>
          <p className="card-text">Apple M2 - (8 GB/256 GB SSD)</p>
          <a href="/store" className="button text-decoration-none">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
