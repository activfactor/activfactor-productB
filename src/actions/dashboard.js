import {
    DASHBOARD_GET,
    DASHBOARD_RESET
} from './types';
import wealthface from '../apis/wealthface';

export const getDashboard = () => (dispatch, getState) => {
    wealthface.get('/factor/dashboard', {
        params: {
            user_id: getState().auth.userID
        },
        headers: {
          Authorization: `JWT ${getState().auth.token}`
        }
    }).then(res => {
        dispatch({type: DASHBOARD_GET, payload: res.data.message});
    }).catch(err => console.log(err));
}

export const resetDashboard = () => dispatch => {
    dispatch({type: DASHBOARD_RESET})
}