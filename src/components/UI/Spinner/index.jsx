import React from 'react';
import classes from './index.module.scss';

const spinner = props => {
    return (
        <div className={`${classes.loader} ${props.color==='black' ? classes.black : classes.white}`}></div>
    );
};

export default spinner;