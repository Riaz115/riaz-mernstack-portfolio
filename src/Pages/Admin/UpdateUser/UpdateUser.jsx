import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import updateUserImage from "../../../assests/Register/registerImage.png";
import validator from "validator";
import "./UpdateUser.css";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../../Store/MyDataProvider";

function UpdateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState("");
  const [Errors, setErorrs] = useState({});

  //for navigation
  const navigate = useNavigate();

  //this is for user
  const { user, token } = UseCustomeHook();

  //this is for getting id from url
  const { id } = useParams();

  //this is for get user data with id
  const forGetUserData = async () => {
    const url = `https://riaz-portfolio-backend.vercel.app/admin/user/${id}/update`;
    const myOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, myOptions);
      const data = await response.json();

      if (response.ok) {
        setName(data.myUser.name);
        setEmail(data.myUser.email);
        setPhone(data.myUser.phone);
      } else {
        console.log(data, "error data");
      }
    } catch (err) {
      console.log("there is error in the user data get by id part ", err);
    }
  };

  //for getting
  useEffect(() => {
    forGetUserData();
  }, []);

  //this is for check admin
  if (!user.isAdmin) {
    toast.error("you are not admin");
    return <Navigate to="/PageNotFound" />;
  }

  //this is function for the catching error
  const CatchErrors = () => {
    let isOk = true;
    let NewError = {};

    if (name.length < 3) {
      NewError.name = "Name should be three letters";
      isOk = false;
    } else if (!validator.isEmail(email)) {
      NewError.email = "Please enter valid email";
      isOk = false;
    } else if (phone.length < 11) {
      NewError.phone = "number should be eleven letters";
      isOk = false;
    }
    setErorrs(NewError);
    return isOk;
  };

  //this is function for the handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (CatchErrors()) {
      const formData = {
        name,
        email,
        phone,
      };
      setFormData(formData);

      //this is for update user by id
      const updateUserById = async () => {
        const url = `https://riaz-portfolio-backend.vercel.app/admin/user/${id}`;
        const myOptions = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        };

        try {
          const response = await fetch(url, myOptions);
          const data = await response.json();

          if (response.ok) {
            toast.success("updated successfully");
            navigate("/admin/user");
          } else {
            console.log(data, "error data");
          }
        } catch (err) {
          console.log(
            "there is error in the user data update by id part ",
            err
          );
        }
      };

      updateUserById();
    }
  };

  return (
    <>
      <section className="updateUser">
        <div className="container">
          <h1 className="heading ">updateUser Now</h1>
          <div className="row">
            <div className="col-lg-6 right-side">
              <div className="for-image">
                <img
                  src={updateUserImage}
                  alt="updateUser img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 left-side">
              <form className="my-form" onSubmit={handleSubmit}>
                <div className="every-div">
                  <label htmlFor="name" className="for-label">
                    UserName
                  </label>
                  <input
                    type="text"
                    value={name}
                    className="for-input"
                    placeholder="enter your name"
                    autoComplete="false"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {Errors.name && <p className="for-error">{Errors.name}</p>}
                </div>
                <div className="every-div">
                  <label htmlFor="Email" className="for-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    autoComplete="false"
                    className="for-input"
                    placeholder="enter your email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {Errors.email && <p className="for-error">{Errors.email}</p>}
                </div>
                <div className="every-div">
                  <label htmlFor="phone" className="for-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    value={phone}
                    className="for-input"
                    placeholder="enter your phone number"
                    name="phone"
                    autoComplete="false"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  {Errors.phone && <p className="for-error">{Errors.phone}</p>}
                </div>

                <Link
                  to="#"
                  type="submit"
                  className="for-btn"
                  onClick={handleSubmit}
                >
                  Update
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateUser;
