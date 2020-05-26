import { SET_TICKERS_DATA } from '../types';

export default (state = {}, action) => {
    switch(action.type){
        case SET_TICKERS_DATA:
            return {
                ...state,
                tickers: action.payload
            }
        default:
            return state
    }
}