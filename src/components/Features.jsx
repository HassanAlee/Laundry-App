import React from "react";
import { FeaturesData } from "./Data";
import "./Feature.css";
const Features = () => {
  return (
    <>
      <div className="features-container space ">
        {FeaturesData.map((feature, index) => {
          const { icon, heading, text } = feature;
          console.log(text);
          return (
            <div className="feature" key={index}>
              <div className="icon">{icon}</div>
              <h2>{heading}</h2>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Features;
