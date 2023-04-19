import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ExperienceImg1 from "../assets/expr1.jpg";
import ExperienceImg2 from "../assets/expr2.jpg";
import "./ExperienceStyles.css";
const Experience = () => {
  const [hover, setHover] = useState(false);
  const hoverHandler = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="space experience-container">
        <div className="imgs-col">
          <img
            src={ExperienceImg1}
            className={hover ? "img-left top" : "img-left"}
            alt=""
            onMouseEnter={() => {
              hoverHandler();
            }}
            onMouseLeave={() => {
              hoverHandler();
            }}
          />
          <img
            src={ExperienceImg2}
            className={hover ? "img-right bottom" : "img-right"}
            alt=""
            onMouseEnter={() => {
              hoverHandler();
            }}
            onMouseLeave={() => {
              hoverHandler();
            }}
          />
        </div>
        <div className="experience-text">
          <div className="section-intro" style={{ textAlign: "left" }}>
            <h5>
              <span>More</span> than 25 Years of Experience
            </h5>
            <h3>We are passionate about Laundry</h3>
          </div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti similique sunt in culpa
            qui officia
          </p>
          <ul>
            <li>
              <span>
                <BsCheckCircleFill
                  style={{ color: "#54B963", marginRight: "5px" }}
                />
              </span>
              100% Customer Satisfaction
            </li>
            <li>
              <span>
                <BsCheckCircleFill
                  style={{ color: "#54B963", marginRight: "5px" }}
                />
              </span>
              Free Collection & Delivery
            </li>
            <li>
              <span>
                <BsCheckCircleFill
                  style={{ color: "#54B963", marginRight: "5px" }}
                />
              </span>
              Affordable Prices
            </li>
          </ul>
          <Link to={"/about"} className="btn">
            Discover More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Experience;
