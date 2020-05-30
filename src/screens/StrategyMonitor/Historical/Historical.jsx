import React from 'react';
import { Grid } from '@material-ui/core';
import { AreaChart, ColumnChart, LineChart } from 'components/Charts';
import { ChartCard } from 'components/Custom/common';
import { HistoricalTable } from 'components/Custom/StrategyMonitor';
import { TableWrapper } from './style';

const Historical = ({strategyDetails}) => {
    return (
      <Grid container>
        <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
          <ChartCard title="Historical performance">
            <LineChart
              data={strategyDetails.cumulativePerformance.data}
              categories={strategyDetails.cumulativePerformance.categories}
            />
          </ChartCard>
        </Grid>
        <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
          <ChartCard title="Historical annual return">
            <ColumnChart
              data={strategyDetails.annualReturn.data}
              categories={strategyDetails.annualReturn.categories}
            />
          </ChartCard>
        </Grid>
        <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
          <ChartCard title="Historical drawdown">
            <AreaChart
              data={strategyDetails.drawdown.data}
              categories={strategyDetails.drawdown.categories}
              variant="drawdown"
            />
          </ChartCard>
        </Grid>
        <Grid item md={4} xs={12}>
          <TableWrapper>
            <HistoricalTable
              keyToExtract="performance"
              tableFirstHeader="Return"
              theme="dark"
              title="Return"
            />
          </TableWrapper>
        </Grid>
        <Grid item md={4} xs={12}>
          <TableWrapper>
            <HistoricalTable
              keyToExtract="metric"
              tableFirstHeader="Metric"
              theme="main"
              title="Metric"
            />
          </TableWrapper>
        </Grid>
        <Grid item md={4} xs={12}>
          <TableWrapper>
            <HistoricalTable
              keyToExtract="risk"
              tableFirstHeader="Risk"
              theme="light"
              title="Risk"
            />
          </TableWrapper>
        </Grid>
      </Grid>
    );
};

export default Historical;