
import {
    withStyles,
    TableCell,
    TableRow,
    Typography,
    Box
  } from "@material-ui/core";

export const Cell = withStyles((theme) => ({
    head:{
        color: theme.palette.common.white,
        fontSize: '14px',
        fontWeight: 500,
        backgroundColor: theme.palette.primary.light,
        minWidth: '90px'
    },
    stickyHeader:{
        backgroundColor: theme.palette.primary.light
    },
    body: {
        color: props => props.color ? props.color : theme.palette.text.secondary,
        fontSize: 14,
    },
}))(TableCell);

export const Row = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.common.white
    }
  }))(TableRow);

export const Title = withStyles((theme) => ({
    root: {
        fontSize: '16px',
        color: theme.palette.common.white,
        fontWeight: 500
    }
}))(Typography);

export const TickerName = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        fontWeight: 500,
        color: theme.palette.common.black,
        textAlign: 'left',
        marginBottom: '10px'
    }
}))(Typography);

export const TickerDescription = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
        fontWeight: 400
    }
}))(Typography);

export const TickerWrapper = withStyles(({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
}))(Box);