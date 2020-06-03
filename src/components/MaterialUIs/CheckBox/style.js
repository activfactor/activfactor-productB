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
            fontSize: '16px',
            marginLeft: '10px',
            [theme.breakpoints.down('xs')]: {
                marginLeft: '0px',
                fontSize: '13px',
            }
        }
    }
}))(FormControlLabel);

export const HelpIcon = withStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down('xs')]:{
            marginLeft: '3px'
        }
    },
    colorPrimary: {
        color: theme.palette.primary.light
    }
}))(Help);