import React, { useEffect } from "react";
import { UseCustomeHook } from "../../Store/MyDataProvider";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Logout() {
  const { forRemoveToken, LoggedIn } = UseCustomeHook();

  useEffect(() => {
    if (LoggedIn) {
      forRemoveToken();
      toast.success("logut sucessfully");
    } else {
      toast.error("please register or login before logout");
    }
  }, [forRemoveToken, LoggedIn]);

  return LoggedIn ? (
    <Navigate to="/register" />
  ) : (
    <Navigate to="/PageNotFound" />
  );
}

export default Logout;
