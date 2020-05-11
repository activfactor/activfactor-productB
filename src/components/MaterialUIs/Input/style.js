import { InputLabel, withStyles, FormHelperText, FormControl, OutlinedInput } from '@material-ui/core';

export const StyledLabel = withStyles((theme) => ({
    outlined: {
        color: theme.palette.text.primary
    }
}))(InputLabel);

export const StyledFormHelperText = withStyles((theme) => ({
    error: {
        color: theme.palette.primary.dark
    }
}))(FormHelperText);

export const StyledFormControl = withStyles(({
    root: {
        margin: props => props.error ? '10px 0px' : '10px 0px'
    }
}))(FormControl);

export const StyledOutlinedInput = withStyles((theme) => ({
    root: {
        color: theme.customColors.black
    }
}))(OutlinedInput);