import { TableCell, withStyles } from '@material-ui/core';

export const StyledTableCell = withStyles((theme) => ({
    body: {
        color: props => props.color ? props.color : theme.palette.common.black,
        fontWeight: 500,
        fontSize: '13px',
        borderColor: theme.palette.background.default,
        maxWidth: '150px !important',
        textOverflow: 'ellipsis !important'
    },
    head: {
        color: theme.palette.common.black,
        fontWeight: 500,
        fontSize: '13px',
        borderColor: theme.palette.background.default,
    }
}))(TableCell);