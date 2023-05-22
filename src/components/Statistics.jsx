import React from "react";
import "./StatisticsStyles.css";
import { Stats } from "./Data";

const Statistics = () => {
  return (
    <div className="space stats">
      {Stats.map((stat, index) => {
        return (
          <div key={index} className={index === 1 ? "stat green-stat" : "stat"}>
            <h3>{stat.number}</h3>
            <p>{stat.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
