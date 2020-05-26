import React from 'react';
import { Date, LeftTextWrapper, MiddleTextWrapper, PerformanceValue, TickersText } from '../../common.style';
import { useSelector } from 'react-redux';
import { Card, Button } from '../../../components/MaterialUIs';
import { Grid } from '@material-ui/core';
import { Autorenew, ShowChart } from '@material-ui/icons';
import { getValue, getColor } from '../../../utils/app.utils';

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
                    <Grid item md={3} xs={12} style={{marginBottom: '10px'}}>
                        <LeftTextWrapper>
                            <h2>{strategyName}</h2>
                            <h2>{benchmarkName}</h2>
                        </LeftTextWrapper>
                    </Grid>
                    <Grid container item md={6} xs={12} justify="space-between" direction="row">
                        {strategy && strategy.length>0 && strategy.map(performance => (
                            <MiddleTextWrapper>
                                <PerformanceValue component="p">{performance.metric}</PerformanceValue>
                                <PerformanceValue component="p" color={getColor(performance.strategy)}>{getValue(performance.strategy)}%</PerformanceValue>
                                <PerformanceValue component="p" color={getColor(performance.benchmark)}>{getValue(performance.benchmark)}%</PerformanceValue>
                            </MiddleTextWrapper>
                        ))}
                    </Grid>
                    <Grid container item md={3} direction="column" justify="center" alignItems="center">
                        <TickersText>{tickersInUniverse} Tickers</TickersText>
                        <Button style={{width: '200px'}} label="Trade the strategy" fullWidth={true}/>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default TopHeader;