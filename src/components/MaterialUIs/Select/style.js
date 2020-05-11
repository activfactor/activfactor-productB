import { InputLabel, Select, withStyles, FormHelperText, FormControl } from '@material-ui/core';

export const StyledInputLabel = withStyles((theme) => ({
    outlined: {
        color: theme.palette.text.primary,
        backgroundColor: theme.customColors.white,
        padding: '0px 5px'
    }
}))(InputLabel);

export const StyledFormHelperText = withStyles((theme) => ({
    error: {
        color: theme.palette.primary.dark
    }
}))(FormHelperText);

export const StyledSelect = withStyles((theme) => ({
    root: {
        color: props => props.theme === 'primary' ? theme.customColors.black : theme.palette.primary.main,
        backgroundColor: props => props.theme === 'primary' ? 'unset' : theme.customColors.lightBlue,
        '&:focus': {
            backgroundColor: props => props.theme === 'primary' ? 'unset' : theme.customColors.lightBlue
        },
    }
}))(Select);

export const StyledFormControl = withStyles((theme) => ({
    root: {
        margin: props => props.error ? '10px 0px' : '10px 0px',
        border: '0px',
        '& fieldset':{
            border: props => props.theme === 'secondary' ? 'none' : null
        },
        '& svg': {
            color: props => props.theme === 'secondary' ? theme.palette.primary.main : null
        }
    }
}))(FormControl);

