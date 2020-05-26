import { SET_WATCH_LISTS, SET_ONE_WATCHLIST_DETAILS, CLEAR_WATCHLIST } from '../types';
import INITIAL_STATE from '../initialState';

export default (state = INITIAL_STATE.watchlists, action) => {
    switch(action.type){
        case SET_WATCH_LISTS:
            return {
                ...state,
                list: action.payload
            }
        case SET_ONE_WATCHLIST_DETAILS:
            return {
                ...state,
                oneWatchlistDetails: action.payload
            }
        case CLEAR_WATCHLIST:
            const newState = state;
            delete newState.oneWatchlistDetails
            return {
                ...newState
            }
        default:
            return state
    }
}