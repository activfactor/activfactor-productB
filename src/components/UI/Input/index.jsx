import React from 'react';
import classes from './index.module.scss';

const ActionButton = props => {
    return (
        <input className={props.nameOfClass} type={props.type} value={props.value} onClick={props.onClick} />
    );
};

export default ActionButton;