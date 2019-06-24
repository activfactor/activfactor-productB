import { SIGN_IN, AUTH_ERR, TOGGLE_STATUS,FACTOR_SCREENER } from "./types";
import wealthface from "../apis/wealthface";
import history from '../history';

const currentDate = new Date();

export const signIn = formProps => async dispatch => {
  try {
    const response = await wealthface
      .post("/auth", formProps)
    const dataReponse = {
      authenticated: response.data.access_token ? true : false,
      username: formProps.username,
    };
    dispatch({ type: SIGN_IN, payload: dataReponse });
    localStorage.setItem('username', dataReponse.username);
    localStorage.setItem('authenticated', dataReponse.authenticated);
    localStorage.setItem('regtime', currentDate);
    localStorage.setItem('t',response.data.access_token);
    history.push('/dashboard');
  } catch (error) {
    dispatch({ type: AUTH_ERR, payload: error.response.data.description });
  }
};



export const toggleClicked = (status) => dispatch => {
  dispatch({ type: TOGGLE_STATUS, payload: {clickStatus:!status, initialStatus:true}})
}



export const getFactorScreener = props => async dispatch => {
  const response = await wealthface
  .get("/factor/screener", {params:props, headers: {
    'Authorization': `JWT ${localStorage.getItem('t')}`
  }});
  const responseData=JSON.parse(response.data.replace(/\bNaN\b/g,null))
  dispatch({type: FACTOR_SCREENER, payload: responseData.message});
  
}
