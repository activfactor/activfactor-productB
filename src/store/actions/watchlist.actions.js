import {
  SET_NEW_WATCHLIST,
  SET_WATCH_LISTS,
  UPDATE_WATCHLIST,
  FETCH_WATCHLISTS,
  FETCH_ONE_WATCHLIST_DETAILS,
  SET_ONE_WATCHLIST_DETAILS,
  DELETE_WATCHLIST,
  CLEAR_WATCHLIST,
  DELETE_TICKERS
} from "../types";
import { endPoints, requestMethods } from "config/appConfig";
import { apiAction } from "../middleware/api.middleware.helper";

export const getWatchlists = () => {
  return apiAction({
    label: FETCH_WATCHLISTS,
    apiVersion: "2",
    url: endPoints.fetchWatchlists,
    method: requestMethods.GET,
    onSuccess: ({ data }) => (dispatch) => {
      dispatch(setWatchLists(data));
    },
  });
};

export const deleteWatchlist = (watchlistName) => {
    return apiAction({
        url: endPoints.deleteWatchlist,
        method: requestMethods.DELETE,
        apiVersion: "2",
        dataToSend: {watchlistName},
        label: DELETE_WATCHLIST
    })
 }

export const fetchWatchlist = () => (dispatch, getState) => {
  const { watchlistName } = getState().resources;
  dispatch(
    apiAction({
      url: endPoints.fetchWatchlistDetails,
      method: requestMethods.GET,
      apiVersion: "2",
      label: FETCH_ONE_WATCHLIST_DETAILS,
      dataToSend: { watchlistName },
      onSuccess: ({ data }) => {
        return {
          type: SET_ONE_WATCHLIST_DETAILS,
          payload: data,
        };
      },
    })
  );
};

export const deleteTickers = (tickers, watchlistName) => {
    return apiAction({
        url: endPoints.deleteTicker,
        method: requestMethods.DELETE,
        apiVersion: "2",
        label: DELETE_TICKERS,
        dataToSend: {tickers: tickers.join(','), watchlistName},
        onSuccess: () => dispatch => {
            dispatch(fetchWatchlist());
        }
    })
}

export const clearWatchlistDetails = () => ({
    type: CLEAR_WATCHLIST
})

export const saveNewWatchList = (watchlistName, tickerList) => {
  return apiAction({
    label: SET_NEW_WATCHLIST,
    url: endPoints.saveWatchlist,
    method: requestMethods.POST,
    dataToSend: {
      watchlistName,
      tickers: tickerList.join(","),
    },
    apiVersion: "2",
    onSuccess: () => dispatch => {
      dispatch(getWatchlists())
    }
  });
};

export const updateWatchlist = (watchlistName, tickerList) => {
  return apiAction({
    label: UPDATE_WATCHLIST,
    url: endPoints.updateWatchlist,
    method: requestMethods.POST,
    dataToSend: {
      watchlistName,
      tickers: tickerList.join(","),
    },
    apiVersion: "2",
  });
};

export const setWatchLists = (data) => {
  return {
    type: SET_WATCH_LISTS,
    payload: data,
  };
};
