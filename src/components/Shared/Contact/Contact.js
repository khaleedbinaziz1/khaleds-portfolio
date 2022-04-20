import React from "react";
import "./Contact.css";
import * as FaIcons from "react-icons/fa";
import sep from "./../../../images/separatorBlack 1.png";


const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div
        className="contact-me mt-5"
        style={{ fontWeight: "bolder", color: "black" }}
      >
        <h2>C O N C T A C T</h2>
      </div>
      <div className="container">
        <div className="row p-5">
          <div className="col-md-12 text-center contact-box text-dark">
            <small>
              {" "}
              I am from Chittagong, Bangladesh. I always make websites that have
              unique designs and also has a good performance rate.
            </small>
            <p>
              Phone Number:<span className="highlight">+880 1756922708</span>
            </p>
            <p>
              Email:<span className="highlight">khaleedbinaziz@gmail.com</span>
            </p>
          </div>
          <div className="sep">
          <img src={sep} alt="" styles />
          </div>
          <div className="col-md-7 contact-box">
            <form>
              <div class="form-row ">
                <div class="col-md-12 mb-3">
                  <h4>Send A massage</h4>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                    required
                  ></input>
                </div>
                <div class="col-md-12 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    required
                  ></input>
                </div>
                <div class="col-md-12 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Address"
                    required
                  ></input>
                </div>

                <div class="col-md-12 mb-3">
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="Your Massage"
                    required
                  ></textarea>
                </div>
              </div>

              <button class="neon-button" type="submit">
                {" "}
                Send{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
