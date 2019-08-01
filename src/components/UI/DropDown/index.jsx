import React from 'react';

const DropDown = props => {
  return (
    <div className="_select-country">
      <select className={`form-control ${props.color === 'black' ? '_black' : '_blue'}`}
              value={`${props.value}`} onChange={props.DropDownChangeHandler}>
        {props.children}
      </select>
    </div>
  );
};

export default DropDown;