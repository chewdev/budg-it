import React from "react";
import { useNavigate } from "react-router-dom";

export function withNavigate(Component) {
  function ComponentWithNavigateProp(props) {
    let navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }
  return ComponentWithNavigateProp;
}
