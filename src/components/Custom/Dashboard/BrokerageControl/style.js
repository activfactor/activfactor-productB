import { CardContent, Typography,Box, withStyles } from '@material-ui/core';

export const StyledCardContent = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        margin: 'auto',
        '&:last-child': {
            padding: '20px 0px'
        }
    }
}))(CardContent);

export const ImageWrapper = withStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))(Box);

export const Title = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        fontWeight: 500,
        color: theme.palette.common.black,
        marginBottom: theme.spacing(1),
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '13px'
        }
    }
}))(Typography);

export const SubTitle = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        fontWeight: 400,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(1),
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            fontSize: '11px'
        }
    }
}))(Typography);

export const ActionWrapper = withStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(1),
        width: '100%'
    }
}))(Box);