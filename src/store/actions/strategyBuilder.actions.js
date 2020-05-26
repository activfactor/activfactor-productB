import {
  FETCH_STRATEGY_RESULTS,
  SET_STRATEGY_RESULTS,
  SET_STRATEGY_FILTERS,
  UPDATE_STRATEGY_FILTERS,
  RESET_STRATEGY_FILTERS,
  SAVE_STRATEGY,
} from "../types";
import { apiAction } from '../middleware/api.middleware.helper';
import { endPoints, requestMethods } from '../../config/appConfig';
import { fetchStrategies } from './strategies.actions';
import { setStrategyName } from './resources.actions';

export const runStrategy = (params) => (dispatch, getState) => {
    // check if the filters are changed then run the strategy
    // if the filters changed , clear the strategy results
    const { strategyBuilder: {appliedFilters, initialStrategyFilters} } = getState();
    if (JSON.stringify(appliedFilters) !== JSON.stringify(initialStrategyFilters)) {
        dispatch({type: SET_STRATEGY_RESULTS, payload: {}})
        dispatch(apiAction({
            label: FETCH_STRATEGY_RESULTS,
            url: endPoints.runStrategy,
            method: requestMethods.GET,
            dataToSend: params,
            apiVersion: "2",
            onSuccess: (response) => {
                return {
                    type: SET_STRATEGY_RESULTS,
                    payload: response.data,
                    filters: initialStrategyFilters
                }
            }
        }))
    }
} 

const formatSectors = (sectors) => {
    return sectors.map(sector => sector.value).join(',')
}
export const saveStrategy = (strategyName) => (dispatch, getState) => {
    const {strategyBuilder: {appliedFilters}} = getState();
    const {country, nStocks: nStock, halal, factors, rebalancingFreq: rebalancing, firmSizes, sectors, weighting='ew'} = appliedFilters;
    const dataToSend = {
        strategyName,
        country,
        nStock,
        halal,
        factors: factors.join(','),
        sectors: formatSectors(sectors),
        rebalancing,
        firmSize: firmSizes.join(','),
        weighting
    }
    dispatch(apiAction({
        label: SAVE_STRATEGY,
        url: endPoints.saveStrategy,
        method: requestMethods.POST,
        apiVersion: "2",
        dataToSend,
        onSuccess: () => dispatch => {
            dispatch(setStrategyName(strategyName));
            dispatch(fetchStrategies())
        }
    }))
 }

export const setStrategyFilters = (filters) => ({
    type: SET_STRATEGY_FILTERS,
    payload: filters
});

export const updateStrategyFilters = (filters) => ({
    type: UPDATE_STRATEGY_FILTERS,
    payload: filters
})

export const resetStrategyFilters = () => ({
    type: RESET_STRATEGY_FILTERS
})