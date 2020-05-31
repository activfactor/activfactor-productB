import React from 'react';
import { Grid } from './style';
import PropTypes from 'prop-types';

const CardListing = ({children, xgap, ygap, repeat, ...rest}) => {
    return (
        <Grid xgap={xgap} ygap={ygap} repeat={repeat} {...rest}>
            {children}
        </Grid>
    );
};

CardListing.propTypes = {
    children: PropTypes.node,
    xgap: PropTypes.string,
    ygap: PropTypes.string,
    repeat: PropTypes.number
}
export default CardListing;