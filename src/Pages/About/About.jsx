import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../assests/About/AboutImage.jpg";
import "./About.css";
import { UseCustomeHook } from "../../Store/MyDataProvider";
function About() {
  const { user } = UseCustomeHook();

  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 for-col left-side">
            <p className="top-text text-capitalize">
              welcome to my website
              <span className="user-name"> {user.name} </span>
            </p>
            <h2 className="heading text-capitalize">why choose us?</h2>
            <p className="for-text text-capitalize first-para">
              experties: our team consist of experienced IT Professionals who
              are professional about staying up-to-data with the latest industry
              trends.
            </p>
            <p className="for-text text-capitalize">
              customization: we understand that every bussiness is unique.
              that's why we create solutions that are declared to your specific
              needs and goals.
            </p>
            <p className="for-text text-capitalize">
              customer-Contric approach: we priortize your satisfication and
              provide top-match support to address your IT conerns
            </p>
            <p className="for-text text-capitalize">
              afordability : we offer competitive prices without compromising on
              the quality of services
            </p>
            <p className="for-text text-capitalize">
              relability : count on us to be there when you are need us . we are
              committed to ensuring your IT environment is reliable
            </p>
            <div className="forBtn">
              <Link to="/contact" className="for-button">
                Contact Now
              </Link>
              <Link to="/services" className="for-button about-btn">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 right-side">
            <div className="for-image">
              <img
                src={aboutImage}
                alt="this is about section img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
