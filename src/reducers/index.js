import { combineReducers } from 'redux';
import tradeitReducers from './tradeitReducers';
import tradeitTradeReducers from './tradeitTradeReducers';
import general from './generalReducer';

export default combineReducers({
    tradeitReducers,
    trade: tradeitTradeReducers,
    general
})

