import { Box, Typography, withStyles } from '@material-ui/core';

export const Wrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        padding: theme.spacing(4),
        justifyContent: 'center',
        alignItems: 'center'
    }
}))(Box);

export const FooterTitle = withStyles((theme) => ({
    root: {
        fontSize: 14,
        color: theme.palette.text.primary
    }
}))(Typography);