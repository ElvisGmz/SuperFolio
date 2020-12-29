import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logoNav from "../assets/codificacion.svg";
import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";
import codepen from "../assets/codepen.svg";
import blogLogo from "../assets/blog.svg";

const Header = styled.header`
  background-color: ${({ bgColor }) => bgColor};
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

  &:after {
    position: absolute;
    content: "";
    background-color: ${({ barVisible }) => barVisible};
    width: ${({ barWidth }) => barWidth};
    height: 2px;
    z-index: 10000;
    bottom: 0;
    transition: all 0.2s;
    left: 0;
  }

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
    width: ${({ widthLlinks }) => widthLlinks};
    max-width: 250px;
    background-color: ${({ bgColor }) => bgColor};
    transition: all 0.2s ease-in;
    overflow-y: hidden;
    top: 56px;
    right: 0px;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    height: calc(100vh - 50px);

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
  const [barVisible, setBarVisible] = useState(false);
  const [barWidth, setBarWidth] = useState("0%");

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setBarVisible(true);
    } else {
      setBarVisible(false);
    }
  }

  function getScrollSize() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = Math.round((winScroll / height) * 100);
    setBarWidth(`${scrolled}%`);
  }

  const changeStateMenu = (e) => {
    e.preventDefault();
    setToggleState(!toggleState);
  };

  window.onscroll = () => {
    getScrollSize();
    scrollFunction();
  };

  window.onresize = () => {
    setToggleState(false);
    if (window.innerWidth >= "600") {
      setBarVisible(false);
    }
  };

  useEffect(() => {
    toggleState ? setBarVisible(true) : setBarVisible(false);
  }, [toggleState]);

  return (
    <Header
      barVisible={barVisible ? "dodgerblue" : "transparent"}
      bgColor={barVisible ? "#21212C" : "transparent"}
      barWidth={barWidth}
    >
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
        <NavLinks
          widthLlinks={toggleState ? "100%" : "0"}
          bgColor={toggleState ? "#212429" : "transparent"}
          onClick={() => setToggleState(false)}
        >
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
