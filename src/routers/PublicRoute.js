import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const isAuth = useSelector((state) => !!state.auth.uid);
  return isAuth ? <Navigate replace to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
