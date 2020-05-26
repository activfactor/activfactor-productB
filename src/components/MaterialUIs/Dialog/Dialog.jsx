import React from 'react';
import Button from '@material-ui/core/Button';
import {Slide, Fade, useTheme, useMediaQuery} from '@material-ui/core';
import { StyledDialog, StyledDialogActions, StyledDialogContent, StyledDialogTitle, StyledDialogContentText } from './style';
import PropTypes from 'prop-types';

const Transition = React.forwardRef(function Transition(props, ref) {
    if(props.direction){
        return <Slide direction={props.direction} ref={ref} {...props} />;
    }
    return <Fade ref={ref} {...props}/>;
  });


const AlertDialog = ({direction, withFullScreen, children, title, renderTitle, renderActions, open, onClose, fullWidth, themeColor}) => {
  const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <StyledDialog
        fullScreen={withFullScreen && fullScreen}
        fullWidth={fullWidth}
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        TransitionProps={{direction}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        themecolor={themeColor}
      >
        <StyledDialogTitle themecolor={themeColor} id="alert-dialog-title">{title || renderTitle()}</StyledDialogTitle>
        <StyledDialogContent>
            {children}
        </StyledDialogContent>
        <StyledDialogActions>
          {renderActions()}
        </StyledDialogActions>
      </StyledDialog>
    </>
  );
}

AlertDialog.propTypes = {
    withFullScreen: PropTypes.bool,
    direction: PropTypes.oneOf(['up','down','left','right']),
    children: PropTypes.node,
    title: PropTypes.string,
    renderTitle: PropTypes.func,
    renderActions: PropTypes.func,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    fullWidth: PropTypes.bool,
    themeColor: PropTypes.oneOf(['primary','default','error'])
}

AlertDialog.defaultProps = {
  themeColor: 'default'
}

export default AlertDialog;
