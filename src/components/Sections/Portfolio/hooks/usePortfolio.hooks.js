


export const useTransformer = (data) => {
    if (data && data.positions){
        const {positions} = data.positions;
        const tableHeaders = ['Ticker','Quantity','Cost','1 Day performance','Performance', 'Trade'];
        const tableData = positions.map(obj => {
            const {symbol, description, quantity, costbasis, todayGainLossAbsolute, todayGainLossPercentage, totalGainLossAbsolute, totalGainLossPercentage} = obj;
            return [
              { tickerName: symbol, description },
              { value: quantity },
              { value: costbasis },
              [
                { value: todayGainLossAbsolute, unit: "$" },
                { value: todayGainLossPercentage, unit: "%" }
              ],
              [
                { value: totalGainLossAbsolute, unit: "$" },
                { value: totalGainLossPercentage, unit: "%" }
              ],
              { trade: symbol }
            ];
        });
        return [tableData, tableHeaders];
    }
    return [undefined,undefined];
};
