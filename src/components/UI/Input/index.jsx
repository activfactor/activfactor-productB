import React from 'react';
import classes from './index.module.scss';

const ActionButton = props => {
    return (
        <input className={`${classes.input} ${props.color === 'black' ? classes.black : classes.blue}`} type={props.type} value={props.value} onClick={props.onClick}/>
    );
};

export default ActionButton;