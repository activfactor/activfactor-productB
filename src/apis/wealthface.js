import axios from 'axios';

export default axios.create({
    // baseURL: 'https://wealthalpha-api.herokuapp.com/api'
    baseURL: process.env.BASE_VERSION === 'v2' ? 'http://api.activfactor.com/api2' : 'http://api.activfactor.com/api',
    timeout: 10000,
    headers: {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});