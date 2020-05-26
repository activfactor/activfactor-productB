import React from 'react';
import StrategyCard from './StrategyCard';
import { Router } from 'react-router-dom';
import history from '../../../../history';
import ThemeProvider from '../../../../Theme/MaterialTheme';
import { Grid } from '@material-ui/core';

export default {
    title: 'Strategy Card',
}

const tableData = [
    [{value: '1 Day'},{value: '-0.62', unit: '%'},{value: '-0.7', unit:'%'}],
    [{value: 'WTD'},{value: '-0.62', unit: '%'},{value: '-0.7', unit:'%'}],
    [{value: 'MTD'},{value: '1.45', unit: '%'},{value: '1.22', unit:'%'}],
]

export const SimpleStrategyCard = () => {
    return (
      <Router history={history}>
        <ThemeProvider>
          <StrategyCard
            strategyName="Test Strategy"
            to="/strategy/monitor"
            rebalancingLast="Last: 01 Jan 2020"
            rebalancingNext="Next: 01 Feb 2020"
            benchmark="S&P"
            tableData={tableData}
            tickersNumber={23}
          />
        </ThemeProvider>
      </Router>
    );
}

export const GridStrategyCards = () => {
    return (
      <Router history={history}>
        <ThemeProvider>
          <Grid container justify="space-between" alignItems="center" style={{minWidth: '100%', overflow:'scroll'}}>
            <Grid item sx={'auto'} sm={12} md={4}>
              <StrategyCard
                strategyName="Test Strategy"
                to="/strategy/monitor"
                rebalancingLast="Last: 01 Jan 2020"
                rebalancingNext="Next: 01 Feb 2020"
                benchmark="S&P"
                tableData={tableData}
                tickersNumber={33}
              />
            </Grid>
            <Grid item sx={'auto'} sm={12} md={4}>
              <StrategyCard
                strategyName="Test Strategy"
                to="/strategy/monitor"
                rebalancingLast="Last: 01 Jan 2020"
                rebalancingNext="Next: 01 Feb 2020"
                benchmark="S&P"
                tableData={tableData}
                tickersNumber={23}
              />
            </Grid>
            <Grid item sx={'auto'} sm={12} md={4}>
              <StrategyCard
                strategyName="Test Strategy"
                to="/strategy/monitor"
                rebalancingLast="Last: 01 Jan 2020"
                rebalancingNext="Next: 01 Feb 2020"
                benchmark="S&P"
                tableData={tableData}
                tickersNumber={13}
              />
            </Grid>
          </Grid>
        </ThemeProvider>
      </Router>
    );
}