import React from "react";
import Navbar from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import Experience from "../components/Experience";
import Services from "../components/Services";
import Discount from "../components/Discont";
import Works from "../components/Works";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <Features />
      <Experience />
      <Services />
      <Discount />
      <Works />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
