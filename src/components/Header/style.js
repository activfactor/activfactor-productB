import { AppBar, Toolbar, withStyles } from '@material-ui/core';

export const HeaderWrapper = withStyles((theme) => ({
    root: {
        height: 180
    }
}))(AppBar);