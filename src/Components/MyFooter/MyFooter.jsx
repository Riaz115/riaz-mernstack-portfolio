import React from "react";
import { Link } from "react-router-dom";
import "./MyFooter.css";
import {
  FaLinkedin,
  FaGithub,
  FaSquareWhatsapp,
  FaSquareFacebook,
} from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

function MyFooter() {
  return (
    <>
      <footer className="text-center">
        <div className="for-links">
          <div className="every-link">
            <Link
              to="https://www.linkedin.com/in/riaz-ahmad-690870308"
              target="/blank"
            >
              <span>
                <FaLinkedin className="icon " />
              </span>
            </Link>
          </div>
          <div className="every-link">
            <Link to="https://www.github.com/riaz115" target="/blank">
              <span>
                <FaGithub className="icon" />
              </span>
            </Link>
          </div>
          <div className="every-link">
            <Link to="https://wa.me/+9203280182715" target="/blank">
              <span>
                <FaSquareWhatsapp className="icon" />
              </span>
            </Link>
          </div>
          <div className="every-link">
            <Link
              to="https://www.facebook.com/profile.php?id=61558080662338&mibextid=kFxxJD"
              target="/blank"
            >
              <span>
                <FaSquareFacebook className="icon" />
              </span>
            </Link>
          </div>
          <div className="every-link">
            <Link to="mailto:riaz90603@gmail.com" target="/blank">
              <span>
                <IoMdMailUnread className="icon" />
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MyFooter;
