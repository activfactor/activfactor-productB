import React from 'react';
import {Table, Link} from '../../../MaterialUIs';
import { TickersNumber, StyledTableCell, StyledTableRow, DescriptionWrapper, StyledCard } from './style';
import { getColor, getValue } from 'utils/app.utils';
import PropTypes from 'prop-types';

const WatchlistCard = ({watchlistName, to, tickersNumber, tableData, onClick}) => {
    const renderHeaders = () => {
        return (
            <>
                <StyledTableCell variant="head"></StyledTableCell>
                <StyledTableCell align="center" variant="head">Performance</StyledTableCell>
            </>
        )
    }

    const renderRows = () => {
        return (
          <>
            {tableData &&
              tableData.length > 0 &&
              tableData.map((row, index) => (
                <StyledTableRow key={`${row[1]}_${index * 2}`}>
                  {row.map((cell, index) => (
                    <StyledTableCell
                      key={`${cell.value}_${index * 3}`}
                      variant="body"
                      color={index > 0 ? getColor(cell.value) : null}
                      align={index === 0 ? 'left' : 'center'}
                    >
                      {index === 0
                        ? cell.value
                        : `${getValue(cell.value)}${
                            cell.unit ? cell.unit : ""
                          }`}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
          </>
        );
    }
    return (
        <StyledCard>
            <DescriptionWrapper>
            <Link align="left" fontSize="18px" label={watchlistName} to={to} theme="primary" onClick={onClick} />
            <TickersNumber component="p">{`${tickersNumber} Tickers`}</TickersNumber>
            </DescriptionWrapper>
            <Table minWidth="auto" renderHeaders={renderHeaders} renderRows={renderRows} theme="primary" />
        </StyledCard>
    );
};

WatchlistCard.propTypes = {
    strategyName: PropTypes.string,
    to: PropTypes.string, 
    tickersNumber: PropTypes.number, 
    rebalancingLast: PropTypes.string, 
    rebalancingNext: PropTypes.string, 
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)), 
    benchmark: PropTypes.string,
    onClick: PropTypes.func
}

export default WatchlistCard;