import {
  SIGN_IN,
  SIGN_OUT,
} from "../types";
import { URL, endPoints, requestMethods } from "config/appConfig";
import CLIENTS from "config/clients";
import { apiAction, setAuthentication } from '../middleware/api.middleware.helper';

export function signin () {
  return apiAction({
    url: endPoints.authenticate,
    method: requestMethods.POST,
    dataToSend: CLIENTS.wealthface,
    onSuccess: (response) => {
      const {access_token} = response;
      // TODO get the user Id from wealthface
      setAuthentication(access_token, 36);
      return {type: SIGN_IN, payload: access_token};
    },
    label: SIGN_IN,
    apiVersion: "1"
  });
} 
  

export const signOut = () => dispatch => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("userId");
  dispatch({type: SIGN_OUT});
  window.location.href = URL.login;
};
