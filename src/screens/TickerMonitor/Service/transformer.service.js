import { filterObject, capitalize } from 'utils/app.utils';
export default (tickerDetails) => {
    const detailsData = {};
    if (tickerDetails){
        const {factorRanking, valuation, profitability, technical, risk, dailyPrice} = tickerDetails;
    
        if (valuation){
            detailsData.valuation = valuation.map(obj => (
                [{value: obj.ratio},{value: obj.ticker},{value: obj.sector},{value: obj.industry}]
            ))
        }
        if (profitability){
            detailsData.profitability = profitability.map(obj => (
                [{value: obj.ratio},{value: obj.ticker, unit: '%'},{value: obj.sector, unit: '%'},{value: obj.industry, unit: '%'}]
            ))
        }
        if (technical){
            detailsData.technical = technical.map(obj => {
                if (['Price to 52 Week High','Relative Price Strenght 12 Months'].includes(obj.ratio)){
                    return [{value: obj.ratio},{value: obj.ticker},{value: obj.sector},{value: obj.industry}]
                }
                return [{value: obj.ratio},{value: obj.ticker, unit: '%'},{value: obj.sector, unit: '%'},{value: obj.industry, unit: '%'}]
            })
        }
        if (risk){
            detailsData.risk = risk.map(obj => {
                if (['Beta 60 Months','Financial leverage'].includes(obj.ratio)){
                    return [{value: obj.ratio},{value: obj.ticker},{value: obj.sector},{value: obj.industry}]
                }
                return [{value: obj.ratio},{value: obj.ticker, unit: '%'},{value: obj.sector, unit: '%'},{value: obj.industry, unit: '%'}]
            })
        }
        if(factorRanking){
            const keys = Object.keys(filterObject(factorRanking[0], 'factor'));
            const data = keys.map(key => {
                if (key==='ticker'){
                    return {name: 'Company', data: factorRanking.map(obj => ({
                        y: obj[key],
                        name: obj.factor
                    }))}
                }
                return {name: capitalize(key), data: factorRanking.map(obj => ({y: obj[key], name: obj.factor}))};
            })
            const categories = factorRanking.map(obj => obj.factor);
            detailsData.factorRanking = {
                data,
                categories
            }
    
        }
        if (dailyPrice){
            const data = Object.keys(dailyPrice).map(key => ({
                y: dailyPrice[key],
                name: key
            }))
            const categories = Object.keys(dailyPrice);
            detailsData.dailyPrice = {
                data: {name: 'Company price', data},
                categories,
            }
        }
    }
    return detailsData;
}