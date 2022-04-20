import React from "react";
import "./Footer.css";
import { IconName } from "react-icons/fa"; 
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="footer">
          <div className="back-to-top">
              <a href="#header-main" className="up-btn"><span><FaIcons.FaAngleDoubleUp /></span><br /><span> </span> BACK TO TOP</a>
          </div>
        <div className="footer-icons mt-2">
          <a
            className="icons-link"
            href="https://www.instagram.com/khaleed_bin_aziz/"
          >
            {" "}
            <FaIcons.FaInstagram />
          </a>
          <a
            className="icons-link"
            href="https://www.facebook.com/khaled.aziz.7587370/"
          >
            <FaIcons.FaFacebookF />
          </a>
          <a className="icons-link" href="https://github.com/khaleedbinaziz1">
            <FaIcons.FaGithub />
          </a>
          <a
            className="icons-link"
            href="https://www.linkedin.com/in/khaleed-bin-aziz-69a401147/"
          >
            <FaIcons.FaLinkedin />
          </a>
        </div>
        <div className="pt-5">
      <small > &copy;2020 khaledbinaziz.netlify.app All Rights Reserved.</small>

        </div>

      </div>
    </div>
  );
};

export default Footer;
