import {
  WATHLIST_OP_RESPONSE,
  WATHLIST_OP_RESPONSE_RESET,
  WATHLIST_GET,
  WATHLIST_NAME_UPDATE,
  WATCHLIST_RESET,
  DASHBOARD_GET,
  DASHBOARD_RESET,
} from "./types";
import wealthface from '../apis/wealthface';
import { getJSON } from '../utils/jsonFunctions';
import history from '../history';

export const addToExistingWatchList = props => async (dispatch, getState) => {
  try {
    await wealthface.post(
      "/factor/watchlist/ticker",
      props.data,
      props.headers
    );
    try {
      const response = await wealthface.get("/factor/dashboard", {
        params: {
          user_id: getState().auth.userID
        },
        headers: {
          Authorization: `JWT ${getState().auth.token}`
        }
      });
      dispatch({
        type: DASHBOARD_GET,
        payload: { data: getJSON(response).message, country: "CAN" }
      });
      dispatch({ type: WATHLIST_OP_RESPONSE, payload: "Successful" });
    } catch (err) {
      dispatch({ type: WATHLIST_OP_RESPONSE, payload: "Error Occured" });
    }
  } catch (err) {
    dispatch({ type: WATHLIST_OP_RESPONSE, payload: "Error Occured" });
  }
};
    

export const addToNewWatchList = props => async (dispatch, getState) => {
  try {
    await wealthface.post("/factor/watchlist", props.data, props.headers);
    try {
      const response = await wealthface.get("/factor/dashboard", {
        params: {
          user_id: getState().auth.userID
        },
        headers: {
          Authorization: `JWT ${getState().auth.token}`
        }
      });
      dispatch({
        type: DASHBOARD_GET,
        payload: { data: getJSON(response).message, country: 'CAN' }
      });
      dispatch({ type: WATHLIST_OP_RESPONSE, payload: "Successful" });
    } catch (err) {
      dispatch({ type: WATHLIST_OP_RESPONSE, payload: "Error Occured" });
    }
  } catch (err) {
    dispatch({ type: WATHLIST_OP_RESPONSE, payload: "Error Occured" });
  }
};

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

export const deleteWatchlist = (watchListName) => async (dispatch, getState) => {
    const dataToSend = {
          headers: {
            "Authorization": `JWT ${getState().auth.token}`,
          },
          data: {
            "user_id": getState().auth.userID,
            "watchlist_name": watchListName
          }
      };
    await wealthface.delete('/factor/watchlist',dataToSend)
    const response = await wealthface.get("/factor/dashboard", {
        params: {
          user_id: getState().auth.userID
        },
        headers: {
          Authorization: `JWT ${getState().auth.token}`
        }
      });
      dispatch({
        type: DASHBOARD_GET,
        payload: { data: getJSON(response).message, country: 'CAN' }
      });
    dispatch({type: WATCHLIST_RESET});
    history.push('/dashboard');
}

export const removeTicker = (watchListName,tickerName) => async (dispatch, getState) => {
    const tickersCount = Object.keys(getState().watchlistReducers.data.tickers).length;
    if (tickersCount > 1){
        const dataToSend = {
            headers: {
                "Authorization": `JWT ${getState().auth.token}`,
            },
            data: {
                "user_id": getState().auth.userID,
                "watchlist_name": watchListName,
                "tickers": [tickerName]
            }
        };
        await wealthface.delete('/factor/watchlist/ticker', dataToSend)
        try {
            dispatch({type: DASHBOARD_RESET});
            const response = await wealthface.get("factor/watchlist", {
                params: {
                user_id: getState().auth.userID,
                watchlist_name: watchListName
                },
                headers: {
                Authorization: `jwt ${getState().auth.token}`
                }
            });
            dispatch({ type: WATHLIST_GET, payload: getJSON(response).message });
        } catch (err) {
            dispatch({ type: WATHLIST_OP_RESPONSE, payload: err });
        }
    } else if (tickersCount === 1){
        const dataToSend = {
            headers: {
              "Authorization": `JWT ${getState().auth.token}`,
            },
            data: {
              "user_id": getState().auth.userID,
              "watchlist_name": watchListName
            }
        };
        await wealthface.delete('/factor/watchlist',dataToSend)
        const response = await wealthface.get("/factor/dashboard", {
            params: {
              user_id: getState().auth.userID
            },
            headers: {
              Authorization: `JWT ${getState().auth.token}`
            }
          });
          dispatch({
            type: DASHBOARD_GET,
            payload: { data: getJSON(response).message, country: 'CAN' }
          });
        dispatch({type: WATCHLIST_RESET});
        history.push('/dashboard');
    }
    
}