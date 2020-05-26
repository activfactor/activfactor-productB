import { Box, withStyles } from '@material-ui/core';

export const ButtonWrapper = withStyles((theme) => ({
    root: {
        maxWidth: '200px',
        marginLeft: '10px',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            marginLeft: '10px',
            marginBottom: '10px'
        }
    }
}))(Box);