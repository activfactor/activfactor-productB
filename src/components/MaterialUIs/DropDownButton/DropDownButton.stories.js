import React from 'react';
import DropDownButton from './DropDownButton';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Drop Down Button',
}

export const SimpleDropDorwnButton = () => {
    const options = [{label: 'New watchlist'}, {label: 'Existing Watchlist', disabled: true}];
    return (
        <Router history={history}>
            <ThemeProvider>
                <div style={{width: '200px'}}>
                    <DropDownButton options={options} label="Add to watchlist" color="secondary" variant="contained"/>
                </div>
            </ThemeProvider>
        </Router>
    )
}