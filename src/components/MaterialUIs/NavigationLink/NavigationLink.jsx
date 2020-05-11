import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './style';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({to, label}) => {
    const classes = useStyles();
    const { navigationLinkWrapper, activeNavigationLink, navigationLink } = classes;
    return (
        <div className={navigationLinkWrapper}>
            <NavLink exact className={navigationLink} activeClassName={activeNavigationLink} to={to}>{label}</NavLink>
        </div>
    );
};

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default NavigationLink;