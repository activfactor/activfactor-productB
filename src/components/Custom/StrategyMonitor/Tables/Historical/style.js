
import {
    withStyles,
    TableCell,
    TableRow,
    Typography,
  } from "@material-ui/core";

  import { Help } from '@material-ui/icons';

export const Cell = withStyles((theme) => ({
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

export const HelpIcon = withStyles((theme) => ({
  root: {
      marginLeft: theme.spacing(1)
  },
  colorPrimary: {
      color: theme.palette.primary.light
  }
}))(Help);