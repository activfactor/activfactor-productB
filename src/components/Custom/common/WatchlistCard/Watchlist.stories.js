import React from 'react';
import WatchlistCard from './WatchlistCard';
import { Router } from 'react-router-dom';
import history from '../../../../history';
import ThemeProvider from '../../../../Theme/MaterialTheme';
import { Grid } from '@material-ui/core';

export default {
    title: 'Watchlist Card',
}

const tableData = [
    [{value: '1 Day'},{value: '-0.62', unit: '%'}],
    [{value: 'WTD'},{value: '-0.62', unit: '%'}],
    [{value: 'MTD'},{value: '1.45', unit: '%'}],
]

export const SimpleWatchlistCard = () => {
    return (
      <Router history={history}>
        <ThemeProvider>
          <WatchlistCard
            watchlistName="Test Strategy"
            to="/strategy/monitor"
            tableData={tableData}
            tickersNumber={23}
          />
        </ThemeProvider>
      </Router>
    );
}

export const GridWatchlistCards = () => {
    return (
      <Router history={history}>
        <ThemeProvider>
          <Grid container justify="space-between" alignItems="center" style={{minWidth: '1200px',width:'100%', overflow:'scroll'}}>
            <Grid item sx={'auto'} sm={12} md={3}>
              <WatchlistCard
                watchlistName="Test Strategy"
                to="/strategy/monitor"
                tableData={tableData}
                tickersNumber={33}
              />
            </Grid>
            <Grid item sx={'auto'} sm={12} md={3}>
              <WatchlistCard
                watchlistName="Test Strategy"
                to="/strategy/monitor"
                tableData={tableData}
                tickersNumber={23}
              />
            </Grid>
            <Grid item sx={'auto'} sm={12} md={3}>
              <WatchlistCard
                watchlistName="Test Strategy"
                to="/strategy/monitor"
                tableData={tableData}
                tickersNumber={13}
              />
            </Grid>
            <Grid item sx={'auto'} sm={12} md={3}>
              <WatchlistCard
                watchlistName="Test Strategy"
                to="/strategy/monitor"
                tableData={tableData}
                tickersNumber={13}
              />
            </Grid>
          </Grid>
        </ThemeProvider>
      </Router>
    );
}