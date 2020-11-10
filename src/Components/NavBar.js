import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoNav from "../assets/codificacion.svg";
import gitHub from "../assets/github.svg";
import linkedIn from "../assets/linkedin.svg";
import codepen from "../assets/codepen.svg";
import blogLogo from "../assets/blog.svg";


const NavBar = () => {

  const [toggleState, setToggleState] = useState(false)


  const changeStateMenu = (e) => {
    e.preventDefault();
    setToggleState(!toggleState)
  }

  useEffect(() => {
    const navBarMenu = document.querySelector('.nav-links')
    const header = document.querySelector('header')
    // const container = document.querySelector('.main_Container')

    if(window.innerWidth <= '600'){
    
      // container.style.filter = toggleState ? 'blur(5px)' : 'blur(0px)'
      header.style.backgroundColor = toggleState ? '#212429' : 'transparent'

      navBarMenu.style.cssText = toggleState
      ? `
        
        width: 200px;
      ` : `
        
        width: 0px;
      `
      navBarMenu.style.height = 'calc(100vh - 50px)'

    }
  })

  

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
}

export default NavBar
