import proxy from '../../apis/proxy';
import {
  TRADEIT_GET_BROKER_LIST,
  TRADEIT_AUTH_URL,
  TRADEIT_AUTH_TOKEN,
  TRADEIT_RESET_DATA,
  TRADEIT_UPDATE_TOKEN,
  TRADEIT_UPDATE_STATUS,
  TRADEIT_RESET_AUTH_URL,
  TRADEIT_ACCOUNTS_GET,
  TRADEIT_BALANCE_GET,
  TRADEIT_ACCOUNT_NUMBER_UPDATE,
  TRADEIT_ACCOUNT_NUMBER_RESET
} from "../types";
import { getTradeitAPIKey } from '../../apis/tradeitApiKey';
import {removeStorage} from '../utils/sessionStorage';

const bodyData = {};
export const getBrokerList = () => async dispatch => {
    try{
        bodyData.endpoint = "preference/getBrokerList";
        bodyData.data = {apiKey: getTradeitAPIKey()}
        const response = await proxy.post('/', JSON.stringify(bodyData), {
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        })
        dispatch({type: TRADEIT_GET_BROKER_LIST, payload: response.data.brokerList});
    } catch(err){
        console.log(err);
    }
    
}

export const getAuthLogin = (brokerName) => async dispatch => {
    bodyData.endpoint = "user/getOAuthLoginPopupUrlForWebApp";
    bodyData.data = {apiKey: getTradeitAPIKey(), broker:brokerName};
    const response = await proxy.post('/', JSON.stringify(bodyData),{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    dispatch({type: TRADEIT_AUTH_URL, payload: {oAuthURL: response.data.oAuthURL, brokerName: brokerName}});
}

export const getAuthToken = (oAuthVerifier) =>  async dispatch => {
    bodyData.endpoint = "user/getOAuthAccessToken";
    bodyData.data={apiKey: getTradeitAPIKey(), oAuthVerifier:oAuthVerifier};
    const response = await proxy.post('/', JSON.stringify(bodyData),{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.data.status==='SUCCESS'){
        sessionStorage.setItem("exUserToken", response.data.userToken);
        sessionStorage.setItem("exUserId", response.data.userId);
        sessionStorage.setItem("exBrokerLongName", response.data.brokerLongName);
        sessionStorage.setItem("exBroker", response.data.broker);
        dispatch({type: TRADEIT_AUTH_TOKEN, payload: response.data});
    } else {
        removeStorage();
        dispatch({type: TRADEIT_UPDATE_STATUS, payload: response.data});
    }
    
}

export const getToken = () => async (dispatch, getState) => {
    bodyData.endpoint="user/authenticate";
    bodyData.data = {apiKey: getTradeitAPIKey(), userId: getState().tradeitReducers.userId, userToken: getState().tradeitReducers.userToken};
    const response = await proxy.post('/', JSON.stringify(bodyData), {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.data.status==='SUCCESS'){
        sessionStorage.setItem("exToken", response.data.token);
        dispatch({type: TRADEIT_UPDATE_TOKEN, payload: response.data})
    } else {
        removeStorage();
        dispatch({type: TRADEIT_UPDATE_STATUS, payload: response.data});
    }
}

export const getAccounts = () => async (dispatch, getState) => {
    bodyData.endpoint="user/getAccounts";
    bodyData.data={token: getState().tradeitReducers.token};
    const response = await proxy.post('/', JSON.stringify(bodyData), {
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.data.status === 'SUCCESS'){
        sessionStorage.setItem("exAccounts", JSON.stringify(response.data.accounts));
        dispatch({type: TRADEIT_ACCOUNTS_GET, payload: response.data})
    } else {
        removeStorage();
        dispatch({type: TRADEIT_UPDATE_STATUS, payload: response.data});
    }
}

export const updateAccountNumber = (accountNumber) => dispatch => {
    sessionStorage.setItem("exAccountNumber", accountNumber);
    dispatch({type: TRADEIT_ACCOUNT_NUMBER_UPDATE, payload: accountNumber});
}

export const resetAccountNumber = () => dispatch => {
    sessionStorage.removeItem("exAccountNumber")
    dispatch({type: TRADEIT_ACCOUNT_NUMBER_RESET})
}

export const getBalance = () => async (dispatch, getState) => {
    bodyData.endpoint="balance/getAccountOverview";
    bodyData.data={token: getState().tradeitReducers.token, accountNumber: getState().tradeitReducers.accountNumber};
    const response = await proxy.post('/', JSON.stringify(bodyData),{
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (response.data.status === 'SUCCESS'){
        dispatch({type: TRADEIT_BALANCE_GET, payload: response.data})
    } else {
        removeStorage();
        dispatch({type: TRADEIT_UPDATE_STATUS, payload: response.data});
    }
}

export const resetTradeit = () => dispatch => {
    dispatch({type: TRADEIT_RESET_DATA})
}

export const resetAuthURL = () => dispatch => {
    dispatch({type: TRADEIT_RESET_AUTH_URL});
}