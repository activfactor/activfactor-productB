import { INITIAL_COUNTRY } from 'config/appConfig';
const token = window.localStorage.getItem('token');
const userId = window.localStorage.getItem('userId');
export default {
    auth: {
        token,
        userId
    },
    api: {
        isLoading: false
    },
    appConfig: {
        selectOptions: {
            sectors: [],
            countries: []
        }
    },
    strategyBuilder: {
        initialStrategyFilters: {
            country: INITIAL_COUNTRY,
            halal: 0,
            factors: [],
            sectors: [],
            nStocks: 10,
            rebalancingFreq: '',
            firmSizes: []
        },
        appliedFilters: {}
    },
    strategies: {
        list: {}
    },
    watchlists: {
        list: {}
    }
}