import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../store/reducers';

const InitialState = {
    auth: {
      token: window.localStorage.getItem('token')
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

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = composeEnhancers(applyMiddleware(reduxThunk))(createStore)(
    reducers,
    InitialState
  );

  export default store;