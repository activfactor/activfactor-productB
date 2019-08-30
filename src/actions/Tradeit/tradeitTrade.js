import { TRADEIT_ORDER_PREVIEW, TRADEIT_ORDER_ERROR, TRADEIT_ORDER_RESET } from '../types';
import tradeit from '../../apis/tradeit';

export const previewOrder = (order) => async dispatch => {
    const response = await tradeit.post('/order/previewStockOrEtfOrder', order, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.data.status === 'REVIEW_ORDER'){
        sessionStorage.setItem('exOrderForPreview', JSON.stringify(response.data));
        dispatch({type: TRADEIT_ORDER_PREVIEW, payload: response.data});
    } else {
        sessionStorage.removeItem('exOrderForPreview');
        dispatch({type: TRADEIT_ORDER_ERROR, payload: response.data.shortMessage});
    }
}

export const resetOrder = () => dispatch => {
    dispatch({type: TRADEIT_ORDER_RESET});
} 