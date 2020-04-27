import tokenType from '../../constants/token';
import axios from 'axios';

export const setAuthentication = (token) => {
    const storedToken = window.localStorage.getItem('token');
    const type = process.env.TOKEN_TYPE || tokenType.jwt
    if (token){
        axios.defaults.headers.common['Authorization'] = `${type} ${token}`
        window.localStorage.setItem('token', token)
    } else if (storedToken){
        axios.defaults.headers.common['Authorization'] = `${type} ${storedToken}`
    }
}