import React from "react";
import "./MembersStyles.css";
import { Team } from "./Data";
const Members = () => {
  return (
    <section className="members space">
      <div className="section-intro">
        <h5>
          <span>Meet</span> Our Team
        </h5>
        <h3>Professional Staff</h3>
      </div>
      <div className="members-container">
        {Team.map((member) => {
          return (
            <div className="member" key={member.id}>
              <img src={member.img} alt="" />
              <div className="member-info">
                <h4>{member.name}</h4>
                <p>subtitle</p>
                <div className="member-socials">
                  <li>
                    <i>{member.fb}</i>
                  </li>
                  <li>
                    <i>{member.insta}</i>
                  </li>
                  <li>
                    <i>{member.twitter}</i>
                  </li>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Members;
