import { combineReducers } from 'redux';
import authReducers from './authReducers';
import toggleStatusReducer from './toggleStatusReducer';
import factorScreener from './factorScreener';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducers,
    toggle: toggleStatusReducer,
    form: formReducer,
    factorScreener
})

