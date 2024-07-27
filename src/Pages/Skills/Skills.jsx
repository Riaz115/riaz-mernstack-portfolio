import React from "react";
import "./Skills.css";
import htmlImage from "../../assests/skills/html.png";
import cssImage from "../../assests/skills/css.png";
import bootstrapeImage from "../../assests/skills/bootstrapes.jpeg";
import jsImage from "../../assests/skills/javascript.png";
import reactImage from "../../assests/skills/react.png";
import reduxImage from "../../assests/skills/redux.webp";
import nodeImage from "../../assests/skills/node.png";
import expressImage from "../../assests/skills/express.png";
import mongodb from "../../assests/skills/mongodb.jpeg";
import restApiImage from "../../assests/skills/restapi.png";
import mongooseImage from "../../assests/skills/mongoose.png";
import githubImage from "../../assests/skills/github.jpeg";
import vscodeImage from "../../assests/skills/vscode.jpeg";
import mongodbCompass from "../../assests/skills/mongoCompass.png";
import postManImage from "../../assests/skills/postman.png";
import gitImage from "../../assests/skills/git.png";
import chromeImage from "../../assests/skills/chrome.png";
import chatgptImage from "../../assests/skills/chatgpt.jpeg";

function Skills() {
  const myFrontEndSkills = [
    {
      image: htmlImage,
      title: "html",
    },
    {
      image: cssImage,
      title: "css",
    },
    {
      image: bootstrapeImage,
      title: "bootstrapes",
    },
    {
      image: jsImage,
      title: "Javascript",
    },
    {
      image: reactImage,
      title: "React",
    },
    {
      image: reduxImage,
      title: "Redux",
    },
  ];

  const myBackendSkills = [
    {
      image: nodeImage,
      title: "Node.js",
    },
    {
      image: expressImage,
      title: "express.js",
    },
    {
      image: mongodb,
      title: "mongoDB",
    },
    {
      image: restApiImage,
      title: "restAPI",
    },
    {
      image: mongooseImage,
      title: "mongoose",
    },
    {
      image: githubImage,
      title: "github",
    },
  ];

  const mySoftwares = [
    {
      image: vscodeImage,
      title: "vsCode",
    },

    {
      image: mongodbCompass,
      title: "mongodb compass",
    },
    {
      image: postManImage,
      title: "postman",
    },
    {
      image: gitImage,
      title: "git",
    },
    {
      image: chromeImage,
      title: "chrome",
    },
    {
      image: chatgptImage,
      title: "chatGPT",
    },
  ];

  return (
    <>
      <section className="skills ">
        <div className="container">
          <h1 className="for-heading">skills</h1>
          <div className="row">
            <h1 className="skill-heading text-capitalize ">front end</h1>
            {myFrontEndSkills.map((item, index) => (
              <div className="my-skills col-lg-2 col-md-4  col-6" key={index}>
                <div className="for-image ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
                <p className="title">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="row">
            <h1 className="skill-heading text-capitalize ">backend</h1>
            {myBackendSkills.map((item, index) => (
              <div className="my-skills col-lg-2 col-md-4  col-6" key={index}>
                <div className="for-image ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
                <p className="title">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="row">
            <h1 className="skill-heading text-capitalize ">tools & software</h1>
            {mySoftwares.map((item, index) => (
              <div className="my-skills col-lg-2 col-md-4  col-6" key={index}>
                <div className="for-image ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
                <p className="title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
