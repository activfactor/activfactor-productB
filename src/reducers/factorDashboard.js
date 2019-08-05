import { DASHBOARD_GET, DASHBOARD_RESET, UPDATE_COUNTRY, DASHBOARD_UPDATE_FROM_WATCHLIST } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type){
        case DASHBOARD_GET:
            return {
                ...state,
                CAN: action.payload.data.Base_strategy_performance.monthly.CAN,
                USA: action.payload.data.Base_strategy_performance.monthly.USA,
                user_strategies: action.payload.data.User_strategy_performance,
                parameters: action.payload.data.Base_strategy_parameters.monthly,
                definition: action.payload.data.definition,
                watchlist: action.payload.data.User_watchlist_performance,
                country: action.payload.country
            }
        case UPDATE_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case DASHBOARD_RESET:
            return state={};
        case DASHBOARD_UPDATE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: {...state.watchlist, ...action.payload}
            }
        default:
            return state;
    }
} 