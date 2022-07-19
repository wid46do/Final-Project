import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Navigate } from "react-router-dom";

function PrivateRoute() {
  const user =
    JSON.parse(localStorage.getItem("token")) === null ? false : true;

  return <>{user ? <Outlet /> : <Navigate to={"/login"} />}</>;
}

export default PrivateRoute;
