import { Box, withStyles } from '@material-ui/core';

export const Container = withStyles(({
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))(Box);