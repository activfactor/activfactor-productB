import { Checkbox, withStyles } from '@material-ui/core';

export const StyledCheckbox = withStyles((theme) => ({
    root: {
        width: '23px',
        height: '23px',
        color: theme.palette.text.light,
        '& svg': {
            width: '23px',
            height: '23px'
        },
    }
}))(Checkbox);