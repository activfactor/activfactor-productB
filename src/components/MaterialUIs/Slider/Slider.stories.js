import React from 'react';
import Slider from './Slider';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Slider',
    parameters: {
      myAddon: {
        data: 'this data is passed to the addon',
      },
    },
  };

export const SimpleSlider = () => (
    <Router history={history}>
        <ThemeProvider>
            <Slider max={50} min={1} defaultVal={1} onChangeDisplayHandler={(value) => console.log(value)}/>
        </ThemeProvider>
    </Router>
)