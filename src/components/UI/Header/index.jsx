import React from 'react';
import classes from './index.module.scss';

const functionName = props => {
    return (
        <div className={classes.header_container}>
          <div>{props.header}</div>
          {props.children}
        </div>
    );
};

export default functionName;