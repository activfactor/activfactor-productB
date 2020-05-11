import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { StyledLink } from './style';
import PropTypes from 'prop-types';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to='/' {...props} />
));

const Link = ({label, to, isUnerLine, fontSize}) => {
    return (
        <StyledLink fontSize={fontSize} underline={isUnerLine} component={LinkBehavior} to={to}>{label}</StyledLink>
    );
};

Link.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    isUnerLine: PropTypes.oneOf(['none','hover','always']),
    fontSize: PropTypes.string
}

Link.defaultProps = {
    isUnerLine: 'none',
}

export default Link;