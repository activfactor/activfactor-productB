import {
  SIGN_IN_A,
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

export const signIn_A = formProps => (dispatch) => {
  wfAxios
    .post(activfactor.authenticate, CLIENTS.wealthface)
    .then((response) => {
      if (response.data.access_token) {
        const dataReponse = {
          authenticated: true,
          user: "wealthface",
          userId: 36,
          token: response.data.access_token,
        };
        setAuthentication(dataReponse.token, dataReponse.userID);
        dispatch({ type: SIGN_IN_A, payload: dataReponse });
      } else {
        throw new Error(response.data.messge);
      }
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const singOut = () => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("userId");
  window.location.href = production.login;
};

export const resetSignInError = () => (dispatch) => {
  dispatch({ type: AUTH_RESET });
};

export const signOut = () => {
  sessionStorage.removeItem("token");
  return {
    type: SIGN_OUT,
  };
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
