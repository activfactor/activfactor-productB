import { TOGGLE_STATUS, LOCATION_PATH } from '../actions/types';
const INITIAL_STATE={
    clicked:false,
    initial:false
} 
export default (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case TOGGLE_STATUS:
            return { 
                ...state, 
                clicked:action.payload.clickStatus,
                initial:action.payload.initialStatus
            }
        case LOCATION_PATH:
            return {
                ...state,
                location: action.payload
            }
        default:
            return state;
    }
}