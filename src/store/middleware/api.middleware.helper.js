import { tokenTypes, API_CONFIG } from 'config/appConfig';
import { API } from '../types';
import axios from 'axios';

export const apiAction = ({
  url,
  method,
  dataToSend,
  onSuccess,
  onFailure,
  label,
  apiVersion = process.env.REACT_APP_BASE_VERSION || "2",
  requests = []
  }) => {
    return {
      type: API,
      payload: {
        url,
        method,
        dataToSend,
        onSuccess,
        onFailure,
        label,
        apiVersion,
        requests
      }
    };
  }

export const setAuthentication = (token, userId) => {
    const storedToken = window.localStorage.getItem('token');
    const type = process.env.REACT_APP_TOKEN_TYPE || tokenTypes.bearer
    if (token){
        axios.defaults.headers.common['Authorization'] = `${type} ${token}`
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('userId', userId);
    } else if (storedToken){
        axios.defaults.headers.common['Authorization'] = `${type} ${storedToken}`
    }
}

export const NetworkRequest = async ({
    apiVersion = "1",
    apiRequestURL,
    apiOptions
}) => {
    const {
        baseURL: { v1, v2 },
        API_HEADERS_COMMON_CONFIG
      } = API_CONFIG;
      const baseUrl = apiVersion === "1" ? v1 : v2;
      axios.defaults.baseURL = baseUrl
    
      // Sets request "Headers" common attributes
      axios.defaults.headers.common = API_HEADERS_COMMON_CONFIG;
      axios.interceptors.response.use(handleSuccess, handleError)
      setAuthentication();
      try {
        const { data } = await axios.request({
          url: apiRequestURL,
          ...apiOptions,
        });
        return Promise.resolve({ data });
      } catch (exception) {
        return Promise.reject(exception);
      }
}

export const NetworkMultipleRequests = async ({
  apiVersion,
  requests
}) => {
  const {
      baseURL: { v1, v2 },
      API_HEADERS_COMMON_CONFIG
    } = API_CONFIG;
    const baseUrl = apiVersion === "1" ? v1 : v2;
    axios.defaults.baseURL = baseUrl

    const transformedRequests = requests.map(request => {
      const {url, method, data} = request;
      const dataOrParams = ["GET"].includes(method) ? "params" : "data";
      axios.defaults.headers.common = API_HEADERS_COMMON_CONFIG;
      axios.interceptors.response.use(handleSuccess, handleError)
      setAuthentication();
      return axios.request({
        url: url,
        method: method,
        [dataOrParams]: data
      })
    })

    try {
      const responses = await axios.all(transformedRequests);
      return Promise.resolve(responses);
    } catch (errs) {
      return Promise.reject(errs)
    }
}

const handleSuccess = (response) => {
  return Promise.resolve(response);
}

const handleError = (error) => {
  return Promise.reject(error);
}