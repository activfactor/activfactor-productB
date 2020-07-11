import React, {useCallback, useState} from 'react';
import { Table, Tabs } from '../../../../MaterialUIs';
import { useSelector, useDispatch } from 'react-redux';
import { Cell, TickerDescription, TickerName, TickerWrapper, ViewButton, Container, TabsWrapper } from './style';
import { getColor, getValue, formatDecimal } from 'utils/app.utils';
import { TableRow, Grid } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { clearApi } from 'store/actions/api.actions';
import { clearTickerDetails } from 'store/actions/ticker.actions';
import { setTickerId } from 'store/actions/resources.actions';
import { FETCH_TICKER_DETAILS } from 'store/types';
import history from '../../../../../history';

const CustomizePortfolio = () => {
    const { oneStrategyDetails } = useSelector(state => state.strategies);
    const dispatch = useDispatch();
    const [performanceValue, setPerformanceValue] = useState('1D');
    const tabsOptions = [{value: '1D', label: '1D'},{value: 'WTD', label: 'WTD'},{value: 'MTD', label: 'MTD'}];
    const headers = ['ticker','Sector','Firm size','Performance','Value','Size','Volatility','Momentum','Profitability','Investment','weight',''];

    const onChangeTabHandler = (value) => {
      setPerformanceValue(value);
    }

    const renderHeaders = useCallback(() => 
     (
      <>
        {headers.map((header, index) => (
            <Cell variant="head" key={header} align={index === 0 ? "left" : "center"}>{header}</Cell>
        ))}
      </>
    )
  , [headers]);

  const getRowValue = useCallback((value, roundTo, unit='') => {
    let formatedValue = formatDecimal(getValue(value), roundTo);
    return `${formatedValue}${unit}`
  }, []);

  const onClickTickerView = useCallback((tickerId) => () => {
    dispatch(clearApi(FETCH_TICKER_DETAILS));
    dispatch(clearTickerDetails());
    dispatch(setTickerId(tickerId));
    history.push('/ticker/monitor');
  }, [dispatch]);

  const renderActions = useCallback((tickerId) => (
    <Grid container direction="row" alignItems="center" justify="center" wrap="nowrap">
        <ViewButton onClick={onClickTickerView(tickerId)} variant="outlined" color="primary"><Visibility /></ViewButton>
      </Grid>
  ), [onClickTickerView]);

const renderRows = useCallback(() => {
    if (oneStrategyDetails){
        const {strategy: {actual: {members}}} = oneStrategyDetails;
        if (members && members.length>0){
            return members.map((member, index) => {
              const {ticker, companyname,  sector, firm_size, value, size, volatility, momentum, profitability, investment, weight, tradingitemid} = member;
                return (
                  <TableRow key={`${ticker}_${index}`}>
                    <Cell align="left">
                        <TickerWrapper>
                            <TickerName component="h2">{ticker}</TickerName>
                            <TickerDescription component="p">{companyname}</TickerDescription>
                      </TickerWrapper>
                    </Cell>
                    <Cell variant="body" align="center">{sector}</Cell>
                    <Cell variant="body" align="center" >{firm_size}</Cell>
                    <Cell variant="body" align="center" color={getColor(member[performanceValue])}>{getValue(member[performanceValue])}%</Cell>
                    <Cell variant="body" align="center" color={getColor(value)}>{getRowValue(value,0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(size)}>{getRowValue(size, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(volatility)}>{getRowValue(volatility, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(momentum)}>{getRowValue(momentum, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(profitability)}>{getRowValue(profitability, 0)}</Cell>
                    <Cell variant="body" align="center" color={getColor(investment)}>{getRowValue(investment, 0)}</Cell>
                    <Cell variant="body" align="center">{getRowValue(weight,2,'%')}</Cell>
                    <Cell variant="body" align="center">{renderActions(tradingitemid)}</Cell>
                  </TableRow>
                );
            })
        }
    }
}, [getRowValue, oneStrategyDetails, renderActions, performanceValue]);

    return (
      <Container>
        <TabsWrapper>
          <Tabs theme="primary" options={tabsOptions} initialValue={performanceValue} handleTabClick={onChangeTabHandler}/>
        </TabsWrapper>
        <Table stickyHeader={true} theme="secondary" renderHeaders={renderHeaders} renderRows={renderRows} minWidth="800px" maxHeight="600px"/>
      </Container>
    );
};

CustomizePortfolio.propTypes = {
    onUpdateWatchList: PropTypes.func.isRequired
}

export default CustomizePortfolio;