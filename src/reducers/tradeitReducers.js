import { TRADEIT_AUTH_URL, TRADEIT_GET_BROKER_LIST } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TRADEIT_GET_BROKER_LIST:
      return {
        ...state,
        brokerList: action.payload
      };
    case TRADEIT_AUTH_URL:
      return {
        ...state,
        oAuthURL: action.payload
      };
    default:
      return state;
  }
};
