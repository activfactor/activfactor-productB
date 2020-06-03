import { SET_STRATEGY_NAME, SET_WATCHLIST_NAME, SET_TICKER_ID } from '../types';

export const setStrategyName = (strategyName) => ({
    type: SET_STRATEGY_NAME,
    payload: strategyName
})

export const setWatchlistName = (watchlistName) => ({
    type: SET_WATCHLIST_NAME,
    payload: watchlistName,
  });

export const setTickerId = (tickerId) => ({
    type: SET_TICKER_ID,
    payload: tickerId
})