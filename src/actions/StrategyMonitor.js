import { STRATEGY_MONITOR_NAME, STRATEGY_MONITOR_GET, RESET_STRATEGY_MONITOR, STRATEGY_MONITOR_DELETE, DASHBOARD_RESET } from '../actions/types';
import wealthface from '../apis/wealthface';
import history from '../history';

export const changeStrategyName = (strategyName) => (dispatch, getState) => {
    if (getState().strategyMonitor.strategyName===strategyName){
        dispatch({type: STRATEGY_MONITOR_NAME, payload: {name: strategyName}});
    } else {
        dispatch({type: RESET_STRATEGY_MONITOR, payload: {name: strategyName}});
    }
    
}

export const getStrategyMonitor = (strategyName) => (dispatch, getState) => {
    if (strategyName){
        if (!getState().strategyMonitor.data){
            wealthface.get('/factor/strategy', {
                params: {
                    user_id: getState().auth.userID,
                    strategy_name: getState().strategyMonitor.strategyName
                },
                headers: {
                  Authorization: `JWT ${getState().auth.token}`
                }
            }).then(response => {
                const textContructor = "text".constructor;
                const objectConstructor = {}.constructor;
                let responseData;
                try{
                    if (response.data.constructor === objectConstructor){
                        responseData = JSON.stringify(response.data);
                    } else if (response.data.constructor === textContructor) {
                        responseData = response.data.replace(/\bNaN\b/g, null);
                        responseData = responseData.replace(/-\bInfinity\b/g, null);
                        responseData = responseData.replace(/\bInfinity\b/g, null);
                    }
                    dispatch({type: STRATEGY_MONITOR_GET, payload: JSON.parse(responseData).message});
                } catch(err) {
                    console.log(err);
                }
            }).catch(err => {console.log(err)})
        }
    }
}

export const deleteStrategy = (strategyName) => (dispatch, getState) => {
    const dataToSend = {
          headers: {
            "Authorization": `JWT ${getState().auth.token}`,
          },
          data: {
            "user_id": getState().auth.userID,
            "strategy_name": strategyName
          }
      };
    wealthface.delete('/factor/strategy',dataToSend)
    .then(response => {
        dispatch({type:DASHBOARD_RESET});
        dispatch({type: STRATEGY_MONITOR_DELETE});
        history.push('/dashboard');
    }).catch(err => console.log(err));
}