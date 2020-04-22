import axios from 'axios';

export default axios.create({
    // baseURL: 'https://wealthalpha-api.herokuapp.com/api'
    baseURL: 'http://api.activfactor.com/api'
});