import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav" >
        <div className="logo">
          <h2>
            <span>S</span>mart
            <span>T</span>ext
            <span>E</span>ditor
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>             
            </li>           
            <li>
              <NavLink to="/download">download</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
