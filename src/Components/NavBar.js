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
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
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

    window.onscroll = () => scrollFunction();

    window.onresize = () => {
      setToggleState(false);
      if (window.innerWidth >= "600") {
        navBarMenu.style.width = "auto";
        navBarMenu.style.height = "auto";
        header.style.backgroundColor = "transparent";
        navBarMenu.style.backgroundColor = "transparent";
      } else {
        navBarMenu.style.width = "0";
        navBarMenu.style.height = "auto";
      }
    };

    if (window.innerWidth <= "600") {
      header.style.backgroundColor = toggleState ? "#212429" : "transparent";
      navBarMenu.style.width = toggleState ? "100%" : "0";
      navBarMenu.style.backgroundColor = toggleState
        ? "#212429"
        : "transparent";
      navBarMenu.style.height = "calc(100vh - 50px)";
    }
  });

  return (
    <header>
      <div className="nav">
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
          <Link to="/Blogs">
            <img src={blogLogo} alt="" /> Blog
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
