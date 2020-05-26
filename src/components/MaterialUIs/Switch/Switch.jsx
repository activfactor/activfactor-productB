import React from 'react';
import { StyledSwitch, StyledFormControlLabel } from './style';

const Switch = ({onChange, checked, label, name}) => {
    return (
      <StyledFormControlLabel
        control={
          <StyledSwitch
            checked={checked}
            onChange={onChange}
            name={name}
          />
        }
        label={label}
      />
    );
};

export default Switch;