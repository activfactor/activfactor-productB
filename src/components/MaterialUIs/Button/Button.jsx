import React from 'react';
import { StyledButton, LoaderWrapper } from './style';
import PropTypes from 'prop-types';
import Loader from '../Loader';

const Button = ({label, onClick, size, fullWidth, variant, type, isLoading}) => {
  if (isLoading){
    return (
      <LoaderWrapper fullWidth={fullWidth}>
        <Loader color="primary"/>
      </LoaderWrapper>
    )
  }
    return (
      <StyledButton
        fullWidth={fullWidth}
        size={size}
        onClick={onClick}
        variant={variant}
        color="primary"
        disableFocusRipple={true}
        disableRipple={true}
        type={type}
      >
        {label}
      </StyledButton>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.string,
    fullWidth: PropTypes.bool,
    variant: PropTypes.oneOf(['contained','text','outlined']),
    type: PropTypes.oneOf(['submit','button']),
    isLoading: PropTypes.bool
}

Button.defaultProps = {
    size: 'medium',
    fullWidth: false,
    variant: 'contained',
    type: 'button',
    isLoading: false
}

export default Button;