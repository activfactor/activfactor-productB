import { TICKER_LIST , TICKER_GET, TICKER_NAME_UPDATE, TICKER_LIST_RESET } from '../actions/types';

export default  (state = {} , action) => {
    switch (action.type){
        case TICKER_LIST:
            return {
                ...state,
                tickerList: action.payload
            }
        case TICKER_GET:
            return {
                ...state,
                tickerDetail: action.payload
            }
        case TICKER_NAME_UPDATE:
            return {
                tickerList: {...state.tickerList},
                tickerName: action.payload
            }
        case TICKER_LIST_RESET:
            return state = {}
        default:
            return state
    }
}