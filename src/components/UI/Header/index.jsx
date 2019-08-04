import React from 'react';

const functionName = props => {
    return (
        <div className="card__title">
          <div className="_header-title">{props.header}</div>
          {props.children}
        </div>
    );
};

export default functionName;