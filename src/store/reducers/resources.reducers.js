import { SET_STRATEGY_NAME, CLEAR_STRATEGY, SET_WATCHLIST_NAME, CLEAR_WATCHLIST } from '../types';

export default (state = {}, {type, payload}) => {
    switch(type){
        case SET_STRATEGY_NAME:
            return {
                ...state,
                strategyName: payload
            }
        case CLEAR_STRATEGY:
            return {
                ...state,
                strategyName: ''
            }
        case SET_WATCHLIST_NAME:
            return {
                ...state,
                watchlistName: payload
            }
        case CLEAR_WATCHLIST:
            return {
                ...state,
                watchlistName: ''
            }
        default:
            return state;
    }
}