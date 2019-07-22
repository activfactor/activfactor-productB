import { DASHBOARD_GET, DASHBOARD_RESET } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type){
        case DASHBOARD_GET:
            return {
                ...state,
                CAN: action.payload.Base_strategy_performance.monthly.CAN,
                USA: action.payload.Base_strategy_performance.monthly.USA,
                user_strategies: action.payload.User_strategy_performance
            }
        case DASHBOARD_RESET:
            return state={};
        default:
            return state;
    }
} 