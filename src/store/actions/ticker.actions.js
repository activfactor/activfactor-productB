import { FETCH_TICKER_DETAILS, SET_TICKER_DETAILS, CLEAR_TICKER } from '../types';
import { endPoints, requestMethods } from 'config/appConfig';
import { apiAction } from '../middleware/api.middleware.helper';

export const fetchTickerDetails = (tickerId) => (
    apiAction({
        label: FETCH_TICKER_DETAILS,
        url: endPoints.fetchTicker,
        method: requestMethods.GET,
        dataToSend: {
            tradingitemid: tickerId
        },
        onSuccess: ({data}) => ({
            type: SET_TICKER_DETAILS,
            payload: data
        })
    })
)

export const clearTickerDetails = () => ({
    type: CLEAR_TICKER
})