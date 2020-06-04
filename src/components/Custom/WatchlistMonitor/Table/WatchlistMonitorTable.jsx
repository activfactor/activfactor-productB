import React, {useCallback} from 'react';
import { Table, Snackbar } from '../../../MaterialUIs';
import { useSelector , useDispatch} from 'react-redux';
import { Cell, TickerDescription, TickerName, TickerWrapper, StyledDeleteIcon, ViewButton, StyledProgress, ProgressWrapper } from './style';
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
import history from '../../../../history';

const CustomizePortfolio = ({onDeleteTicker}) => {
    const { oneWatchlistDetails } = useSelector(state => state.watchlists);
    const [isLoading, error, done] = useApiInfo(DELETE_TICKERS);
    const dispatch = useDispatch();

    const headers = ['ticker','Sector','Firm size','1D','WTD','MTD','Value','Size','Volatility','Momentum','Profitability','Investment',''];

    const renderHeaders = useCallback(() => 
     (
      <>
        {headers.map((header, index) => (
            <Cell variant="head" key={header} align={index === 0 ? "left" : "center"}>{header}</Cell>
        ))}
      </>
    )
  , [headers]);

  const getRowValue = useCallback((value, roundTo,  unit='') => {
    let formatedValue = formatDecimal(getValue(value), roundTo);
    return `${formatedValue}${unit}`
  }, []);

  const onDeleteTickerHandler = useCallback((tickerId) => () => {
    onDeleteTicker(tickerId);
  }, [onDeleteTicker]);

  const onClickTickerView = useCallback((tickerId) => () => {
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
              const {ticker, companyname,  sector, WTD, MTD, firm_size, value, size, volatility, momentum, profitability, investment, tradingitemid} = member;
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
                    <Cell variant="body" align="center" color={getColor(member['1D'])}>{getValue(member['1D'])}%</Cell>
                    <Cell variant="body" align="center" color={getColor(WTD)}>{getValue(WTD)}%</Cell>
                    <Cell variant="body" align="center" color={getColor(MTD)}>{getValue(MTD)}%</Cell>
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
}, [getRowValue, oneWatchlistDetails, renderActions]);

    return (
        <>
        {isLoading && !error & !done && (<ProgressWrapper>
            <StyledProgress color="secondary"/>
        </ProgressWrapper>)}
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
        <Table stickyHeader={true} theme="secondary" renderHeaders={renderHeaders} renderRows={renderRows} minWidth="800px" maxHeight="600px"/>
        </>
    );
};

CustomizePortfolio.propTypes = {
    addOrRemoveTicker: PropTypes.func.isRequired,
    tickersWallet: PropTypes.arrayOf(PropTypes.string),
    onDeleteTicker: PropTypes.func.isRequired
}

export default CustomizePortfolio;