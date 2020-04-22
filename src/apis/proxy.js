import axios from 'axios';

export default axios.create({
    baseURL: 'https://wfproxy.herokuapp.com/'
})