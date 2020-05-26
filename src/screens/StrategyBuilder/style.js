import { Box,Typography, withStyles } from '@material-ui/core';

export const Container = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.customShadows[0],
        padding: theme.spacing(3)
    }
}))(Box);

export const Date = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        fontWeight: 500,
        color: theme.palette.text.secondary,
        marginLeft: '5px',
        alignSelf: 'center'
    }
}))(Typography);
