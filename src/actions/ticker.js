import { TICKER_LIST,TICKER_GET,TICKER_NAME_UPDATE,TICKER_LIST_RESET } from './types';
import wealthface from '../apis/wealthface';
import { getJSON } from '../utils/jsonFunctions';

export const getTickerList = () => async (dispatch, getState) => {
    const response = await wealthface.get('/tickerlist',{
        headers: {
            Authorization: `JWT ${getState().auth.token}`
          }
    });
    const jsonResponse = getJSON(response);
    dispatch({type: TICKER_LIST, payload: jsonResponse.message.tickerlist});
}

export const getTickerDetails = (tickerName) => async (dispatch, getState) => {
    const response = await wealthface.get('/ticker', {
        params:{
            "ticker":tickerName
        },
        headers:{
            "Authorization": `JWT ${getState().auth.token}`
        }
    })
    const jsonResponse = getJSON(response);
    dispatch({type: TICKER_GET, payload: jsonResponse.message});

}

export const updateTickerName = tickerName => dispatch => {
    dispatch({type: TICKER_NAME_UPDATE, payload: tickerName})
}

export const resetTickerList = () => async dispatch => {
    dispatch({type: TICKER_LIST_RESET});
}