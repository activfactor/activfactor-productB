import { FACTOR_SCREENER } from '../actions/types';
const INITIAL_STATE = {
    message:''
};

export default (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case FACTOR_SCREENER:
            return { 
                ...state, 
                message:JSON.parse(action.payload.replace(/\bNaN\b/g,null)),
            }
        default:
            return state;
    }
}