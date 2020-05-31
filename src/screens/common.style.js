import { Typography,Box, withStyles } from '@material-ui/core';

export const Date = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        fontWeight: 500,
        color: theme.palette.text.secondary,
        marginLeft: '5px',
        alignSelf: 'center'
    }
}))(Typography);

export const LeftTextWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        '& :first-child':{
            marginBottom: theme.spacing(2)
        },
        '& h2': {
            color: theme.palette.common.black,
            fontSize: '16px',
            fontWeight: 500,
            margin: '0px',
        }
    }
}))(Box);

export const LeftHeaderTitle = withStyles((theme) => ({
    root: {
        color: theme.palette.common.black,
        fontSize: '18px',
        fontWeight: 500,
        margin: '0px',
    }
}))(Typography);

export const MiddleTextWrapper = withStyles((theme) => ({
    root: {
        margin: '0px 20px',
        display: 'flex',
        flexDirection: 'column',
        '& :last-child':{
            marginBottom: theme.spacing(0)
        },
    }
}))(Box);

export const PerformanceValue = withStyles((theme) => ({
    root: {
        color: props => props.color ? props.color : theme.palette.common.black,
        fontSize: '12px',
        fontWeight: 500,
        margin: '0px',
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    }
}))(Typography);

export const TickersText = withStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        fontSize: '14px',
        fontWeight: 500,
        margin: '0px',
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    }
}))(Typography);

export const ChartTitle = withStyles((theme) => ({
    root: {
        color: theme.palette.common.black,
        fontWeight: 500,
        fontSize: '14px'
    }
}))(Typography);

export const ButtonWrapper = withStyles(({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px 0px'
    }
}))(Box);