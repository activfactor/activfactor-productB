import React, {useMemo} from "react";
import { Grid } from "@material-ui/core";
import { AreaChart, ColumnChart, LineChart } from "components/Charts";
import { ChartCard, CardListing } from "components/Custom/common";
import { HistoricalTable } from "components/Custom/StrategyMonitor";
import { useTheme, useMediaQuery } from '@material-ui/core';

const Historical = ({ strategyDetails }) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const {left, middle, right} = useMemo(() => {
    const left = {
      margin: match ? '15px 0px 15px 0px' : '15px auto 15px 0px',
      width: '98.5%'
    }
    const middle = {
      margin: match ? '0px 0px 15px 0px' : '15px auto 5px auto',
      width: '98.5%'
    }
    const right = {
      margin: match ? '0px 0px 15px 0px' : '15px 0px 15px auto',
      width: '98.5%'
    }
    return {left, middle, right}
  }, [match]);
  return (
    <>
      <CardListing repeat={3}>
        <ChartCard title="Historical performance">
          <LineChart
            data={strategyDetails.cumulativePerformance.data}
            categories={strategyDetails.cumulativePerformance.categories}
          />
        </ChartCard>
        <ChartCard title="Historical annual return">
          <ColumnChart
            data={strategyDetails.annualReturn.data}
            categories={strategyDetails.annualReturn.categories}
          />
        </ChartCard>
        <ChartCard title="Historical drawdown">
          <AreaChart
            data={strategyDetails.drawdown.data}
            categories={strategyDetails.drawdown.categories}
            variant="drawdown"
          />
        </ChartCard>
      </CardListing>
      <Grid container justify="space-between">
        <Grid item md={4} xs={12}>
          <div style={{...left}}>
            <HistoricalTable
              keyToExtract="performance"
              tableFirstHeader="Return"
              theme="dark"
              title="Return"
            />
            </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div style={{...middle}}>
            <HistoricalTable
              keyToExtract="metric"
              tableFirstHeader="Metric"
              theme="main"
              title="Metric"
            />
            </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div style={{...right}}>
            <HistoricalTable
              keyToExtract="risk"
              tableFirstHeader="Risk"
              theme="light"
              title="Risk"
            />
            </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Historical;
