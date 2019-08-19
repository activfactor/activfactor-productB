import { TRADEIT_AUTH_URL, TRADEIT_GET_BROKER_LIST, TRADEIT_AUTH_VERIFIER,TRADEIT_AUTH_TOKEN } from "../actions/types";

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
    case TRADEIT_AUTH_VERIFIER:
        return {
            ...state,
            oAuthVerifier: action.payload
        }
    case TRADEIT_AUTH_TOKEN:
        return {
            ...state,
            oAuthToken: action.payload
        }
    default:
      return state;
  }
};
