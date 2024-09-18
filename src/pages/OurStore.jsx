import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";

import Iphone15 from "../assets/images/Iphone15.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import DSLR from "../assets/images/DSLR.jpg";
import TV from "../assets/images/tv.jpg";
import Gaming from "../assets/images/Gaming.jpg";
import Airpods from "../assets/images/Airpods.jpg";
import Speakers from "../assets/images/Speakers.jpg";
import gr from "../assets/images/gr.svg";
import gr4 from "../assets/images/gr4.svg";
import gr2 from "../assets/images/gr2.svg";
import gr3 from "../assets/images/gr3.svg";
import Marquee from "../components/Marquee/Marquee";
import Iphone_15 from "../assets/images/Iphone 15.jpg";
import ProductCard from "../components/FeaturedList/ProductCard";
import ProductCard2 from "../components/FeaturedList/ProductCard2";
import ProductCard3 from "../components/FeaturedList/ProductCard3";
import ProductCard4 from "../components/FeaturedList/ProductCard4";
const OurStore = () => {
  // const [grid, setGrid] = useState(4);
  // alert(grid);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Store</title>
      </Helmet>
      <BreadCrumb title="Our Store" />

      <div className="store-wrapper home-wrapper-2 py-5 ">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title fw-bold">Shop By Category</h3>
                <div>
                  <ul className="ps-0 fw-bold text-secondary">
                    <li>Mobile</li>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Accessories</li>
                    <li>Laptop</li>
                    <li>Camera</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title fw-bold">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      {" "}
                      In Stock(1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      {" "}
                      Out of Stock(0)
                    </label>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control "
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput text-">₹ From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control "
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput text-">₹ To</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Colours</h5>
                  <div>
                    <ul className="colours ps-0">
                      <li1></li1>
                      <li2></li2>
                      <li3></li3>
                      <li4></li4>
                      <li5></li5>
                      <li6></li6>
                      <li7></li7>
                      <li8></li8>
                      <li9></li9>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title fw-bold">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap gap-10 align-items-center">
                  <span className="batch bg-light rounded-3 text-secondary py-2 px-3 fw-bold">
                    Smartphones
                  </span>
                  <span className="batch bg-light rounded-3 text-secondary py-2 px-3 fw-bold">
                    Watch
                  </span>
                  <span className="batch bg-light rounded-3 text-secondary py-2 px-3 fw-bold">
                    Laptops
                  </span>
                  <span className="batch bg-light rounded-3 text-secondary py-2 px-3 fw-bold">
                    Headphones
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title fw-bold">Random Product</h3>

                <div>
                  <Carousel
                    autoPlay
                    infiniteLoop
                    interval={3000}
                    showThumbs={false}
                  >
                    <div className="d-flex gap-15 align-items-center random-product ">
                      <img src={Iphone15} alt="" />
                      <div>
                        <h6>Iphone15</h6>
                        <p>128GB</p>
                        <p className="fw-bold">₹69000</p>
                      </div>
                      <div>
                        <Link className="button1 text-white ">Buy</Link>
                      </div>
                    </div>
                    <div className="d-flex gap-15 align-items-center random-product">
                      <img src={Airpods} alt="" />
                      <div>
                        <h6>Iphone15</h6>
                        <p>128GB</p>
                        <p className="fw-bold">₹69000</p>
                      </div>
                      <div>
                        <Link className="button1 text-white ">Buy</Link>
                      </div>
                    </div>
                    <div className="d-flex gap-15 align-items-center random-product">
                      <img src={DSLR} alt="" />
                      <div>
                        <h6>Iphone15</h6>
                        <p>128GB</p>
                        <p className="fw-bold">₹69000</p>
                      </div>
                      <div>
                        <Link className="button1 text-white ">Buy</Link>
                      </div>
                    </div>
                    <div className="d-flex gap-15 align-items-center random-product">
                      <img src={Gaming} alt="" />
                      <div>
                        <h6>Iphone15</h6>
                        <p>128GB</p>
                        <p className="fw-bold">₹69000</p>
                      </div>
                      <div>
                        <Link className="button1 text-white ">Buy</Link>
                      </div>
                    </div>
                    <div className="d-flex gap-15 align-items-center random-product">
                      <img src={TV} alt="" />
                      <div>
                        <h6>Iphone15</h6>
                        <p>128GB</p>
                        <p className="fw-bold">₹69000</p>
                      </div>
                      <div>
                        <Link className="button1 text-white ">Buy</Link>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10 ">
                    <p
                      className="mb-0  d-block fw-bold"
                      style={{ width: "100px" }}
                    >
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>{" "}
                      <option value="title-descending">
                        Alphabetically, Z-A"
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, Low to High
                      </option>{" "}
                      <option value="price-descending">
                        Price, High to Low"
                      </option>
                      <option value="price-descending">
                        Price, High to Low
                      </option>{" "}
                      <option value=""></option>
                      <option value="created-ascending">
                        Date, Old to New
                      </option>{" "}
                      <option value="created-descending"></option>
                      <option value="created-descending">
                        Date, New to Old"
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10 grid">
                    <p className="total-products mb-0 fw-bold">20 Products</p>
                    {/* <div className="d-flex gap-10 align-items-center">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        className="d-block img-fluid"
                        src={gr4}
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        className="d-block img-fluid"
                        src={gr3}
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        className="d-block img-fluid"
                        src={gr2}
                        alt="grid"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="products-list pb-5 d-flex flex-wrap ">
                <ProductCard />

                {/*grid={grid} */}
                {/*grid={grid} */}
              </div>
              {/*********************************************************************  */}
            </div>
          </div>
        </div>
      </div>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Marquee />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStore;
