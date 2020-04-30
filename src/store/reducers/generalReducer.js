import { LOADING_STATE } from '../actions/types';

const INITIAL_STATE = {
    loaded: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LOADING_STATE:
            return {
                loaded: action.loadingState
            }
        default:
            return state;
    }
}