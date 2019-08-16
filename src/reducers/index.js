import { combineReducers } from 'redux';
import authReducers from './authReducers';
import toggleStatusReducer from './toggleStatusReducer';
import queryReducer from './queryReducer';
import factorScreener from './factorScreener';
import factorDashboard from './factorDashboard';
import strategyMonitor from './strategyMonitor';
import watchlistReducers from './watchlistReducers';
import tickerReducers from './tickerReducers';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducers,
    toggle: toggleStatusReducer,
    form: formReducer,
    factorScreener,
    queryReducer,
    factorDashboard,
    strategyMonitor,
    watchlistReducers,
    tickerReducers
})

