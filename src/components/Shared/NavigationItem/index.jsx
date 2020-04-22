import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = props => {
  return (
    <NavLink onClick={props.onClick} className={props.nameOfClass} to={props.to} nameOfClass="active">
      {props.children}
    </NavLink>
  );
};

export default NavigationItem;
