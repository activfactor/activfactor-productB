import { DASHBOARD_GET_MONTHLY, DASHBOARD_USER_STRATEGY, DASHBOARD_RESET } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type){
        case DASHBOARD_GET_MONTHLY:
            return {
                ...state,
                investement: action.payload.investment,
                momentum:action.payload.momentum,
                profitability:action.payload.profitability,
                size:action.payload.size,
                value:action.payload.value,
                volatility:action.payload.volatility,
            }
        case DASHBOARD_USER_STRATEGY:
            return {
                ...state,
                user_strategies: action.payload.User_strategy_performance
            }
        case DASHBOARD_RESET:
            return state={};
        default:
            return state;
    }
} 