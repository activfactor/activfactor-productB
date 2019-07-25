import {
    DASHBOARD_GET,
    DASHBOARD_RESET,
    UPDATE_COUNTRY
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
        dispatch({type: DASHBOARD_GET, payload: {data: res.data.message, country:country}});
    }).catch(err => console.log(err));
}

export const updateCuntry = (country) => dispatch => {
    dispatch({type: UPDATE_COUNTRY, payload: country});
}

export const resetDashboard = () => dispatch => {
    dispatch({type: DASHBOARD_RESET})
}