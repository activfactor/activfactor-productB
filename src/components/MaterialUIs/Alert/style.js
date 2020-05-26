import { AlertTitle, Alert } from '@material-ui/lab';
import { withStyles } from '@material-ui/core';

export const StyledTitle = withStyles(({
    root: {
        fontSize: '15px',
        fontWeight: 600
    }
}))(AlertTitle);

export const StyledAlert = withStyles(({
    message: {
        fontSize: '14px',
        fontWeight: 500
    }
}))(Alert);