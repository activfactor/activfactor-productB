import React from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

const Loader = ({color}) => {
    return (
        <CircularProgress color={color}/>
    );
};

Loader.prototype = {
    color: PropTypes.oneOf(['primary','secondary'])
}

Loader.defaultProps = {
    color: 'primary'
}

export default Loader;