import { withStyles, Button } from '@material-ui/core';

export const StyledButton = withStyles((theme) => ({
    outlinedPrimary: {
        height: '100%',
        width: '100%',
        minHeight: '300px',
        borderWidth: '2px',
        borderColor: theme.palette.text.secondary,
        borderStyle: 'dashed',
        color: theme.palette.text.secondary,
        fontSize: '36px',
        outline: 'none',
        '&:hover': {
            borderColor: theme.palette.common.black,
            color: theme.palette.text.primary,
            borderStyle: 'dashed',
            borderWidth: '2px',
            backgroundColor: theme.palette.background.default,
            outline: 'none'
        }
    }
}))(Button);