import { STRATEGY_MONITOR_NAME, STRATEGY_MONITOR_GET } from '../actions/types';
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
        default :
            return state
    }
}