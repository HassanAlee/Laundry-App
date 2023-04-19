import React from "react";
import Navbar from "../components/Navbar";
import HeroMid from "../components/HeroMid";
const About = () => {
  return (
    <>
      <Navbar />
      <HeroMid page="about us" psmall={"about"} />
    </>
  );
};

export default About;
