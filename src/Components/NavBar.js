import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logoNav from "../assets/codificacion.svg";
import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";
import codepen from "../assets/codepen.svg";
import blogLogo from "../assets/blog.svg";

const Header = styled.header`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 100000;
  font-family: "Rubik", sans-serif;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;

  .nav-title {
    display: flex;
    font-size: 22px;
    color: #000;
    align-items: center;
    justify-content: center;
  }

  .nav-title img {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
    margin-left: 10px;
  }
`;

const Nav = styled.div`
  height: 56px;
  width: 100%;
  color: #fff;
  position: relative;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  a {
    margin: 0;
    padding: 0;
    padding-top: 3px;
  }

  .nav-header > .nav-title {
    display: flex;
    font-size: 22px;
    color: #000;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    .nav-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0px;
      top: 0px;
    }

    .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 12px;
    }

    .nav-btn > label > span {
      display: block;
      width: 23px;
      height: 3px;
      background-color: #fff;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  a {
    display: inline-block;
    padding: 18px 20px;
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  a img {
    width: 20px;
    margin-right: 7px;
  }

  a:hover {
    background-color: #30303066;
  }

  #nav-check {
    display: none;
  }

  @media (max-width: 600px) {
    position: absolute;
    display: block;
    width: 0;
    max-width: 250px;
    background-color: transparent;
    transition: all 0.2s ease-in;
    overflow-y: hidden;
    top: 56px;
    right: 0px;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;

    & > a {
      width: 100%;
      font-size: 14px;
      display: flex;
      align-items: center;
      margin: 0;
    }

    & > a img {
      margin-right: 10px;
    }
  }
`;

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
    const navBarMenu = document.querySelector(NavLinks);
    const header = document.querySelector(Header);

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
    <Header>
      <Nav>
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
        <NavLinks onClick={() => setToggleState(false)}>
          <Link to="/Blog">
            <img src={blogLogo} alt="" /> Blog
          </Link>
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
        </NavLinks>
      </Nav>
    </Header>
  );
};

export default NavBar;
