import React from "react";
import { WorksDAta } from "./Data";
import "./WorksStyles.css";
import { Link } from "react-router-dom";
const Works = () => {
  return (
    <section className="works space">
      <div className="section-intro">
        <h5>
          <span>Pickup</span> & Deliver
        </h5>
        <h3>How We Work</h3>
      </div>
      <div className="works-container">
        {WorksDAta.map((work) => {
          return (
            <article className="work" key={work.id}>
              <div className="icon_box">
                <div className="icon-box">
                  <div className="d-icon"> {work.icon}</div>
                  <div className="notification">{work.id}</div>
                </div>
              </div>
              <Link>{work.heading}</Link>
              <p>{work.text}</p>
            </article>
          );
        })}
      </div>
      <div className="btn-container">
        <Link className="work-btn" to={"/contact"}>
          book our service now
        </Link>
      </div>
    </section>
  );
};

export default Works;
