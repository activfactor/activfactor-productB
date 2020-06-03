import React from 'react';
import { Date, LeftHeaderTitle, TickersText, TickersNumber, DateTitle } from '../../common.style';
import { useSelector } from 'react-redux';
import { Card, Table } from '../../../components/MaterialUIs';
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
      tickersInStrategy,
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
                <StyledCell align="center">
                <TickersText component="span">Stocks in portfolio <TickersNumber component="span">{tickersInStrategy}</TickersNumber></TickersText>
                </StyledCell>
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
                <StyledCell align="center">
                <TickersText component="span">Stocks in universe <TickersNumber component="span">{tickersInUniverse}</TickersNumber></TickersText>
                </StyledCell>
            </StyledRow>
          </>
        );
    }
    return (
        <>
            <Grid container justify="space-between" alignItems="center" style={{marginBottom: '15px'}}>
                <Grid item xs={12} md={6}>
                    <Autorenew /> <DateTitle component="span">Updates:</DateTitle>
                    <Date component="span">Last: {lastUpdate}</Date>
                </Grid>
                <div>
                    <ShowChart /> <DateTitle component="span">Rebalancing:</DateTitle>
                    <Date component="span">Last: {lastRebalancing} - Next: {nextRebalancing}</Date>
                </div>
            </Grid>
            <Card style={{padding: '25px 30px', marginBottom: '25px'}}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs={12}>
                        <Table minWidth="515px" noshadow={true} renderHeaders={renderHeaders} renderRows={renderRows}/>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default TopHeader;