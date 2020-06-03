import { filterObject, capitalize } from 'utils/app.utils';
export default (tickerDetails) => {
    const detailsData = {};
    if (tickerDetails){
        const {factorRanking, valuation, profitability, technical, risk, dailyPrice} = tickerDetails;
    
        if (valuation){
            detailsData.valuation = valuation.map(obj => (
                [{value: obj.ratio},{value: obj.company, unit: '%'},{value: obj.sector, unit: '%'},{value: obj.industry, unit: '%'}]
            ))
        }
        if (profitability){
            detailsData.profitability = profitability.map(obj => (
                [{value: obj.ratio},{value: obj.company, unit: '%'},{value: obj.sector, unit: '%'},{value: obj.industry, unit: '%'}]
            ))
        }
        if (technical){
            detailsData.technical = technical.map(obj => (
                [{value: obj.ratio},{value: obj.company, unit: '%'},{value: obj.sector, unit: '%'},{value: obj.industry, unit: '%'}]
            ))
        }
        if (risk){
            detailsData.risk = risk.map(obj => (
                [{value: obj.ratio},{value: obj.company, unit: '%'},{value: obj.sector, unit: '%'},{value: obj.industry, unit: '%'}]
            ))
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
                data: {name: 'Company prices', data},
                categories,
            }
        }
    }
    return detailsData;
}