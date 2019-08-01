import { STRATEGY_MONITOR_NAME, STRATEGY_MONITOR_GET, RESET_STRATEGY_MONITOR, STRATEGY_MONITOR_DELETE } from '../actions/types';
const INITIAL_STATE = {
    strategyName: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case STRATEGY_MONITOR_NAME:
            return {
                ...state,
                strategyName: action.payload.name

            }
        case STRATEGY_MONITOR_GET:
            return {
                ...state,
                data: action.payload
            }
        case RESET_STRATEGY_MONITOR:
            return {
                strategyName: action.payload.name
            }
        case STRATEGY_MONITOR_DELETE:
            return {
                strategyName: null
            }
        default :
            return state
    }
}