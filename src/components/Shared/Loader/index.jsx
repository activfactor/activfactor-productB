import React from 'react';
import classes from './index.module.scss';
import LoaderGif from '../LoaderGif';
const Loader = props => {
  if (!props.wealthface){
    return (
      <div className={`${classes.loaderContainer} ${props.containerClass ? classes.fullScreen : ''} ${props.color==='black' ? classes.black : classes.white}`}>
          <div className={`${classes.loader}`}></div>
      </div>
    );
  } else {
    const {width, height} = props;
    return (
      <div className={`${classes.loaderContainer} ${props.containerClass ? classes.fullScreen : ''} ${props.color==='black' ? classes.black : classes.white}`}>
          <LoaderGif width={width ? width : '100px'} height={height ? height : '100px'}/>
      </div>
    )
  }
};

export default Loader;