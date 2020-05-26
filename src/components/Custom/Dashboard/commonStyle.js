import { Typography,Box, withStyles } from '@material-ui/core';

export const HeaderTitle = withStyles((theme) => ({
    root: {
        color: theme.palette.common.black,
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '27px'
    }
}))(Typography);

export const HeadersWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& h2':{
            fontSize: '18px',
            fontWeight: 600,
            color: theme.palette.common.black,
            marginBottom: '10px'
        },
        '& p': {
            fontSize: '13px',
            color: theme.palette.text.secondary,
            fontWeight: 500
        }
    }
}))(Box);

export const ButtonWrapper = withStyles(({
    root: {
        width: '200px',
        padding: '40px 0px'
    }
}))(Box);