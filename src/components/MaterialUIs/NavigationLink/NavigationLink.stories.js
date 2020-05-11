import React from 'react';
import NavigationLink from './NavigationLink';
import { Router } from 'react-router-dom';
import history from '../../../history';

export default {
    title: 'Navigation Link',
    parameters: {
      myAddon: {
        data: 'this data is passed to the addon',
      },
    },
  };

export const SampleLink = () => (
    <Router history={history}>
        <NavigationLink to="/" label="sample"/>
    </Router>
)