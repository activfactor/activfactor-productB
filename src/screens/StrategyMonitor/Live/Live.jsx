import React, { useMemo, useState } from "react";
import { Tabs } from "../../../components/MaterialUIs";
import { ChartCard } from "../../../components/Custom/common";
import { LiveTable } from "../../../components/Custom/StrategyMonitor";
import { ColumnChart } from "../../../components/Charts";
import { Grid } from "@material-ui/core";
import { ChartTitle } from "../../common.style";

const Live = ({ strategyDetails }) => {
  const tabOptions = useMemo(
    () => [
      { value: "1D", label: "1D" },
      { value: "WTD", label: "WTD" },
      { value: "MTD", label: "MTD" },
    ],
    []
  );
  const [tickersWaller, setTickersWaller] = useState([]);
  const [sectorPerformance, setSectorPerformance] = useState("1D");
  const [firmSizePerformance, setFirmSizePerformance] = useState("1D");
  const handleSectorTabChange = (value) => {
    setSectorPerformance(value);
  };
  const handleFirmSizeTabChange = (value) => {
    setFirmSizePerformance(value);
  };
  const addOrRemoveTicker = (value) => {
    let newList = [];
    if (tickersWaller.length > 0) {
      if (!tickersWaller.includes(value)) {
        newList = [...tickersWaller, value];
      } else {
        newList = tickersWaller.filter((ticker) => ticker !== value);
      }
    } else {
      newList = [value];
    }
    setTickersWaller(newList);
  };
  return (
    <Grid container>
        <Grid item md={6} xs={12} style={{marginBottom: '20px'}}>
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
              minAxis={-2}
              maxAxis={2}
              data={{
                name: "sector",
                data: strategyDetails.liveSector[sectorPerformance].data,
              }}
              categories={
                strategyDetails.liveSector[sectorPerformance].categories
              }
            />
          </ChartCard>
        </Grid>
        <Grid item md={6} xs={12} style={{marginBottom: '20px'}}>
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
              roundTo={2}
              minAxis={-2}
              maxAxis={2}
              data={{
                name: "firmSize",
                data: strategyDetails.liveFirmSize[firmSizePerformance].data,
              }}
              categories={
                strategyDetails.liveFirmSize[firmSizePerformance].categories
              }
            />
          </ChartCard>
        </Grid>
      <Grid item xs={12}>
        <LiveTable
          addOrRemoveTicker={addOrRemoveTicker}
          tickersWallet={tickersWaller}
        />
      </Grid>
    </Grid>
  );
};

export default Live;
