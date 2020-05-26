import { Box, withStyles, Typography } from "@material-ui/core";

export const Container = withStyles({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})(Box);

export const StepWrapper = withStyles((theme) => ({
  root: {
    flex: 1,
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderColor: (props) =>
      props.status === "done"
        ? theme.palette.primary.light
        : props.status === "active"
        ? theme.palette.primary.main
        : theme.palette.text.secondary,
    color: (props) =>
      props.status === "done"
        ? theme.palette.primary.light
        : props.status === "active"
        ? theme.palette.primary.main
        : theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: "18px",
    [theme.breakpoints.down('sm')]: {
        fontSize: "14px"
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: "12px"
    },
    textAlign: "center",
    paddingBottom: theme.spacing(3),
  },
}))(Box);
