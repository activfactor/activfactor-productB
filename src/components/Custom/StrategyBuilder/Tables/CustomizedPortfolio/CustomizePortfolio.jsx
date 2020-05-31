import React, {useCallback} from 'react';
import { Table, Checkbox } from '../../../../MaterialUIs';
import { useSelector } from 'react-redux';
import { Cell, TickerDescription, TickerName, TickerWrapper } from './style';
import { getColor, getValue, formatDecimal } from 'utils/app.utils';
import { TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';

const CustomizePortfolio = ({addOrRemoveWatchList, watchlistWallet}) => {
    const { strategyResults } = useSelector(state => state.strategyBuilder);

    const headers = ['Ticker','Sector','Industry','Firm size','Value','Size','Volatility','Momentum','Profitability','Investment','weight', 'Watchlist'];

    const renderHeaders = useCallback(() => 
     (
      <>
        {headers.map((header, index) => (
            <Cell variant="head" key={header} align={index === 0 ? "left" : "center"}>{header}</Cell>
        ))}
      </>
    )
  , [headers]);

  const getRowValue = useCallback((value, unit='', roundTo) => {
    let formatedValue = formatDecimal(getValue(value), roundTo);
    return `${formatedValue}${unit}`
  }, []);

  const isChecked = useCallback((ticker) => {
    return watchlistWallet.filter(item => item === ticker).length>0
  }, [watchlistWallet]);

const renderRows = useCallback(() => {
    if (strategyResults){
        const {strategy: {actual: {members}}} = strategyResults;
        if (members && members.length>0){
            return members.map((member, index) => {
              const {ticker, companyname,  sector, industry, firm_size, value, size, volatility, momentum, profitability, investment, weight, tradingitemid} = member;
                return (
                  <TableRow key={`${ticker}_${index}`}>
                    <Cell align="left">
                        <TickerWrapper>
                            <TickerName component="h2">{ticker}</TickerName>
                            <TickerDescription component="p">{companyname}</TickerDescription>
                      </TickerWrapper>
                    </Cell>
                    <Cell variant="body" align="center">{sector}</Cell>
                    <Cell variant="body" align="center">{industry}</Cell>
                    <Cell variant="body" align="center" >{firm_size}</Cell>
                    <Cell variant="body" align="center" color={getColor(value)}>{getRowValue(value)}</Cell>
                    <Cell variant="body" align="center" color={getColor(size)}>{getRowValue(size)}</Cell>
                    <Cell variant="body" align="center" color={getColor(volatility)}>{getRowValue(volatility)}</Cell>
                    <Cell variant="body" align="center" color={getColor(momentum)}>{getRowValue(momentum)}</Cell>
                    <Cell variant="body" align="center" color={getColor(profitability)}>{getRowValue(profitability)}</Cell>
                    <Cell variant="body" align="center" color={getColor(investment)}>{getRowValue(investment)}</Cell>
                    <Cell variant="body" align="center">{getRowValue(weight, '%', 2)}</Cell>
                    <Cell variant="body" align="center"><Checkbox checked={isChecked(tradingitemid)} value={tradingitemid} onChange={addOrRemoveWatchList}/></Cell>
                  </TableRow>
                );
            })
        }
    }
}, [getRowValue, strategyResults, addOrRemoveWatchList, isChecked]);

    return (
        <Table stickyHeader={true} theme="secondary" renderHeaders={renderHeaders} renderRows={renderRows} minWidth="800px" maxHeight="600px"/>
    );
};

CustomizePortfolio.propTypes = {
  addOrRemoveWatchList: PropTypes.func.isRequired,
  watchlistWallet: PropTypes.arrayOf(PropTypes.string)
}

export default CustomizePortfolio;