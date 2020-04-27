import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import "./styles/main.scss";
import ThemeProvider from './constants/Theme';

ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
        <App />
    </Provider>
  </ThemeProvider>
  ,document.querySelector('#root')
);