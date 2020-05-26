import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { useTheme, useMediaQuery } from '@material-ui/core';

const Strategies = () => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid container direction="column" item xs={12} style={{marginTop: '36px'}}>
            <Grid container direction="row" justify="space-between" item xs={12} style={{marginBottom: '10px'}}>
                <Grid container item xs={6} direction="column">
                    <Skeleton variant="text" animation="wave" width="8%"/>
                    <Skeleton variant="text" animation="wave" width="14%"/>
                </Grid>
                <Grid container justify="flex-end" item xs={6}>
                    <Skeleton variant="text" animation="wave" width="20%"/>
                </Grid>
            </Grid>
            <Grid container justify="space-between" item xs={12} style={{marginBottom: '20px'}}>
                <Grid item xs={12} sm={3}>
                    <Skeleton animation="wave" variant="rect" width={match ? "100%" : "95%"} height={298} style={{marginBottom: '20px'}}/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Skeleton animation="wave" variant="rect" width={match ? "100%" : "95%"} height={298} style={{marginBottom: '20px'}}/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Skeleton animation="wave" variant="rect" width={match ? "100%" : "95%"} height={298} style={{marginBottom: '20px'}}/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Skeleton animation="wave" variant="rect" width="100%" height={298} style={{marginBottom: '20px'}}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Strategies;