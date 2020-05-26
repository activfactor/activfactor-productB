import React,{useMemo} from 'react';
import { Date, LeftTextWrapper, MiddleTextWrapper, PerformanceValue, TickersText } from '../../common.style';
import { useSelector } from 'react-redux';
import { Card, Button } from '../../../components/MaterialUIs';
import { Grid } from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';
import { getValue, getColor } from '../../../utils/app.utils';

const TopHeader = () => {
    const {oneWatchlistDetails} = useSelector((state) => state.watchlists);
    const {
        watchlistName,
        lastUpdate,
        tickers,
        actual
      } = useMemo(() => oneWatchlistDetails, [oneWatchlistDetails]);
    return (
        actual && (
        <>
            <Grid container justify="space-between" alignItems="center" style={{marginBottom: '15px'}}>
                <Grid item sx={12}>
                    <Autorenew /> Updates:
                    <Date component="span">Last: {lastUpdate}</Date>
                </Grid>
            </Grid>
            <Card style={{padding: '25px 30px', marginBottom: '25px'}}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item md={3}>
                        <LeftTextWrapper>
                            <h2>{watchlistName}</h2>
                        </LeftTextWrapper>
                    </Grid>
                    <Grid container item md={6} justify="space-between" direction="row">
                        {actual.watchlist && actual.watchlist.length>0 && actual.watchlist.map((performance, index) => (
                            <MiddleTextWrapper key={`${index}_${performance.metric}`}>
                                <PerformanceValue component="p">{performance.metric}</PerformanceValue>
                                <PerformanceValue component="p" color={getColor(performance.watchlist)}>{getValue(performance.watchlist)}%</PerformanceValue>
                            </MiddleTextWrapper>
                        ))}
                    </Grid>
                    <Grid container item md={3} direction="column" justify="center" alignItems="center">
                        <TickersText>{tickers} Tickers</TickersText>
                        <Button style={{width: '200px'}} label="Trade the strategy" fullWidth={true}/>
                    </Grid>
                </Grid>
            </Card>
        </>
        )
    );
};

export default TopHeader;