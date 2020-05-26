import React from 'react';
import Badge from './Badge';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Badge',
}

export const SimpleBadge = () => (
    <Router history={history}>
        <ThemeProvider>
            <Badge color="primary" label="Momentum" variant="outlined"/>
            <Badge color="secondary" label="Momentum" variant="outlined"/>
            <Badge color="primary" label="Momentum" variant="default"/>
            <Badge width="200px" color="secondary" label="Momentum" variant="default"/>
        </ThemeProvider>
    </Router>
)