import { withStyles, TextField } from '@material-ui/core';

export const StyledTextField = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
    }
}))(TextField)