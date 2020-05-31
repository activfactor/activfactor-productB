import { makeStyles, withStyles, Slider, Box } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '38px 0px'
  },
}));

export const StyledSlider = withStyles((theme) => ({
  track: {
    color: theme.palette.primary.light,
    height: 4,
    borderRadius: theme.shape.borderRadius
  },
  markLabel: {
    color: theme.palette.text.primary,
    fontSize: 14,
  },
  mark: {
    display: 'none'
  },
  rail: {
    color: theme.palette.text.primary,
    height: 4,
    borderRadius: theme.shape.borderRadius
  },
  thumb: {
    color: theme.palette.common.white,
    boxShadow: theme.customShadows[2],
    width: 25,
    height: 25,
    transform: 'translateY(-6px)'
  },
  valueLabel: {
    top: -30,
    left: -3,
    '& *': {
      background: theme.customColors.backgroundBlue,
      color: theme.palette.primary.light,
    },
  },
  markLabelActive: {
      color: theme.palette.primary.light
  }
}))(Slider);

export const TopWrapper = withStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 'calc(100% + 6px)'
    },
})(Box)