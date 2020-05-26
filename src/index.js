import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import "./styles/main.scss";
import ThemeProvider from './Theme/Theme';
import MaterialThemeProvider from 'Theme/MaterialTheme';

ReactDOM.render(
  <MaterialThemeProvider>
    <ThemeProvider>
      <Provider store={store}>
          <App />
      </Provider>
    </ThemeProvider>
  </MaterialThemeProvider>
  ,document.querySelector('#root')
);