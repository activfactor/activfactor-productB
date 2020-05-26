import { Card, withStyles } from '@material-ui/core';

export const StyledCard = withStyles((theme) => ({
    root: {
        boxShadow: theme.customShadows[1],
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
    }
}))(Card);