import { Button, withStyles, Box } from '@material-ui/core';

export const StyledButton = withStyles((theme) => ({
    containedPrimary: {
        backgroundColor: theme.palette.primary.light,
        fontWeight: 600,
        width: props => props.fullWidth ? '100%' : '123px',
        padding: '10px 16px',
        boxShadow: theme.shadows[0],
        textTransform: 'unset',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            boxShadow: theme.shadows[0],
        },
        '&:focus': {
            outline: 'none',
            boxShadow: theme.shadows[0],
        }
    }
}))(Button);

export const LoaderWrapper = withStyles(({
    root: {
        display: 'flex',
        width: props => props.fullWidth ? '100%' : null,
        justifyContent: 'center',
        alignItems: 'center'
    }
}))(Box);