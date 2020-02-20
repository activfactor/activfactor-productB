import { useSelector } from 'react-redux';
import { CapString } from '../../../../utils/textFunctions';

export const useOrderPreviewTransformer = () => {
    const {accountNumber, portfolioOrders: {orders}, portfolioOrdersPreview} = useSelector(state => {
        return {
            ...state.tradeitReducers,
            ...state.trade
        }
    });
    if(portfolioOrdersPreview && portfolioOrdersPreview.constructor === [].constructor){
        const previewOrdersDetails = portfolioOrdersPreview.map(obj => obj.orderDetails);
        const data = Object.keys(orders).map(obj => {
            const {name, orderSymbol} = orders[obj];
            const orderDetails = previewOrdersDetails.filter(item => item.orderSymbol===orderSymbol)[0];
            const { orderExpiration, orderAction, estimatedOrderValue, estimatedOrderCommission } = orderDetails;
            return {
                accountNumber,
                tickerName: obj,
                description: name,
                orderAction,
                orderExpiration,
                estimatedOrderValue,
                weight: orders[obj]["weight_%"],
                estimatedOrderCommission
            }
        })
    
        if (data && data.length>0){
            const tableHeaders = ['Account','Ticker','Action','Expiration','Value ($)','Weight (%)','Comession ($)'];
            const tableData = data.map(obj => {
                const {accountNumber, tickerName, description, orderAction,orderExpiration, estimatedOrderValue, weight, estimatedOrderCommission} = obj;
                return [
                  { value: accountNumber },
                  { tickerName, description },
                  { value: CapString(orderAction) },
                  { value: orderExpiration.toUpperCase() },
                  { value: estimatedOrderValue, unit: "$" },
                  { value: weight, unit: "%" },
                  { value: estimatedOrderCommission, unit: "$" },
                ];
            });
            return [tableData, tableHeaders];
        }
        return [undefined,undefined];
    }
    return [undefined, undefined];
}

export const usePortfolioOrdersTransformer = () => {
    const {accountNumber, portfolioOrders: {orders}} = useSelector(state => {
        return {
            ...state.tradeitReducers,
            ...state.trade
        }
    });
    if (orders){
        const tableHeaders = ['Account','Ticker','Action','Expiration','Value (%)','Weight (%)'];
        const tableData = Object.keys(orders).map(obj => {
            const {name, orderAction,orderQuantity, orderExpiration} = orders[obj];
            return [
              { value: accountNumber },
              { tickerName: obj, description: name },
              { value: CapString(orderAction) },
              { value: orderExpiration.toUpperCase() },
              { value: orderQuantity },
              { value: orders[obj]["weight_%"], unit: "%" },
            ];
        });
        return [tableData, tableHeaders];
    }
    return [undefined,undefined];
}

export const useOrdersRecieptTransformer = () => {
    const {accountNumber, portfolioOrders: {orders}, portfolioOrdersPreview, portfolioOrdersReciepts} = useSelector(state => {
        return {
            ...state.tradeitReducers,
            ...state.trade
        }
    });
    if (portfolioOrdersReciepts){
        const data = Object.keys(orders).map(obj => {
            const {name, orderSymbol, orderAction, orderExpiration} = orders[obj];
            const {orderId} = portfolioOrdersPreview.filter(obj => obj.orderDetails.orderSymbol===orderSymbol)[0];
            const {data} = portfolioOrdersReciepts.filter(item => JSON.parse(item.config.data).data.orderId===orderId)[0];
            const { status, orderInfo } = data;
            let orderQuantity;
            if (orderInfo){
                orderQuantity = orderInfo.quantity
            }
            return {
                accountNumber,
                tickerName: obj,
                description: name,
                orderAction,
                orderExpiration,
                orderQuantity,
                status
            }
        });
        if (data && data.length>0){
            const tableHeaders = ['Account','Ticker','Action','Expiration','Value ($)','Status'];
            const tableData = data.map(obj => {
                const {accountNumber, tickerName, description, orderAction,orderExpiration, orderQuantity, status} = obj;
                return [
                  { value: accountNumber },
                  { tickerName, description },
                  { value: CapString(orderAction) },
                  { value: orderExpiration.toUpperCase() },
                  { value: orderQuantity ? orderQuantity : '---', unit: "$" },
                  { value: status},
                ];
            });
            return [tableData, tableHeaders];
        }
        return [undefined,undefined];
    }
    return [undefined, undefined]
}