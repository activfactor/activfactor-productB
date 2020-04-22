import React from 'react';

const DropDown = props => {
  return (
    <div className={`form-control-select ${props.color === 'black' ? '_black' : '_blue'}`}>
      <select {...props.input} className={`form-control`}
              value={`${props.value}`} onChange={props.DropDownChangeHandler}>
        {props.children}
      </select>
    </div>
  );
};

export default DropDown;