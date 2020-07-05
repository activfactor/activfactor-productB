import {
  SIGN_IN,
  SIGN_OUT,
} from "../types";
import { endPoints, requestMethods } from "config/appConfig";
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
      setAuthentication(access_token, CLIENTS.wealthface.userId);
      return {type: SIGN_IN, payload: access_token};
    },
    label: SIGN_IN,
    apiVersion: "1"
  });
} 
  

export const signOut = () => dispatch => {
  dispatch({type: SIGN_OUT});
  window.localStorage.removeItem("af_token");
  window.top.location.href="/auth"
};
