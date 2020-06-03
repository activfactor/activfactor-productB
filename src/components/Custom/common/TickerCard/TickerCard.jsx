import React from 'react';
import {Table} from '../../../MaterialUIs';
import Card from '../ChartCard';
import { StyledTableCell } from './style';
import { TableRow } from '@material-ui/core';
import { getColor, getValue } from 'utils/app.utils';
import PropTypes from 'prop-types';

const TickerCard = ({tableData, title}) => {
    const renderHeaders = () => {
        return (
            <>
                <StyledTableCell variant="head"></StyledTableCell>
                <StyledTableCell align="center" variant="head">Company</StyledTableCell>
                <StyledTableCell align="center" variant="head">Sector</StyledTableCell>
                <StyledTableCell align="center" variant="head">Industry</StyledTableCell>
            </>
        )
    }

    const renderRows = () => {
        return (
          <>
            {tableData &&
              tableData.length > 0 &&
              tableData.map((row, index) => (
                <TableRow key={`${row[1]}_${index * 2}`}>
                  {row.map((cell, index) => (
                    <StyledTableCell
                      key={`${cell.value}_${index * 3}`}
                      variant="body"
                      color={index > 0 ? getColor(cell.value) : null}
                      align={index === 0 ? "left" : "center"}
                    >
                      {index === 0
                        ? cell.value
                        : `${getValue(cell.value)}${
                            cell.unit ? cell.unit : ""
                          }`}
                    </StyledTableCell>
                  ))}
                </TableRow>
              ))}
          </>
        );
    }
    return (
        <Card title={title} padding="0px">
            <Table minWidth="409px" noshadow={true} renderHeaders={renderHeaders} renderRows={renderRows} theme="primary" />
        </Card>
    );
};

TickerCard.propTypes = {
    strategyName: PropTypes.string,
    to: PropTypes.string, 
    tickersNumber: PropTypes.number, 
    rebalancingLast: PropTypes.string, 
    rebalancingNext: PropTypes.string, 
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)), 
    benchmark: PropTypes.string,
    onClick: PropTypes.func
}

export default TickerCard;