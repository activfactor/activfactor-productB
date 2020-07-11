import React from 'react';
import { DashboardTable, BrokerageControl } from 'components/Custom/Dashboard';
import { Grid } from '@material-ui/core';
import { Strategies, Watchlists } from 'components/Custom/Dashboard';
import AuthRequire from 'components/hoc/ForceNavigation';
import { useSelector } from 'react-redux';
import { PageLoader } from 'components/Custom/common';

const Dashboard = () => {
    const {token} = useSelector(state => state.auth);
    if (token){
        return (
            <>
                <Grid container justify="space-between" style={{marginBottom: '15px'}}>
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
    }
    return <PageLoader color="primary" />
};

export default AuthRequire(Dashboard);