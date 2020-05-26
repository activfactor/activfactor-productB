import { apiError, apiStart, apiEnd } from "../actions/api.actions";
import { API } from "../types";
import {
  NetworkRequest,
  NetworkMultipleRequests,
} from "./api.middleware.helper";
import qs from 'qs';

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    dataToSend,
    onSuccess,
    onFailure,
    label,
    apiVersion,
    requests,
  } = action.payload;

  if (requests && requests.length > 0) {
    if (label) {
      dispatch(apiStart(label));
    }

    NetworkMultipleRequests({ apiVersion: 1, requests })
      .then((responses) => {
        const transformedResponses = responses.map(
          (response) => response.data
        );
        if (onSuccess) {
          dispatch(onSuccess(transformedResponses));
        }
      })
      .catch((error) => {
        dispatch(apiError(error, label));
        if (onFailure) {
          dispatch(onFailure(error));
        }
      })
      .finally(() => {
        dispatch(apiEnd(label));
      });
  } else {
    const dataOrParams = ["GET"].includes(method) ? "params" : "data";
    if (label) {
      dispatch(apiStart(label));
    }

    const apiOptions = {
      method,
      [dataOrParams]: dataToSend,
    };
    NetworkRequest({ apiVersion, apiRequestURL: url, apiOptions })
      .then(({ data }) => {
        if (onSuccess) {
          dispatch(onSuccess(data));
        }
      })
      .catch((error) => {
        dispatch(apiError(error, label));
        if (onFailure) {
          dispatch(onFailure(error));
        }
      })
      .finally(() => {
        dispatch(apiEnd(label));
      });
  }
};

export default apiMiddleware;
