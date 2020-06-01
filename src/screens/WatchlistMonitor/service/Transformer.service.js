import { filterObject } from "utils/app.utils";
export default (oneWatchlistDetails) => {
  const watchlistDetails = {};
  if (oneWatchlistDetails) {
    const { actual } = oneWatchlistDetails;

    if (actual) {
      const {
        allocation: { ByCountry, BySector, ByFirmSize },
        performance,
      } = actual;

      if (ByCountry) {
        watchlistDetails.country = Object.keys(ByCountry).map((country) => ({
          y: ByCountry[country],
          name: country,
        }));
      }
      if (BySector) {
        watchlistDetails.sector = Object.keys(BySector).map((sector) => ({
          y: BySector[sector],
          name: sector,
        }));
      }
      if (ByFirmSize) {
        watchlistDetails.firmSize = Object.keys(ByFirmSize).map((firmsize) => ({
          y: ByFirmSize[firmsize],
          name: firmsize,
        }));
      }
      if (performance) {
        const { byFirmSize, bySector, byCountry } = performance;
        const transformedSectorPerformance = {};
        bySector.forEach((obj) => {
          const filteredSectorObj = filterObject(obj, "metric");
          transformedSectorPerformance[obj.metric] = {
            data: Object.keys(filteredSectorObj).map((key) => ({
              y: obj[key],
              name: key,
            })),
            categories: Object.keys(filteredSectorObj),
          };
        });
        const transformedFirmSizePerformance = {};
        byFirmSize.forEach((obj) => {
          const filteredFirmSizeObj = filterObject(obj, "metric");
          transformedFirmSizePerformance[obj.metric] = {
            data: Object.keys(filteredFirmSizeObj).map((key) => ({y: obj[key], name: key})),
            categories: Object.keys(filteredFirmSizeObj),
          };
        });
        const transformedCountryPerformance = {};
        byCountry.forEach((obj) => {
          const filteredCountryObj = filterObject(obj, "metric");
          transformedCountryPerformance[obj.metric] = {
            data: Object.keys(filteredCountryObj).map((key) => ({y: obj[key], name: key})),
            categories: Object.keys(filteredCountryObj),
          };
        });
        watchlistDetails.sectorPerformance = transformedSectorPerformance;
        watchlistDetails.firmSizePerformance = transformedFirmSizePerformance;
        watchlistDetails.countryPerformance = transformedCountryPerformance;
      }
    }
  }
  return watchlistDetails;
};
