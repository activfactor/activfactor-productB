import React from 'react';
import { Date, LeftHeaderTitle, TickersText } from '../../common.style';
import { useSelector } from 'react-redux';
import { Card, Button, Table } from '../../../components/MaterialUIs';
import { Grid } from '@material-ui/core';
import { Autorenew, ShowChart } from '@material-ui/icons';
import { getValue, getColor } from '../../../utils/app.utils';
import { StyledCell, StyledRow } from './style';

const TopHeader = () => {
    const {
      strategyName,
      benchmarkName,
      lastUpdate,
      lastRebalancing,
      nextRebalancing,
      tickersInUniverse,
      strategy: {
        actual: {
          performance: { strategy },
        },
      },
    } = useSelector((state) => state.strategies.oneStrategyDetails);
    const renderHeaders = () => {
        return (
          <>
            <StyledCell></StyledCell>
            {strategy &&
              strategy.length > 0 &&
              strategy.map((performance, index) => (
                <StyledCell
                  align="center"
                  key={`${index}_${performance.metric}`}
                  variant="head"
                  component="p"
                >
                  {performance.metric}
                </StyledCell>
              ))}
          </>
        );
    }

    const renderRows = () => {
        return (
          <>
            <StyledRow>
              <StyledCell align="left">
                <LeftHeaderTitle>{strategyName}</LeftHeaderTitle>
              </StyledCell>
              {strategy &&
                strategy.length > 0 &&
                strategy.map((performance, index) => (
                  <StyledCell
                    align="center"
                    key={`${index}_${performance.strategy}`}
                    variant="body"
                    color={getColor(performance.strategy)}
                  >
                    {getValue(performance.strategy)}%
                  </StyledCell>
                ))}
            </StyledRow>
            <StyledRow>
              <StyledCell align="left">
                <LeftHeaderTitle>{benchmarkName}</LeftHeaderTitle>
              </StyledCell>
              {strategy &&
                strategy.length > 0 &&
                strategy.map((performance, index) => (
                  <StyledCell
                    align="center"
                    variant="body"
                    key={`${index}_${performance.benchmark}`}
                    color={getColor(performance.benchmark)}
                  >
                    {getValue(performance.benchmark)}%
                  </StyledCell>
                ))}
            </StyledRow>
          </>
        );
    }
    return (
        <>
            <Grid container justify="space-between" alignItems="center" style={{marginBottom: '15px'}}>
                <Grid item xs={12} md={6}>
                    <Autorenew /> Updates:
                    <Date component="span">Last: {lastUpdate}</Date>
                </Grid>
                <div>
                    <ShowChart /> Rebalancing:
                    <Date component="span">Last: {lastRebalancing} - Next: {nextRebalancing}</Date>
                </div>
            </Grid>
            <Card style={{padding: '25px 30px', marginBottom: '25px'}}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item md={9} xs={12}>
                        <Table minWidth="auto" noshadow={true} renderHeaders={renderHeaders} renderRows={renderRows}/>
                    </Grid>
                    <Grid container item md={3} direction="column" justify="center" alignItems="center">
                        <TickersText>{tickersInUniverse} Tickers</TickersText>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default TopHeader;