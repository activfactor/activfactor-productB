import { Button, withStyles, Box } from '@material-ui/core';

export const StyledButton = withStyles((theme) => ({
    containedPrimary: {
        backgroundColor: theme.palette.error.main,
        fontWeight: 600,
        width: props => props.fullwidth ? '100%' : 'auto',
        minWidth: props => props.minwidth ? props.minwidth : '123px',
        padding: '10px 16px',
        boxShadow: theme.shadows[0],
        textTransform: 'unset',
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
            boxShadow: theme.shadows[0],
        },
        '&:focus': {
            outline: 'none',
            boxShadow: theme.shadows[0],
        }
    },
    outlinedPrimary: {
        textTransform: 'unset',
        boxShadow: theme.shadows[0],
        fontWeight: 600,
        width: props => props.fullwidth ? '100%' : 'auto',
        minWidth: props => props.minwidth ? props.minwidth : '123px',
        padding: '10px 16px',
        '&:focus': {
            outline: 'none',
            boxShadow: theme.shadows[0],
        },
        '&:hover': {
            boxShadow: theme.shadows[0],
        },
    }
}))(Button);

export const LoaderWrapper = withStyles(({
    root: {
        display: 'flex',
        width: props => props.fullwidth ? '100%' : null,
        justifyContent: 'center',
        alignItems: 'center'
    }
}))(Box);