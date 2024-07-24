import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaRegSnowflake } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { GiEagleEmblem } from "react-icons/gi";
import "./MyNavbar.css";
import { UseCustomeHook } from "../../Store/MyDataProvider";

function MyNavbar() {
  // this is for the close navbar on click any navlink
  const [isClick, setClick] = useState(false);
  const [admin, setAdmin] = useState(false);

  //this is for the useref
  const myRef = useRef(null);

  //this is for admin
  const { user, LoggedIn } = UseCustomeHook();

  //this is for getting
  useEffect(() => {
    if (user) {
      setAdmin(user.isAdmin);
      console.log("in useeffect", admin);
    }
  }, [admin, user]);
  // this is function for the handleNavlink

  const handleClickNavLink = () => {
    if (isClick) {
      myRef.current.classList.remove("show");
    }
  };

  //this is for the toggler button click
  const handleTogglerClick = () => {
    setClick(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand my-brand" to="#">
            <span className="for-logo">
              <GiEagleEmblem className="my-logo" />
            </span>
            <span>
              <FaRegSnowflake className="flag" />
            </span>
            .Riaz Mern.
            <span>
              <FaRegSnowflake className="flag" />
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleTogglerClick}
          >
            <span className=" my-icon">
              <IoMenu />
            </span>
          </button>
          <div
            className={`collapse navbar-collapse`}
            ref={myRef}
            id="navbarNav"
          >
            <ul className="navbar-nav  ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  onClick={handleClickNavLink}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  onClick={handleClickNavLink}
                >
                  About
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className="nav-link"
                  onClick={handleClickNavLink}
                >
                  Projects
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  onClick={handleClickNavLink}
                >
                  Services
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  onClick={handleClickNavLink}
                >
                  Contact
                </NavLink>
              </li>{" "}
              {LoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/user/logout"
                    className="nav-link"
                    onClick={handleClickNavLink}
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/register"
                      className="nav-link"
                      onClick={handleClickNavLink}
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      onClick={handleClickNavLink}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
              {admin && (
                <li className="nav-item">
                  <NavLink
                    to="/admin"
                    className="nav-link"
                    onClick={handleClickNavLink}
                  >
                    Admin
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
