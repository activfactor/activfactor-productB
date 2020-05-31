import { Box, Typography, withStyles } from '@material-ui/core';
import { Feedback as FeedBackIcon, ErrorOutlineOutlined as ErrorIcon } from '@material-ui/icons';

export const Message = withStyles((theme) => ({
    root: {
        fontSize: '18px',
        color: theme.palette.text.secondary,
        fontWeight: 500,
        fontStyle: 'italic'
    }
}))(Typography);

export const Wrapper = withStyles(({
    root: {
        display: 'flex',
        padding: '20px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))(Box);

export const FeedBack = withStyles(({
    root: {
        color: 'rgb(255, 213, 153)',
        marginBottom: '10px',
        fontSize: '40px'
    }
}))(FeedBackIcon);

export const Error = withStyles((theme) => ({
    root: {
        color: theme.palette.error.dark,
        marginBottom: '10px',
        fontSize: '40px'
    }
}))(ErrorIcon);