import { withStyles, Button } from "@material-ui/core";

export const StyledButton = withStyles((theme) => ({
  root: {
    outline: 'none !important',
    maxHeight: props => props.maxheight ? props.maxheight : "unset",
    height: props => props.height ? props.height : "100%",
    margin: props => props.margin ? props.margin : '2px',
    overflow: "hidden",
    borderTopWidth: "6px",
    textAlign: 'left',
    borderTopStyle: "solid",
    borderColor: (props) =>
      props.colortheme && props.colordarkness
        ? theme.palette[props.colortheme][props.colordarkness]
        : theme.palette.primary.light,
    backgroundColor: (props) =>
      props.active === 'true' && props.colortheme && props.colordarkness
        ? theme.palette[props.colortheme][props.colordarkness]
        : props.active === 'true'
        ? theme.palette.primary.light
        : theme.palette.background.default,
    fontWeight: 600,
    width: (props) => (props.fullWidth ? "100%" : "unset"),
    maxWidth: props => props.maxwidth ? props.maxwidth : '165px',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[0],
    textTransform: "unset",
    "&:hover": {
      backgroundColor: (props) =>
        props.colortheme && props.colordarkness
          ? theme.palette[props.colortheme][props.colordarkness]
          : theme.palette.primary.light,
      boxShadow: theme.shadows[0],
      "& span": {
        "&:first-child": {
          color: theme.palette.common.white,
          fontSize: "13px",
          fontWeight: 600,
        },
        "&:last-child": {
          color: theme.palette.common.white,
          fontSize: "11px",
          fontWeight: 400,
        },
      },
    },
    "& span": {
      "&:first-child": {
        color: props => props.active === 'true' ? theme.palette.common.white : theme.palette.text.primary,
        fontSize: "13px",
        fontWeight: 600,
        marginBottom: '10px'
      },
      "&:last-child": {
        color: props => props.active === 'true' ? theme.palette.common.white : theme.palette.text.secondary,
        fontSize: "11px",
        fontWeight: 400,
      },
    },
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    textAlign: 'left'
  }
}))(Button);
