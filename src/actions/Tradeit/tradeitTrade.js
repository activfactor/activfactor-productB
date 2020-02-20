import {
  TRADEIT_ORDER_PREVIEW,
  TRADEIT_ORDER_ERROR,
  TRADEIT_ORDER_RESET,
  TRADEIT_STRATEGY_NAME,
  TRADEIT_CASH_AMOUNT,
  GET_PORTFOLIO_ORDERS,
  TRADEIT_ORDERS_PREVIEW,
  TRADEIT_ORDERS_PLACE,
  TRADEIT_ORDERS_CLEAR
} from "../types";
import proxy from '../../apis/proxy';
import wealthface from '../../apis/wealthface';
import axios from 'axios';
import { tradeitPreviewOrderLoopAsync, callData } from './helpers/TradeitPreviewOrderLoop.helper';

const bodyData={};
export const previewOrder = (order) => async dispatch => {
    bodyData.endpoint = "order/previewStockOrEtfOrder";
    bodyData.data={...order}
    const response = await proxy.post('/', JSON.stringify(bodyData), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.data.status === 'REVIEW_ORDER'){
        dispatch({type: TRADEIT_ORDER_PREVIEW, payload: response.data});
    } else {
        dispatch({type: TRADEIT_ORDER_ERROR, payload: response.data.shortMessage});
    }
}

export const resetOrder = () => dispatch => {
    dispatch({type: TRADEIT_ORDER_RESET});
}

export const updateTradeStrategy = (strategyName) => dispatch => {
    dispatch({type: TRADEIT_STRATEGY_NAME, payload: strategyName})
}

export const updateTradeCash = (cashAmount) => {
    return {
        type: TRADEIT_CASH_AMOUNT,
        payload: cashAmount
    }
}

export const getPortfolioOrders = () => async (dispatch, getState) => {
    const {auth: {userID}, tradeitReducers: {accountNumber, token}, trade: {strategyName, cashForTrade}} = getState();
    const dataToSend = {
        headers: {
            "Authorization": `JWT ${getState().auth.token}`,
        },
        params: {
            user_id: userID,
            strategy_name: strategyName,
            account: accountNumber,
            token,
            cash: cashForTrade
        }
    }
    await wealthface.get("factor/strategy/execute", {...dataToSend}).then(res => {
        dispatch({type: GET_PORTFOLIO_ORDERS, payload: res.data.message})
    }).catch(err => dispatch({type: GET_PORTFOLIO_ORDERS, payload: {error: err.message}}))
}

// another version of previewOrders using slow process not axios.all 
// because when we sent all the orders at once , trade.it will return sometime the same 
// order id to multiple stocks
export const previewOrders = () => async (dispatch, getState) => {
    const {portfolioOrders: {orders}} = getState().trade;
    const data = tradeitPreviewOrderLoopAsync(orders, callData);
    data.then(response => dispatch({type: TRADEIT_ORDERS_PREVIEW, payload: response}));
}

export const placeOrders = () => async (dispatch, getState) => {
    const {portfolioOrdersPreview, token} = {...getState().trade, ...getState().tradeitReducers};
    const requests = portfolioOrdersPreview.map(obj => { 
        const {orderId} = obj;
        const order = {
            token,
            orderId
        }
        bodyData.endpoint = "order/placeStockOrEtfOrder";
        bodyData.data={...order}
        const request = proxy.post('/', JSON.stringify(bodyData), {headers: {'Content-Type': 'application/json'}})
        return request
    })
    axios.all(requests).then(axios.spread((...responses) => {
        // const reciepts = responses.map(obj => obj.data);
        dispatch({type: TRADEIT_ORDERS_PLACE, payload: responses})
    })).catch(errs => dispatch({type: TRADEIT_ORDERS_PREVIEW, payload: errs}))
}

export const clearMultipleTradeState = () => dispatch => {
    dispatch({type: TRADEIT_ORDERS_CLEAR});
}