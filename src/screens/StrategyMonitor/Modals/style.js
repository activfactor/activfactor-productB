import { Typography, withStyles } from '@material-ui/core';

export const DeleteMessage = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        fontWeight: 500,
        color: theme.palette.common.black,
    }
}))(Typography);