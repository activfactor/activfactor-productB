import { Tooltip, withStyles } from '@material-ui/core';

export const StyledToolTip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.customColors.backgroundBlue,
        color: theme.palette.primary.light,
        padding: theme.spacing(1),
        fontSize: '12px',
        maxWidth: '220px'
    },
    arrow: {
        color: theme.customColors.backgroundBlue
    }
}))(Tooltip);