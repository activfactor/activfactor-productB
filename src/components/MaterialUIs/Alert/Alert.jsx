import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import PropTypes from 'prop-types';

const CustomAlert = ({message, title, variant, severity, onClose, action}) => {
    return (
        <Alert severity={severity} variant={variant} action={action} onClose={onClose}>
            {title && <AlertTitle>{title}</AlertTitle>}
            {message}
        </Alert>
    );
};

CustomAlert.propTypes = {
    message: PropTypes.string.isRequired,
    title: PropTypes.string,
    variant: PropTypes.oneOf(['standard','filled','outlined']),
    severity: PropTypes.oneOf(['error','info','success','warning']).isRequired,
    onClose: PropTypes.func,
    action: PropTypes.node
}

CustomAlert.defaultProps = {
    variant: 'standard',
}

export default CustomAlert;