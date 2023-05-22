import "./DiscountStyles.css";
import React from "react";
import { FaTshirt, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Discount = ({ image }) => {
  return (
    <>
      <section className="discount space">
        <img src={image} alt="Discount" />
        <div
          className="section-intro discount-text"
          style={{ textAlign: "start" }}
        >
          <h5>
            <span>Get</span> 30% Discount
          </h5>
          <h3>Book Our Laundry Services</h3>
          <p>
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            inligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            consectetures adipisicing elit.
          </p>
          <div className="d-properties">
            <div className="property">
              <FaTshirt className="d-icon" />
              <Link to="/services">clean result</Link>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </div>
            <div className="property">
              <FaTruck className="d-icon" />
              <Link to="/services">fast delivery</Link>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
