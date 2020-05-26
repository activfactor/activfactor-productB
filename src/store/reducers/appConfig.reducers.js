import { SET_APP_CONFIG } from '../types';
import INITIAL_STATE from '../initialState';

export default (state = INITIAL_STATE.appConfig , {type, payload}) => {
    switch(type){
        case SET_APP_CONFIG:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}