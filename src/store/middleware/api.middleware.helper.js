import { tokenTypes, API_CONFIG } from '../../constants/appConstants';
import axios from 'axios';

export const setAuthentication = (token, userId) => {
    const storedToken = window.localStorage.getItem('token');
    const type = process.env.TOKEN_TYPE || tokenTypes.jwt
    if (token){
        axios.defaults.headers.common['Authorization'] = `${type} ${token}`
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('userId', userId);
    } else if (storedToken){
        axios.defaults.headers.common['Authorization'] = `${type} ${storedToken}`
    }
}

export const NetworkRequest = async ({
    apiVersion = 1,
    apiRequestURL,
    apiOptions
}) => {
    const {
        baseURL: { v1, v2 },
        API_HEADERS_COMMON_CONFIG
      } = API_CONFIG;
      const baseUrl = apiVersion === 1 ? v1 : v2;
      axios.defaults.baseURL = baseUrl
    
      // Sets request "Headers" common attributes
      axios.defaults.headers.common = API_HEADERS_COMMON_CONFIG;
    
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