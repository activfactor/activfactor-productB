import { filterObject } from '../../../utils/app.utils';
export default (oneStrategyDetails) => {
    const strategyDetails = {};
    if (oneStrategyDetails){
        const {
        strategyName,
        benchmarkName,
          strategy: {
            actual: {
              sectorAllocation,
              firmSizeAllocation,
              factorIntensity,
              performance,
            },
            historical: strategyHistorical
          },
          benchmark: {
            historical: benchmarkHistorical
          }
        } = oneStrategyDetails;


        if (sectorAllocation){
            strategyDetails.sectors = Object.keys(sectorAllocation).map(sector => ({
                    y: sectorAllocation[sector],
                    name: sector
                }
            ))
        }
        if (firmSizeAllocation){
            strategyDetails.firmSize = Object.keys(firmSizeAllocation).map(firmSize => ({
                y: firmSizeAllocation[firmSize],
                name: firmSize
            }))
        }
        if (factorIntensity){
            const fetchedData = Object.keys(factorIntensity).map(factor => ({
                name: factor,
                data: [{y: factorIntensity[factor], name: factor}],
            }))
            strategyDetails.factorIntensity = {
                data: fetchedData,
                categories: Object.keys(factorIntensity)
            }
        }
        if(strategyHistorical && benchmarkHistorical){
            const {
                annualReturn: strategyAnnualReturn,
                cumulativePerformance: strategyCumulativePerformance,
                drawdown: strategyDrawdown,
            } = strategyHistorical
            const {
                annualReturn: benchmarkAnnualReturn,
                cumulativePerformance: benchmarkCumulativePerformance,
                drawdown: benchmarkDrawdown,
            } = benchmarkHistorical;
            if (strategyCumulativePerformance && benchmarkCumulativePerformance){
                const strategyCumulative = Object.keys(strategyCumulativePerformance).map(key => ({y: strategyCumulativePerformance[key], name: key}));
                const benchmarkCumulative = Object.keys(benchmarkCumulativePerformance).map(key => ({y: benchmarkCumulativePerformance[key], name: key}));
                strategyDetails.cumulativePerformance = {
                    data: [{name: strategyName,data:strategyCumulative},{name: benchmarkName, data:benchmarkCumulative}],
                    categories: Object.keys(benchmarkCumulativePerformance)
                }
            }
            if (strategyAnnualReturn && benchmarkAnnualReturn){
                const strategyAnnual = Object.keys(strategyAnnualReturn).map(key => ({y: strategyAnnualReturn[key], name: key}));
                const benchmarkAnnual = Object.keys(benchmarkAnnualReturn).map(key => ({y: benchmarkAnnualReturn[key], name: key}));
                strategyDetails.annualReturn = {
                    data: [{name: strategyName, data:strategyAnnual},{name: benchmarkName, data:benchmarkAnnual}],
                    categories: Object.keys(benchmarkAnnualReturn)
                }
            }
            if (strategyDrawdown && benchmarkDrawdown){
                const strategyDrawDownData = Object.keys(strategyDrawdown).map(key => ({y: strategyDrawdown[key]*100, name: key}));
                const benchmarkDrawDownData = Object.keys(benchmarkDrawdown).map(key => ({y: benchmarkDrawdown[key]*100, name: key}));
                strategyDetails.drawdown = {
                    data: [{name: strategyName, data:strategyDrawDownData},{name: benchmarkName, data:benchmarkDrawDownData}],
                    categories: Object.keys(benchmarkDrawdown)
                }
            }
        }
        if(performance){
            const {byFirmSize, bySector} = performance;
            const transformedFirmSizeLiveData = {};
            byFirmSize.forEach(obj => {
                const filteredFirmSizeObj = filterObject(obj, 'metric');
                transformedFirmSizeLiveData[obj.metric] = {
                    data: Object.keys(filteredFirmSizeObj).map(key => ({data: [{y: obj[key], name: key}], name: key})),
                    categories: Object.keys(filteredFirmSizeObj)
                }
            })
            const transformedSectorLiveData = {};
            bySector.forEach(obj => {
                const filteredSectorObj = filterObject(obj, 'metric');
                transformedSectorLiveData[obj.metric]= {
                    data: Object.keys(filteredSectorObj).map(key => ({name: key, data: [{y: obj[key], name: key}]})),
                    categories: Object.keys(filteredSectorObj)
                }
            })
            strategyDetails.liveSector = transformedSectorLiveData;
            strategyDetails.liveFirmSize = transformedFirmSizeLiveData;
        }
    }
    return strategyDetails;
}