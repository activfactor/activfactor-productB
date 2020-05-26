import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './style';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({to, label, ...props}) => {
    const classes = useStyles(props);
    const { navigationLinkWrapper, activeNavigationLink, navigationLink } = classes;
    return (
        <div className={navigationLinkWrapper}>
            <NavLink exact className={navigationLink} activeClassName={activeNavigationLink} to={to}>{label}</NavLink>
        </div>
    );
};

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['header','footer'])
}

export default NavigationLink;