import React from 'react';
import loader from '../../../../assets/img/loader.gif';

const LoaderGif = ({width, height}) => {
    return (
        <img with={width} height={height} alt="Loader" src={loader} />
    );
};

export default LoaderGif;