import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ContactAdmin.css";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../../Store/MyDataProvider";

function ContactAdmin() {
  //this is for looping
  const [contacts, setContacts] = useState([]);

  //this is for the custoom hook
  const { token } = UseCustomeHook();

  //this is for the get data from contact section
  const forGetContacts = async () => {
    const url = "http://localhost:5000/admin/contacts";
    const forOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, forOptions);
      const data = await response.json();

      if (response.ok) {
        setContacts(data.getContactData);
      } else {
        console.log(data, "error data");
        toast.error(data.msg);
      }
    } catch (err) {
      console.log("there is error in admin contact get function ", err);
    }
  };

  //this is for the delete
  const forContactDelete = async (id) => {
    const url = `http://localhost:5000/admin/contacts/${id}`;
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
        forGetContacts();
        toast.success("Contact Deleted successfully");
      } else {
        console.log(data, "error part");
      }
    } catch (err) {
      console.log("there is error in admin contact  delete function ", err);
    }
  };

  //for getting
  useEffect(() => {
    forGetContacts();
  }, []);

  return (
    <>
      <section className="contact">
        <div className="container">
          <h1 className="contact-heading">Contacts</h1>
          <div className="row">
            {contacts.map((item, index) => (
              <div className=" col-md-6 my-col" key={index}>
                <div className="for-contact">
                  <p className="for-text text-capitalize">{item.name}</p>
                  <p className="for-text text-capitalize">{item.email}</p>
                  <p className="for-text msg">{item.msg}</p>
                  <div className="my-btn">
                    <Link
                      to="#"
                      className=" for-btn"
                      onClick={() => {
                        forContactDelete(item._id);
                      }}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactAdmin;
