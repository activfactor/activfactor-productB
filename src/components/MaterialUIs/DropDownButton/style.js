import { ButtonGroup, withStyles } from '@material-ui/core';

export const StyledButtonGroup = withStyles((theme) => ({
    root: {
        boxShadow: theme.shadows[0]
    }
}))(ButtonGroup);