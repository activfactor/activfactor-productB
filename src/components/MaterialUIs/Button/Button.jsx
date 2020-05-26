import React from 'react';
import { StyledButton, LoaderWrapper } from './style';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { ArrowDropDown } from '@material-ui/icons';

const Button = ({label, onClick, size, fullWidth, variant, type, isLoading, color, withDropDownIcon, disabled,minWidth, ...rest}) => {
  if (isLoading){
    return (
      <LoaderWrapper fullwidth={fullWidth}>
        <Loader color="primary"/>
      </LoaderWrapper>
    )
  }
    return (
      <StyledButton
        fullwidth={fullWidth}
        size={size}
        onClick={onClick}
        variant={variant}
        color={color}
        disableFocusRipple={true}
        disableRipple={true}
        type={type}
        disabled={disabled}
        minwidth={minWidth}
        {...rest}
      >
        {label}
        {withDropDownIcon && <ArrowDropDown style={{color: '#fff'}}/>}
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
    isLoading: PropTypes.bool,
    color: PropTypes.oneOf(['primary','secondary','default']),
    withDropDownIcon: PropTypes.bool,
    disabled: PropTypes.bool,
    minWidth: PropTypes.string
}

Button.defaultProps = {
    size: 'medium',
    fullWidth: false,
    variant: 'contained',
    type: 'button',
    isLoading: false,
    color: 'primary',
    withDropDownIcon: false,
    disabled: false
}

export default Button;