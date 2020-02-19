


export const useTransformer = (data) => {
    if (data && data.positions){
        const {positions} = data.positions;
        const filtered_Positions = positions.filter(item => item.symbolClass==='EQUITY_OR_ETF');
        const tableHeaders = ['Ticker','Quantity','Cost','Last price','Today performance absolute','Today performance percentage','Total performance absolute','Total performance percentage', 'Trade'];
        const tableData = filtered_Positions.map(obj => {
            const {symbol, description, quantity, costbasis,lastPrice, todayGainLossAbsolute, todayGainLossPercentage, totalGainLossAbsolute, totalGainLossPercentage} = obj;
            return [
              { tickerName: symbol, description },
              { value: quantity },
              { value: costbasis },
              { value: lastPrice },
              { value: todayGainLossAbsolute, unit: "$" },
              { value: todayGainLossPercentage, unit: "%" },
              { value: totalGainLossAbsolute, unit: "$" },
              { value: totalGainLossPercentage, unit: "%" },
              { trade: symbol }
            ];
        });
        return [tableData, tableHeaders];
    }
    return [undefined,undefined];
};
