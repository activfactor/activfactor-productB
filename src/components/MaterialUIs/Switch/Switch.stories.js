import React from 'react';
import Switch from './Switch';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Switch',
    parameters: {
      myAddon: {
        data: 'this data is passed to the addon',
      },
    },
  };

export const SimpleSwitch = () => (
    <Router history={history}>
        <ThemeProvider>
            <Switch label="Apply" variant="secondary" name="CheckA"/>
        </ThemeProvider>
    </Router>
)