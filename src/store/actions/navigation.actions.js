import { FETCH_TICKERS_DATA, SET_TICKERS_DATA } from '../types';
import { apiAction } from '../middleware/api.middleware.helper';
import { endPoints, initialParams, requestMethods } from '../../config/appConfig';

export const getTickersList = () => {
    return apiAction({
        url: endPoints.fetchTickers,
        method: requestMethods.GET,
        dataToSend: initialParams.tickers,
        label: FETCH_TICKERS_DATA,
        onSuccess: (response) => {
            return {
                type: SET_TICKERS_DATA,
                payload: response.data
            }
        }
    })
}