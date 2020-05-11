import { IconButton, withStyles } from '@material-ui/core';

export const StyledIconButton = withStyles((theme) => ({
    root: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
        '&:focus': {
            outline: 'none'
        }
    }
}))(IconButton);