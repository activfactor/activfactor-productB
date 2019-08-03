import React from 'react';
import classes from './index.module.scss';

const spinner = props => {
    return (
      <div className={`${classes.loaderContainer} ${props.containerClass ? classes.fullScreen : ''}`}>
          <div className={`${classes.loader} ${props.color==='black' ? classes.black : classes.white}`}></div>
      </div>
    );
};

export default spinner;