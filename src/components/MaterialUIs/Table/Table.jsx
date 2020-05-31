import React from 'react';
import { Table, TableBody, TableContainer, TableRow } from '@material-ui/core';
import { useStyles, TableWrapper, StyledTableHead } from './style';
import PropTypes from 'prop-types';

const StyledTable = ({renderHeaders, renderRows, theme, stickyHeader,maxHeight, ...props}) => {
  const classes = useStyles(props);
  return (
    <TableContainer component={TableWrapper} theme={theme} maxheight={maxHeight} noshadow={props.noshadow}>
      <Table stickyHeader={stickyHeader} className={classes.table}>
        <StyledTableHead theme={theme}>
          <TableRow>
            {renderHeaders()}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {renderRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

StyledTable.propTypes = {
    renderHeaders: PropTypes.func,
    renderRows: PropTypes.func,
    theme: PropTypes.oneOf(['primary','secondary']),
    minWidth: PropTypes.string,
    stickyHeader: PropTypes.bool
}

StyledTable.defaultProps = {
    theme: 'primary',
    minWidth: '700px',
    stickyHeader: false
}

export default StyledTable;
