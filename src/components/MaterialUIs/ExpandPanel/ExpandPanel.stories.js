import React, {useState} from 'react';
import ExpandPanel from './ExpandPanel';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Expand Panel',
    parameters: {
      myAddon: {
        data: 'this data is passed to the addon',
      },
    },
  };

export const SimpleExpandPanel = () => {
    const renderDetails = () => {
        return (
            <p>This is a very start of details</p>
        )
    }

    const renderSummary = () => {
        return (
            <h1>This is a details</h1>
        )
    }

    return (
        <Router history={history}>
            <ThemeProvider>
                <ExpandPanel renderDetails={renderDetails} renderSummary={renderSummary}/>
            </ThemeProvider>
        </Router>
    )
}
    