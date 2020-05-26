import { SET_STRATEGY_NAME, SET_WATCHLIST_NAME } from '../types';

export const setStrategyName = (strategyName) => ({
    type: SET_STRATEGY_NAME,
    payload: strategyName
})

export const setWatchlistName = (watchlistName) => ({
    type: SET_WATCHLIST_NAME,
    payload: watchlistName,
  });