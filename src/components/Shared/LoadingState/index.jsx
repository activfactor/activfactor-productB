import React from 'react';
import { Wrapper } from './style';
import LoaderGif from '../LoaderGif';

const Loader = ({width, height, padding}) => {
    return (
        <Wrapper padding={padding}><LoaderGif width={width ? width : '50px'} height={height ? height : '50px'}/></Wrapper>
    );
};

export default Loader;