import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import Experience from "../components/Experience";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <Features />
      <Experience />
    </>
  );
};

export default Home;
