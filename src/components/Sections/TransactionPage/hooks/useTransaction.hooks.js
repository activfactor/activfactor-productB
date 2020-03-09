import {useSelector} from 'react-redux';
import { CapString } from '../../../../utils/textFunctions';

const getTableData = (dataObj, accountNumber) => {
    let finalData = []; 
    dataObj.forEach(rootObj => {
        const {orderStatus, orderLegs, orderNumber, orderExpiration} = rootObj;
        if (["GROUP_OPEN","GROUP_CLOSED"].includes(orderStatus)){
            const {groupOrders} = rootObj;
            groupOrders.forEach(groupData => {
                const {orderLegs, orderNumber} = groupData;
                orderLegs.forEach(groupLegData => {
                    const {action, symbol, orderedQuantity} = groupLegData;
                    finalData.push({
                        accountNumber,
                        tickerName: symbol,
                        action,
                        orderExpiration,
                        orderedQuantity,
                        orderStatus,
                        orderNumber
                    })
                })
            })
        }
        orderLegs.forEach(legData => {
            const {action, symbol, orderedQuantity} = legData;
            finalData.push({
                accountNumber,
                tickerName: symbol,
                action,
                orderExpiration,
                orderedQuantity,
                orderStatus,
                orderNumber
            })
        })
    })
    return finalData;
}   

export const useOrdersStatusTransformer = (cancelOrder) => {
    const {accountNumber, portfolioOrdersStatus} = useSelector(state => {
        return {
            ...state.tradeitReducers,
            ...state.trade
        }
    });
    if (portfolioOrdersStatus){
        const {orderStatusDetailsList} = portfolioOrdersStatus;
        if (orderStatusDetailsList){
            const data = getTableData(orderStatusDetailsList, accountNumber)
            if (data && data.length>0){
                const tableHeaders = ['Account','Ticker','Action','Expiration','Value ($)','Status', 'Order Number', 'Cancel'];
                const tableData = data.map(obj => {
                    const {accountNumber, tickerName, action, orderExpiration, orderedQuantity, orderStatus, orderNumber} = obj;
                    if (["OPEN","PENDING"].includes(orderStatus)){
                        return [
                          { value: accountNumber },
                          { value: tickerName },
                          { value: CapString(action) },
                          { value: CapString(orderExpiration) },
                          { value: orderedQuantity ? orderedQuantity : '---', unit: "$" },
                          { value: orderStatus},
                          { value: orderNumber},
                          { type: 'btn', index:orderNumber, btnClass: 'btn btn-danger', btnText: 'Cancel', cb: () => cancelOrder(orderNumber)}
                        ];
                    }
                    return [
                        { value: accountNumber },
                        { value: tickerName },
                        { value: CapString(action) },
                        { value: CapString(orderExpiration) },
                        { value: orderedQuantity ? orderedQuantity : '---', unit: "$" },
                        { value: orderStatus},
                        { value: orderNumber},
                        { type: 'btn',index:orderNumber, btnClass: 'btn btn-secondary', btnDisabled: true, btnText: 'No Action'}
                    ]
                });
                return [tableData, tableHeaders];
            }
        }
        return [undefined,undefined];
    }
    return [undefined, undefined]
}