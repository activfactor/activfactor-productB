import { Box, withStyles } from '@material-ui/core';

export const Container = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1440px',
        width: '90%',
        margin: '0px auto',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
    }
}))(Box);