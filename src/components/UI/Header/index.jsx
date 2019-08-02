import React from 'react';

const functionName = props => {
    return (
        <div className="_card-header">
          <div>{props.header}</div>
          {props.children}
        </div>
    );
};

export default functionName;