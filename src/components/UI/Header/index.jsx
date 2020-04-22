import React from 'react';

const header = props => {
    return (
        <div className={`card__title ${props.nameOfClass ? props.nameOfClass : ''}`}>
          <div className="_header-title">{props.header}</div>
          {props.children}
        </div>
    );
};

export default header;