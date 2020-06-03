import { FETCH_APP_CONFIG, SET_APP_CONFIG } from '../types';
import { apiAction } from '../middleware/api.middleware.helper';
import { endPoints, requestMethods, INITIAL_STRATEGY_FILTERS, SUPPORTED_COINTRIES } from 'config/appConfig'
import { setStrategyFilters } from './strategyBuilder.actions';

export const fetchAppConfig = () => {
    return apiAction({
        label: FETCH_APP_CONFIG,
        requests: [
            {url: endPoints.sectorsDescription, method: requestMethods.GET},
            {url: endPoints.factorsDescription, method: requestMethods.GET},
            {url: endPoints.firmsizeDescription, method: requestMethods.GET},
            {url: endPoints.metricDescription, method:requestMethods.GET},
            {url: endPoints.rebalancingDescription, method: requestMethods.GET},
            {url: endPoints.countryDescription, method: requestMethods.GET}
        ],
        onSuccess: responses => dispatch => {
            const sectorOptions = Object.keys(responses[0].data).map(sector => ({value: sector, label: sector}));
            const countriesOptions = Object.keys(responses[5].data).map(country => ({value: country, label: country}));
            dispatch(setAppConfig({
                descriptions: {
                    sectors: responses[0].data,
                    factors: responses[1].data, 
                    firmSizes: responses[2].data,
                    metrics: responses[3].data,
                    rebalancingFreq: responses[4].data,
                    countries: responses[5].data
                },
                selectOptions: {
                    sectors: sectorOptions,
                    countries: [...countriesOptions, {value: 'SYR', label: 'SYR'}]
                }
            }));
            dispatch(setStrategyFilters({
                ...INITIAL_STRATEGY_FILTERS,
                sectors: sectorOptions
            }))
        } 
    })
}

const setAppConfig = (config) => {
    return {
        type: SET_APP_CONFIG,
        payload: config
    }
}

