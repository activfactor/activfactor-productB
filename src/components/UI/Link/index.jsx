import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.scss';

const Button = (props) => {
    return (
        <Link to={props.to} className={`${props.nameOfClass ? props.nameOfClass : classes.input}`} onClick={props.onClick} >
          {props.children}
        </Link>
    );
}

export default Button;