import React from 'react';
import Alert from '../Alert';
import {Snackbar, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
  },
}));

const CustomizedSnackbar = ({open, onClose, severity, message, variant, action, autoHideDuration, vertical, horizontal, title}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
      >
        <Alert
          onClose={onClose}
          severity={severity}
          variant={variant}
          action={action}
          message={message}
          title={title}
        />
      </Snackbar>
    </div>
  );
}

CustomizedSnackbar.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    severity: PropTypes.oneOf(['error','success','info','warning']),
    message: PropTypes.string,
    variant: PropTypes.oneOf(['default','filled','outlined']),
    action: PropTypes.node,
    autoHideDuration: PropTypes.number,
    horizontal: PropTypes.oneOf(['left','right','center']),
    vertical: PropTypes.oneOf(['top','bottom']),
    title: PropTypes.string
}

CustomizedSnackbar.defaultProps = {
    autoHideDuration: 6000,
    horizontal: 'top',
    vertical: 'center',
}


export default CustomizedSnackbar;
