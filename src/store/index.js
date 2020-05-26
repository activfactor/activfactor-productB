import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import apiMiddleware from './middleware/api.middleware';
import reducers from '../store/reducers';
import InitialState from './initialState';

const middlewares = [apiMiddleware, reduxThunk];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(
    reducers,
    InitialState
  );

  export default store;