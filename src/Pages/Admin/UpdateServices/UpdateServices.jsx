import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, Navigate } from "react-router-dom";
import "./UpdateServices.css";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../../Store/MyDataProvider";

function UpdateServices() {
  //varibles
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amountFrom, setAmountFrom] = useState("");
  const [amountTo, setAmountTo] = useState("");
  const [formData, setFormData] = useState({});
  const [Errors, setErrors] = useState({});

  //this is for the admin check
  const { user, token } = UseCustomeHook();

  //this is for the get id
  const { id } = useParams();
  console.log(id);

  //this is for navigate
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

  //this is for the get data of all services
  const forGetService = async () => {
    const url = `https://riaz-portfolio-backend.vercel.app/admin/services/${id}/update`;
    const forOptions = {
      methode: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, forOptions);
      const data = await response.json();

      if (response.ok) {
        console.log(data.myService, "ok data");
        setTitle(data.myService.title);
        setSubTitle(data.myService.subtitle);
        setDescription(data.myService.description);
        setAmountFrom(data.myService.amountFrom);
        setAmountTo(data.myService.amountTo);
      } else {
        console.log(data, "error data");
      }
    } catch (err) {
      console.log("there is error in the get services data function", err);
    }
  };

  //for getting
  useEffect(() => {
    forGetService();
  }, []);

  //this is for not admin
  if (!user.isAdmin) {
    toast.error("you are not admin");
    return <Navigate to="/pageNotFound" />;
  }

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
      console.log(formData);

      //this is for the service updaate
      const forUpdateService = async () => {
        const url = `https://riaz-portfolio-backend.vercel.app/admin/services/${id}`;
        const funOptions = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        };

        try {
          const response = await fetch(url, funOptions);
          const data = await response.json();

          if (response.ok) {
            toast.success("Service update successfully");
            navigate("/services");
          } else {
            console.log(data, "error data");
          }
        } catch (err) {
          console.log(
            "there is error in the update services data function",
            err
          );
        }
      };

      forUpdateService();
    }
  };

  return (
    <>
      <section className="update-services ">
        <div className="container">
          <h1 className="heading">Update Services</h1>
          <div className="row">
            <div className="for-form col-lg-10  ">
              <form className="my-form ">
                <div className="every-div">
                  <label htmlFor="title" className="for-label">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
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
                    value={subtitle}
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
                    value={description}
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
                    value={amountFrom}
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
                    value={amountTo}
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
                    Update
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

export default UpdateServices;
