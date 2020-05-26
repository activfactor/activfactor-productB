import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';

const HistoricalPerformance = () => {
    return (
        <Grid container direction="column" item xs={12} md={11} style={{marginTop: '36px'}}>
            <Grid container justify="space-between" item xs={12} style={{marginBottom: '10px'}}>
                <Skeleton variant="text" animation="wave" width="15%"/>
                <Skeleton variant="text" animation="wave" width="30%"/>
            </Grid>
            <Grid container item xs={12} style={{marginBottom: '20px'}}>
                <Skeleton animation="wave" variant="rect" width="100%" height={350}/>
            </Grid>
        </Grid>
    );
};

export default HistoricalPerformance;