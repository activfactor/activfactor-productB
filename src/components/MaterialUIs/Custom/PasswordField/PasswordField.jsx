import React, { useState, useCallback } from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Input from "../../Input";
import PropTypes from "prop-types";

const PasswordField = ({
  id,
  errorId,
  error,
  errorMsg,
  fullWidth,
  label,
  onChange,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prevValue) => !prevValue);
  }, []);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      onChange={onChange}
      id={id}
      errorId={errorId}
      error={error}
      errorMsg={errorMsg}
      fullWidth={fullWidth}
      label={label}
      {...rest}
      endAdorment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

PasswordField.propTypes = {
  id: PropTypes.string.isRequired,
  errorId: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

PasswordField.defaultProps = {
  id: "auth-password-field",
  errorId: "auth-password-error-text",
  fullWidth: true,
};

export default PasswordField;
