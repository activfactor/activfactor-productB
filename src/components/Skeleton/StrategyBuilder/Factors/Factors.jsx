import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';

const FactorsSkeleton = () => {
    return (
        Array.from(Array(6), (e,i) => (
            <Grid key={i} container justify="flex-start" alignItems="center" style={{marginBottom: '20px'}}>
                <Skeleton animation="wave" variant="rect" width="25px" height="25px" style={{marginRight: '10px'}}/>
                <Skeleton animation="wave" variant="text" width="70px" style={{marginRight: '10px'}}/>
                <Skeleton animation="wave" variant="circle" width="20px" height="20px" />
            </Grid>
        ))
    );
};

export default FactorsSkeleton;