import React from 'react';

const Tooltip = ({text, direction}) => {
    const getClassName = () => {
        if (direction === 'bottom'){
            return "_tooltip-content-bottom"
        }
        return "_tooltip-content"
    }
    return (
        <span className="btn tooltip-container tooltip--icon">
            <i className="_icon-question fas fa-question"></i>
            <span className={getClassName()}>{text}</span>
        </span>
    );
};

export default Tooltip;