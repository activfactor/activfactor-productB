import React from 'react';

const Input = props => {
    return (
        <input className={props.nameOfClass} type={props.type} value={props.value} onClick={props.onClick} />
    );
};

export default Input;