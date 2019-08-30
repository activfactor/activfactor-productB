import { TRADEIT_ORDER_PREVIEW, TRADEIT_ORDER_ERROR, TRADEIT_ORDER_RESET } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case TRADEIT_ORDER_PREVIEW:
            return {
                ...state,
                previewOrder: action.payload
            }
        case TRADEIT_ORDER_ERROR:
            return {
                errorMessage: action.payload
            }
        case TRADEIT_ORDER_RESET:
            return {}
        default: 
            return state
    }
}