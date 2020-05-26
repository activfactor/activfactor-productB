import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { StyledLabel, StyledFormHelperText, StyledFormControl, StyledOutlinedInput } from "./style";

const Input = ({ value, onChange, id, fullWidth, label, error, errorId, errorMsg, padding, endAdorment, type, ...rest}) => {
  const [inputValue, setInputValue] = useState();
  useEffect(() => {
    if(value){
      setInputValue(value);
    }
  }, [value]);
  return (
    <StyledFormControl variant="outlined" error={error} fullWidth={fullWidth}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledOutlinedInput
        id={id}
        defaultValue={value}
        // value={inputValue}
        onChange={onChange}
        label={label}
        fullWidth={fullWidth}
        aria-describedby={errorId}
        padding={padding}
        endAdornment={endAdorment}
        type={type}
        {...rest}
      />
      {error ? <StyledFormHelperText component="span" id={errorId}>{errorMsg}</StyledFormHelperText> : ''}
    </StyledFormControl>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  error: PropTypes.bool,
  errorId: PropTypes.string,
  errorMsg: PropTypes.string,
  padding: PropTypes.string,
  endAdorment: PropTypes.node,
  type: PropTypes.string.isRequired
};

Input.defaultProps = {
  fullWidth: true,
  id: "input-outlined",
  error: false,
  errorId: 'component-error-text',
  errorMsg: 'error',
  type: 'text'
};

export default Input;
