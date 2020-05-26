import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';

const WatchlistMonitor = () => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid container item xs={12}>
            <Grid container justify="space-between" direction="row" item xs={12} style={{marginBottom: '15px'}}>
                <Skeleton variant="text" animation="wave" width="25%"/>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '15px'}}> 
                <Skeleton animation="wave" variant="rect" height={110} />
            </Grid>
            <Grid container item xs={12} style={{marginBottom: '20px'}}>
                <Grid item md={4} sm={6} xs={12}>
                    <Skeleton animation="wave" variant="rect" width={match ? '100%' : "95%"} height={250} style={{marginBottom: '20px'}}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Skeleton animation="wave" variant="rect" width={match ? '100%' : "95%"} height={250} style={{marginBottom: '20px'}}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Skeleton animation="wave" variant="rect" width="100%" height={250} style={{marginBottom: '20px'}}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Skeleton animation="wave" variant="rect" width={match ? '100%' : "95%"} height={250} style={{marginBottom: '20px'}}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Skeleton animation="wave" variant="rect" width={match ? '100%' : "95%"} height={250} style={{marginBottom: '20px'}}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Skeleton animation="wave" variant="rect" width="100%" height={250} style={{marginBottom: '20px'}}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default WatchlistMonitor;