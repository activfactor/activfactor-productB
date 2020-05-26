
import {
    withStyles,
    TableCell,
    TableRow,
    Typography,
    Box
  } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
    head:{
        color: theme.palette.common.black,
        fontSize: '14px',
        fontWeight: 500
    },
    body: {
        color: props => props.color ? props.color : theme.palette.primary,
        fontSize: 13,
    },
}))(TableCell);

export const CustomizePortfolioCell = withStyles((theme) => ({
    head:{
        color: theme.palette.common.white,
        fontSize: '14px',
        fontWeight: 500,
        backgroundColor: theme.palette.primary.light
    },
    stickyHeader:{
        backgroundColor: theme.palette.primary.light
    },
    body: {
        color: props => props.color ? props.color : theme.palette.text.secondary,
        fontSize: 13,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.common.white
    }
  }))(TableRow);

export const StyledTitle = withStyles((theme) => ({
    root: {
        fontSize: '16px',
        color: theme.palette.common.white,
        fontWeight: 500
    }
}))(Typography);

export const StyledTickerName = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        fontWeight: 500,
        color: theme.palette.common.black,
        textAlign: 'left',
        marginBottom: '10px'
    }
}))(Typography);

export const StyledTickerDescription = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
        fontWeight: 400
    }
}))(Typography);

export const TickerNameWrapper = withStyles(({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
}))(Box);