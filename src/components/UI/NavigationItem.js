import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = props => {
  return (
    <Link className={props.nameOfClass} to={props.to}>
      {props.children}
    </Link>
  );
};

export default NavigationItem;
