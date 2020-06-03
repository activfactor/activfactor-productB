import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { animation } from '../../Skeleton.constants';
import ContentCard from '../../common/ContentCard';

const HistoricalPerformance = () => {
    return (
        <Grid container direction="column" item xs={12} md={11} style={{marginTop: '36px'}}>
            <Grid container justify="space-between" item xs={12} style={{marginBottom: '10px'}}>
                <Skeleton variant="text" animation={animation} width="15%"/>
                <Skeleton variant="text" animation={animation} width="30%"/>
            </Grid>
            <Grid container item xs={12} style={{marginBottom: '20px'}}>
                <ContentCard repeat={10} styles={{width: '100%', height: '350px', marginBottom: '20px'}}/>
            </Grid>
        </Grid>
    );
};

export default HistoricalPerformance;