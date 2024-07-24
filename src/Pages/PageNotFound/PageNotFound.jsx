import React from "react";
import "./PageNotFound.css";
import PageNotFoundImage from "../../assests/PageNotFound/PageNotFound.jpg";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <section className="PageNotFound">
        <div className="for-image">
          <img
            src={PageNotFoundImage}
            alt="page not found img"
            className="img-fluid"
          />
        </div>
        <div className="btn-div">
          <Link to="/" className="home-btn">
            Back To Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
