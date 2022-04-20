import React from "react";
import Contact from "../../Shared/Contact/Contact";
import Skills from "../Skills/Skills";
import Navbar from "./../../Shared/Navbar/Navbar";
import HeaderMain from "./../HeaderMain/HeaderMain";
import "./Home.css";
import Projects from "./../Projects/Projects";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="bg">
        <Navbar />
        <HeaderMain />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
