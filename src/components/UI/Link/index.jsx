import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.to} className={`${props.nameOfClass ? props.nameOfClass : 'btn btn-link'}`} onClick={props.onClick} >
          {props.children}
        </Link>
    );
}

export default Button;