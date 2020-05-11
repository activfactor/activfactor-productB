import { SIGN_IN , SIGN_IN_ERROR , SIGN_OUT, AUTH_ERR ,AUTH_RESET } from '../types';
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
        case SIGN_IN:
            return { 
                ...state, 
                authenticated: action.payload.authenticated,
                user: action.payload.user,
                userId: action.payload.userId,
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
                authenticated: false,
                token: null,
                userId: null,
                userName: null
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