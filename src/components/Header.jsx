import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import DropdownButton from "./DropDown/Dropdown";
import compare from "../assets/images/compare.svg";
import wishlist from "../assets/images/wishlist.svg";
import user from "../assets/images/user.svg";
import cart from "../assets/images/cart.svg";
import Cart from "../pages/Cart";
import { useCart } from "../components/CartContext";

const Header = () => {
  const { totalQuantity, totalPrice } = useCart(); // Destructure cart data from context

  return (
    <>
      {/* Top header strip */}
      {/* <header className="hearder-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="text-white mb-0">Free Shipping Over ₹1000</p>
            </div>
            <div className="col-md-6 col-sm-12 text-end">
              <p className="text-end text-white mb-0">
                Hotline:
                <a
                  className="text-white text-decoration-none"
                  href="tel:+91 9876543210"
                >
                  +91 9876543210
                </a>
              </p>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main header */}
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-3 col-sm-6">
              <h2>
                <Link className="text-white text-decoration-none">
                  Shopify.
                </Link>
              </h2>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 mt-sm-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Search Products here"
                  aria-label="Search Products here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 mt-2 " id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 mt-sm-3">
              <div className="header-upper-links d-flex align-items-center justify-content-between w-100 flex-nowrap ">
                <div className="flex-item">
                  <Link
                    className="d-flex align-items-center gap-10 text-white text-decoration-none"
                    to={"/compare"}
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0 d-none d-md-block">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div className="flex-item">
                  <Link className="d-flex align-items-center gap-10 text-white text-decoration-none">
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0 d-none d-md-block">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div className="flex-item">
                  <Link
                    className="d-flex align-items-center gap-10 text-white text-decoration-none"
                    to={"/login"}
                  >
                    <img src={user} alt="usericon" />
                    <p className="mb-0 d-none d-md-block">
                      Login <br /> MyAccount
                    </p>
                  </Link>
                </div>
                <div className="flex-item">
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white text-decoration-none"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">
                        {totalQuantity}
                      </span>
                      <p className="mb-0 d-none d-md-block">₹ {totalPrice}</p>
                    </div>
                  </Link>
                </div>
              </div>

              <style jsx="true">{`
                .header-upper-links {
                  flex-wrap: nowrap; /* Ensure everything stays in one row */
                }

                @media (max-width: 768px) {
                  .header-upper-links {
                    flex-wrap: wrap; /* Allow wrapping on smaller screens if needed */
                    justify-content: space-around; /* Adjust the spacing on small screens */
                  }

                  .flex-item {
                    flex: 1; /* Make each item take equal space */
                    text-align: center; /* Center the content on small screens */
                  }

                  .flex-item img {
                    width: 300px; /* Adjust image size for mobile screens */
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom header with navigation */}
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="menu-links ">
                  <div className="d-flex align-items-center gap-15 flex-wrap ">
                    <NavLink
                      className="text-white text-decoration-none fw-bold"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      className="text-white text-decoration-none fw-bold"
                      to="/store"
                    >
                      Our Store
                    </NavLink>
                    <NavLink
                      className="text-white text-decoration-none fw-bold"
                      to="/blogs"
                    >
                      Our Team
                    </NavLink>
                    <NavLink
                      className="text-white text-decoration-none fw-bold"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add responsive CSS for mobile */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          .header-upper-links {
            flex-direction: column;
            gap: 15px;
          }
          .menu-links {
            justify-content: center;
            flex-direction: column;
          }
        }
        @media (max-width: 576px) {
          .header-upper h2 {
            font-size: 1.5rem;
          }
          .header-upper-links {
            justify-content: space-around;
          }
          .input-group {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
