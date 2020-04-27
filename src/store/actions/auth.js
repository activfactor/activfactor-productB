import { SIGN_IN } from '../types';
import wfAxios from '../../apis/wealthface';
import CLIENTS from '../../config/clients';
import { activfactor, production } from '../../constants/endpoints';
import { setAuthentication } from '../middleware';

export const signIn = formData => async dispatch => {
    try {
        const response = await wfAxios.post(activfactor.authenticate, CLIENTS.wealthface);
        const token = response.data.access_token;
        if (token){
            setAuthentication(token);
            dispatch({type: SIGN_IN, payload: token});
        } else {
            throw new Error(response.data.message);
        }
    } catch(err){
        throw new Error(err.message);
    }
}

export const singOut = () => {
    window.localStorage.removeItem('token');
    window.location.href=production.login;
}

