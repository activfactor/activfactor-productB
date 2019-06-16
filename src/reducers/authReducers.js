import { SIGN_IN, AUTH_ERR, AUTH_START } from '../actions/types';
const INITIAL_STATE = {
    authenticated: false,
    username: null,
    errorMessage: null
};

export default (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case SIGN_IN:
            return { 
                ...state, 
                authenticated: action.payload.authenticated,
                username: action.payload.username,
                errorMessage:null
            }
        case AUTH_START:
            return {
                ...state,
                authenticated: action.payload.authenticated,
                username: action.payload.username,
                errorMessage:null
            }
        case AUTH_ERR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}