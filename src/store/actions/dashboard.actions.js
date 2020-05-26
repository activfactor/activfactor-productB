import { FETCH_ALL_DASHBOARD_DATA, SET_HISTORICAL_PERFORMANCE_DATA, FETCH_HISTORICAL_PERFORMANCE } from '../types';
import { apiAction } from '../middleware/api.middleware.helper';
import { endPoints, initialParams, requestMethods } from '../../config/appConfig';
import { setWatchLists } from './watchlist.actions';
import { setStrategies } from './strategies.actions';

export const fetchAllDashboardData = () => {
    return apiAction({
        label: FETCH_ALL_DASHBOARD_DATA,
        requests: [
            {url: endPoints.fetchDashboard, method: requestMethods.GET, data: initialParams.historicalPerformance},
            {url: endPoints.fetchWatchlists, method:requestMethods.GET},
            {url: endPoints.fetchStrategies, method:requestMethods.GET}
        ],
        onSuccess: (responses) => dispatch => {
            dispatch(setHistoricalPerformanceData(responses[0].data));
            dispatch(setWatchLists(responses[1].data));
            dispatch(setStrategies(responses[2].data));
        } 
    })
}

export const fetchHistoricalPerformanceData = () => {
    return apiAction({
        url: endPoints.fetchDashboard,
        method: requestMethods.GET,
        apiVersion: "2",
        label: FETCH_HISTORICAL_PERFORMANCE,
        dataToSend: initialParams.historicalPerformance,
        onSuccess: ({data}) => dispatch => {
            dispatch(setHistoricalPerformanceData(data));
        }
    })
}

const setHistoricalPerformanceData = (data) => {
    return {
        type: SET_HISTORICAL_PERFORMANCE_DATA,
        payload: data
    }
}