
import {
    withStyles,
    TableCell,
    TableRow,
    Typography,
    Box,
    Button,
    LinearProgress
  } from "@material-ui/core";

  import { DeleteForever } from '@material-ui/icons';

export const Cell = withStyles((theme) => ({
    head:{
        color: theme.palette.common.white,
        fontSize: '13px',
        fontWeight: 500,
        backgroundColor: theme.palette.primary.light,
        minWidth: '90px'
    },
    stickyHeader:{
        backgroundColor: theme.palette.primary.light
    },
    body: {
        color: props => props.color ? props.color : theme.palette.text.secondary,
        fontSize: '13px',
    },
}))(TableCell);

export const StyledProgress = withStyles((theme) => ({
    colorSecondary: {
        backgroundColor: theme.palette.error.light,
        borderRadius: 8,
        height: 5

    },
    barColorSecondary: {
        backgroundColor: theme.palette.error.dark,
        borderRadius: 8,
        height: 5
    }
}))(LinearProgress);

export const ProgressWrapper = withStyles(({
    root: {
        width: '100%'
    }
}))(Box);

export const StyledDeleteIcon = withStyles((theme) => ({
    root: {
        cursor: 'pointer',
        color: theme.palette.error.main,
        '&:hover':{
            color: theme.palette.error.dark
        }
    }
}))(DeleteForever);

export const ViewButton = withStyles(({
    root: {
        padding: '0px', 
        marginRight: '5px', 
        minWidth: '35px', 
        height:'30px',
        outline: 'none',
        '&:focus':{
            outline: 'none'
        }
    }
}))(Button);

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