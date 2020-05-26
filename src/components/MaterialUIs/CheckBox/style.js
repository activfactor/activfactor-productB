import { Checkbox, withStyles, FormControlLabel } from '@material-ui/core';
import { Help } from '@material-ui/icons';

export const StyledCheckbox = withStyles((theme) => ({
    root: {
        padding: '5px',
        color: theme.palette.text.light,
        '& svg': {
            width: '30px',
            height: '30px',
        },
    },
    checked: {
        '& svg': {
            color: theme.palette.primary.light,
        },
    }
}))(Checkbox);

export const StyledFormControlLabel = withStyles((theme) => ({
    root: {
        margin: props => props.margin ? props.margin : 0,
        color: theme.palette.text.secondary,
        '& .MuiTypography-body1': {
            marginLeft: '10px'
        }
    }
}))(FormControlLabel);

export const HelpIcon = withStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(1)
    },
    colorPrimary: {
        color: theme.palette.primary.light
    }
}))(Help);