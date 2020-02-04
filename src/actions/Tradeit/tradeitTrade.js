import { TRADEIT_ORDER_PREVIEW, TRADEIT_ORDER_ERROR, TRADEIT_ORDER_RESET } from '../types';
import proxy from '../../apis/proxy';

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