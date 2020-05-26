import React from 'react';
import { StyledTitle, StyledAlert } from './style'
import PropTypes from 'prop-types';

const CustomAlert = ({message, title, variant, severity, onClose, action}) => {
    return (
        <StyledAlert severity={severity} variant={variant} action={action} onClose={onClose}>
            {title && <StyledTitle>{title}</StyledTitle>}
            {message}
        </StyledAlert>
    );
};

CustomAlert.propTypes = {
    message: PropTypes.string,
    title: PropTypes.string,
    variant: PropTypes.oneOf(['standard','filled','outlined']),
    severity: PropTypes.oneOf(['error','info','success','warning']).isRequired,
    onClose: PropTypes.func,
    action: PropTypes.node,
    fontSize: PropTypes.string
}

CustomAlert.defaultProps = {
    variant: 'standard',
    fontSize: '14px'
}

export default CustomAlert;