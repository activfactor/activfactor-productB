import React from 'react';
import ChartCard from './ChartCard';
import { Router } from 'react-router-dom';
import history from '../../../../history';
import ThemeProvider from '../../../../Theme/MaterialTheme';

export default {
    title: 'ChartCard',
}

export const SimpleCheckbox = () => (
    <Router history={history}>
        <ThemeProvider>
            <ChartCard title="Sectors">
                <p>Hello every one how are you this is only a test component</p>
            </ChartCard>
        </ThemeProvider>
    </Router>
)