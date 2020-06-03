import auth from './auth.reducers';
import api from './api.reducers';
import dashboard from './dashboard.reducers';
import navigation from './navigation.reducers';
import strategyBuilder from './strategyBuilder.reducers';
import watchlists from './watchlist.reducers';
import strategies from './strategies.reducers';
import ticker from './ticker.reducers';
import resources from './resources.reducers';
import appConfig from './appConfig.reducers';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth,
    appConfig,
    api,
    dashboard,
    navigation,
    strategyBuilder,
    watchlists,
    strategies,
    resources,
    ticker,
    form: formReducer,
})