import React from 'react';
import NoData from './FeedBackAlert';
import { Router } from 'react-router-dom';
import history from '../../../../history';
import ThemeProvider from '../../../../Theme/MaterialTheme';

export default {
    title: 'FeedBack Alert',
}

export const SimpleNoFeedBackAlert = () => (
    <Router history={history}>
        <ThemeProvider>
            <NoData>No Enought data to display</NoData>
        </ThemeProvider>
    </Router>
)