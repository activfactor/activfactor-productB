import { WATHLIST_TICKER_SAVED_MESSAGE, WATHLIST_TICKER_MESSAGE_RESET, DASHBOARD_UPDATE_FROM_WATCHLIST } from './types';
import wealthface from '../apis/wealthface';
import { getJSON } from '../utils/jsonFunctions';

export const addToExistingWatchList = props => (dispatch, getState) => {
    wealthface.post('/factor/watchlist/ticker', props.data, props.headers).then(response => {
        }).then(result => {
            wealthface.get('/factor/watchlist', {
                params: {
                    user_id: getState().auth.userID,
                    watchlist_name: props.data.watchlist_name
                },
                headers: {
                    Authorization: `JWT ${getState().auth.token}`
                }
            }).then(response => {
                const data = getJSON(response).message;
                let obj = {};
                obj[props.data.watchlist_name] = {
                    "last_update": data["last_update"],
                    "watchlist_perf_1d": data["watchlist_perf_1d"],
                    "watchlist_perf_wtd": data["watchlist_perf_wtd"],
                    "watchlist_perf_mtd": data["watchlist_perf_wtd"],
                    "number_of_tickers": data["number_of_tickers"]
                }
                dispatch({type: DASHBOARD_UPDATE_FROM_WATCHLIST, payload: obj});
                dispatch({type: WATHLIST_TICKER_SAVED_MESSAGE, payload: "Successful"});
            }).catch(err => {
                dispatch({type: WATHLIST_TICKER_SAVED_MESSAGE, payload: "Error Occured"});
            });
        })
    .catch(err => {
        dispatch({type: WATHLIST_TICKER_SAVED_MESSAGE, payload: "Error Occured"});
    });
}

export const addToNewWatchList = props => (dispatch, getState) => {
    wealthface.post('/factor/watchlist', props.data, props.headers).then(response => {
        }).then(result =>{
            wealthface.get('/factor/watchlist', {
                params: {
                    user_id: getState().auth.userID,
                    watchlist_name: props.data.watchlist_name
                },
                headers: {
                    Authorization: `JWT ${getState().auth.token}`
                }
            }).then(response => {
                const data = getJSON(response).message;
                let obj = {};
                obj[props.data.watchlist_name] = {
                    "last_update": data["last_update"],
                    "watchlist_perf_1d": data["watchlist_perf_1d"],
                    "watchlist_perf_wtd": data["watchlist_perf_wtd"],
                    "watchlist_perf_mtd": data["watchlist_perf_wtd"],
                    "number_of_tickers": data["number_of_tickers"]
                }
                dispatch({type: DASHBOARD_UPDATE_FROM_WATCHLIST, payload: obj});
                dispatch({type: WATHLIST_TICKER_SAVED_MESSAGE, payload: "Successful"});
            }).catch(err => {
                dispatch({type: WATHLIST_TICKER_SAVED_MESSAGE, payload: "Error Occured"});
            })
        })
    .catch(err => {
        dispatch({type: WATHLIST_TICKER_SAVED_MESSAGE, payload: "Error Occured"});
    })
}

export const resetWathListMessage = () => dispatch => {
    dispatch({type: WATHLIST_TICKER_MESSAGE_RESET});
}