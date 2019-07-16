import { 
  SIGN_IN_A,
  SIGN_IN_ERROR, 
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
  FACTOR_SCREENER_SAVE_ERROR,
  AUTH_RESET
} from "./types";
import wealthface from "../apis/wealthface";
import wealthalpha from "../apis/wealthfacea";
import history from '../history';

const currentDate = new Date();

export const signIn_A = formProps => dispatch => {
  wealthalpha.post("/login", formProps, {headers: {"Content-Type": "application/json"}}).then(res => {
    console.log(res);
    if (res.data.success){
      wealthface.post("/auth", {username: "wealthface", password: "123"}).then(respond => {
        const dataReponse = {
          authenticated: res.data.success,
          user: res.data.data.user,
          regtime: currentDate,
          userID: res.data.data.id,
          token: respond.data.access_token
        }; 
        dispatch({type: SIGN_IN_A, payload: dataReponse});
        sessionStorage.setItem("user", dataReponse.user);
        sessionStorage.setItem("authenticated", dataReponse.authenticated);
        sessionStorage.setItem("regtime", dataReponse.regtime);
        sessionStorage.setItem("userID", dataReponse.userID);
        sessionStorage.setItem("token", dataReponse.token);
        history.push("/dashboard");
      }).catch(err => {
        let errorMessage = ''
        if (err.response === 'undefined'){
          errorMessage='A network error occurred.'
          + 'This could be a CORS issue or a dropped internet connection. '
          + 'It is not possible for us to know.'
        } else {
          errorMessage = err.response
        }
        dispatch({type: AUTH_ERR, payload: errorMessage});
      })
    }
    else {
      const dataReponse = {
        errorMessage: res.data.message
      };
      dispatch({type: SIGN_IN_ERROR, payload: dataReponse});
    }
  }).catch(error => {
    let errorMessage = ''
    if (error.response === undefined){
      errorMessage='A network error occurred.'
      + 'This could be a CORS issue or a dropped internet connection. '
      + 'It is not possible for us to know.'
    } else {
      errorMessage = error.response
    }
    dispatch({type: AUTH_ERR, payload: errorMessage});
  })
}

export const resetSignInError = () => dispatch => {
  dispatch({type: AUTH_RESET})
}

export const signOut = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("authenticated");
  sessionStorage.removeItem("regtime");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userID");
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
        {
          console.log(res);
          dispatch({ type: FACTOR_SCREENER_SAVE, payload: `${props.data.strategy_name} saved successfully` })
        }
      ).catch(err => 
        {
          console.log(err);
          dispatch({type: FACTOR_SCREENER_SAVE_ERROR, payload: "Unauthorized Action"})
        }
      )
    }
  }
