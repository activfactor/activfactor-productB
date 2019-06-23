import React from 'react';
import classes from './index.module.scss';

const spinner = () => {
    return (
        <div className={classes.container}>
        <div className={classes.ldsRipple}><div></div><div></div></div>
        {/* <div className={classes.description}>Gathering Information</div> */}
        </div>
    );
};

export default spinner;