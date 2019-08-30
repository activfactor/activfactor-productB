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
      authenticated: sessionStorage.getItem("authenticated"),
      regtime: sessionStorage.getItem("regtime"),
      token: sessionStorage.getItem("token"),
      userID: sessionStorage.getItem("userID")
    },
    toggle: {
      clicked: false,
      location: "/"
    },
    tradeitReducers: {
        brokerLongName: sessionStorage.getItem("exBrokerLongName") === null ? undefined : sessionStorage.getItem("exBrokerLongName"),
        brokerName: sessionStorage.getItem("exBroker") === null ? undefined : sessionStorage.getItem("exBroker"),
        userId: sessionStorage.getItem("exUserId") === null ? undefined : sessionStorage.getItem("exUserId"),
        userToken: sessionStorage.getItem("exUserToken") === null ? undefined : sessionStorage.getItem("exUserToken"),
        token: sessionStorage.getItem("exToken") === null ? undefined : sessionStorage.getItem("exToken"),
        accountNumber: sessionStorage.getItem("exAccountNumber") === null ? undefined : sessionStorage.getItem("exAccountNumber"),
        accounts: sessionStorage.getItem("exAccounts") === null ? undefined : JSON.parse(sessionStorage.getItem("exAccounts"))
    }
  }
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
     ,document.querySelector('#root')
);