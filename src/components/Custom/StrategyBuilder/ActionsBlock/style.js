import { Box, withStyles, Typography } from '@material-ui/core';

export const Container = withStyles(({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px'
    }
}))(Box);

export const HeaderWrapper = withStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(2),
        borderBottomWidth: '2px',
        borderBottomColor: theme.palette.background.default,
        borderBottomStyle: 'solid',
        marginBottom: theme.spacing(2)
    }
}))(Box);

export const Header = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        fontWeight: 500,
        color: theme.palette.common.black
    }
}))(Typography);