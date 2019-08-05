import { WATHLIST_TICKER_SAVED_MESSAGE, WATHLIST_TICKER_MESSAGE_RESET} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type){
        case WATHLIST_TICKER_SAVED_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case WATHLIST_TICKER_MESSAGE_RESET:
            return {}
        default:
            return state;
    }
} 