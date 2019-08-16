import { DASHBOARD_GET, DASHBOARD_RESET, UPDATE_COUNTRY } from "./types";
import wealthface from "../apis/wealthface";
import { getJSON } from "../utils/jsonFunctions";

export const getDashboard = country => async (dispatch, getState) => {
  const response = await wealthface.get("/factor/dashboard", {
    params: {
      user_id: getState().auth.userID
    },
    headers: {
      Authorization: `JWT ${getState().auth.token}`
    }
  });
  dispatch({
    type: DASHBOARD_GET,
    payload: { data: getJSON(response).message, country: country }
  });
};

export const updateCuntry = country => dispatch => {
  dispatch({ type: UPDATE_COUNTRY, payload: country });
};

export const resetDashboard = () => dispatch => {
  dispatch({ type: DASHBOARD_RESET });
};
