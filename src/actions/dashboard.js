import { DASHBOARD_GET, DASHBOARD_RESET, UPDATE_COUNTRY } from "./types";
import wealthface from "../apis/wealthface";

export const getDashboard = country => (dispatch, getState) => {
  wealthface
    .get("/factor/dashboard", {
      params: {
        user_id: getState().auth.userID
      },
      headers: {
        Authorization: `JWT ${getState().auth.token}`
      }
    })
    .then(response => {
      const textContructor = "text".constructor;
      const objectConstructor = {}.constructor;
      let responseData;
      try {
        if (response.data.constructor === objectConstructor) {
          responseData = JSON.stringify(response.data);
        } else if (response.data.constructor === textContructor) {
          responseData = response.data.replace(/\bNaN\b/g, null);
          responseData = responseData.replace(/-\bInfinity\b/g, null);
          responseData = responseData.replace(/\bInfinity\b/g, null);
        }
        dispatch({
          type: DASHBOARD_GET,
          payload: { data: JSON.parse(responseData).message, country: country }
        });
      } catch (err) {
        console.log(err);
      }
    })
    .catch(err => console.log(err));
};

export const updateCuntry = country => dispatch => {
  dispatch({ type: UPDATE_COUNTRY, payload: country });
};

export const resetDashboard = () => dispatch => {
  dispatch({ type: DASHBOARD_RESET });
};
