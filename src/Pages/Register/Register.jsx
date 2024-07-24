import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assests/Register/registerImage.png";
import validator from "validator";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../Store/MyDataProvider";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState(null);
  const [Errors, setErorrs] = useState({});

  //this is for the custom hook
  const { forStoreToken } = UseCustomeHook();

  //this is for the navigation
  const navigate = useNavigate();

  //this is function for the catching error
  const CatchErrors = () => {
    let isOk = true;
    let NewError = {};

    if (name.length < 3) {
      NewError.name = "Name should be three letters";
      toast.error("name should be minimum three letters");
      isOk = false;
    } else if (!validator.isEmail(email)) {
      NewError.email = "Please enter valid email";
      toast.error("invalid Email please enter valid email");
      isOk = false;
    } else if (phone.length < 11) {
      NewError.phone = "number should be eleven letters";
      toast.error("phone number must should be eleven letters");
      isOk = false;
    } else if (password.length < 6) {
      NewError.password = "password should be six letters";
      toast.error("password must should be minimum six letters");
      isOk = false;
    } else if (confirmPassword !== password) {
      NewError.confirmPassword = "password is inncorrect";
      toast.error("password not match ");
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
        password,
        confirmPassword,
      };
      setFormData(formData);

      //this is for send and store data in database api function
      const forSendata = async () => {
        const url = "http://localhost:5000/register";
        const sendOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        };
        try {
          const response = await fetch(url, sendOptions);
          const data = await response.json();

          if (response.ok) {
            forStoreToken(data.token);
            toast.success("registered successfully");
            setFormData("");
            navigate("/");
          } else {
            toast.error(data.emailmsg);
            const NewError = {};
            NewError.email = data.emailmsg;
            setErorrs(NewError);
          }
        } catch (err) {
          console.log(`there is error in the register ${err}`);
        }
      };

      forSendata();
    }
  };

  return (
    <>
      <section className="register">
        <div className="container">
          <h1 className="heading ">Register Now</h1>
          <div className="row">
            <div className="col-lg-6 right-side">
              <div className="for-image">
                <img
                  src={registerImage}
                  alt="register img"
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
                <div className="every-div">
                  <label htmlFor="password" className="for-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="for-input"
                    placeholder="enter your password"
                    autoComplete="false"
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {Errors.password && (
                    <p className="for-error">{Errors.password}</p>
                  )}
                </div>
                <div className="every-div">
                  <label htmlFor="confirm-password" className="for-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="for-input"
                    placeholder="confirm password"
                    name="confirm-password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  {Errors.confirmPassword && (
                    <p className="for-error">{Errors.confirmPassword}</p>
                  )}
                </div>
                <Link
                  to="#"
                  type="submit"
                  className="for-btn"
                  onClick={handleSubmit}
                >
                  Register
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
