import React from "react";
import "./Skills.css";
import react from "../../../images/react.svg";
import HTML from "../../../images/w3_html5-icon.svg";
import bootstrap from "../../../images/getbootstrap-icon.svg";  
import css from "../../../images/css-3.svg";  
import material from "../../../images/material-ui-1.svg";   
import js from "../../../images/javascript-1.svg";   
import redux from "../../../images/redux.svg";   
import tail from "../../../images/tailwindcss.svg";   
import sass from "../../../images/sass-lang-icon.svg";
import node from "../../../images/nodejs-icon.svg"; 
import mongodb from "../../../images/mongodb-icon.svg"; 
import php from "../../../images/php-icon.svg"; 
import firebase from "../../../images/firebase-icon.svg"; 
import mysql from "../../../images/mysql-3.svg";  
import graphql from "../../../images/graphql.svg";
import heroku from "../../../images/heroku-1.svg";
import express from "../../../images/express-109.svg";
import vs from "../../../images/visual-studio-code-1.svg"; 
import git from "../../../images/git.svg"; 
import github from "../../../images/github-icon-1.svg"; 
import chomedev from "../../../images/chrome.svg"; 
import netlify from "../../../images/netlify.svg"; 
import figma from "../../../images/figma-1.svg"; 
import xd from "../../../images/adobe-xd-1.svg"; 


const Skills = () => {
  return (
    <div className="skills  ">
       <div className="about-me">
          <h2>
            S K I L S
          </h2>
        </div>
     <div className="skills-bg container-fluid"></div>
      
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="skill-box col-md-4 text-center p-5">
            <div className="heading text-center ">
              <p>Frontend</p>
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={react} alt="" />
                <p>React</p>
              </div>
              <div className="tiny-box">
                <img src={HTML} alt="" />
                <p>HTML</p>
              </div>
              <div className="tiny-box">
                <img src={bootstrap} alt="" />
                <p>Bootstrap</p>
              </div>
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={sass} alt="" />
                <p>Sass</p>
              </div>
              <div className="tiny-box">
                <img src={css} alt="" />
                <p>CSS</p>
              </div>
              <div className="tiny-box">
                <img src={material} alt="" />
                <p>Material Ui</p>
              </div>
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={js} alt="" />
                <p>Javascript</p>
              </div>
              <div className="tiny-box">
                <img src={redux} alt="" />
                <p>Redux</p>
              </div>
              <div className="tiny-box">
                <img src={tail} alt="" />
                <p>Tailwind css</p>
              </div>
            </div>
          </div>
          <div className="skill-box col-md-4 text-center p-5">
            <div className="heading text-center ">
              <p>Backend</p>
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={node} alt="" />
                <p>Node Js</p>
              </div>
              <div className="tiny-box">
                <img src={mongodb} alt="" />
                <p>mongoDB</p>
              </div>
             
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={firebase} alt="" />
                <p>Firebase</p>
              </div>
            
              <div className="tiny-box">
                <img src={graphql} alt="" />
                <p>GraphQL</p>
              </div>
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={heroku} alt="" />
                <p>Heroku</p>
              </div>
              <div className="tiny-box">
                <img src={express} alt="" />
                <p>Express Js</p>
              </div>           
            </div>
          </div>
          <div className="skill-box col-md-4 text-center p-5">
            <div className="heading text-center ">
              <p>Tools</p>
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={vs} alt="" />
                <p>Vs COde</p>
              </div>
              <div className="tiny-box">
                <img src={git} alt="" />
                <p>Git</p>
              </div>
              <div className="tiny-box">
                <img src={github} alt="" />
                <p>Github</p>
              </div>
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={chomedev} alt="" />
                <p>Chrome Dev</p>
              </div>
              <div className="tiny-box">
                <img src={netlify} alt="" />
                <p>Netlify</p>
              </div>
              <div className="tiny-box">
                <img src={figma} alt="" />
                <p>Figma</p>
              </div>
            </div>
            <div className="slice">
              <div className="tiny-box">
                <img src={xd} alt="" />
                <p>Adobe XD</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Skills;
