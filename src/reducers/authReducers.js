import { SIGN_IN,SIGN_OUT, AUTH_ERR, AUTH_START } from '../actions/types';
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
                regtime: action.payload.regtime,
                token: action.payload.token,
                errorMessage:null
            }
        case SIGN_OUT:
            return {
                ...state,
                authenticated: null,
                username: null,
                regtime: null,
                token: null,
                errorMessage:null
            }
        case AUTH_START:
            return {
                ...state,
                authenticated: action.payload.authenticated,
                username: action.payload.username,
                jwtoken: action.payload.jwtoken,
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