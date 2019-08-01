import React from 'react';
import classes from './index.module.scss';

const ActionButton = props => {
    return (
        <input className={`${props.nameOfClass} ${props.kind==='primary' ? classes.primary : classes.outline} ${props.color === 'black' ? classes.black : props.color === 'red' ? classes.red : classes.blue}`} type={props.type} value={props.value} onClick={props.onClick}/>
    );
};

export default ActionButton;