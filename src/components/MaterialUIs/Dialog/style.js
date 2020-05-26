import { DialogActions, DialogContent, Dialog, DialogTitle,DialogContentText, withStyles } from '@material-ui/core';

export const StyledDialogActions = withStyles((theme) => ({
    root: {
        padding: '15px 24px',
    }
}))(DialogActions);

export const StyledDialog = withStyles((theme) => ({
    container: {
        height: 'auto'
    },
    paper: {
        boxShadow: theme.customShadows[3],
        borderRadius: '10px',
        borderWidth: ({themecolor}) => themecolor === 'error' ? '2px' : 'none',
        borderColor: ({themecolor}) => themecolor === 'error' ? theme.palette.error.light : 'none',
        borderStyle: ({themecolor}) => themecolor === 'error' ? 'solid' : 'none',
    }
}))(Dialog);

export const StyledDialogContent = withStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}))(DialogContent);

export const StyledDialogTitle = withStyles((theme) => ({
    root: {
        color: ({themecolor}) => themecolor==='error' ? theme.palette.error.dark : themecolor==='primary' ? theme.palette.common.white : theme.palette.text.primary,
        fontWeight: 600,
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.background.default,
        fontSize: '16px',
        backgroundColor: ({themecolor}) => themecolor==='primary' ? theme.palette.primary.light : theme.palette.common.white
    }
}))(DialogTitle);

export const StyledDialogContentText = withStyles((theme) => ({

}))(DialogContentText);