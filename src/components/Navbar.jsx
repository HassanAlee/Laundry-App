import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHandsWash } from "react-icons/fa";
import { NavData } from "./Data";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  const [color, setColor] = useState(false);
  const colorHandler = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", () => colorHandler());
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to={"/"}>
        <h1>
          <span style={{ color: "#54B963" }}>L</span>aundries
          <FaHandsWash style={{ color: "#54B963" }} />
        </h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu "}>
        {NavData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
      <div className="hamburger" onClick={clickHandler}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
