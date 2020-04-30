import proxy from '../../../apis/proxy';
export const tradeitPreviewOrderLoopAsync = async (orders, callback) => {
    let bodyData = {};
    let responses = [];
    const ordersItems = Object.keys(orders);
    for(let i=0; i<ordersItems.length; i++){
            const objectToCheck = orders[ordersItems[i]];
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
            responses.push(await callback(bodyData));
    }
    return responses;
}

// export const TradeitPlaceOrderLoopAsync = async () => {
//     let bodyData = {};
//     let responses = [];
//     const ordersItems = Object.keys(orders);
//     for(let i=0; i<ordersItems.length-1; i++){
//             const objectToCheck = orders[ordersItems[i]];
//             const {token, accountNumber, orderAction, orderSymbol, orderQuantity, orderPriceType, orderExpiration, orderQuantityType} = objectToCheck;
//             const order = {
//                 token,
//                 accountNumber,
//                 orderAction,
//                 orderQuantity,
//                 orderSymbol,
//                 orderPriceType,
//                 orderExpiration,
//                 orderQuantityType
//             }
//             bodyData.endpoint = "order/previewStockOrEtfOrder";
//             bodyData.data={...order}
//             responses.push(await callback(bodyData));
//     }
//     return responses;
// }

export const callData = async (bodyData) => {
    let responseData;
    try{
        const response = await proxy.post('/', JSON.stringify(bodyData), {headers: {'Content-Type': 'application/json'}})
        responseData = response.data;
    } catch(err){
        responseData = err
    }
    return responseData
}

