import React from "react";
import { Link } from "react-router-dom";

import logoNav from "../assets/codificacion.svg";
import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";
import codepen from "../assets/codepen.svg";
import blogLogo from "../assets/blog.svg";

const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <Link to="/">
          <div className="nav-header">
            <div className="nav-title">
              <img src={logoNav} alt="" />
            </div>
          </div>
        </Link>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <a href="https://github.com/ElvisGmz">
            <img src={gitHub} alt="" /> Github
          </a>
          <a href="https://www.linkedin.com/in/elvisgmz/">
            <img src={linkedIn} alt="" /> LinkedIn
          </a>
          <a href="https://codepen.io/ElvisGmz_">
            <img src={codepen} alt="" /> Codepen
          </a>
          <Link to="/blog">
            <img src={blogLogo} alt="" /> Blog
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
