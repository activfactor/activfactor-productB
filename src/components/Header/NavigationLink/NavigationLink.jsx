import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from '../style';
import { Link } from 'react-router-dom';

const NavigationLink = ({to, label}) => {
    const classes = useStyles();
    const { NavigationLinkWrapper } = classes;
    return (
        <div className={NavigationLinkWrapper}>
            <Link to={to}>{label}</Link>
        </div>
    );
};

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default NavigationLink;