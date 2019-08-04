import React from 'react';

const DropDown = props => {
  return (
    <div className={`form-control-select ${props.color === 'black' ? '_black' : '_blue'}`}>
      <select className={`form-control`}
              value={`${props.value}`} onChange={props.DropDownChangeHandler}>
        {props.children}
      </select>
    </div>
  );
};

export default DropDown;