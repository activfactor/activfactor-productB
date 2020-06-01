import React, {useState, useMemo} from 'react';
import { ColumnChart } from 'components/Charts';
import { ChartCard } from 'components/Custom/common';
import { Tabs } from 'components/MaterialUIs';
import { ChartTitle } from '../../common.style';

const ControlledCharts = ({watchlistDetails}) => {
    const { sectorPerformance, firmSizePerformance, countryPerformance } = watchlistDetails;
    const tabOptions = useMemo(() => [{value: '1D', label: '1D'},{value: 'WTD', label: 'WTD'},{value: 'MTD', label: 'MTD'}], []);
    const [countryTab, setCountryTab] = useState(tabOptions[0].value);
    const [sectorTab, setSectorTab] = useState(tabOptions[0].value);
    const [firmSizeTab, setFirmSizeTab] = useState(tabOptions[0].value);
    
    return (
      <>
          <ChartCard
            margin="0px auto 0px 0px"
            title={
              <>
                <ChartTitle component="h2">Country Performance</ChartTitle>
                <Tabs
                  theme="primary"
                  options={tabOptions}
                  handleTabClick={(value) => setCountryTab(value)}
                  initialValue={countryTab}
                />
              </>
            }
          >
            <ColumnChart
              roundTo={2}
              // old model of how object is transfered to graph check the commented section in transformer
              data={{
                name: "Country",
                data: countryPerformance[countryTab].data,
              }}
              categories={
                countryPerformance[countryTab].categories
              }
              showLegends={false}
            />
          </ChartCard>
          <ChartCard
            margin="0px auto 0px auto"
            title={
              <>
                <ChartTitle component="h2">Sector Performance</ChartTitle>
                <Tabs
                  theme="primary"
                  options={tabOptions}
                  handleTabClick={(value) => setSectorTab(value)}
                  initialValue={sectorTab}
                />
              </>
            }
          >
            <ColumnChart
              roundTo={2}
              data={{
                data: sectorPerformance[sectorTab].data,
                name: 'sector'
              }}
              categories={
                sectorPerformance[sectorTab].categories
              }
              showLegends={false}
            />
          </ChartCard>
          <ChartCard
            margin="0px 0px 0px auto"
            title={
              <>
                <ChartTitle component="h2">Firm Size Performance</ChartTitle>
                <Tabs
                  theme="primary"
                  options={tabOptions}
                  handleTabClick={(value) => setFirmSizeTab(value)}
                  initialValue={firmSizeTab}
                />
              </>
            }
          >
            <ColumnChart
              roundTo={2}
              data={{
                data: firmSizePerformance[firmSizeTab].data,
                name: 'Firm Size'
              }}
              categories={
                firmSizePerformance[firmSizeTab].categories
              }
              showLegends={false}
            />
          </ChartCard>
      </>
    );
};

export default ControlledCharts;