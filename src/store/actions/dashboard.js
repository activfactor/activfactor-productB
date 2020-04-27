import { DASHBOARD_GET, DASHBOARD_RESET, UPDATE_COUNTRY } from "../types";
import wealthface from "../../apis/wealthface";
import { getJSON } from "../../utils/jsonFunctions";
import { signOut } from '../../actions';

export const getDashboard = country => async (dispatch, getState) => {
  try{
    const response = await wealthface.get("/factor/dashboard", {
      params: {
        user_id: getState().auth.userID
      },
    });
    dispatch({
      type: DASHBOARD_GET,
      payload: { data: getJSON(response).message, country: country }
    });
  } catch(err){
    dispatch(signOut());
  }
};

export const updateCuntry = country => dispatch => {
  dispatch({ type: UPDATE_COUNTRY, payload: country });
};

export const resetDashboard = () => dispatch => {
  dispatch({ type: DASHBOARD_RESET });
};
