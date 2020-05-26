import { SET_STRATEGY_RESULTS, SET_STRATEGY_FILTERS, UPDATE_STRATEGY_FILTERS, RESET_STRATEGY_FILTERS } from '../types';
import INITIAL_STATE from '../initialState';

export default (state = INITIAL_STATE.strategyBuilder, action) => {
    switch(action.type){
        case SET_STRATEGY_RESULTS:
            return {
                ...state,
                strategyResults: action.payload,
                appliedFilters: action.filters
            }
        case SET_STRATEGY_FILTERS:
            return {
                ...state,
                initialStrategyFilters: action.payload
            }
        case UPDATE_STRATEGY_FILTERS:
            return {
                ...state,
                initialStrategyFilters: {
                    ...state.initialStrategyFilters,
                    ...action.payload
                }
            }
        case RESET_STRATEGY_FILTERS:
            return {
                ...state,
                ...INITIAL_STATE.strategyBuilder
            }
        default:
            return state
    }
}