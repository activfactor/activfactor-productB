import { TableCell, withStyles, TableRow } from '@material-ui/core';

export const StyledCell = withStyles((theme) => ({
    root: {
        border: 'none',
        padding: '5px'
    },
    head: {
        color: theme.palette.common.black,
        fontWeight: 500,
        fontSize: '13px'
    },
    body: {
        color: ({color}) => color ? color : theme.palette.text.secondary,
        fontWeight: 500,
        fontSize: '13px'
    }
}))(TableCell);

export const StyledRow = withStyles(({
}))(TableRow);