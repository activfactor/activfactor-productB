import { FACTOR_SCREENER, FACTOR_SCREENER_ERROR, FACTOR_SCREENER_RESET, FACTOR_SCREENER_SAVE, FACTOR_SCREENER_SAVE_ERROR, FACTOR_SCREENER_ERROR_RESET } from '../actions/types';
const INITIAL_STATE={
    message:""
}
export default (state=INITIAL_STATE , action)=>{
    switch (action.type){
        case FACTOR_SCREENER_RESET:
            return state=INITIAL_STATE
        case FACTOR_SCREENER:
            return { 
                ...state, 
                benchmark:action.payload.benchmark,
                last_rebalancing:action.payload.last_rebalancing,
                next_rebalancing:action.payload.next_rebalancing,
                last_update:action.payload.last_update,
                next_update:action.payload.next_update,
                parameters:action.payload.parameters,
                factor_intensity: action.payload.factor_intensity,
                firm_size_allocation:action.payload.firm_size_allocation,
                culmulative_return_benchmark:action.payload.performance_benchmark.cumulative_return.monthly,
                culmulative_return_strategy:action.payload.performance_strategy.cumulative_return.monthly,
                sector_allocation:action.payload.sector_allocation,
                drawdown_benchmark:action.payload.performance_benchmark.drawdown.monthly,
                drawdown_strategy:action.payload.performance_strategy.drawdown.monthly,
                annual_return_benchmark:action.payload.performance_benchmark.yearly_return['Annual Return'],
                annual_return_strategy:action.payload.performance_strategy.yearly_return['Annual Return'],
                return_strategy:action.payload.performance_strategy.return,
                return_benchmark:action.payload.performance_benchmark.return,
                metrics_strategy:action.payload.performance_strategy.metrics,
                metrics_benchmark:action.payload.performance_benchmark.metrics,
                risk_strategy:action.payload.performance_strategy.risk,
                risk_benchmark:action.payload.performance_benchmark.risk,
                strategy_actual_members:action.payload.strategy_actual_members
            }
        case FACTOR_SCREENER_ERROR:
            return {
                ...state,
                message: action.payload.data.message,
                error: action.payload.data.error
            }
        case FACTOR_SCREENER_SAVE:
            return {
                ...state,
                saving_message: action.payload
            }
        case FACTOR_SCREENER_SAVE_ERROR:
            return{
                ...state,
                error_saving_message: action.payload
            }
        case FACTOR_SCREENER_ERROR_RESET:
            return {
                ...state,
                error_saving_message: undefined
            }
        default:
            return state;
    }
}