import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';

const ToggledButton = ({label, subLabel, colorTheme, colorDarkness, active, onClick,height, maxHeight, margin , fullWidth, maxWidth}) => {
    return label && subLabel ? (
      <StyledButton
        maxwidth={maxWidth}
        fullWidth={fullWidth}
        margin={margin}
        height={height}
        maxheight={maxHeight}
        colortheme={colorTheme}
        colordarkness={colorDarkness}
        active={active ? "true" : "false"}
        onClick={onClick}
      >
        <span>{label}</span>
        <span>{subLabel}</span>
      </StyledButton>
    ) : (
      <Skeleton animation="wave" variant="rect" width={165} height={135} style={{margin: '5px'}}/>
    );
};

ToggledButton.propTypes = {
    label: PropTypes.string.isRequired,
    subLabel: PropTypes.string,
    colorTheme: PropTypes.oneOf(['primary','secondary']),
    colorDarkness: PropTypes.oneOf(['light','main','dark','darkness']),
    onClick: PropTypes.func,
    active: PropTypes.bool,
    maxHeight: PropTypes.string,
    margin: PropTypes.string,
    fullWidth: PropTypes.bool,
    height: PropTypes.string,
    maxWidth: PropTypes.string
}

ToggledButton.defaultProps = {
    colorTheme: 'primary',
    colorDarkness: 'light',
    fullWidth: false
}

export default ToggledButton;