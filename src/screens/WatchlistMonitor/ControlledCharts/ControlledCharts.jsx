import React, {useState, useMemo,useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { BarChart, ColumnChart } from 'components/Charts';
import { ChartCard } from 'components/Custom/common';
import { Tabs } from 'components/MaterialUIs';
import { ChartTitle } from '../../common.style';

const ControlledCharts = ({watchlistDetails}) => {
    const { sectorPerformance, firmSizePerformance, countryPerformance } = watchlistDetails;
    const tabOptions = useMemo(() => [{value: '1D', label: '1D'},{value: 'WTD', label: 'WTD'},{value: 'MTD', label: 'MTD'}], []);
    const [countryTab, setCountryTab] = useState(tabOptions[1].value);
    const [sectorTab, setSectorTab] = useState(tabOptions[1].value);
    const [firmSizeTab, setFirmSizeTab] = useState(tabOptions[1].value);
    
    return (
      <Grid container>
        <Grid item lg={4} xs={12} style={{marginBottom: '20px'}}>
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
            <BarChart
              roundTo={2}
              data={{
                name: "Country",
                data: countryPerformance[countryTab].data,
              }}
              categories={
                countryPerformance[countryTab].categories
              }
            />
          </ChartCard>
        </Grid>
        <Grid item lg={4} xs={12} style={{marginBottom: '20px'}}>
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
            <BarChart
              roundTo={2}
              data={{
                name: "Sector",
                data: sectorPerformance[sectorTab].data,
              }}
              categories={
                sectorPerformance[sectorTab].categories
              }
            />
          </ChartCard>
        </Grid>
        <Grid item lg={4} xs={12} style={{marginBottom: '20px'}}>
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
            <BarChart
              roundTo={2}
              data={{
                name: "Firm Size",
                data: firmSizePerformance[firmSizeTab].data,
              }}
              categories={
                firmSizePerformance[firmSizeTab].categories
              }
            />
          </ChartCard>
        </Grid>
      </Grid>
    );
};

export default ControlledCharts;