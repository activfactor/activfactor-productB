const token = window.localStorage.getItem('token');
const userId = window.localStorage.getItem('userId');
export default {
    auth: {
        token,
        userId
    }
}