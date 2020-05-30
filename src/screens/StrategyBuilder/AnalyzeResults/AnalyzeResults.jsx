import React, {useMemo} from 'react';
import { AnalyzeResultsSkeleton } from 'components/Skeleton';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { HeaderWrapper, Header, Title, TableWrapper, ButtonWrapper } from './style';
import { AnalyzeResultTable } from 'components/Custom/StrategyBuilder';
import { ChartCard } from 'components/Custom/common';
import { PieChart, BarChart, AreaChart, ColumnChart, LineChart } from 'components/Charts';
import { Button, Snackbar } from 'components/MaterialUIs';
import { isEmpty } from 'utils/app.utils';
import ChartDataTransformer from './Service/DataTransformer.service';
import PropTypes from 'prop-types';

const AnalyzeResults = ({onModifyStrategy, onCustomizePortfolio, handleErrorClosed}) => {
    const { FETCH_STRATEGY_RESULTS, strategyResults } = useSelector(state => ({...state.api, ...state.strategyBuilder}));

    const {isLoading, error} = useMemo(() => {
        if (FETCH_STRATEGY_RESULTS){
            return FETCH_STRATEGY_RESULTS
        }
        return {isLoading: true, error: null}
    }, [FETCH_STRATEGY_RESULTS]);

    const transformedData = useMemo(() => ChartDataTransformer(strategyResults), [strategyResults]);
    return !isEmpty(transformedData) ? (
      <Grid container>
        <HeaderWrapper>
          <Header>Performance</Header>
          <Title>
            Results of a monthly rebalanced strategy. Transaction cost not
            calculated.
          </Title>
        </HeaderWrapper>
        <Grid container>
          <Grid item lg={4} md={6} sm={12} xs={12} style={{ marginBottom: "20px" }}>
            <ChartCard title="Sectors">
              <PieChart data={transformedData.sectorAllocation} />
            </ChartCard>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} style={{ marginBottom: "20px" }}>
            <ChartCard title="Firm size">
              <PieChart data={transformedData.firmSizeAllocation} />
            </ChartCard>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} style={{ marginBottom: "20px" }}>
            <ChartCard title="Factor Intensity">
              <BarChart
                data={transformedData.factorIntensity.data}
                categories={transformedData.factorIntensity.categories}
              />
            </ChartCard>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} style={{ marginBottom: "20px" }}>
            <ChartCard title="Historical Performance">
              <LineChart
                data={transformedData.cumulativePerformance.data}
                categories={transformedData.cumulativePerformance.categories}
              />
            </ChartCard>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} style={{ marginBottom: "20px" }}>
            <ChartCard title="Historical annual return">
              <ColumnChart
                data={transformedData.annualReturn.data}
                categories={transformedData.annualReturn.categories}
              />
            </ChartCard>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} style={{ marginBottom: "20px" }} >
            <ChartCard title="Historical drawdown">
              <AreaChart
                data={transformedData.drawdown.data}
                categories={transformedData.drawdown.categories}
                variant="drawdown"
              />
            </ChartCard>
          </Grid>
          </Grid>
        <Grid container>
          <Grid item lg={4} xs={12} style={{marginBottom: '20px'}}>
            <TableWrapper>
              <AnalyzeResultTable
                keyToExtract="performance"
                tableFirstHeader="Return"
                theme="dark"
                title="Return"
              />
            </TableWrapper>
          </Grid>
          <Grid item lg={4} xs={12} style={{marginBottom: '20px'}}>
            <TableWrapper>
              <AnalyzeResultTable
                keyToExtract="metric"
                tableFirstHeader="Metric"
                theme="main"
                title="Metrics"
              />
            </TableWrapper>
          </Grid>
          <Grid item lg={4} xs={12} style={{marginBottom: '20px'}}>
            <TableWrapper>
              <AnalyzeResultTable
                keyToExtract="risk"
                tableFirstHeader="Risk"
                theme="light"
                title="Risk"
              />
            </TableWrapper>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          direction="row"
          style={{ marginTop: "40px" }}
        >
          <ButtonWrapper>
            <Button
              fullWidth={true}
              label="<-  Modify strategy"
              onClick={onModifyStrategy}
              type="button"
              variant="outlined"
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              fullWidth={true}
              label="Customize portfolio"
              onClick={onCustomizePortfolio}
              type="button"
            />
          </ButtonWrapper>
        </Grid>
      </Grid>
    ) : isLoading ? (
      <AnalyzeResultsSkeleton />
    ) : error ? (
      <>
        <AnalyzeResultsSkeleton />
        <Snackbar
          open={error !== ""}
          severity="error"
          message={error}
          variant="filled"
          onClose={handleErrorClosed}
          vertical="top"
          horizontal="center"
          title="error"
        />
      </>
    ) : (
      <h1>Something wrong</h1>
    );
};

AnalyzeResults.propTypes = {
    onModifyStrategy: PropTypes.func.isRequired,
    onCustomizePortfolio: PropTypes.func.isRequired
}

export default AnalyzeResults;