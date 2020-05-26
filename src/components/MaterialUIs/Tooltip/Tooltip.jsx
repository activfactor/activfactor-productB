import React from 'react';
import { StyledToolTip } from './style';
import PropTypes from 'prop-types';

const Tooltip = ({children, title, arrow, placement}) => {
    return (
        <StyledToolTip title={title} arrow={arrow} placement={placement}>
            {children}
        </StyledToolTip>
    );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  arrow: PropTypes.bool,
  placement: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
  ]),
};

Tooltip.defaultProps = {
    placement: 'right'
}

export default Tooltip;