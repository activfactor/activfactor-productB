import {
  WATHLIST_OP_RESPONSE,
  WATHLIST_OP_RESPONSE_RESET,
  WATHLIST_GET,
  DASHBOARD_UPDATE_FROM_WATCHLIST,
  WATHLIST_NAME_UPDATE,
  WATCHLIST_RESET,
  DASHBOARD_RESET
} from "./types";
import wealthface from '../apis/wealthface';
import { getJSON } from '../utils/jsonFunctions';
import history from '../history';

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
                dispatch({type: WATHLIST_OP_RESPONSE, payload: "Successful"});
            }).catch(err => {
                dispatch({type: WATHLIST_OP_RESPONSE, payload: "Error Occured"});
            });
        })
    .catch(err => {
        dispatch({type: WATHLIST_OP_RESPONSE, payload: "Error Occured"});
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
                dispatch({type: WATHLIST_OP_RESPONSE, payload: "Successful"});
            }).catch(err => {
                dispatch({type: WATHLIST_OP_RESPONSE, payload: "Error Occured"});
            })
        })
    .catch(err => {
        dispatch({type: WATHLIST_OP_RESPONSE, payload: "Error Occured"});
    })
}

export const getWatchlist = watchlistName => async (dispatch, getState) => {
  try {
      const response = await wealthface.get("factor/watchlist", {
        params: {
          user_id: getState().auth.userID,
          watchlist_name: watchlistName
        },
        headers: {
          Authorization: `jwt ${getState().auth.token}`
        }
      });
      dispatch({ type: WATHLIST_GET, payload: getJSON(response).message });
  } catch (err) {
    dispatch({ type: WATHLIST_OP_RESPONSE, payload: err });
  }
};

export const resetWatchlist = () => (dispatch, getState) => {
    dispatch({type: WATCHLIST_RESET, payload: getState().watchlistReducers.watchListName});
}

export const updateWatchlistName = (wathlistName) => dispatch =>{
    dispatch({type: WATHLIST_NAME_UPDATE, payload: wathlistName});
}

export const resetWathListMessage = () => dispatch => {
    dispatch({type: WATHLIST_OP_RESPONSE_RESET});
}

export const deleteWatchlist = (watchListName) => (dispatch, getState) => {
    const dataToSend = {
          headers: {
            "Authorization": `JWT ${getState().auth.token}`,
          },
          data: {
            "user_id": getState().auth.userID,
            "watchlist_name": watchListName
          }
      };
    wealthface.delete('/factor/watchlist',dataToSend)
    .then(response => {
        dispatch({type:DASHBOARD_RESET});
        dispatch({type: WATCHLIST_RESET});
        history.push('/dashboard');
    }).catch(err => console.log(err));
}