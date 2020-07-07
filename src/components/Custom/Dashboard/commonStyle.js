import { Typography,Box, withStyles } from '@material-ui/core';

export const HeaderTitle = withStyles((theme) => ({
    root: {
        color: theme.palette.common.black,
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '27px'
    }
}))(Typography);

export const DateTitle = withStyles((theme) => ({
    root: {
        fontSize: '13px',
        fontWeight: 500,
        color: theme.palette.common.black,
        alignSelf: 'center'
    }
}))(Typography);

export const Date = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        fontWeight: 500,
        color: theme.palette.text.secondary,
        alignSelf: 'center'
    }
}))(Typography);

export const HeadersWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontFamily: theme.typography.fontFamily,
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