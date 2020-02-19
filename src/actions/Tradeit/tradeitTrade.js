import { TRADEIT_ORDER_PREVIEW, TRADEIT_ORDER_ERROR, TRADEIT_ORDER_RESET, TRADEIT_STRATEGY_NAME, TRADEIT_CASH_AMOUNT, GET_PORTFOLIO_ORDERS, TRADEIT_ORDERS_PREVIEW, TRADEIT_ORDERS_PLACE } from '../types';
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

// this is just for backup
export const previewOrdersV2 = () => (dispatch, getState) => {
    const {portfolioOrders: {orders}} = getState().trade;
    const requests = Object.keys(orders).map(obj => { 
        const objectToCheck = orders[obj];
        const {token, accountNumber, orderAction, orderSymbol, orderQuantity, orderPriceType, orderExpiration, orderQuantityType} = objectToCheck;
        const order = {
            token,
            accountNumber,
            orderAction,
            orderQuantity,
            orderSymbol,
            orderPriceType,
            orderExpiration,
            orderQuantityType
        }
        bodyData.endpoint = "order/previewStockOrEtfOrder";
        bodyData.data={...order}
        const request = proxy.post('/', JSON.stringify(bodyData), {headers: {'Content-Type': 'application/json'}})
        return request;
    })
    axios.all(requests).then(axios.spread((...responses) => {
        const orders = responses.map(obj => obj.data);
        dispatch({type: TRADEIT_ORDERS_PREVIEW, payload: orders})
    })).catch(errs => dispatch({type: TRADEIT_ORDERS_PREVIEW, payload: errs}))
}

// another version of previewOrders
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