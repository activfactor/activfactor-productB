import React from 'react';
import { StyledCheckbox } from './style';
import { FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';

const Checkbox = ({checked, onChange, color, label, size}) => {
    return (
        <FormControlLabel style={{margin: 0}} control={<StyledCheckbox size={size} checked={checked} onChange={onChange} color={color}/>} label={label}/>
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    color: PropTypes.oneOf(['primary','secondary']),
    label: PropTypes.string,
    size: PropTypes.oneOf(['small','medium'])
}

Checkbox.defaultProps = {
    color: 'primary',
    size: 'small'
}

export default Checkbox;