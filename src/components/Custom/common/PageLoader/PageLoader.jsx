import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const PageLoader = ({color}) => {    
    const useStyles = makeStyles(({
        container: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }
    }));

    const {container} = useStyles();
    return (
        <div className={container}>
          <CircularProgress color={color} />
      </div>
    );
};

PageLoader.propTypes = {
  color: PropTypes.oneOf(['primary','secondary'])
}

export default PageLoader;