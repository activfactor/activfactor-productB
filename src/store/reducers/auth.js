import { SIGN_IN } from '../types';
import initialState from '../initialState';

export default (state=initialState.auth, action) => {
    switch(action.type){
        case SIGN_IN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}