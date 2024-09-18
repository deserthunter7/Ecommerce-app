import React from "react";
import main_banner from "../assets/images/main-banner.jpg";
import main_banner_1 from "../assets/images/main-banner-1.jpg";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import small_banner_1 from "../assets/images/catbanner-01.jpg";
import small_banner_2 from "../assets/images/catbanner-02.jpg";
import small_banner_3 from "../assets/images/catbanner-03.jpg";
import small_banner_4 from "../assets/images/catbanner-04.jpg";
import service from "../assets/images/service.png";
import service2 from "../assets/images/service-02.png";
import service3 from "../assets/images/service-03.png";
import service4 from "../assets/images/service-04.png";
import service5 from "../assets/images/service-05.png";
import DSLR from "../assets/images/DSLR.jpg";
import TV from "../assets/images/tv.jpg";
import Gaming from "../assets/images/Gaming.jpg";
import Airpods from "../assets/images/Airpods.jpg";
import Speakers from "../assets/images/Speakers.jpg";
import Iphone151 from "../assets/images/Iphone151.jpg";
import ProductCard from "../components/FeaturedList/ProductCard";
import ProductCard2 from "../components/FeaturedList/ProductCard2";
import ProductCard3 from "../components/FeaturedList/ProductCard3";
import ProductCard4 from "../components/FeaturedList/ProductCard4";
import Marquee from "../components/Marquee/Marquee";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Shopify</title>
      </Helmet>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* <div className="col-6 main-banner position-relative p-3">
              <img
                src={main_banner}
                className="img-fluid rounded-3"
                alt="Main_banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>
                  Buy Iphone <br />
                  15 Pro Max
                </h5>
                <p>
                  From ₹154000.00 <br /> ₹24833.00/mo. No Cost EMI available
                </p>
                <Link className="button text-white">Buy Now</Link>
              </div>
            </div> */}
            <div className="col-6 main-banner position-relative p-3">
              <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
              >
                <div>
                  <img src={main_banner} />

                  <div className="main-banner-content position-absolute">
                    <h4>feel The Hermony</h4>
                    <h5>
                      SONY <br />
                      WH-1000XM5
                    </h5>
                    <p>
                      From ₹ 31,990 <br /> ₹2833.00/mo. No Cost EMI available
                    </p>
                  </div>
                </div>
                <div>
                  <img src={main_banner_1} />
                  <div className="main-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS</h4>
                    <h5>
                      Buy Iphone <br />
                      15 Pro Max
                    </h5>
                    <p className="">
                      From ₹154000.00 <br /> ₹24833.00/mo. No Cost EMI available
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>

            <div className="col-6">
              <div className="row">
                <div className="small-banner position-relative py-3 col-6">
                  <img
                    src={small_banner_1}
                    className="img-fluid rounded-3"
                    alt="Small_banner_1"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Its the Time</h4>
                    <h5>
                      Buy New <br />
                      Laptop
                    </h5>
                    <p>
                      From ₹54000.00 <br /> ₹4833.00/mo. No Cost EMI available
                    </p>
                    {/* <Link className="button text-white">Buy Now</Link> */}
                  </div>
                </div>
                <div className="small-banner position-relative py-3 col-6">
                  <img
                    src={small_banner_2}
                    className="img-fluid rounded-3"
                    alt="Small_banner_1"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Its the Time</h4>
                    <h5>
                      Buy New <br />
                      Smart Watch
                    </h5>
                    <p>
                      From ₹5000.00 <br /> ₹833.00/mo. No Cost EMI available
                    </p>
                    {/* <Link className="button text-white">Buy Now</Link> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="small-banner position-relative  col-6">
                  <img
                    src={small_banner_3}
                    className="img-fluid rounded-3"
                    alt="Small_banner_1"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Its the Time</h4>
                    <h5>
                      Buy New <br />
                      Tablet
                    </h5>
                    <p>
                      From ₹20000.00 <br /> ₹1833.00/mo. No Cost EMI available
                    </p>
                    {/* <Link className="button text-white">Buy Now</Link> */}
                  </div>
                </div>
                <div className="small-banner position-relative  col-6">
                  <img
                    src={small_banner_4}
                    className="img-fluid rounded-3"
                    alt="Small_banner_1"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Its the Time</h4>
                    <h5>
                      Buy New <br />
                      Accessories
                    </h5>
                    <p>
                      From ₹500.00 <br /> No Cost EMI available
                    </p>
                    {/* <Link className="button text-white">Buy Now</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service} alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">₹1000+ Orders</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service2} alt="s2" />
                  <div>
                    <h6>Attractive Rewards </h6>
                    <p className="mb-0">On Every Purchase</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service3} alt="s3" />
                  <div>
                    <h6>24*7 Support</h6>
                    <p className="mb-0">more than 100 locations</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service4} alt="s4" />
                  <div>
                    <h6>Huge Discounts</h6>
                    <p className="mb-0">upto 15% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service5} alt="s5" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3">
        <div className="container-xxl">
          <div className="row py-3">
            <div className="col-15 ">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-15 align-items-center">
                  <img src={Iphone151} alt="" />
                  <div>
                    <h6 className="fw-bold">SmartPhones</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={TV} alt="" />
                  <div>
                    <h6 className="fw-bold">Smart TV</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={Gaming} alt="" />
                  <div>
                    <h6 className="fw-bold">Gaming</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={Airpods} alt="" />
                  <div>
                    <h6 className="fw-bold">Accesories</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={Speakers} alt="" />
                  <div>
                    <h6 className="fw-bold">Speakers</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={DSLR} alt="" />
                  <div>
                    <h6 className="fw-bold">Cameras</h6>
                    <p>100+ Items</p>
                  </div>

                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={Iphone151} alt="" />
                  <div>
                    <h6 className="fw-bold">SmartPhones</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={TV} alt="" />
                  <div>
                    <h6 className="fw-bold">Smart TV</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={Gaming} alt="" />
                  <div>
                    <h6 className="fw-bold">Gaming</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={Airpods} alt="" />
                  <div>
                    <h6 className="fw-bold">Accesories</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={Speakers} alt="" />
                  <div>
                    <h6 className="fw-bold">Speakers</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src={DSLR} alt="" />
                  <div>
                    <h6 className="fw-bold">Cameras</h6>
                    <p>100+ Items</p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service} alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">₹1000+ Orders</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service2} alt="s2" />
                  <div>
                    <h6>Attractive Rewards </h6>
                    <p className="mb-0">On Every Purchase</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service3} alt="s3" />
                  <div>
                    <h6>24*7 Support</h6>
                    <p className="mb-0">more than 100 locations</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service4} alt="s4" />
                  <div>
                    <h6>Huge Discounts</h6>
                    <p className="mb-0">upto 15% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src={service5} alt="s5" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="featured-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-center mb-5 fw-bold text-secondary">
                Top Selling Items
              </h3>
            </div>
          </div>
          <div className="row">
            {/* <ProductCard />
            <ProductCard2 /> */}
            <ProductCard3 />
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-center mb-5 fw-bold text-secondary">
                Top Rated Items
              </h3>
            </div>
          </div>
          <div className="row">
            {/* {/* <ProductCard />
            <ProductCard2 /> 
            <ProductCard3 /> */}
            <ProductCard4 />
          </div>
        </div>
      </section>
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

export default Home;
