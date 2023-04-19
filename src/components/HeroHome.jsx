import React from "react";
import "./HeroHomeStyles.css";
import HeroImg from "../assets/bg-image.jpg";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <>
      <section className="hero">
        <div>
          <img src={HeroImg} alt="{image}" />
          <div className="mask"></div>
        </div>
        <div className="hero-content">
          <h4>Laundry & Dry Cleaning Services</h4>
          <p>
            Irferendis repudandae fugia rchitecto beatae rederit svitae recusa
            ndae debitifacere uiimi placeat maxienui
          </p>
          <Link to={"/contact"} className="btn">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroHome;
