import { SIGN_IN } from '../types';
import INITIAL_STATE from '../initialState';

const { auth } = INITIAL_STATE;

export default (state = auth, action)=>{
    switch (action.type){
        case SIGN_IN:
            return { 
                ...state, 
                token: action.payload,
            }
        default:
            return state;
    }
}