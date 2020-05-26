import { Box, withStyles } from '@material-ui/core';

export const Wrapper2X1 = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}))(Box);