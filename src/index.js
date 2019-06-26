import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import "./styles/main.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    { 
        auth: {
        authenticated: localStorage.getItem('authenticated'),
        username: localStorage.getItem('username'),
        regtime: localStorage.getItem('regtime'),
        token: localStorage.getItem('t'),
        },
        toggle: {
            clicked: false
        }
    },
    composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
     ,document.querySelector('#root')
);