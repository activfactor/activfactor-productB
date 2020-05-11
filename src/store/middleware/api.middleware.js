import axios from "axios";
import { accessDenied, apiError, apiStart, apiEnd } from "../actions/api";
import { NetworkRequest } from './api.middleware.helper';


const apiMiddleware = ({ dispatch }) => next => async action => {
    const {payload, type} = action;

    if (payload && !payload.url) {
        return ;
    }

    if(!payload.apiOptions){
        return ;
    }

  next(action);

  const {
    url,
    apiVersion,
    apiOptions,
    onSuccess,
    onFailure,
    label,
  } = payload;


  if (label) {
    dispatch(apiStart(label));
  }
  try{
      const {data} = await NetworkRequest({apiVersion, url, apiOptions});
      if(onSuccess){
          dispatch(onSuccess(data));
      } else {
        dispatch(apiEnd());
      }
  } catch(error) {
      let errorMessage;
    if (/network\serror/gi.test(error)) {
        errorMessage = "Network Error"
    }
    if(onFailure){
        dispatch(onFailure(errorMessage || error.message))
    } else {
        dispatch(apiError);
    }
  }

}

export default apiMiddleware;