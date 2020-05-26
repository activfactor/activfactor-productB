import { SET_STRATEGIES, SET_ONE_STRATEGY_DETAILS, CLEAR_STRATEGY } from '../types';
import INITIAL_STATE from '../initialState';

export default (state = INITIAL_STATE.strategies, {type, payload}) => {
    switch(type){
        case SET_STRATEGIES:
            return {
                ...state,
                list: payload 
            }
        case SET_ONE_STRATEGY_DETAILS:
            return {
                ...state,
                oneStrategyDetails: payload
            }
        case CLEAR_STRATEGY:
            const newState = state;
            delete newState.oneStrategyDetails
            return {
                ...newState
            }
        default:
            return state;
    }
}