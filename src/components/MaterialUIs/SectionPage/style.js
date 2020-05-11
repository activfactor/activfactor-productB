import { Box, withStyles } from '@material-ui/core';

export const Container = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: 'auto',
        padding: theme.spacing(1),
        flex: 1,
        backgroundColor: theme.palette.background
    }
}))(Box);