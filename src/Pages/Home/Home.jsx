import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../../assests/Home/HomeImage.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 for-col left-side">
              <p className="top-text text-capitalize">
                we are the world best IT company
              </p>
              <h2 className="heading text-capitalize">
                welcome to serani tech house
              </h2>
              <p className="para text-capitalize">
                are you ready to make your bussinessto the next level with
                cutting-edge it solutions? look no further at serani tech house.
                we specialize providing innovative IT services and solutions to
                meet your unique needs.
              </p>
              <div className="forBtn">
                <Link to="/contact" className="for-button">
                  Contact Now
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
    </>
  );
}

export default Home;
