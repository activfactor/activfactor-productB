import {
  withStyles,
  TableCell,
  TableRow,
  Box,
} from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
    root: {
        color: props => props.color ? props.color : theme.palette.text.secondary
    },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white
  }
}))(TableRow);

export const SelectWrapper = withStyles(({
    root: {
        display:'flex',
        width: '100px'
    }
}))(Box);