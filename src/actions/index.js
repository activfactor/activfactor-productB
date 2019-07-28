import { 
  SIGN_IN_A,
  // SIGN_IN_ERROR, 
  AUTH_ERR, 
  TOGGLE_STATUS,
  SIGN_OUT,
  AUTH_RESET,
  LOCATION_PATH
} from "./types";
import wealthface from "../apis/wealthface";
// import wealthalpha from "../apis/wealthfacea";
import history from '../history';

const currentDate = new Date();

export const signIn_A = formProps => dispatch => {
  wealthface.post("/auth", {username: "wealthface", password: "123"}).then(respond => {
    const dataReponse = {
      authenticated: true,
      user: "wealthface",
      regtime: currentDate,
      userID: 36,
      token: respond.data.access_token
    }; 
    dispatch({type: SIGN_IN_A, payload: dataReponse});
    sessionStorage.setItem("user", "wealthface");
    sessionStorage.setItem("authenticated", dataReponse.authenticated);
    sessionStorage.setItem("regtime", dataReponse.regtime);
    sessionStorage.setItem("userID", 36);
    sessionStorage.setItem("token", dataReponse.token);
    dispatch({type: LOCATION_PATH, payload: '/dashboard'}); // this is for the active navigation button
    history.push("/dashboard");
  }).catch(err => {
    let errorMessage = ''
    if (err.response === 'undefined'){
      errorMessage='system error, kindly contact the system administrator';
    } else {
      errorMessage = err.response
    }
    dispatch({type: AUTH_ERR, payload: errorMessage});
  })
}

// export const signIn_A = formProps => dispatch => {
//   wealthalpha.post("/login", formProps, {headers: {"Content-Type": "application/json"}}).then(res => {
//     console.log(res);
//     if (res.data.success){
//       wealthface.post("/auth", {username: "wealthface", password: "123"}).then(respond => {
//         const dataReponse = {
//           authenticated: res.data.success,
//           user: res.data.data.user,
//           regtime: currentDate,
//           userID: res.data.data.id,
//           token: respond.data.access_token
//         }; 
//         dispatch({type: SIGN_IN_A, payload: dataReponse});
//         sessionStorage.setItem("user", dataReponse.user);
//         sessionStorage.setItem("authenticated", dataReponse.authenticated);
//         sessionStorage.setItem("regtime", dataReponse.regtime);
//         sessionStorage.setItem("userID", dataReponse.userID);
//         sessionStorage.setItem("token", dataReponse.token);
//         dispatch({type: LOCATION_PATH, payload: '/dashboard'}); // this is for the active navigation button
//         history.push("/dashboard");
//       }).catch(err => {
//         let errorMessage = ''
//         if (err.response === 'undefined'){
//           errorMessage='system error, kindly contact the system administrator';
//         } else {
//           errorMessage = err.response
//         }
//         dispatch({type: AUTH_ERR, payload: errorMessage});
//       })
//     }
//     else {
//       const dataReponse = {
//         errorMessage: res.data.message
//       };
//       dispatch({type: SIGN_IN_ERROR, payload: dataReponse});
//     }
//   }).catch(error => {
//     let errorMessage = ''
//     if (error.response === undefined){
//       errorMessage='system error, kindly contact the system administrator'
//     } else {
//       errorMessage = error.response
//     }
//     dispatch({type: AUTH_ERR, payload: errorMessage});
//   })
// }

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

export const updateLocation = (location) => (dispatch) => {
  dispatch({type: LOCATION_PATH, payload: location});
}
