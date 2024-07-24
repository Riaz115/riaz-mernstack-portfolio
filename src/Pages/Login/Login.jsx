import React, { useState } from "react";
import "./Login.css";
import validator from "validator";
import loginImage from "../../assests/Login/LoginImage.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../Store/MyDataProvider";

function Login() {
  const [email, setMyEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formDatas, setFormData] = useState(null);
  const [Errors, setErorrs] = useState({});

  //this is for navigate
  const navigate = useNavigate();

  //this is for generate token
  const { forStoreToken } = UseCustomeHook();

  //this is function for the catching error
  const CatchErrors = () => {
    let isOk = true;
    let NewError = {};

    if (!validator.isEmail(email)) {
      NewError.email = "Please enter valid email";
      toast.error("Invalid email ");
      isOk = false;
    } else if (password.length < 6) {
      NewError.password = "password should be six letters";
      toast.error("password should be minimum six letters ");
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
        email,
        password,
      };
      setFormData(formData);

      //this is for login backend
      const forLoginApi = async () => {
        const url = "https://riaz-portfolio-backend.vercel.app/login";
        const loginOption = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        };

        try {
          const response = await fetch(url, loginOption);
          const data = await response.json();

          if (response.ok) {
            forStoreToken(data.token);
            toast.success(data.msg);
            setFormData("");
            navigate("/");
          } else {
            toast.error(data.msg);
            toast.error(data.emailmsg);
            const NewError = {};
            NewError.email = data.emailmsg;
            NewError.password = data.msg;
            setErorrs(NewError);
          }
        } catch (err) {
          console.log(`there is error in the login api function ${err}`);
        }
      };

      forLoginApi();
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <h1 className="heading text-center">Login</h1>
          <div className="row">
            <div className="col-lg-6 right-side">
              <div className="for-image">
                <img
                  src={loginImage}
                  alt="register img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 left-side">
              <form
                className="my-form my-auto"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className="every-div">
                  <label htmlFor="Email" className="for-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="for-input"
                    placeholder="enter your email"
                    name="email"
                    autoComplete="off"
                    onChange={(e) => {
                      setMyEmail(e.target.value);
                    }}
                  />
                  {Errors.email && <p className="for-error">{Errors.email}</p>}
                </div>
                <div className="every-div">
                  <label htmlFor="password" className="for-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="for-input"
                    placeholder="enter your password"
                    autoComplete="off"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {Errors.password && (
                    <p className="for-error">{Errors.password}</p>
                  )}
                </div>

                <Link
                  to="#"
                  type="submit"
                  className="for-btn"
                  onClick={handleSubmit}
                >
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
