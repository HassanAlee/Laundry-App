import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import Experience from "../components/Experience";
import Services from "../components/Services";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <Features />
      <Experience />
      <Services />
    </>
  );
};

export default Home;
