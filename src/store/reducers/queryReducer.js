import { COUNTRY_UPDATE,SECTOR_UPDATE,FACTORS_UPDATE,STOCK_UPDATE,FIRM_UPDATE, RESET_QUERY, BUILD_STRATEGY_QUERY, UPDATE_STRATEGY_QUERY, REBALANCING_UPDATE, SHARIAH_UPDATE } from '../actions/types';
const INITIAL_STATE = {
    "country":"CAN",
    "sectors":"consumers,materials,financials,industrials,services,technology,energy,health,utilities",
    "factors":"",
    "n_stock":1,
    "firm_size":"large,medium,small",
    "rebalancing": "monthly",
    "shariah": 0
}

export default (state=INITIAL_STATE, action)=>{
    switch (action.type){
        case COUNTRY_UPDATE:
            return{
                ...state,
                "country":action.payload.country
            }
        case SECTOR_UPDATE:
                return{
                    ...state,
                    "sectors":action.payload.sectors.slice(0,-1)
                }
        case FACTORS_UPDATE:
                return{
                    ...state,
                    "factors":action.payload.factors.slice(0,-1)
                }
        case STOCK_UPDATE:
                return{
                    ...state,
                    "n_stock":action.payload.n_stock
                }
        case FIRM_UPDATE:
                return{
                    ...state,
                    "firm_size":action.payload.firm_size.slice(0,-1)
                }
        case REBALANCING_UPDATE:
            return{
                ...state,
                "rebalancing": action.payload.rebalancing
            }
        case SHARIAH_UPDATE:
            return {
                ...state,
                "shariah": action.payload.shariah
            }
        case RESET_QUERY:
            return{
                ...state,
                "country":"can",
                "sectors":"",
                "factors":"",
                "n_stock":1,
                "firm_size":"",
                "rebalcning":"monthly",
                "shariah":0
            }
        case BUILD_STRATEGY_QUERY:
            return{
                ...state,
                "country":"can",
                "sectors":"consumers,materials,financials,industrials,services,technology,energy,health,utilities",
                "factors":"",
                "n_stock":1,
                "firm_size":"large,medium,small",
                "rebalancing":"monthly",
                "shariah":0
            }
        case UPDATE_STRATEGY_QUERY:
            return {
                ...state,
                "country": action.payload.country,
                "sectors": action.payload.sectors,
                "factors": action.payload.factors,
                "n_stock": action.payload.n_stock,
                "firm_size": action.payload.firm_size,
                "rebalancing": action.payload.rebalancing,
                "shariah": action.payload.shariah
            }
        default:
            return state;
    }
}

