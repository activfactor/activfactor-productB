import React from 'react';
import TickerData from './TickerCard';
import { Router } from 'react-router-dom';
import history from '../../../../history';
import ThemeProvider from '../../../../Theme/MaterialTheme';
import CardListing from '../CardListing';

export default {
    title: 'Ticker Card',
}

const tableData = [
    [{value: 'Performance for 1 day'},{value: '-0.62', unit: '%'},{value: '0.7', unit:'%'},{value: '0.7', unit:'%'}],
    [{value: 'Performance for 1 day'},{value: '0.62', unit: '%'},{value: '-0.7', unit:'%'},{value: '-0.7', unit:'%'}],
    [{value: 'Performance for 1 day'},{value: '-0.62', unit: '%'},{value: '0.7', unit:'%'},{value: '0.7', unit:'%'}],
    [{value: 'Performance for 1 day'},{value: '0.62', unit: '%'},{value: '-0.7', unit:'%'},{value: '-0.7', unit:'%'}],
]

export const SimpleTickerCard = () => {
    return (
      <Router history={history}>
        <ThemeProvider>
          <TickerData
            tableData={tableData}
            title="Valuation"
          />
        </ThemeProvider>
      </Router>
    );
}

export const GridTickerCard = () => {
    return (
      <Router history={history}>
        <ThemeProvider>
            <CardListing repeat={2}>
                <TickerData
                    tableData={tableData}
                    title="Valuation"
                />
                <TickerData
                    tableData={tableData}
                    title="Profitability"
                />
                <TickerData
                    tableData={tableData}
                    title="Technical"
                />
                <TickerData
                    tableData={tableData}
                    title="Risk"
                />
            </CardListing>
        </ThemeProvider>
      </Router>
    );
}