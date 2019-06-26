import { 
  SIGN_IN, 
  AUTH_ERR, 
  TOGGLE_STATUS,
  FACTOR_SCREENER, 
  FACTOR_SCREENER_ERROR,
  SIGN_OUT,
} from "./types";
import wealthface from "../apis/wealthface";
import history from '../history';

const currentDate = new Date();

export const signIn = formProps => async dispatch => {
  try {
    const response = await wealthface.post("/auth", formProps);
    const dataReponse = {
      authenticated: response.data.access_token ? true : false,
      username: formProps.username,
      token: response.data.access_token
    };
    dispatch({ type: SIGN_IN, payload: dataReponse });
    localStorage.setItem("username", dataReponse.username);
    localStorage.setItem("authenticated", dataReponse.authenticated);
    localStorage.setItem("regtime", currentDate);
    localStorage.setItem("t", response.data.access_token);
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: AUTH_ERR, payload: error.response.data.description });
  }
};

export const signOut = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("authenticated");
  localStorage.removeItem("regtime");
  localStorage.removeItem("t");
  return {
    type: SIGN_OUT
  }
}



export const toggleClicked = status => dispatch => {
  dispatch({
    type: TOGGLE_STATUS,
    payload: { clickStatus: !status, initialStatus: true }
  });
};



export const getFactorScreener = props => async (dispatch, getState) => {
  try {
    if (!getState().factorScreener.parameters) {
      const response = await wealthface.get("/factor/screener", {
        params: props,
        headers: {
          Authorization: `JWT ${getState().auth.token}`
        }
      });
      const responseData = JSON.parse(response.data.replace(/\bNaN\b/g, null));
      dispatch({ type: FACTOR_SCREENER, payload: responseData.message });
    }
  } catch (error) {
    dispatch({
      type: FACTOR_SCREENER_ERROR,
      payload: error.response.data.message
    });
  }
};
