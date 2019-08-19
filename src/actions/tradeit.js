import tradeit from '../apis/tradeit';
import { TRADEIT_GET_BROKER_LIST, TRADEIT_AUTH_URL,TRADEIT_AUTH_TOKEN,TRADEIT_AUTH_VERIFIER } from './types'

export const getBrokerList = () => async dispatch => {
    try{
        const response = await tradeit.post('/preference/getBrokerList', {apiKey: "9df184fde3c5421e914980715d70a076"}, {
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({type: TRADEIT_GET_BROKER_LIST, payload: response.data.brokerList});
    } catch(err){
        console.log(err);
    }
    
}

export const getAuthLogin = () => async dispatch => {
    const response = await tradeit.post('/user/getOAuthLoginPopupUrlForWebApp', {apiKey: '9df184fde3c5421e914980715d70a076', broker:'dummy'},{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    dispatch({type: TRADEIT_AUTH_URL, payload: response.data.oAuthURL});
}

export const postAuthVerifier = (oAuthVerifier) => dispatch => {
    dispatch({type: TRADEIT_AUTH_VERIFIER, payload: oAuthVerifier});
}

export const getAuthToken = () => async (dispatch, getState) => {
    const response = await tradeit.post('/user/getOAuthAccessToken', {apiKey: '9df184fde3c5421e914980715d70a076', oAuthVerifier:getState().tradeitReducers.oAuthVerifier},{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    dispatch({type: TRADEIT_AUTH_TOKEN, payload: response.data});
}