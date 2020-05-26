import React from 'react';
import Select from './Select';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';
import { SUPPORTED_COINTRIES } from 'config/appConfig';

export default {
    title: 'Select',
    parameters: {
      myAddon: {
        data: 'this data is passed to the addon',
      },
    },
  };

export const SampleSelect = () => (
    <Router history={history}>
        <ThemeProvider>
            <Select label="Select Country" options={SUPPORTED_COINTRIES} value="CAN" theme="default"/>
        </ThemeProvider>
    </Router>
)