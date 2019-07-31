import { STRATEGY_MONITOR_NAME, STRATEGY_MONITOR_GET } from '../actions/types';
import wealthface from '../apis/wealthface';

export const changeStrategyName = (strategyName) => dispatch => {
    dispatch({type: STRATEGY_MONITOR_NAME, payload: {name: strategyName}});
}

export const getStrategyMonitor = (strategyName) => (dispatch, getState) => {
    if (strategyName){
        wealthface.get('/factor/strategy', {
            params: {
                user_id: getState().auth.userID,
                strategy_name: getState().strategyMonitor.strategyName
            },
            headers: {
              Authorization: `JWT ${getState().auth.token}`
            }
        }).then(response => {
            dispatch({type: STRATEGY_MONITOR_GET, payload: JSON.parse(response.data.replace(/\bNaN\b/g, null)).message})
        }).catch(err => {console.log(err)})
    }
}