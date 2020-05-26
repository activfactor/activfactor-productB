import {
  InputLabel,
  Select,
  withStyles,
  FormHelperText,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";

export const StyledInputLabel = withStyles((theme) => ({
  outlined: {
    color: theme.palette.text.primary,
    backgroundColor: theme.customColors.white,
    padding: "0px 5px",
  },
}))(InputLabel);

export const StyledFormHelperText = withStyles((theme) => ({
  error: {
    color: theme.palette.primary.dark,
  },
}))(FormHelperText);

export const StyledSelect = withStyles((theme) => ({
  root: {
    color: (props) =>
      props.theme === "primary"
        ? theme.customColors.black
        : props.theme === "default"
        ? theme.palette.text.primary
        : theme.palette.primary.main,
    backgroundColor: (props) =>
      props.theme === "primary"
        ? "unset"
        : props.theme === "default"
        ? theme.palette.background.default
        : theme.customColors.lightBlue,
    "&:focus": {
      backgroundColor: (props) =>
        props.theme === "primary"
          ? "unset"
          : props.theme === "default"
          ? theme.palette.background.default
          : theme.customColors.lightBlue,
    },
    padding: (props) => (props.padding ? props.padding : "18px 32px 18px 14px"),
  },
}))(Select);

export const StyledFormControl = withStyles((theme) => ({
  root: {
    margin: (props) => (props.error ? "10px 0px" : "10px 0px"),
    "& svg": {
      color: (props) =>
        props.theme === "secondary" ? theme.palette.primary.main : null,
    },
  },
}))(FormControl);

export const StyledOutlinedInput = withStyles((theme) => ({
  notchedOutline: {
    border: ({ theme: propsTheme }) =>
      propsTheme === "default"
        ? "none"
        : propsTheme === "secondary"
        ? "inherit"
        : `1px solid #c4c4c4`,
  },
}))(OutlinedInput);
