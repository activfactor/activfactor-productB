import React, {useMemo} from 'react';
import {Badge, Table, Link} from '../../../MaterialUIs';
import { TickersNumber, Rebalancing, StyledTableCell, StyledTableRow, RebalancingWrapper, DescriptionWrapper, StyledCard } from './style';
import { getColor, getValue } from 'utils/app.utils';
import PropTypes from 'prop-types';
import { useMediaQuery, useTheme } from '@material-ui/core';

const StrategyCard = ({strategyName, to, tickersNumber, rebalancingLast, rebalancingNext, tableData, benchmark, onClick}) => {
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'));
    const {last, next} = useMemo(() => {
        if (mobileView){
            return {
                last: {
                    fontSize: '11px',
                    margin: '0px 5px 0px 0px'
                },
                next: {
                    fontSize: '11px',
                    margin: '0px 0px 0px 5px'
                }
            }
        }
        return {
            last: {
                fontSize: '13px',
                margin: '0px 5px 0px 0px'
            },
            next: {
                fontSize: '13px',
                margin: '0px 0px 0px 5px'
            }
        }
    }, [mobileView]);
    const renderHeaders = () => {
        return (
            <>
                <StyledTableCell variant="head"></StyledTableCell>
                <StyledTableCell align="center" variant="head">Strategy</StyledTableCell>
                <StyledTableCell align="center" variant="head">{benchmark}</StyledTableCell>
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
                      align={index === 0 ? "left" : "center"}
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
            <Link align="left" fontSize="18px" label={strategyName} to={to} onClick={onClick} theme="primary" />
            <TickersNumber component="p">{`${tickersNumber} Tickers`}</TickersNumber>
            <RebalancingWrapper>
                <Rebalancing component="span">Rebalancing</Rebalancing>
                <div style={{marginBottom: '10px'}}>
                    <Badge {...last} color="secondary" variant="default" label={rebalancingLast} />
                    <Badge {...next} color="primary" variant="default" label={rebalancingNext} />
                </div>
            </RebalancingWrapper>
            </DescriptionWrapper>
            <Table minWidth="auto" renderHeaders={renderHeaders} renderRows={renderRows} theme="primary" />
        </StyledCard>
    );
};

StrategyCard.propTypes = {
    strategyName: PropTypes.string,
    to: PropTypes.string, 
    tickersNumber: PropTypes.number, 
    rebalancingLast: PropTypes.string, 
    rebalancingNext: PropTypes.string, 
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)), 
    benchmark: PropTypes.string,
    onClick: PropTypes.func
}

export default StrategyCard;