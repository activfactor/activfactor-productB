import React from 'react';
import classes from './index.module.scss';

const DropDown = props => {
    return (
        <div className={`${classes.selectBox}`}>
        <select className={`${props.color === 'black' ? classes.black : classes.blue}`} value={`${props.value}`} onChange={props.DropDownChangeHandler}>
            {props.children}
        </select>
        </div>
    );
};

export default DropDown;