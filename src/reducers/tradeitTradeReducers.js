import {
  TRADEIT_ORDER_PREVIEW,
  TRADEIT_ORDER_ERROR,
  TRADEIT_ORDER_RESET,
  TRADEIT_STRATEGY_NAME,
  TRADEIT_CASH_AMOUNT,
  GET_PORTFOLIO_ORDERS,
  TRADEIT_ORDERS_PREVIEW,
  TRADEIT_ORDERS_PLACE,
  TRADEIT_ORDERS_CLEAR,
  TRADEIT_ORDERS_STATUS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TRADEIT_ORDER_PREVIEW:
      return {
        ...state,
        previewOrder: action.payload
      };
    case TRADEIT_ORDER_ERROR:
      return {
        errorMessage: action.payload
      };
    case TRADEIT_ORDER_RESET:
      return {};
    case TRADEIT_STRATEGY_NAME:
      return {
        ...state,
        strategyName: action.payload
      };
    case TRADEIT_CASH_AMOUNT:
      return {
        ...state,
        cashForTrade: action.payload
      };
    case GET_PORTFOLIO_ORDERS:
      return {
        ...state,
        portfolioOrders: action.payload
      };
    case TRADEIT_ORDERS_PREVIEW:
      return {
        ...state,
        portfolioOrdersPreview: action.payload
      };
    case TRADEIT_ORDERS_PLACE:
      return {
        ...state,
        portfolioOrdersReciepts: action.payload
      };
    case TRADEIT_ORDERS_STATUS:
      return {
        ...state,
        portfolioOrdersStatus: action.payload
      };
    case TRADEIT_ORDERS_CLEAR:
      return {};
    default:
      return state;
  }
};
