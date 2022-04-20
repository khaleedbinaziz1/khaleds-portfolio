import React from "react";
import "./About.css";
import sep from "./../../../images/separatorBlack 1.png";
import { IconName } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="about-sec">
      <div className="about">
        <div className="about-me">
          <h2>
            A B O U T <span> </span> M E
          </h2>
        </div>

        <div className="des">
          <p>
            I am working as a web designer and developer for 2 years. I love to
            design and make new web experiences for the people.
          </p>
        </div>
        
      </div>
      <img src={sep} alt="" />
      <div className="container  ">
        <div className="row d-flex justify-content-center pb-5 pl-5 pr-5 pt-0">
          <div className="col-md-6 service-box p-5 ">
            <div className="icon">
              <FaIcons.FaPencilRuler />
            </div>

            <h4>Web Design</h4>
            <small>
              I do ui/ux design for the website that helps website to get a
              unique look.
            </small>
          </div>
          <div className="col-md-6 service-box p-5">
            <div className="icon">
              <FaIcons.FaRegFileCode />
            </div>
            <h4>Web Development</h4>
            <small>
              I also develop the websites. I create high performance website
              with blazing fast speed.
            </small>
          </div>
          <div className="col-md-6 service-box p-5">
            <div className="icon">
              <FaIcons.FaMobileAlt />
            </div>
            <h4>App Development</h4>
            <small>
              I develop mobile application. I create mobile app with eye
              catching ui.
            </small>
          </div>
        </div>
      </div>
      <img src={sep} alt="" styles />
     
    </div>
  );
};

export default About;
