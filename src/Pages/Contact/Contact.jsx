import React, { useEffect, useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import validator from "validator";
import contactImage from "../../assests/Contact/contactImage.png";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../Store/MyDataProvider";

function Contact() {
  //this is usestate hook for the contact data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [contactData, setContactData] = useState("");
  const [error, setErrors] = useState({});
  const [forUser, setForUser] = useState(true);

  //this is for get token
  const { token, user } = UseCustomeHook();

  //for gettting
  useEffect(() => {
    if (forUser && user) {
      setName(user.name);
      setEmail(user.email);
      setForUser(false);
    }
  }, [forUser, user]);

  //const my map url is
  const myMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6874.680794137904!2d73.0705985399153!3d30.51141239199372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922cab20b1ce2bf%3A0xdfa33529449bb3be!2sChak%20115%2F9%20L%2C%20Sahiwal%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1720935195047!5m2!1sen!2s";

  //this is function for the validation
  const catchErrors = () => {
    let newError = {};
    let isOk = true;

    if (name.length < 3) {
      newError.name = "name is required";
      isOk = false;
    } else if (!validator.isEmail(email)) {
      newError.email = "please enter valid email";
      isOk = false;
    } else if (!msg.trim()) {
      newError.msg = "please must enter message";
      toast.error("msg is required");
      isOk = false;
    }

    setErrors(newError);
    return isOk;
  };

  //this is function for the submit button
  const handleSubmit = () => {
    if (catchErrors()) {
      const contactData = {
        name,
        email,
        msg,
      };
      setContactData(contactData);

      //this is for the send contact data
      const forsendContactData = async () => {
        const url = "http://localhost:5000/contact";
        const forOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(contactData),
        };

        try {
          const response = await fetch(url, forOptions);
          const data = await response.json();

          if (response.ok) {
            toast.success("data send successfully");
            setMsg("");
            setName("");
            setEmail("");
          } else {
            toast.error("please register or login");
          }
        } catch (err) {
          console.log("there is error in the contact page", err);
        }
      };

      forsendContactData();
    }
  };

  return (
    <>
      <section className="contact">
        <div className="container">
          <h1 className="heading">Contact Us</h1>
          <div className="row">
            <div className="col-lg-6">
              <div className="for-image">
                <img
                  src={contactImage}
                  alt="contact section img"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 text-center left-side">
              <form className="my-form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="for-label">
                  UserName
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="enter your name here"
                  className="for-input"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {error.name && <p className="for-error">{error.name}</p>}
                <label htmlFor="email" className="for-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="enter your email here"
                  className="for-input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {error.email && <p className="for-error">{error.email}</p>}

                <label htmlFor="msg" className="for-label">
                  Message
                </label>
                <textarea
                  name="msg"
                  value={msg}
                  type="text"
                  id="myMsg"
                  cols="50"
                  className="msg"
                  placeholder="write your messeage here"
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                ></textarea>
                {error.msg && <p className="for-error">{error.msg}</p>}
                <Link
                  to="#"
                  type="submit"
                  className="for-btn"
                  onClick={handleSubmit}
                >
                  Submit
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="for-map">
        <iframe
          src={myMapUrl}
          width="100%"
          height="300"
          title="myMap"
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
