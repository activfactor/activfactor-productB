import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import "./styles/main.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = composeEnhancers(applyMiddleware(reduxThunk))(createStore)(
    reducers,
    { 
        auth: {
        authenticated: sessionStorage.getItem('authenticated'),
        username: sessionStorage.getItem('username'),
        regtime: sessionStorage.getItem('regtime'),
        token: sessionStorage.getItem('token'),
        userID: sessionStorage.getItem('userID')
        },
        toggle: {
            clicked: false
        }
    }
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
     ,document.querySelector('#root')
);