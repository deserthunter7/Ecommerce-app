import React from "react";
import Watch from "../../assets/images/watch.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import Iphone14p from "../../assets/images/Iphone14p.jpg";
import buds from "../../assets/images/buds.jpg";
import macbook from "../../assets/images/macbook.jpg";
import wish from "../../assets/images/wish.svg";
const ProductCard = (props) => {
  let location = useLocation();
  console.log(location);
  const { grid } = props;
  return (
    <>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card ">
          <img src={Watch} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title fw-bold ">SAMSUNG Galaxy Watch4</h5>
            <p className="card-text ">Health Monitoring, Sleep Tracking</p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
        {/* <div className="card ">
          <img src={Iphone14p} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Apple iPhone 14 Plus</h5>
            <p className="card-text">Power and Battery</p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
        <div className="card">
          <img src={macbook} className="card-img-top py-2" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text">Apple M2 - (8 GB/256 GB SSD)</p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
        <div className="card">
          <img src={buds} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">realme Buds Air 5</h5>
            <p className="card-text">Truly Wireless Earbuds with 50dB ANC</p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div> */}
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        {/* <div className="card ">
          <img src={Watch} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title fw-bold ">SAMSUNG Galaxy Watch4</h5>
            <p className="card-text ">Health Monitoring, Sleep Tracking</p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div> */}
        <div className="card ">
          <img src={Iphone14p} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Apple iPhone 14 Plus</h5>
            <p className="card-text">Power and Battery with 128GB ROM</p>

            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
        {/* <div className="card">
          <img src={macbook} className="card-img-top py-2" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text">Apple M2 - (8 GB/256 GB SSD)</p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
        <div className="card">
          <img src={buds} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">realme Buds Air 5</h5>
            <p className="card-text">Truly Wireless Earbuds with 50dB ANC</p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div> */}
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={buds} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">realme Buds Air 5</h5>
            <p className="card-text">Truly Wireless Earbuds with 50dB ANC</p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`col-3 mb-3 ${
          location.pathname === "/store" ? `col-${grid}` : "col-3"
        }`}
      >
        <div className="card">
          <img src={macbook} className="card-img-top py-1" alt="Product" />
          <div className="card-body">
            <h5 className="card-title p-1">Apple MacBook AIR </h5>
            <p className="card-text laptext">
              Apple M2 ChipSet - (8 GB/256 GB SSD)
            </p>
            <a href="/" className="button text-decoration-none">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
