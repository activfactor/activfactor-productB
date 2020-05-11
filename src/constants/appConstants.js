export const countries = [
    {value: 'USA', label: 'USA'},
    {value: 'UAE', label: 'UAE'},
    {value: 'CAN', label: 'CAN'}
]

export const activfactor = {
    authenticate: 'authenticate'
}

export const production = {
    login: '/login'
}

export const routes = [
    {label: 'Dashboard', to: '/dashboard'},
    {label: 'Strategy builder', to: '/strategy/builder'},
    {label: 'Strategy monitor', to: '/strategy/monitor'},
    {label: 'Watch list', to: '/watchlist'}
]

export const tokenTypes = {
    jwt: 'JWT',
    bearer: 'Bearer'
}

export const API_CONFIG = {
    baseURL: {
        v1: 'http://api.activfactor.com/api',
        v2: 'http://api.activfactor.com/api2'
    },
    API_HEADERS_COMMON_CONFIG: {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}