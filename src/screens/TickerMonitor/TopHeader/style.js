import { TableCell, withStyles, TableRow, Typography } from '@material-ui/core';

export const StyledCell = withStyles((theme) => ({
    root: {
        border: 'none',
        padding: '15px',
        minWidth: '150px',
        [theme.breakpoints.down('sm')]:{
            minWidth: '100%'
        }
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

export const StyledTickerCell = withStyles((theme) => ({
    root: {
        border: 'none',
        padding: '15px',
        fontSize: '20px',
        color: theme.palette.primary.light
    }
}))(TableCell);

export const DescriptionTitle = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        color: theme.palette.text.secondary,
        fontWeight: 500
    }
}))(Typography);

export const Description = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        color: theme.palette.common.black,
        fontWeight: 500
    }
}))(Typography);