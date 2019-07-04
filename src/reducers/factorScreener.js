import { FACTOR_SCREENER, FACTOR_SCREENER_ERROR, FACTOR_SCREENER_RESET } from '../actions/types';
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
                last_update:action.payload.last_update,
                next_update:action.payload.next_update,
                parameters:action.payload.parameters,
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
                message: action.payload.message,
                error: action.payload.error
            }
        default:
            return state;
    }
}