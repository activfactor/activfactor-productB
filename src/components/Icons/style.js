import { SvgIcon, withStyles, Box } from "@material-ui/core";

export const SVG = withStyles((theme) => ({
  root: {
    width: (props) =>
      props.iconsize === "custom"
        ? props.width
        : props.iconsize === "small"
        ? 50
        : props.iconsize === "large"
        ? 80
        : 60,
    height: (props) =>
      props.iconsize === "custom"
        ? props.height
        : props.iconsize === "small"
        ? 40
        : props.iconsize === "large"
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

export const Wrapper = withStyles(({
  root: {
    cursor: (props) => (props.withPointer ? "pointer" : "unset"),
  }
}))(Box);
