import React from 'react';
import Checkbox from './CheckBox';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Checkbox',
}

export const SimpleCheckbox = () => (
    <Router history={history}>
        <ThemeProvider>
            <Checkbox color="primary" label="Momentum"/>
        </ThemeProvider>
    </Router>
)