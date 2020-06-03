import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import { animation } from '../../Skeleton.constants';
import ContentCard from '../../common/ContentCard';

const Strategies = () => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Grid container direction="column" item xs={12} style={{marginTop: '36px'}}>
            <Grid container direction="row" justify="space-between" item xs={12} style={{marginBottom: '10px'}}>
                <Grid container item xs={6} direction="column">
                    <Skeleton variant="text" animation={animation} width="20%"/>
                    <Skeleton variant="text" animation={animation} width="30%"/>
                </Grid>
                <Grid container justify="flex-end" item xs={6}>
                    <Skeleton variant="text" animation={animation} width="20%"/>
                </Grid>
            </Grid>
            <Grid container justify="space-between" item xs={12} style={{marginBottom: '20px'}}>
                <Grid item xs={12} md={4}>
                    <ContentCard styles={{width: match ? '100%' : '95%', height: '350px', marginBottom: '20px'}}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ContentCard styles={{width: match ? '100%' : '95%', height: '350px', marginBottom: '20px'}}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <ContentCard styles={{width: '100%', height: '350px', marginBottom: '20px'}}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Strategies;