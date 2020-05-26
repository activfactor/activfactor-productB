import { Chip, withStyles } from '@material-ui/core';

export const StyledChip = withStyles((theme) => ({
    root: {
        width: props => props.width ? props.width : 'auto',
        fontSize: props => props.fontSize ? props.fontSize : '14px',
        margin: props => props.margin ? props.margin : '0px'
    },
    colorPrimary: {
    backgroundColor: theme.palette.primary.light 
    },
    colorSecondary: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.common.white
    },
    outlinedPrimary: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.light
    },
    outlinedSecondary: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.secondary.light
    }
}))(Chip);