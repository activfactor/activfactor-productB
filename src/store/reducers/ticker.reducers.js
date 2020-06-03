import { SET_TICKER_DETAILS, CLEAR_TICKER } from '../types';

export default (state = {}, {payload, type}) => {
    switch(type){
        case SET_TICKER_DETAILS:
            return {
                ...state,
                tickerDetails: payload
            }
        case CLEAR_TICKER:
            return {
                ...state,
                tickerDetails: ''
            }
        default:
            return state;
    }
}