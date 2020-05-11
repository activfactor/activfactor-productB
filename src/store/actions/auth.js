import {
  SIGN_IN,
  TOGGLE_STATUS,
  SIGN_OUT,
  AUTH_RESET,
  LOCATION_PATH,
  LOCATION_SHOULD_NAVIGATE_TO,
  LOCATION_SHOULD_NAVIGATE_TO_RESET,
  LOADING_STATE,
} from "../types";
import wfAxios from "../../apis/wealthface";
import CLIENTS from "../../config/clients";
import { activfactor, production } from "../../constants/endpoints";
import { setAuthentication } from "../middleware";
import history from '../../history';

export const signin = formProps => async (dispatch) => {
  const {email, password} = formProps;
  if (email === 'fouad@wealthface.com' && password === 'Wealthface1505'){
    try {
      const response = await wfAxios.post(activfactor.authenticate, CLIENTS.wealthface)
      if (response.data.access_token) {
        const dataReponse = {
          authenticated: true,
          userName: "wealthface",
          userId: 36,
          token: response.data.access_token,
        };
        setAuthentication(dataReponse.token, dataReponse.userId);
        dispatch({ type: SIGN_IN, payload: dataReponse });
        history.push('/dashboard');
      } else {
        throw new Error(response.data.message);
      }
    } catch(error){
      throw new Error(error.nessage);
    }
  } else {
    throw new Error("Invalid credentials");
  }
};

export const signOut = () => dispatch => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("userId");
  window.location.href = production.login;
  dispatch({type: SIGN_OUT});
};

export const resetSignInError = () => (dispatch) => {
  dispatch({ type: AUTH_RESET });
};

export const toggleClicked = () => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_STATUS,
    payload: { clickStatus: !getState().toggle.clicked, initialStatus: true },
  });
};

export const updateLocation = (location) => (dispatch) => {
  dispatch({ type: LOCATION_PATH, payload: location });
};

export const updateShouldNavigateTo = (location) => (dispatch) => {
  dispatch({ type: LOCATION_SHOULD_NAVIGATE_TO, payload: location });
};

export const resetShouldNavigateTo = () => (dispatch) => {
  dispatch({ type: LOCATION_SHOULD_NAVIGATE_TO_RESET });
};

export const updateLoadingState = (loadingState) => (dispatch) => {
  dispatch({ type: LOADING_STATE, loadingState });
};
