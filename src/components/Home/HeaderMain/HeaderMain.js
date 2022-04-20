import React from "react";
import "./HeaderMain.css";
import { IconName } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import devbro from '../../../images/developer.svg'
const HeaderMain = () => {
  return (
    <div id="header-main" className="head">
      <div className="header-main">
      
      <div className="hero container pt-5 ">
        <div className="row p-5">
          <div className="hero-box col-md-6 pt-5 mt-5">
            <h2 className=" ">Hi! There, I am</h2>
            <h1>Khaled Bin Aziz</h1> 
            <div className="anime">
              <h5 className="i-am"
              >
                I'm a
              </h5>

              <div className="option">
              <li>
                  <span> Web Designer</span>
                </li>
                <li>
                  <span>Web Developer</span>
                </li>
               
                <li>
                  <span>React Developer </span>
                </li>
                <li>
                  <span>App Developer</span>
                </li>
              </div>
            </div>
          
            <div className="icons mt-5">
             <a className="icons-link" href="https://www.instagram.com/khaleed_bin_aziz/"> <FaIcons.FaInstagram /></a>
              <a className="icons-link" href="https://www.facebook.com/khaled.aziz.7587370/"><FaIcons.FaFacebookF /></a>
              <a className="icons-link" href="https://github.com/khaleedbinaziz1"><FaIcons.FaGithub /></a>
              <a className="icons-link" href="https://www.linkedin.com/in/khaleed-bin-aziz-69a401147/"><FaIcons.FaLinkedin /></a>
            </div>
          </div>
          <div className="hero-box col-md-6 pt-5 mt-5">
            <img src={devbro} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="me" >
      <p style={{width: '50%', margin: 'auto',fontWeight: '500'}}>“Your website is the center of your digital ecosystem, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.” - Leland Dieno</p>
     
    </div>
    </div>
  );
};

export default HeaderMain;
