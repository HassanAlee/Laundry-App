import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Contact Us</h1>
          <p>10001 Alleghany st, 5th Avenue, 235 Terry, London. Everyday: </p>
        </div>
        <div>
          <a href="/">
            <FaFacebookSquare />
          </a>
          <a href="/">
            <FaInstagramSquare />
          </a>
          <a href="/">
            <FaTwitterSquare />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <h3>
        &copy; 2022 Laundries. All rights reserved. Design by{" "}
        <Link target={"_blank"} to={"https://w3layouts.com"}>
          W3layouts
        </Link>
      </h3>
    </div>
  );
};

export default Footer;
