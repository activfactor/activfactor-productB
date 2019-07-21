import {
    DASHBOARD_GET_MONTHLY,
    DASHBOARD_RESET
} from './types';
import wealthface from '../apis/wealthface';

export const getDashboard = (country) => (dispatch, getState) => {
    wealthface.get('/factor/dashboard', {
        params: {
            user_id: getState().auth.userID
        },
        headers: {
          Authorization: `JWT ${getState().auth.token}`
        }
    }).then(res => {
        if (country === 'CAN'){
            dispatch({type: DASHBOARD_GET_MONTHLY, payload: res.data.message.Base_strategy_performance.monthly.CAN});
        } else {
            dispatch({type: DASHBOARD_GET_MONTHLY, payload: res.data.message.Base_strategy_performance.monthly.USA});
        }
    }).catch(err => console.log(err));
}

export const resetDashboard = () => dispatch => {
    dispatch({type: DASHBOARD_RESET})
}