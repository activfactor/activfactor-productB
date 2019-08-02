import React from 'react';

const ActionButton = props => {
    return (
        <input className={props.nameOfClass} type={props.type} value={props.value} onClick={props.onClick} />
    );
};

export default ActionButton;