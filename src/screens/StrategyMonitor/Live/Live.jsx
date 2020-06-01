import React, { useMemo, useState } from "react";
import { Tabs } from "../../../components/MaterialUIs";
import { ChartCard, CardListing } from "../../../components/Custom/common";
import { LiveTable } from "../../../components/Custom/StrategyMonitor";
import { ColumnChart } from "../../../components/Charts";
import { ChartTitle } from "../../common.style";
import { Grid } from '@material-ui/core';

const Live = ({ strategyDetails }) => {
  const tabOptions = useMemo(
    () => [
      { value: "1D", label: "1D" },
      { value: "WTD", label: "WTD" },
      { value: "MTD", label: "MTD" },
    ],
    []
  );
  const [sectorPerformance, setSectorPerformance] = useState("1D");
  const [firmSizePerformance, setFirmSizePerformance] = useState("1D");
  const handleSectorTabChange = (value) => {
    setSectorPerformance(value);
  };
  const handleFirmSizeTabChange = (value) => {
    setFirmSizePerformance(value);
  };
  return (
    <>
    <CardListing repeat={2}>
          <ChartCard
            margin="0px auto 0px 0px"
            title={
              <>
                <ChartTitle component="h2">Sector Performance</ChartTitle>
                <Tabs
                  theme="primary"
                  options={tabOptions}
                  handleTabClick={handleSectorTabChange}
                  initialValue={sectorPerformance}
                />
              </>
            }
          >
            <ColumnChart
              roundTo={2}
              showLegends={false}
              data={{
                data: strategyDetails.liveSector[sectorPerformance].data,
                name: 'Sector'
              }}
              categories={
                strategyDetails.liveSector[sectorPerformance].categories
              }
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
                  handleTabClick={handleFirmSizeTabChange}
                  initialValue={firmSizePerformance}
                />
              </>
            }
          >
            <ColumnChart
              showLegends={false}
              roundTo={2}
              data={{
                data: strategyDetails.liveFirmSize[firmSizePerformance].data,
                name: 'Firm size'
              }}
              categories={
                strategyDetails.liveFirmSize[firmSizePerformance].categories
              }
            />
          </ChartCard>
          </CardListing>
      <Grid container item xs={12} style={{marginTop: '15px'}}>
        <LiveTable />
    </Grid>
    </>
  );
};

export default Live;
