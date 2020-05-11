import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../store/reducers';
import InitialState from './initialState';

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = composeEnhancers(applyMiddleware(reduxThunk))(createStore)(
    reducers,
    InitialState
  );

  export default store;