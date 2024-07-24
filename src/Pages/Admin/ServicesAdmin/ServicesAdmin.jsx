import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ServicesAdmin.css";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../../Store/MyDataProvider";

function ServicesAdmin() {
  //varibles
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amountFrom, setAmountFrom] = useState("");
  const [amountTo, setAmountTo] = useState("");
  const [formData, setFormData] = useState({});
  const [Errors, setErrors] = useState({});

  //this is for the auth
  const { token } = UseCustomeHook();

  //this is for the navigate
  const navigate = useNavigate();

  //for catch errors
  const CatchErrors = () => {
    let isOk = true;
    let newError = {};

    if (title.length < 4) {
      newError.title = "title is required";
      isOk = false;
    } else if (!subtitle.trim()) {
      newError.subtitle = "subtitle is required";
      isOk = false;
    } else if (!description.trim()) {
      newError.description = "description is required";
      isOk = false;
    } else if (!amountFrom.trim()) {
      newError.amountFrom = "amount is required";
      isOk = false;
    } else if (!amountTo.trim()) {
      newError.amountTo = "amount is required";
      isOk = false;
    }

    setErrors(newError);
    return isOk;
  };

  //for submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (CatchErrors()) {
      const formData = {
        title,
        subtitle,
        description,
        amountFrom,
        amountTo,
      };
      setFormData(formData);

      //this is create service in database
      const forCreateService = async () => {
        const url = "https://riaz-portfolio-backend.vercel.app/admin/services";
        const ServiceOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        };

        const response = await fetch(url, ServiceOptions);
        const data = await response.json();

        if (response.ok) {
          toast.success("service add successfully");
          navigate("/services");
        } else {
          toast.error(data.msg);
        }

        try {
        } catch (err) {
          console.log("there is error in the admin service function");
        }
      };
      forCreateService();
    }
  };

  return (
    <>
      <section className="admin-services ">
        <div className="container">
          <h1 className="heading">Add to Services</h1>
          <div className="row">
            <div className="for-form col-lg-10 ">
              <form className="my-form ">
                <div className="every-div">
                  <label htmlFor="title" className="for-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="for-input"
                    placeholder="enter your title "
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {Errors.title && <p className="for-errors">{Errors.title}</p>}
                </div>
                <div className="every-div">
                  <label htmlFor="sub-title" className="for-label">
                    Sub Title
                  </label>
                  <input
                    type="text"
                    className="for-input"
                    placeholder="enter your sub title "
                    name="subtitle"
                    onChange={(e) => setSubTitle(e.target.value)}
                  />
                  {Errors.subtitle && (
                    <p className="for-errors">{Errors.subtitle}</p>
                  )}
                </div>
                <div className="every-div">
                  <label htmlFor="description" className="for-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="for-input"
                    placeholder="enter your description "
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {Errors.description && (
                    <p className="for-errors">{Errors.description}</p>
                  )}
                </div>
                <div className="every-div">
                  <label htmlFor="amount-from" className="for-label">
                    Amount From
                  </label>
                  <input
                    type="number"
                    className="for-input"
                    placeholder="enter your amount from "
                    name="amountFrom"
                    onChange={(e) => setAmountFrom(e.target.value)}
                  />
                  {Errors.amountFrom && (
                    <p className="for-errors">{Errors.amountFrom}</p>
                  )}
                </div>
                <div className="every-div">
                  <label htmlFor="amount-to" className="for-label">
                    Amount To
                  </label>
                  <input
                    type="number"
                    className="for-input"
                    placeholder="enter your amount to "
                    name="amountTo"
                    onChange={(e) => setAmountTo(e.target.value)}
                  />
                  {Errors.amountTo && (
                    <p className="for-errors">{Errors.amountTo}</p>
                  )}
                </div>
                <div className="btn-div" onClick={handleSubmit}>
                  <Link to="#" className="for-btn">
                    Create
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesAdmin;
