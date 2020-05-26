import React from 'react';
import CustomizedTabs from './Tabs';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Tabs',
}

export const SimpleTabs = () => (
    <Router history={history}>
        <ThemeProvider>
            <div style={{backgroundColor: "#E5E5E5", height: '100vh', width: '100%', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <CustomizedTabs theme="secondary" options={[{label: 'Live', value: 'live'},{label: 'Historical',value: 'historical'}]} />
            </div>
        </ThemeProvider>
    </Router>
)