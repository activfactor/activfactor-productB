import React from 'react';
import {StyledButton} from './style';

const AddButton = ({onClick, ...rest}) => {
    return (
      <StyledButton
        disableTouchRipple={true}
        {...rest}
        onClick={onClick}
        variant="outlined"
        color="primary"
      >
        +
      </StyledButton>
    );
};

export default AddButton;