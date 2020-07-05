export const SUPPORTED_COINTRIES = [
    {value: 'USA', label: 'USA'},
    {value: 'UAE', label: 'UAE'},
    {value: 'CAN', label: 'CAN'},
    {value: 'UK', label: 'UK'}
]

export const INITIAL_COUNTRY = 'USA'

export const endPoints = {
    authenticate: 'authenticate',
    fetchTickers: 'tickers',
    fetchDashboard: 'insights/performance/historical',
    fetchWatchlists: 'watchlists',
    sectorsDescription: 'sectorslist',
    firmsizeDescription: 'firmsizelist',
    factorsDescription: 'factorslist',
    metricDescription: 'metricslist',
    countryDescription: 'countrieslist',
    rebalancingDescription: 'rebalancinglist',
    runStrategy: 'factor/backtest',
    saveWatchlist: 'watchlist',
    updateWatchlist: '/ticker/watchlist',
    saveStrategy: 'factor/monitor',
    fetchStrategies: 'monitors',
    fetchStrategyDetails: 'monitor',
    deleteStrategy: 'monitor',
    fetchWatchlistDetails: 'watchlist',
    deleteWatchlist: 'watchlist',
    deleteTicker: 'ticker/watchlist',
    fetchTicker: 'ticker'
}

export const requestMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
}

export const URL = {
    login: '/auth'
}

export const routes = [
    {label: 'Dashboard', to: '/dashboard'},
    {label: 'Strategy builder', to: '/strategy/builder'},
    {label: 'Strategies monitor', to: '/strategies/monitor'},
    {label: 'Watchlists Monitor', to: '/watchlists/monitor'}
]

export const tokenTypes = {
    jwt: 'JWT',
    bearer: 'Bearer'
}

export const API_CONFIG = {
    baseURL: {
        v1: 'http://api.activfactor.com',
        v2: 'http://api.activfactor.com'
    },
    API_HEADERS_COMMON_CONFIG: {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}

export const INITIAL_STRATEGY_FILTERS = {
    country: INITIAL_COUNTRY,
    halal: 0,
    factors: [],
    rebalancingFreq: 'monthly',
    firmSizes: ['medium','large','small','micro'],
    nStocks: 25,
}