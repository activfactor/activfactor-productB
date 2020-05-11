import {makeStyles, withStyles, Box} from '@material-ui/core';

export const useCustomStyles = makeStyles(({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    }
}));

export const IconWrapper = withStyles((theme) => ({
  root: {
      padding: theme.spacing(3),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }
}))(Box);

export const ControlWrapper = withStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '32px 16px'
  }
}))(Box);