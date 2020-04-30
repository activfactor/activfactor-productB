import { SvgIcon, withStyles } from '@material-ui/core';

export const SVG = withStyles((theme) => ({
    colorPrimary: {
        color: theme.palette.primary.light
    },
    colorSecondary: {
        color: theme.palette.secondary.light
    },
    fontSizeSmall: {
        height: 40,
        width: 50
    },
    fontSizeLarge: {
        height: 60,
        width: 70
    }
}))(SvgIcon);