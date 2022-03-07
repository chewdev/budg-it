import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Header from "../components/Header";

export const PrivateRoute = ({ children }) => {
  const params = useParams();
  const isAuth = useSelector((state) => !!state.auth.uid);
  return isAuth ? (
    <div>
      <Header></Header>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { match: { params } });
      })}
    </div>
  ) : (
    <Navigate replace to="/" />
  );
};

export default PrivateRoute;
