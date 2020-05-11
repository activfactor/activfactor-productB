import React from 'react';
import { MenuItem } from '@material-ui/core';
import { StyledFormHelperText, StyledInputLabel, StyledSelect, StyledFormControl } from './style';
import PropTypes from 'prop-types';

const Select = ({error, fullWidth, errorMsg, theme, id, errorId, onChange, value, options, label}) => {
    return (
        <StyledFormControl variant="outlined" error={error} fullWidth={fullWidth} theme={theme}>
        <StyledInputLabel id={id}>{label}</StyledInputLabel>
        <StyledSelect
          labelId={id}
          id="simple-select-outlined"
          value={value}
          onChange={onChange}
          fullWidth={fullWidth}
          theme={theme}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options && options.length>0 && options.map(option => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
        </StyledSelect>
        <StyledFormHelperText id={errorId}>{errorMsg}</StyledFormHelperText>
      </StyledFormControl>
    );
};

Select.propTypes = {
  theme: PropTypes.oneOf(['primary','secondary']),
  error: PropTypes.bool,
  errorId: PropTypes.string,
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string.isRequired
}

Select.defaultProps = {
  theme: 'primary',
  fullWidth: true
}

export default Select;