import { withStyles, makeStyles, TableHead, Box } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: (props) => props.minWidth,
    boxShadow: props => props.noshadow ? theme.shadows[0] : theme.customShadows[1],
  },
}));

export const TableWrapper = withStyles((theme) => ({
  root: {
    boxShadow: props => props.noshadow ? theme.shadows[0] : theme.customShadows[1],
    borderRadius: (props) =>
      props.theme === "secondary" ? theme.shape.borderRadius : 0,
    maxHeight: (props) => (props.maxheight ? props.maxheight : "100%"),
  },
}))(Box);

export const StyledTableHead = withStyles((theme) => ({
  root: {
    backgroundColor: (props) =>
      props.theme === "secondary"
        ? theme.palette.primary.light
        : theme.palette.common.white,
    color: (props) =>
      props.theme === "secondary"
        ? theme.palette.common.white
        : theme.palette.text.primary,
  },
}))(TableHead);
