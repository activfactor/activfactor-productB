import React, {useCallback} from 'react';
import { Table, Checkbox } from '../../../../MaterialUIs';
import { useSelector } from 'react-redux';
import { Cell, TickerDescription, TickerName, TickerWrapper, ViewButton } from './style';
import { getColor, getValue, formatDecimal } from 'utils/app.utils';
import { TableRow, Grid } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import PropTypes from 'prop-types';

const CustomizePortfolio = ({addOrRemoveTicker, tickersWallet}) => {
    const { oneStrategyDetails } = useSelector(state => state.strategies);

    const headers = ['ticker','Sector','Firm size','1D','WTD','MTD','Value','Size','Volatility','Momentum','Profitability','Investment','weight',''];

    const renderHeaders = useCallback(() => 
     (
      <>
        {headers.map((header, index) => (
            <Cell variant="head" key={header} align={index === 0 ? "left" : "center"}>{header}</Cell>
        ))}
      </>
    )
  , [headers]);

  const getRowValue = useCallback((value, unit='') => {
    let formatedValue = formatDecimal(getValue(value), 2);
    return `${formatedValue}${unit}`
  }, []);

  const isChecked = useCallback((ticker) => {
    return tickersWallet.filter(item => item === ticker).length>0
  }, [tickersWallet]);

  const renderActions = useCallback((ticker) => (
    <Grid container direction="row" alignItems="center" justify="center" wrap="nowrap">
        <ViewButton variant="outlined" color="primary"><Visibility /></ViewButton>
        <Checkbox margin="0px 5px 0px 5px" size="small" checked={isChecked(ticker)} value={ticker} onChange={addOrRemoveTicker}/>
      </Grid>
  ), [addOrRemoveTicker, isChecked]);

const renderRows = useCallback(() => {
    if (oneStrategyDetails){
        const {strategy: {actual: {members}}} = oneStrategyDetails;
        if (members && members.length>0){
            return members.map((member, index) => {
              const {ticker, companyname,  sector, WTD, MTD, firm_size, value, size, volatility, momentum, profitability, investment, weight} = member;
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
                    <Cell variant="body" align="center" color={getColor(member['1D'])}>{getValue(member['1D'])}</Cell>
                    <Cell variant="body" align="center" color={getColor(WTD)}>{getValue(WTD)}</Cell>
                    <Cell variant="body" align="center" color={getColor(MTD)}>{getValue(MTD)}</Cell>
                    <Cell variant="body" align="center" color={getColor(value)}>{getRowValue(value)}</Cell>
                    <Cell variant="body" align="center" color={getColor(size)}>{getRowValue(size)}</Cell>
                    <Cell variant="body" align="center" color={getColor(volatility)}>{getRowValue(volatility)}</Cell>
                    <Cell variant="body" align="center" color={getColor(momentum)}>{getRowValue(momentum)}</Cell>
                    <Cell variant="body" align="center" color={getColor(profitability)}>{getRowValue(profitability)}</Cell>
                    <Cell variant="body" align="center" color={getColor(investment)}>{getRowValue(investment)}</Cell>
                    <Cell variant="body" align="center">{getRowValue(weight, '%')}</Cell>
                    <Cell variant="body" align="center">{renderActions(ticker)}</Cell>
                  </TableRow>
                );
            })
        }
    }
}, [getRowValue, oneStrategyDetails, renderActions]);

    return (
        <Table stickyHeader={true} theme="secondary" renderHeaders={renderHeaders} renderRows={renderRows} minWidth="800px" maxHeight="600px"/>
    );
};

CustomizePortfolio.propTypes = {
    onUpdateWatchList: PropTypes.func.isRequired
}

export default CustomizePortfolio;