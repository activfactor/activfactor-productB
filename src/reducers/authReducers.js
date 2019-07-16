import { SIGN_IN_A , SIGN_IN_ERROR , SIGN_OUT, AUTH_ERR ,AUTH_RESET } from '../actions/types';
const INITIAL_STATE = {
    authenticated: false,
    user: null,
    token:null,
    errorMessage: null
};

export default (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case AUTH_RESET:
            return state=INITIAL_STATE
        case SIGN_IN_A:
            return { 
                ...state, 
                authenticated: action.payload.authenticated,
                user: action.payload.user,
                regtime: action.payload.regtime,
                userID: action.payload.userID,
                token: action.payload.token,
            }
        case SIGN_IN_ERROR:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        case SIGN_OUT:
            return {
                ...state,
                authenticated: null,
                user: null,
                regtime: null,
                token: null,
                userID: null,
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