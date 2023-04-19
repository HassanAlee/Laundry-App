import React from "react";
import "./HeroMidStyles.css";
import HeroImg from "../assets/bg-image2.jpg";
import { Link } from "react-router-dom";

const HeroMid = ({ page, psmall }) => {
  return (
    <>
      <section className="hero-med">
        <div>
          <img src={HeroImg} alt="{image}" />
          <div className="mask"></div>
        </div>
        <div className="hero-med-content">
          <h4>{page}</h4>
          <Link to={"/"}>Home &gt; </Link>
          <span>{psmall}</span>
        </div>
      </section>
    </>
  );
};

export default HeroMid;
