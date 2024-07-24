import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./MyAdmin.css";
import UserAdmin from "../UserAdmin/UserAdmin";
import ContactAdmin from "../ContactAdmin/ContactAdmin";
import ServicesAdmin from "../ServicesAdmin/ServicesAdmin";
import { UseCustomeHook } from "../../../Store/MyDataProvider";
import { toast } from "react-toastify";

function MyAdmin() {
  const [forUser, setForUser] = useState(true);
  const [forContact, setForContact] = useState(false);
  const [forServices, setForServices] = useState(false);

  //this is for user
  const { user } = UseCustomeHook();

  //this is for check admin
  if (!user.isAdmin) {
    toast.error("you are not admin");
    return <Navigate to="/pageNotFound" />;
  }

  //this is for the user
  const handleUser = () => {
    setForUser(true);
    setForContact(false);
    setForServices(false);
  };

  //this is for the contact
  const handleContact = () => {
    setForContact(true);
    setForUser(false);
    setForServices(false);
  };

  //this is for services
  const handleServices = () => {
    setForServices(true);
    setForUser(false);
    setForContact(false);
  };

  return (
    <>
      <section className="admin">
        <div className="container-fluid">
          <div className="row">
            <h1 className="for-heading text-capitalize text-center">
              welcome to the admin panel
            </h1>
            <div className="col-lg-2 for-col">
              <div className="for-navbar">
                <div className="for-links">
                  <div className="link">
                    <Link
                      to="user"
                      className="my-link for-btn"
                      onClick={handleUser}
                    >
                      MyUsers
                    </Link>
                  </div>
                  <div className="link">
                    <Link
                      to="contact"
                      className="my-link for-btn"
                      onClick={handleContact}
                    >
                      Contacts
                    </Link>
                  </div>
                  <div className="link">
                    <Link
                      to="services"
                      className="my-link for-btn"
                      onClick={handleServices}
                    >
                      Services
                    </Link>
                  </div>{" "}
                  <div className="link">
                    <Link to="/" className="my-link for-btn">
                      ToHome
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 right-side">
              {forUser && <UserAdmin />}
              {forContact && <ContactAdmin />}
              {forServices && <ServicesAdmin />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAdmin;
