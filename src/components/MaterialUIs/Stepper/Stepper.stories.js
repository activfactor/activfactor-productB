import React from 'react';
import Stepper from './Stepper';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Stepper',
    parameters: {
      myAddon: {
        data: 'this data is passed to the addon',
      },
    },
  };

export const SampleStepper = () => (
    <Router history={history}>
        <ThemeProvider>
            <Stepper steps={['Build your strategy','Analyze results','Customize portfolio']} activeStep={1}/>
        </ThemeProvider>
    </Router>
)