import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { animation } from '../../Skeleton.constants';

const AnalyzeResults = () => {
    return (
        <Grid container item xs={12}>
            <Grid item xs={8} style={{marginBottom: '10px'}}>
                <Skeleton variant="text" animation={animation} width="15%"/>
                <Skeleton variant="text" animation={animation} width="30%"/>
            </Grid>
            <Grid container item xs={12} style={{marginBottom: '20px'}}>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={250}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={250}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={250}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={250}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={250}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={250}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={80}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={80}/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} style={{marginBottom: '20px'}}>
                    <Skeleton animation={animation} variant="rect" width="95%" height={80}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AnalyzeResults;