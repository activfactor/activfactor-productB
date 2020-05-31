import { SIGN_IN, SIGN_OUT } from '../types';
import INITIAL_STATE from '../initialState';

const { auth } = INITIAL_STATE;

export default (state = auth, action)=>{
    switch (action.type){
        case SIGN_IN:
            return { 
                ...state, 
                token: action.payload,
            }
        case SIGN_OUT:
            return {
                ...state,
                userId: null,
                token: null
            }
        default:
            return state;
    }
}