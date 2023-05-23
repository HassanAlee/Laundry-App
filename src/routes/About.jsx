import React from "react";
import image from "../assets/discount-about.jpg";
import Navbar from "../components/Navbar";
import HeroMid from "../components/HeroMid";
import Experience from "../components/Experience";
import Statistics from "../components/Statistics";
import Discount from "../components/Discont";
import Members from "../components/Members";
const About = () => {
  return (
    <>
      <Navbar />
      <HeroMid page="about us" psmall={"about"} />
      <Experience />
      <Statistics />
      <Discount image={image} />
      <Members />
    </>
  );
};

export default About;
