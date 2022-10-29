import React, { useState } from "react";
import "./navbar.css";
import {
  FaSearch
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}

        <div className="lgoimg">
          <img src="https://www.gala-global.org/sites/default/files/The_University_of_Texas_at_Arlington_Minor_in_Localization_and_Translation_2.jpg" width='65rem' height='45rem' />
        </div>
        <div className="logo">
          <h2>
            UTA HEALTH CARE
          </h2>
        </div>
        
        {/* 2nd menu part  */}
        {/* <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
            <a href='http://sxt9001.uta.cloud/wordpress/blog'>Blog</a>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <div class="dropdown">
              <button class="dropbtn">Login/Register
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <li><NavLink to="/RegisterPage">Register</NavLink></li>
                <li><NavLink to="/LogReg">Login</NavLink></li>
              </div>
            </div>

          </ul>
        </div> */}

        {/* Search Icon link */}
        {/* <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaSearch className="searchicon" />
              </a>
            </li>
          </ul> */}

          {/* hamburget menu start  */}
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
