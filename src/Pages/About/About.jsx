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
            <h2 className="heading text-capitalize">i am riaz ahmad</h2>
            <p className="for-text text-capitalize first-para">
              welcome to my portfolio . i am muhammad riaz ahmad, a passionate
              web developer specializing in MERN stack technologies: MongoDB,
              Express.js React and Node.js. With a keen eye for detail and a
              commitment to crafting seamless user experiences.
            </p>
            <p className="for-text text-capitalize">
              i build dynamic and responsive web applications from scratch. my
              portfolio showcases a variety projects, highlighting my
              proficiency in creating scalable, hight performance solutions
              tailored to client needs.
            </p>
            <p className="for-text text-capitalize">
              whether you're looking for a sleek, modern design or complex
              backend functionality, my work reflects a deep understanding of
              both frontend and backend development .
            </p>
            <p className="for-text text-capitalize">
              dive into my projects to see how i leverage the MERN stack to
              bring innovative ideas to life
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
