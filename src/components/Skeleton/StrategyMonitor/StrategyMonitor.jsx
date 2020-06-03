import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import { animation } from '../Skeleton.constants';

const StrategyMonitor = () => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid container item xs={12}>
            <Grid container justify="space-between" direction="row" item xs={12} style={{marginBottom: '15px'}}>
                <Skeleton variant="text" animation={animation} width="25%"/>
                <Skeleton variant="text" animation={animation} width="35%"/>
            </Grid>
            <Grid item xs={12} style={{marginBottom: '15px'}}> 
                <Skeleton animation={animation} variant="rect" height={110} />
            </Grid>
            <Grid container item xs={12}>
                <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width={match ? '100%' : '95%'} height={250}/>
                </Grid>
                <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width={match ? '100%' : '95%'} height={250}/>
                </Grid>
                <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="100%" height={250}/>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" item xs={12} style={{marginBottom: '20px'}}> 
                <Skeleton animation={animation} variant="rect" width="120px" height={70} />
            </Grid>
            <Grid item md={6} xs={12} style={{marginBottom: '20px'}}>
                <Skeleton animation={animation} variant="rect" width={match ? '100%' : '95%'} height={250}/>
            </Grid>
            <Grid item md={6} xs={12} style={{marginBottom: '20px'}}>
                <Skeleton animation={animation} variant="rect" width="100%" height={250}/>
            </Grid>
        </Grid>
    );
};

export default StrategyMonitor;