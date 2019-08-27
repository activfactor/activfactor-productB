import { WATHLIST_OP_RESPONSE, WATHLIST_OP_RESPONSE_RESET, WATHLIST_NAME_UPDATE, WATHLIST_GET, WATCHLIST_RESET} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
      case WATHLIST_OP_RESPONSE:
        return {
          ...state,
          message: action.payload
        };
      case WATHLIST_OP_RESPONSE_RESET:
        return {};
      case WATHLIST_NAME_UPDATE:
        return {
          ...state,
          watchListName: action.payload
        };
      case WATHLIST_GET:
        return {
          ...state,
          data: action.payload
        };
      case WATCHLIST_RESET:
        return {
          watchListName: action.payload
        };
      default:
        return state;
    }
} 