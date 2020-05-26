import { FETCH_STRATEGIES, SET_STRATEGIES, FETCH_ONE_STRATEGY_DETAILS, SET_ONE_STRATEGY_DETAILS, DELETE_STRATEGY, CLEAR_STRATEGY } from '../types';
import { apiAction } from '../middleware/api.middleware.helper';
import { endPoints, requestMethods } from 'config/appConfig';

export const fetchStrategies = () => {
    return apiAction({
        url: endPoints.fetchStrategies,
        method: requestMethods.GET,
        apiVersion: "2",
        label: FETCH_STRATEGIES,
        onSuccess: ({data}) => dispatch => {
            dispatch(setStrategies(data));
        }
    })
}

export const fetchStrategy = () => (dispatch, getState) => {
    const {strategyName} = getState().resources;
    dispatch(apiAction({
        url: endPoints.fetchStrategyDetails,
        method: requestMethods.GET,
        apiVersion: "2",
        label: FETCH_ONE_STRATEGY_DETAILS,
        dataToSend: {strategyName: strategyName},
        onSuccess: ({data}) => {
            return {
                type: SET_ONE_STRATEGY_DETAILS,
                payload: data
            }
        }
    }))
}

export const clearStrategyDetails = () => {
    return {
        type: CLEAR_STRATEGY,
    }
}

export const deleteStrategy = (strategyName) => {
    return apiAction({
        url: endPoints.deleteStrategy,
        method: requestMethods.DELETE,
        apiVersion: "2",
        dataToSend: {strategyName},
        label: DELETE_STRATEGY
    })
 }

export const setStrategies = (data) => {
    return {
        type: SET_STRATEGIES,
        payload: data
    }
}