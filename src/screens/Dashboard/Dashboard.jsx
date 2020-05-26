import React from 'react';
import { DashboardTable, BrokerageControl } from 'components/Custom/Dashboard';
import { Grid } from '@material-ui/core';
import { Strategies, Watchlists } from 'components/Custom/Dashboard';

const Dashboard = () => {
    return (
        <>
            <Grid container justify="space-between">
                <Grid item md={9} xs={12}>
                    <DashboardTable />
                </Grid>
                <Grid item md={3} xs={12}>
                    <BrokerageControl />
                </Grid>
            </Grid>
            <Strategies />
            <Watchlists />
        </>
        )
};

export default Dashboard;