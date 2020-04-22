import axios from 'axios';

export default axios.create({
    baseURL: 'https://ems.qa.tradingticket.com/api/v2/'
})