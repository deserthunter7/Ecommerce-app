import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import newsletterImage from "../assets/images/newsletter.png";

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
import Contact_Form from "../components/Contact_Form/Contact_Form";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import star from "../assets/images/5star.png";
import face1 from "../assets/images/Face/face1.png";
import face2 from "../assets/images/Face/face2.png";
import face3 from "../assets/images/Face/face3.png";
import face4 from "../assets/images/Face/face4.png";
import face5 from "../assets/images/Face/face5.png";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact / Shopify</title>
      </Helmet>
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.632153331618!2d4.810728276323327!3d45.75851997108025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eba46e6ba68d%3A0x73871b28977c9fbe!2s13%20Pl.%20de%20Trion%2C%2069005%20Lyon%2C%20France!5e0!3m2!1sen!2sin!4v1726319633248!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5 p-5">
              <div className="contact-wrapper d-flex justify-content-between ">
                <div>
                  <Contact_Form />
                </div>
                <div className="contact-2 d-flex flex-column ">
                  <p className="promo text-dark mb-1 py-2">
                    <b>
                      {" "}
                      <TbHexagonLetterS /> Shopify
                    </b>
                    <br />
                    <br /> <FaMapMarkerAlt /> 13 Pl. de Trion, 69005 Lyon,
                    France
                    <br />
                    <br />
                    <IoIosCall /> +33 1 23 45 67 89 <br />
                    <br />
                    <IoIosMail /> care.shotify@example.com
                  </p>
                  <div className="social_icons d-flex align-items-center gap-15">
                    <a href="/">
                      <FaLinkedin className="text-dark fs-4" />
                    </a>
                    <a href="/">
                      <FaFacebook className="text-dark fs-4" />
                    </a>
                    <a href="/">
                      <FaTwitter className="text-dark fs-4" />
                    </a>
                    <a href="/">
                      <FaInstagram className="text-dark fs-4" />
                    </a>
                  </div>
                  <div className="review mt-4">
                    <Carousel
                      autoPlay
                      infiniteLoop
                      interval={3000}
                      showThumbs={false}
                    >
                      <div className="d-flex gap-15 align-items-center random-product ">
                        <img src={face1} alt="" />
                        <div>
                          <h6>Samuel</h6>
                          <img
                            src={star}
                            className="bg-transparent"
                            alt="star"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-15 align-items-center random-product">
                        <img src={face2} alt="" />
                        <div>
                          <h6>Lucas</h6>
                          <img
                            src={star}
                            className="bg-transparent"
                            alt="star"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-15 align-items-center random-product">
                        <img src={face3} alt="" />
                        <div>
                          <h6>Isabella</h6>
                          <img
                            src={star}
                            className="bg-transparent"
                            alt="star"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-15 align-items-center random-product">
                        <img src={face4} alt="" />
                        <div>
                          <h6>Ethan</h6>
                          <img
                            src={star}
                            className="bg-transparent"
                            alt="star"
                          />
                        </div>
                      </div>
                      <div className="d-flex gap-15 align-items-center random-product">
                        <img src={face5} alt="" />
                        <div>
                          <h6>Sophia</h6>
                          <img
                            src={star}
                            className="bg-transparent"
                            alt="star"
                          />
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
