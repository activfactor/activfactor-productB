import { API_END, API_START, API_ERROR, API_CLEAR } from '../types';
import INITIAL_STATE from '../initialState';

export default (state = INITIAL_STATE.api, action) => {
    switch(action.type){
        case API_END:
            return {
                ...state,
                [action.label]: {
                    ...state[action.label],
                    isLoading: false,
                    label: action.label,
                    done: true
                }
            }
        case API_START:
            return {
                ...state,
                [action.label]: {
                    ...state[action.label],
                    isLoading: true,
                    error: null,
                    label: action.label,
                    done: false
                }
            }
        case API_ERROR:
            let error = action.error;
            let statusCode;
            const {response} = action.error;
            const {message} = action.error;
            if (response){
                error = response.data.message
                statusCode = response.status
            } else {
                error = message;
            }
            return {
                ...state,
                [action.label]: {
                    ...state[action.label],
                    isLoading: false,
                    error,
                    label: action.label,
                    done: true,
                    statusCode
                }
            }
        case API_CLEAR:
            return {
                ...state,
                [action.label]:{
                    isLoading: false,
                    done: false,
                    error: null
                }
            }
        default:
            return state
    }
}