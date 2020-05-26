import { SET_HISTORICAL_PERFORMANCE_DATA } from '../types';

export default (state = {}, action) => {
    switch(action.type){
        case SET_HISTORICAL_PERFORMANCE_DATA:
            return {
                ...state,
                historicalPerformance: action.payload
            }
        default:
            return state;
    }
}