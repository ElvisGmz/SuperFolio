import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoNav from "../assets/codificacion.svg";
import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";
import codepen from "../assets/codepen.svg";
import blogLogo from "../assets/blog.svg";

const NavBar = () => {
  const [toggleState, setToggleState] = useState(false);

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.querySelector("header").style.backgroundColor = "#21212C";
    } else {
      document.querySelector("header").style.backgroundColor = "transparent";
    }
  }

  const changeStateMenu = (e) => {
    e.preventDefault();
    setToggleState(!toggleState);
  };

  useEffect(() => {
    const navBarMenu = document.querySelector(".nav-links");
    const header = document.querySelector("header");
    const container = document.querySelector(".main_Container");

    window.onscroll = () => scrollFunction();

    if (window.innerWidth <= "600") {
      container.style.filter = toggleState ? "brightness(30%)" : "brightness(100%)";
      header.style.backgroundColor = toggleState ? "#212429" : "transparent";

      navBarMenu.style.cssText = toggleState
        ? `
        background-color: #212429;
        width: 250px;
      `
        : `
      background-color: transparent;
        width: 0px;
      `;
      navBarMenu.style.height = "calc(100vh - 50px)";
    }
  });

  return (
    <header>
      <div className="nav">
        {/* <input type="checkbox" id="nav-check" /> */}
        <Link to="/" onClick={() => setToggleState(false)}>
          <div className="nav-header">
            <div className="nav-title">
              <img src={logoNav} alt="" />
            </div>
          </div>
        </Link>
        <div className="nav-btn">
          <label htmlFor="nav-check" onClick={changeStateMenu}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div onClick={() => setToggleState(false)} className="nav-links">
          <a
            href="https://github.com/ElvisGmz"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHub} alt="" /> Proyectos
          </a>
          <a
            href="https://www.linkedin.com/in/elvisgmz/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="" /> LinkedIn
          </a>
          <a
            href="https://codepen.io/ElvisGmz_"
            target="_blank"
            rel="noreferrer"
          >
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
