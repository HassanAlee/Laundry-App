import React from "react";
import "./ServicesStyles.css";
import { ServicesData } from "./Data";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className="services space">
        <div className="section-intro">
          <h5>
            <span>What</span> We Offer
          </h5>
          <h3>Our Services</h3>
        </div>
        <div className="services-container">
          {ServicesData.map((service, index) => {
            return (
              <article className="service" key={index}>
                <div className="image-box">
                  <img src={service.img} alt="service.heading" />
                </div>
                <div className="service-text">
                  <h2>{service.heading}</h2>
                  <p>{service.text}</p>
                  <Link to={"/services"} className="service-btn">
                    Read More
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
