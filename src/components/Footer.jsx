import React from "react";
import { Link } from "react-router-dom";
import newsletterImage from "../assets/images/newsletter.png";
import GooglePlayButton from "./Google play/GooglePlayButton";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import Signature from "../components/Signature/Signature";
import { IoIosMail } from "react-icons/io";
import { TbHexagonLetterS } from "react-icons/tb";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import star from "../assets/images/5star.png";
import face1 from "../assets/images/Face/face1.png";
import face2 from "../assets/images/Face/face2.png";
import face3 from "../assets/images/Face/face3.png";
import face4 from "../assets/images/Face/face4.png";
import face5 from "../assets/images/Face/face5.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-5 col-sm-12">
              <div className="footer-top-data d-flex gap-30 align-items-center justify-content-sm-center justify-content-md-start">
                <img src={newsletterImage} alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for newsletter</h2>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 mt-sm-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter Your Email Address"
                  aria-label="Enter Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <a href="/" className="button text-decoration-none">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-4 col-sm-12 mb-sm-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-contact d-flex flex-column">
                <p className="promo text-white mb-1 py-2">
                  <b>
                    {" "}
                    <TbHexagonLetterS /> Shopify
                  </b>
                  <br />
                  <br /> <FaMapMarkerAlt /> 13 Pl. de Trion, 69005 Lyon, France
                  <br />
                  <br />
                  <IoIosCall /> +33 1 23 45 67 89 <br />
                  <br />
                  <IoIosMail /> 0kS5T@example.com
                </p>
                <div className="social_icons d-flex align-items-center gap-15">
                  <a href="/">
                    <FaLinkedin className="text-white fs-4" />
                  </a>
                  <a href="/">
                    <FaFacebook className="text-white fs-4" />
                  </a>
                  <a href="/">
                    <FaTwitter className="text-white fs-4" />
                  </a>
                  <a href="/">
                    <FaInstagram className="text-white fs-4" />
                  </a>
                  <Link>
                    <Signature />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-sm-4 ">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column ">
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Privacy Policy
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Refund Policy
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Shipping Policy
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Terms and Conditions
                </Link>
                <Link className="text-white mb-1 py-2">Blogs</Link>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-sm-4">
              <h4 className="text-white mb-4">Accounts</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Search
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  About Us
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  FAQ
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Contact
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Size Chart
                </Link>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-sm-4">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Smart Phones
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Laptops
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Headphones
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Tablets
                </Link>
                <Link className="text-white mb-1 py-2 text-decoration-none">
                  Watch
                </Link>
              </div>
            </div>

            <div className="col-md-2 col-sm-6 mb-sm-4">
              <h4 className="text-white mb-4">Our App</h4>
              <div className="footer-links d-flex flex-column">
                <p className="promo text-white mb-1 py-2">
                  Download Our App and Get 15% Off On Your First Order
                </p>
                <GooglePlayButton />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white inline-block">
                <Signature /> Copyright &copy; {new Date().getFullYear()}. All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
