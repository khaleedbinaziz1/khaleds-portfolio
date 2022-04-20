import "./Projects.css";
import React, { Component } from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div id="projects" className="portfolio">
      
        <div className="port">
        <div className="about-me mb-5">
          <h2>
            P O R T F O L I O
          </h2>
        </div>
        </div>
        <div className="projects container p-5 text-center ">
        <div className="port-menu">
          <li><a href="">ALL</a></li>
          <li><a href="">CODED</a></li>
          <li><a href="">DESIGNED</a></li>
        </div>
        
          <Slider {...settings}>
            <div className="projects-box">
              <img src="https://i.ibb.co/tLZWjQB/screenshot.png" alt="" />
              <h5>Tech binary</h5>
              <small>
                A responsive E-service provider website with backend integrated.
              </small>
              <br />
              <a
                className="projects-btn"
                href="https://authentication1-recap.web.app"
              >
                Visit Website
              </a>
            </div>
            <div className="projects-box">
              <img src="https://i.ibb.co/nfn1jGD/ecommerce.png" alt="" />
              <h5>E-commerce</h5>
              <small>A fully functional E-Commerce website.</small>
              <br />
              <a className="projects-btn" href="https://e-comerze.netlify.app/">
                Visit Website
              </a>
            </div>

            <div className="projects-box">
              <img src="https://i.ibb.co/9cRS7PS/screenshot3.png" alt="" />
              <h5>Doctors portal</h5>
              <small>A responsive medical service provider website.</small>
              <br />
              <a
                className="projects-btn"
                href="https://dentistportal.netlify.app/"
              >
                Visit Website
              </a>
            </div>
            <div className="projects-box">
              <img src="https://i.ibb.co/r2cshjF/screenshot4.png" alt="" />
              <h5>Meal Db</h5>
              <small>
                A food website with searchbar and backend integrated.
              </small>
              <br />
              <a
                className="projects-btn"
                href="https://khaleedbinaziz1.github.io/Assignment5re/"
              >
                Visit Website
              </a>
            </div>
            <div className="projects-box">
              <img src="https://i.ibb.co/QdHCLyJ/screenshot1.png" alt="" />
              <h5>portfolio website</h5>
              <small>A Responsive portfolio website made with react js.</small>
              <br />
              <a
                className="projects-btn"
                href="https://distracted-archimedes-db9f0c.netlify.app/"
              >
                Visit Website
              </a>
            </div>
            <div className="projects-box">
              <img src="https://i.ibb.co/tLZWjQB/screenshot.png" alt="" />
              <h5>Tech binary</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </small>
              <br />
              <Link className="projects-btn" to="/">
                Visit Website
              </Link>
            </div>
            <div className="projects-box">
              <img src="https://i.ibb.co/tLZWjQB/screenshot.png" alt="" />
              <h5>Tech binary</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </small>
              <br />
              <Link className="projects-btn" to="/">
                Visit Website
              </Link>
            </div>
            <div className="projects-box">
              <img src="https://i.ibb.co/tLZWjQB/screenshot.png" alt="" />
              <h5>Tech binary</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </small>
              <br />
              <Link className="projects-btn" to="/">
                Visit Website
              </Link>
            </div>
            <div className="projects-box">
              <img src="https://i.ibb.co/tLZWjQB/screenshot.png" alt="" />
              <h5>Tech binary</h5>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </small>
              <br />
              <Link className="projects-btn" to="/">
                Visit Website
              </Link>
            </div>
          </Slider>
          <h5 style={{marginTop: '50px'}}>And many more to come!</h5>
        </div>
      </div>
    );
  }
}
