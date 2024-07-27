import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../../assests/Home/HomeImage.jpg";
import "./Home.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 for-col left-side">
              <p className="top-text text-capitalize">
                my name is muhammad riaz ahmad
              </p>
              <h2 className="heading text-capitalize">
                i am <span className="text-info">MERN</span> stack developer
              </h2>
              <p className="para text-capitalize">
                welcome to my portfolio! i am a passionate MERN stack developer
                specializing in building dynamic, full stack web applications
                With expertise in MongoDB, Express.js, React and Node.js. i
                craft seamless and scalable solutions. Explore my projects to
                see how i turn innovative ideas into interactive
                high-performance digital experiences.
              </p>
              <div className="forBtn">
                <Link to="/contact" className="for-button text-capitalize">
                  download resume
                </Link>
                <Link to="/about" className="for-button about-btn">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 right-side">
              <div className="for-image">
                <img
                  src={homeImage}
                  alt="this is home section img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* counter section */}
      <section className="counter">
        <div className="container for-container">
          <div className="row text-center">
            <div className="for-div col-md-3">
              <h1 className="number">50+</h1>
              <p className="para">Registerd Companies</p>
            </div>
            <div className="for-div col-md-3">
              <h1 className="number">10000+</h1>
              <p className="para">happy clients</p>
            </div>{" "}
            <div className="for-div col-md-3">
              <h1 className="number">500+</h1>
              <p className="para">well knonw developers</p>
            </div>{" "}
            <div className="for-div col-md-3">
              <h1 className="number">24/7</h1>
              <p className="para">services</p>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
