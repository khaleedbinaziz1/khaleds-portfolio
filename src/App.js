import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ScaleLoader
from "react-spinners/ScaleLoader";
import Contact from "./components/Shared/Contact/Contact";
import Projects from "./components/Home/Projects/Projects";
import Navbar from "./components/Shared/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/Home/About/About";



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="">
   
      {loading ? (
        <div className="me">
          <ScaleLoader
 size={20} color={"#fff"} loading={loading} />
        </div>
      ) : (
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
   
            </Route>
            <Route path="/about">
              <Navbar />
             <About />
            </Route>
            <Route path="/contact">
              <Navbar />
              <Contact />
            </Route>
            <Route path="/projects">
              <Navbar />
              <Projects />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
