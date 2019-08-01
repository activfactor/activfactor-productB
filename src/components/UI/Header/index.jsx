import React from 'react';
import classes from './index.module.scss';

const functionName = props => {
    return (
        <div className="_card-header">
          <div>{props.header}</div>
          {props.children}
        </div>
    );
};

export default functionName;