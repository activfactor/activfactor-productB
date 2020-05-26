import React from 'react';
import Tooltip from './Tooltip';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Tooltip',
    parameters: {
      myAddon: {
        data: 'this data is passed to the addon',
      },
    },
  };

export const SimpleTooltip = () => (
    <Router history={history}>
        <ThemeProvider>
            <Tooltip title="This is a title to test if the tooltip is working fine" arrow={true}>
                <div style={{width: '100px'}}>Test me out by hovering the mouse</div>
            </Tooltip>
        </ThemeProvider>
    </Router>
)