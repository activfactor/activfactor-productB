import React from 'react';
import { StyledInput } from './style';

const Input = props => {
    const {nameOfClass, type, value, onClick, width} = props;
    return (
        <StyledInput width={width} {...props} className={nameOfClass} type={type} value={value} onClick={onClick} />
    );
};

export default Input;