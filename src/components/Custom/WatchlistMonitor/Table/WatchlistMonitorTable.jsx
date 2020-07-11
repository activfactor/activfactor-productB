import React, {useCallback, useState} from 'react';
import { Table, Snackbar, Tabs } from '../../../MaterialUIs';
import { useSelector , useDispatch} from 'react-redux';
import { Cell, TickerDescription, TickerName, TickerWrapper, StyledDeleteIcon, ViewButton, StyledProgress, ProgressWrapper, Container, TabsWrapper } from './style';
import { getColor, getValue, formatDecimal } from 'utils/app.utils';
import { TableRow } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useApiInfo } from 'screens/hooks/screens.hooks';
import { DELETE_TICKERS } from 'store/types';
import { clearApi } from 'store/actions/api.actions';
import { setTickerId } from 'store/actions/resources.actions';
import { clearTickerDetails } from 'store/actions/ticker.actions';
import { FETCH_TICKER_DETAILS } from 'store/types';
import history from '../../../../history';

const CustomizePortfolio = ({onDeleteTicker}) => {
    const { oneWatchlistDetails } = useSelector(state => state.watchlists);
    const [isLoading, error, done] = useApiInfo(DELETE_TICKERS);
    const [performanceValue, setPerformanceValue] = useState('1D');
    const tabsOptions = [{value: '1D', label: '1D'},{value: 'WTD', label: 'WTD'},{value: 'MTD', label: 'MTD'}];
    const dispatch = useDispatch();

    const headers = ['ticker','Sector','Firm size','Performance','Value','Size','Volatility','Momentum','Profitability','Investment',''];

    const renderHeaders = useCallback(() => 
     (
      <>
        {headers.map((header, index) => (
            <Cell variant="head" key={header} align={index === 0 ? "left" : "center"}>{header}</Cell>
        ))}
      </>
    )
  , [headers]);

  const onChangeTabHandler = (value) => {
    setPerformanceValue(value);
  }

  const getRowValue = useCallback((value, roundTo,  unit='') => {
    let formatedValue = formatDecimal(getValue(value), roundTo);
    return `${formatedValue}${unit}`
  }, []);

  const onDeleteTickerHandler = useCallback((tickerId) => () => {
    onDeleteTicker(tickerId);
  }, [onDeleteTicker]);

  const onClickTickerView = useCallback((tickerId) => () => {
    dispatch(clearApi(FETCH_TICKER_DETAILS));
    dispatch(clearTickerDetails());
    dispatch(setTickerId(tickerId));
    history.push('/ticker/monitor');
  }, [dispatch]);

  const renderActions = useCallback((tickerId) => (
      <Grid container direction="row" alignItems="center" justify="center" wrap="nowrap">
        <ViewButton onClick={onClickTickerView(tickerId)} variant="outlined" color="primary"><Visibility /></ViewButton>
        <StyledDeleteIcon onClick={onDeleteTickerHandler(tickerId)} />
      </Grid>
  ), [onDeleteTickerHandler, onClickTickerView]);

  const onCloseDeleteFailureErrorHandler = () => {
    dispatch(clearApi(DELETE_TICKERS));
  }

const renderRows = useCallback(() => {
    if (oneWatchlistDetails){
        const {actual: {members}} = oneWatchlistDetails;
        if (members && members.length>0){
            return members.map((member, index) => {
              const {ticker, companyname,  sector, firm_size, value, size, volatility, momentum, profitability, investment, tradingitemid} = member;
                return (
                    <React.Fragment key={`${ticker}_${index}`}>
                  <TableRow>
                    <Cell align="left">
                        <TickerWrapper>
                            <TickerName component="h2">{ticker}</TickerName>
                            <TickerDescription component="p">{companyname}</TickerDescription>
                      </TickerWrapper>
                    </Cell>
                    <Cell variant="body" align="center">{sector}</Cell>
                    <Cell variant="body" align="center" >{firm_size}</Cell>
                    <Cell variant="body" align="center" color={getColor(member[performanceValue])}>{getValue(member[performanceValue])}%</Cell>
                    <Cell variant="body" align="center" color={getColor(value)}>{getRowValue(value, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(size)}>{getRowValue(size, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(volatility)}>{getRowValue(volatility, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(momentum)}>{getRowValue(momentum, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(profitability)}>{getRowValue(profitability, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(investment)}>{getRowValue(investment, 0)}</Cell>
                    <Cell variant="body" align="center">{renderActions(tradingitemid)}</Cell>
                  </TableRow>
                  </React.Fragment>
                );
            })
        }
    }
}, [getRowValue, oneWatchlistDetails, renderActions, performanceValue]);

    return (
        <>
        {done && error && !isLoading && (
            <Snackbar
                open={true}
                autoHideDuration={6000}
                message={error}
                severity="error"
                variant="filled"
                vertical="top"
                horizontal="center"
                title="Success"
                onClose={onCloseDeleteFailureErrorHandler}
            />
        )}
        <Container>
          <TabsWrapper>
            <Tabs options={tabsOptions} theme="primary" initialValue={performanceValue} handleTabClick={onChangeTabHandler}/>
          </TabsWrapper>
          {isLoading && !error & !done && (<ProgressWrapper>
            <StyledProgress color="secondary"/>
          </ProgressWrapper>)}
          <Table stickyHeader={true} theme="secondary" renderHeaders={renderHeaders} renderRows={renderRows} minWidth="100%" maxHeight="600px"/>
        </Container>
        </>
    );
};

CustomizePortfolio.propTypes = {
    addOrRemoveTicker: PropTypes.func.isRequired,
    tickersWallet: PropTypes.arrayOf(PropTypes.string),
    onDeleteTicker: PropTypes.func.isRequired
}

export default CustomizePortfolio;