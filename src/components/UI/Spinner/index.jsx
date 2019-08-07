import React from 'react';
import classes from './index.module.scss';

const spinner = props => {
    return (
      <div className={`${classes.loaderContainer} ${props.containerClass ? classes.fullScreen : ''} ${props.color==='black' ? classes.black : classes.white}`}>
          <div className={`${classes.loader}`}></div>
      </div>
    );
};

export default spinner;