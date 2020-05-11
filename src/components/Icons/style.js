import { SvgIcon, withStyles } from '@material-ui/core';

export const SVG = withStyles((theme) => ({
         root: {
           cursor: (props) => (props.withPointer ? "pointer" : "unset"),
           width: (props) =>
             props.fontSize === "custom"
               ? props.width
               : props.fontSize === "small"
               ? 50
               : props.fontSize === "large"
               ? 80
               : 60,
           height: (props) =>
             props.fontSize === "custom"
               ? props.height
               : props.fontSize === "small"
               ? 40
               : props.fontSize === "large"
               ? 70
               : 50,
         },
         colorPrimary: {
           color: theme.palette.primary.light,
         },
         colorSecondary: {
           color: theme.palette.secondary.light,
         },
       }))(SvgIcon);