import { TOGGLE_STATUS, LOCATION_PATH, LOCATION_SHOULD_NAVIGATE_TO,LOCATION_SHOULD_NAVIGATE_TO_RESET } from '../actions/types';
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
        case LOCATION_SHOULD_NAVIGATE_TO:
            return {
                ...state,
                shouldNavigateTo: action.payload
            }
        case LOCATION_SHOULD_NAVIGATE_TO_RESET:
            return {
                ...state,
                shouldNavigateTo: undefined
            }
        default:
            return state;
    }
}