import React from 'react';
import classes from './index.module.scss';

const ActionButton = props => {
    return (
        <input className={`${props.nameOfClass==='primary' ? 'btn btn-primary' : classes.outline} ${props.color === 'black' ? classes.black : classes.blue}`} type={props.type} value={props.value} onClick={props.onClick}/>
    );
};

export default ActionButton;