import React,{useMemo} from 'react';
import { Date, LeftHeaderTitle, TickersText, TickersNumber, DateTitle } from '../../common.style';
import { useSelector } from 'react-redux';
import { Card, Table } from '../../../components/MaterialUIs';
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
              <StyledCell variant="body" align="left">
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
              <StyledCell variant="body" align="right">
                <TickersText component="p">
                  Stocks in watchlist{" "}
                  <TickersNumber component="span">{tickers}</TickersNumber>
                </TickersText>
              </StyledCell>
            </StyledRow>
          );
      }
    return (
        actual && (
        <>
            <Grid container justify="space-between" alignItems="center" style={{marginBottom: '15px'}}>
                <Grid item sx={12}>
                    <Autorenew /> <DateTitle component="span">Updates:</DateTitle>
                    <Date component="span">Last: {lastUpdate}</Date>
                </Grid>
            </Grid>
            <Card style={{padding: '25px 30px', marginBottom: '25px'}}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs={12}>
                        <Table minWidth="515px" noshadow={true} theme="primary" renderHeaders={renderHeaders} renderRows={renderRows} />
                    </Grid>
                </Grid>
            </Card>
        </>
        )
    );
};

export default TopHeader;