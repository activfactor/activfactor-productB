import { 
  SIGN_IN, 
  AUTH_ERR, 
  TOGGLE_STATUS,
  FACTOR_SCREENER, 
  FACTOR_SCREENER_ERROR,
  SIGN_OUT,
  COUNTRY_UPDATE,
  SECTOR_UPDATE,
  FACTORS_UPDATE,
  STOCK_UPDATE,
  FIRM_UPDATE,
  RESET_QUERY,
  FACTOR_SCREENER_RESET,
  FACTOR_SCREENER_SAVE,
  FACTOR_SCREENER_SAVE_ERROR
} from "./types";
import wealthface from "../apis/wealthface";
import history from '../history';

const currentDate = new Date();

export const signIn = formProps => async dispatch => {
  try {
    const response = await wealthface.post("/auth", formProps);
    const dataReponse = {
      authenticated: response.data.access_token ? true : false,
      username: formProps.username,
      regtime: currentDate,
      token: response.data.access_token,
    };
    dispatch({ type: SIGN_IN, payload: dataReponse });
    localStorage.setItem("username", dataReponse.username);
    localStorage.setItem("authenticated", dataReponse.authenticated);
    localStorage.setItem("regtime", currentDate);
    localStorage.setItem("t", response.data.access_token);
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: AUTH_ERR, payload: error.response.data.description });
  }
};

export const signOut = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("authenticated");
  localStorage.removeItem("regtime");
  localStorage.removeItem("t");
  return {
    type: SIGN_OUT
  }
}



export const toggleClicked = () => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_STATUS,
    payload: { clickStatus: !getState().toggle.clicked, initialStatus: true }
  });
};



export const getFactorScreener = () => async (dispatch, getState) => {
  try {
    if (!getState().factorScreener.parameters) {
      const response = await wealthface.get("/factor/screener", {
        params: getState().queryReducer,
        headers: {
          Authorization: `JWT ${getState().auth.token}`
        }
      });
      const responseData = JSON.parse(response.data.replace(/\bNaN\b/g, null));
      dispatch({ type: FACTOR_SCREENER, payload: responseData.message });
    }
  } catch (error) {
    dispatch({
      type: FACTOR_SCREENER_ERROR,
      payload: error.response
    });
  }
};

export const queryUpdate = props => dispatch => {
  if ("country" in props){
    dispatch({type: COUNTRY_UPDATE, payload: props})
  } 
  if ("sectors" in props){
    dispatch({type: SECTOR_UPDATE, payload: props})
  }
   if ("factors" in props){
    dispatch({type: FACTORS_UPDATE, payload: props})
  } if ("n_stock" in props){
    dispatch({type: STOCK_UPDATE, payload: props})
  } if ("firm_size" in props){
    dispatch({type: FIRM_UPDATE, payload: props})
  }
}

export const resetQuery = () => dispatch => {
  dispatch({type: RESET_QUERY})
}

export const resetFactorScreener = () => dispatch => {
  dispatch({type: FACTOR_SCREENER_RESET})
}

export const saveStrategy = props => (dispatch) => {
    console.log("Strategy Posted");
    if (props) {
        wealthface.post("/factor/strategy", props.data, props.headers)
        .then(res => 
        {dispatch({ type: FACTOR_SCREENER_SAVE, payload: `${props.data.strategy_name} saved successfully` })}
      ).catch(err => 
        {
          dispatch({type: FACTOR_SCREENER_SAVE_ERROR, payload: "Unauthorized Action"})
        }
      )
    }
  }
