import { isEmpty } from 'utils/app.utils';
export default (strategyResults) => {
    let data = {};
    if (!isEmpty(strategyResults)){
        const {strategy: {actual, historical: strategyHistorical}, benchmark: {historical: benchmarlHistorical}} = strategyResults;
        if (actual){
            const { sectorAllocation, firmSizeAllocation, factorIntensity } = actual;
            if (sectorAllocation){
                data.sectorAllocation = Object.keys(sectorAllocation).map(sector => ({
                        y: sectorAllocation[sector],
                        name: sector
                    }
                ))
            }
            if (firmSizeAllocation){
                data.firmSizeAllocation = Object.keys(firmSizeAllocation).map(firmSize => ({
                    y: firmSizeAllocation[firmSize],
                    name: firmSize
                }))
            }
            if (factorIntensity){
                const fethcedData = Object.keys(factorIntensity).map(factor => ({
                    y: factorIntensity[factor], name:factor
                }))
                data.factorIntensity = {
                    data: fethcedData,
                    categories: Object.keys(factorIntensity)
                }
            }
            if(strategyHistorical && benchmarlHistorical){
                const {cumulativePerformance: strategyCumulativePerformance, annualReturn: strategyAnnualReturn, drawdown: strategyDrawdown} = strategyHistorical;
                const {cumulativePerformance: benchmarkCumulativePerformance, annualReturn: benchmarkAnnualReturn, drawdown: benchmarkDrawdown} = benchmarlHistorical;
                if (strategyCumulativePerformance && benchmarkCumulativePerformance){
                    const strategyCumulative = Object.keys(strategyCumulativePerformance).map(key => ({y: strategyCumulativePerformance[key], name: key}));
                    const benchmarkCumulative = Object.keys(benchmarkCumulativePerformance).map(key => ({y: benchmarkCumulativePerformance[key], name: key}));
                    data.cumulativePerformance = {
                        data: [{name: 'strategy',data:strategyCumulative},{name: 'benchmark', data:benchmarkCumulative}],
                        categories: Object.keys(benchmarkCumulativePerformance)
                    }
                }
                if (strategyAnnualReturn && benchmarkAnnualReturn){
                    const strategyAnnual = Object.keys(strategyAnnualReturn).map(key => ({y: strategyAnnualReturn[key], name: key}));
                    const benchmarkAnnual = Object.keys(benchmarkAnnualReturn).map(key => ({y: benchmarkAnnualReturn[key], name: key}));
                    data.annualReturn = {
                        data: [{name: 'strategy', data:strategyAnnual},{name: 'benchmark', data:benchmarkAnnual}],
                        categories: Object.keys(benchmarkAnnualReturn)
                    }
                }
                if (strategyDrawdown && benchmarkDrawdown){
                    const strategyDrawDownData = Object.keys(strategyDrawdown).map(key => ({y: strategyDrawdown[key]*100, name: key}));
                    const benchmarkDrawDownData = Object.keys(benchmarkDrawdown).map(key => ({y: benchmarkDrawdown[key]*100, name: key}));
                    data.drawdown = {
                        data: [{name: 'strategy', data:strategyDrawDownData},{name: 'benchmark', data:benchmarkDrawDownData}],
                        categories: Object.keys(benchmarkDrawdown)
                    }
                }
            }
        }
        return data;
    }
    return null;
}