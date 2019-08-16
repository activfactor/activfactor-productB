import { 
    FACTOR_SCREENER, 
    FACTOR_SCREENER_ERROR,
    COUNTRY_UPDATE,
    SECTOR_UPDATE,
    FACTORS_UPDATE,
    STOCK_UPDATE,
    FIRM_UPDATE,
    RESET_QUERY,
    BUILD_STRATEGY_QUERY,
    UPDATE_STRATEGY_QUERY,
    FACTOR_SCREENER_RESET,
    FACTOR_SCREENER_SAVE,
    FACTOR_SCREENER_SAVE_ERROR,
    DASHBOARD_RESET,
    STRATEGY_MONITOR_NAME,
    RESET_STRATEGY_MONITOR
    
  } from "./types";

  import wealthface from "../apis/wealthface";
  import history from '../history';
  
  
  export const getFactorScreener = () => async (dispatch, getState) => {
    try {
      if (!getState().factorScreener.parameters) {
        const response = await wealthface.get("/factor/screener", {
          params: {...getState().queryReducer, "user_id":getState().auth.userID},
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
  
  export const queryUpdate = props => (dispatch,getState) => {
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

  export const updateQuery = props => dispatch => {
    if (props){
        const query = {
            "country": props.country,
            "sectors": props.sectors.join(','),
            "factors": props.factors.join(','),
            "n_stock": props.n_stock,
            "firm_size": props.firm_size.join(',')
        }
        dispatch({type: UPDATE_STRATEGY_QUERY, payload: query});
        history.push('/strategy-builder');
    } else {
        dispatch({type: BUILD_STRATEGY_QUERY});
        history.push('/strategy-builder');
    }
  }
  
  export const buildNewStrategyQuery = () => dispatch => {
    dispatch({type: BUILD_STRATEGY_QUERY})
  }
  
  export const resetFactorScreener = () => dispatch => {
    dispatch({type: FACTOR_SCREENER_RESET})
  }
  
  export const saveStrategy = props => async (dispatch, getState) => {
    try {
      if (props) {
        const strategyName = props.data.strategy_name;
        await wealthface.post("/factor/strategy", props.data, props.headers);
        dispatch({ type: DASHBOARD_RESET });
        dispatch({
          type: FACTOR_SCREENER_SAVE,
          payload: `${props.data.strategy_name} saved successfully`
        });
        if (getState().strategyMonitor.strategyName === strategyName) {
          dispatch({
            type: STRATEGY_MONITOR_NAME,
            payload: { name: strategyName }
          });
        } else {
          dispatch({
            type: RESET_STRATEGY_MONITOR,
            payload: { name: strategyName }
          });
        }
        history.push('/strategy-monitor');
      }
    } catch (err) {
      dispatch({
        type: FACTOR_SCREENER_SAVE_ERROR,
        payload: "Unauthorized Action"
      });
    }
  };


  