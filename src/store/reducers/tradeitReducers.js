import {
  TRADEIT_AUTH_URL,
  TRADEIT_GET_BROKER_LIST,
  TRADEIT_AUTH_TOKEN,
  TRADEIT_RESET_DATA,
  TRADEIT_UPDATE_TOKEN,
  TRADEIT_UPDATE_STATUS,
  TRADEIT_RESET_AUTH_URL,
  TRADEIT_ACCOUNTS_GET,
  TRADEIT_BALANCE_GET,
  TRADEIT_ACCOUNT_NUMBER_UPDATE,
  TRADEIT_ACCOUNT_NUMBER_RESET,
  TRADEIT_POSITIONS
} from "../actions/types";

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
        oAuthURL: action.payload.oAuthURL
      };
    case TRADEIT_AUTH_TOKEN:
      return {
        ...state,
        brokerLongName: action.payload.brokerLongName,
        brokerName: action.payload.broker,
        userId: action.payload.userId,
        userToken: action.payload.userToken,
        shortMessage: action.payload.shortMessage,
        status: action.payload.status
      };
    case TRADEIT_RESET_DATA:
      return {
        brokerList: { ...state.brokerList }
      };
    case TRADEIT_UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload.token
      };
    case TRADEIT_UPDATE_STATUS:
      return {
        brokerList: { ...state.brokerList },
        shortMessage: action.payload.shortMessage,
        status: action.payload.status
      };
    case TRADEIT_RESET_AUTH_URL:
      return {
        ...state,
        oAuthURL: undefined
      };
    case TRADEIT_ACCOUNTS_GET:
      return {
        ...state,
        accounts: action.payload.accounts,
      }
    case TRADEIT_BALANCE_GET:
      return {
        ...state,
        accountOverview: action.payload.accountOverview
      }
    case TRADEIT_ACCOUNT_NUMBER_UPDATE:
      return {
        ...state,
        accountNumber: action.payload
      }
    case TRADEIT_ACCOUNT_NUMBER_RESET:
      return {
        ...state,
        accountNumber: undefined
      }
    case TRADEIT_POSITIONS:
      return {
        ...state,
        positions: action.payload
      }
    default:
      return state;
  }
};
