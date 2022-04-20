import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import logo from "../../../images/logo.png";
import { IconContext } from "react-icons";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={navbar ? "navbar dot-active" : "navbar"}>
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="logo">
         
         <Link to="/">
           <img
             src={logo}
             alt=""
           />
         </Link>
       </div>
          <div className="hide-links">

         
            <a className="top-links" href="#header-main">
              HOME
            </a>
            <a className="top-links" href="#about" smooth={true} duration={2000}>
              ABOUT
            </a>
          
            <a className="top-links" href="#projects">
              PORTFOLIO
            </a>
           
            <a className="top-links" href="#contact">
              CONTACT
            </a>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
