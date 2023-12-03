import React, { useState } from "react";
import './NavBar.css'

import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from '../Icons/logo.jpeg'

function NavBar(props) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} className="logo" alt="logo"/>
            <div className="news-title">The News Forum</div>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick={()=>setClick(false)}>
                Home
            </li>
            <li className="nav-item" onClick={()=>setClick(false)}>
                About
            </li>
            <li className="nav-item" onClick={()=>setClick(false)}>
                Contact Us
            </li>
            <li className="nav-item" onClick={()=>{
                setClick(false)
                if(props.suscribeClick){
                  props.setSuscribeClick(false)
                }
                else{
                  props.setSuscribeClick(true)
                } 
              }}>
                Subscribe
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
