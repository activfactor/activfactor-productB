import { Box, withStyles } from '@material-ui/core';

export const Container = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: theme.spacing(2)
    }
}))(Box);

export const Wrapper = withStyles(({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    }
}))(Box);

export const HorizontalWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}))(Box);