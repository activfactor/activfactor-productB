import React from 'react';
import classes from './index.module.scss';

const ActionButton = props => {
    return (
        <input className={`${props.nameOfClass} ${props.kind==='primary' ? 'btn btn-primary' : 'btn btn-outline-primary'} ${props.color === 'black' ? '_black' : props.color === 'red' ? 'red' : '_blue'}`} type={props.type} value={props.value} onClick={props.onClick}/>
    );
};

export default ActionButton;