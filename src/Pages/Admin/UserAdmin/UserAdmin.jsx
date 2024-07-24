import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserAdmin.css";
import { toast } from "react-toastify";
import { UseCustomeHook } from "../../../Store/MyDataProvider";

function UserAdmin() {
  //this is for looping
  const [myUser, setMyUser] = useState([]);

  //this is for the token
  const { token } = UseCustomeHook();

  //this is for the get all users
  const forGetAllUsers = async () => {
    const url = "http://localhost:5000/admin/getUser";
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
        setMyUser(data.getUser);
      } else {
        console.log(data, "error data");
        toast.error(data.msg);
      }
    } catch (err) {
      console.log("there is error in the users admin function for get ", err);
    }
  };

  //this is for the deleteu user
  const forDeleteUser = async (id) => {
    const url = `http://localhost:5000/admin/user/${id}`;
    const myOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, myOptions);
      const data = await response.json();

      if (response.ok) {
        forGetAllUsers();
        toast.success("user deleted successfully");
      } else {
        console.log(data, "eror data");
      }
    } catch (err) {
      console.log("there is error in the user delete function", err);
    }
  };

  //for gettting
  useEffect(() => {
    forGetAllUsers();
  }, []);

  return (
    <>
      <section className="user">
        <div className="container">
          <h1 className="heading">Users</h1>
          <div className="row">
            {myUser.map((item, index) => (
              <div className=" col-md-6 my-col" key={index}>
                <div className="for-user">
                  <p className="for-text text-capitalize">{item.name}</p>
                  <p className="for-text text-capitalize">{item.email}</p>
                  <p className="for-text"> {item.phone}</p>
                  <div className="for-btns">
                    <Link
                      to={`/admin/user/${item._id}/update`}
                      className="for-btn"
                    >
                      Update
                    </Link>
                    <Link
                      to="#"
                      className=" del-btn for-btn"
                      onClick={() => forDeleteUser(item._id)}
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

export default UserAdmin;
