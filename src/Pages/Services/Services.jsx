import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import serviceImage from "../../assests/Services/services.jpeg";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../Store/MyDataProvider";

function Services() {
  const ServicesImage = serviceImage;

  //this is for looping
  const [serviceData, setServicesData] = useState([]);

  //this is for admin
  const { user, token } = UseCustomeHook();

  //this is for get servcies
  const forGetServices = async () => {
    const url = "http://localhost:5000/services";
    const forOptions = {
      method: "GET",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(url, forOptions);
      const data = await response.json();

      if (response.ok) {
        setServicesData(data.services);
      } else {
        console.log(data, "error data");
      }
    } catch (err) {
      console.log("there is error in the service page ", err);
    }
  };

  //this is for the delete service
  const forDeleteService = async (id) => {
    const url = `http://localhost:5000/admin/service/${id}`;
    const forOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, forOptions);
      const data = await response.json();

      if (response.ok) {
        forGetServices();
        toast.success("deleted successfully");
      } else {
        console.log(data, "error data");
      }
    } catch (err) {
      console.log("there is error in the service delete function", err);
    }
  };

  //this is for get data
  useEffect(() => {
    forGetServices();
  }, []);

  return (
    <>
      <section className="services">
        <div className="container">
          <h1 className="heading">Services</h1>
          <div className="row">
            {serviceData.map((item, index) => (
              <div className="col-lg-4 col-md-6 for-div" key={index}>
                <div className="for-all">
                  <div className="for-image">
                    <img
                      src={ServicesImage}
                      alt=" servicesImage"
                      className="img-fluid"
                    />
                  </div>
                  <div className="for-text-plus-price mb-0">
                    <p className="sub-title text-capitalize mb-0">
                      {item.subtitle}
                    </p>
                    <p className="price">
                      <span className="from">${item.amountFrom} </span>-{" "}
                      <span className="to">${item.amountTo}</span>
                    </p>
                  </div>
                  <div className="for-title">
                    <p className="title text-capitalize">{item.title}</p>
                  </div>
                  <div className="for-desc">
                    <p className="desc">{item.description}</p>
                  </div>

                  {user.isAdmin && (
                    <div className="for-btns">
                      <Link
                        to={`/admin/services/${item._id}/update`}
                        className="for-btn"
                      >
                        Update
                      </Link>
                      <Link
                        to="#"
                        className=" del-btn for-btn"
                        onClick={() => forDeleteService(item._id)}
                      >
                        Delete
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
