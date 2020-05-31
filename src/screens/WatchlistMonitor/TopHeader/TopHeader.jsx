import React,{useMemo} from 'react';
import { Date, LeftHeaderTitle, MiddleTextWrapper, PerformanceValue, TickersText } from '../../common.style';
import { useSelector } from 'react-redux';
import { Card, Button, Table } from '../../../components/MaterialUIs';
import { Grid } from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';
import { getValue, getColor } from '../../../utils/app.utils';
import { StyledCell, StyledRow } from './style';

const TopHeader = () => {
    const {oneWatchlistDetails} = useSelector((state) => state.watchlists);
    const {
        watchlistName,
        lastUpdate,
        tickers,
        actual
      } = useMemo(() => oneWatchlistDetails, [oneWatchlistDetails]);

      const renderHeaders = () => {
          return (
              <>
                  <StyledCell></StyledCell>
                  {actual.performance.watchlist && actual.performance.watchlist.length>0 && actual.performance.watchlist.map((performance, index) => (
                        <StyledCell align="center" variant="head" key={`${index}_${performance.metric}`}>{performance.metric}</StyledCell>
                    ))}
              </>
          )
      }

      const renderRows = () => {
          return (
            <StyledRow>
              <StyledCell align="left">
                <LeftHeaderTitle>{watchlistName}</LeftHeaderTitle>
              </StyledCell>
              {actual.performance.watchlist &&
                actual.performance.watchlist.length > 0 &&
                actual.performance.watchlist.map((performance, index) => (
                  <StyledCell
                    variant="body"
                    key={`${index}_${performance.metric}`}
                    color={getColor(performance.watchlist)}
                    align="center"
                  >
                    {getValue(performance.watchlist)}%
                  </StyledCell>
                ))}
            </StyledRow>
          );
      }
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
                    <Grid item md={9} xs={12}>
                        <Table minWidth="auto" noshadow={true} theme="primary" renderHeaders={renderHeaders} renderRows={renderRows} />
                    </Grid>
                    <Grid container item md={3} direction="column" justify="center" alignItems="center">
                        <TickersText>{tickers} Tickers</TickersText>
                    </Grid>
                </Grid>
            </Card>
        </>
        )
    );
};

export default TopHeader;