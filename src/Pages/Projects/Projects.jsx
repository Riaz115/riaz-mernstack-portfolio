import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import weatherImage from "../../assests/projects/weather.jpg";
import quoteImage from "../../assests/projects/quote.png";

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "weather app and portfolio website ",
      description: "this website is made with react node.js and express",
      image: weatherImage,
      demo: "https://my-profile-and-weather-app.vercel.app/weather",
      source: "https://github.com/Riaz115/MyProfileAndWeatherApp.git",
    },

    {
      id: 2,
      title: "quotes generator app and Website ",
      description: "this website is completly made with the  React . js",
      image: quoteImage,
      demo: "https://quoteapp-omega.vercel.app/",
      source: "https://github.com/Riaz115/quoteapp.git",
    },
    {
      id: 3,
      title: "React grow Bussiness  Website ",
      description: "this website is completly made with the React . js",
      image:
        "https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_640.jpg",
      demo: "https://react-project-fully-responsive-bussiness-website.vercel.app/",
      source:
        "https://github.com/Riaz115/React-Project-Fully-Responsive-Bussiness-Website.git",
    },

    {
      id: 4,
      title: "React food and Resturent Website ",
      description: "this website is completly made with the  React . js",
      image:
        "https://cdn.pixabay.com/photo/2018/02/04/17/39/crypto-currency-3130381_640.jpg",
      demo: "https://react-project-food-and-resturent-website.vercel.app/",
      source:
        "https://github.com/Riaz115/React-Project-Food-And-Resturent-Website.git",
    },
    {
      id: 5,
      title: "Social Media Marketing website",
      description: "this website is made with the html css javascript",
      image:
        "https://cdn.pixabay.com/photo/2016/08/16/17/12/skyscrapers-1598418_640.jpg",
      demo: "https://social-media-marketing-website.vercel.app/",
      source: "https://github.com/Riaz115/Social-Media-Marketing-Website.git",
    },
    {
      id: 6,
      title: "The Food  And  Resturent website ",
      description: "this website is made with the html css javascript",
      image:
        "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_640.jpg",
      demo: "https://food-and-resturent-website.vercel.app/",
      source: "https://github.com/Riaz115/Food-And-Resturent-Website.git",
    },
  ];

  return (
    <>
      <section className="projects">
        <div className="container">
          <div className="row">
            <h1 className="heading">Projects</h1>
            {myProjects.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top img-fluid my-image"
                    alt="card img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>

                    <p className="card-text ">{item.description}</p>
                    <Link
                      to={item.source}
                      target="/blank"
                      className="btn btn-primary my-btn"
                    >
                      Code
                    </Link>
                    <Link
                      to={item.demo}
                      target="/blank"
                      className="btn btn-success my-btn"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
