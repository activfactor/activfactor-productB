import { Box, withStyles } from '@material-ui/core';

export const Wrapper = withStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(3)
    }
}))(Box);

export const ButtonWrapper = withStyles((theme) => ({
    root: {
        width: '200px',
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            width: 'auto'
        }
    }
}))(Box);

export const ActionsWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(2),
    }
}))(Box);