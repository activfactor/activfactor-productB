import React from 'react';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { animation } from '../../Skeleton.constants';

const CountriesDropDownSkeleton = ({height = '55px', width = '100%'}) => {
    return (
        <Skeleton animation={animation} variant="rect" width={width} height={height} style={{marginRight: '10px'}}/>
    );
};

CountriesDropDownSkeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
}

export default CountriesDropDownSkeleton;