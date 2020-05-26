import { Typography, Box, withStyles, Grid, Button } from '@material-ui/core';

export const StyledGrid = withStyles((theme) => ({
    container: {

    },
    item: {

    }
}))(Grid);

export const AddWatchlisButton = withStyles((theme) => ({
    outlinedPrimary: {
        height: '318px',
        width: '250px',
        borderWidth: '2px',
        borderColor: theme.palette.text.secondary,
        borderStyle: 'dashed',
        color: theme.palette.text.secondary,
        fontSize: '36px',
        margin: '10px',
        outline: 'none',
        '&:hover': {
            borderColor: theme.palette.common.black,
            color: theme.palette.text.primary,
            borderStyle: 'dashed',
            borderWidth: '2px',
            backgroundColor: theme.palette.background.default,
            outline: 'none'
        }
    }
}))(Button);