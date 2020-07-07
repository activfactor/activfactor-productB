import { withStyles, AppBar, Toolbar, Box } from '@material-ui/core';

export const StyledAppBar = withStyles((theme) => ({
    root: {
        height: theme.spacing(9)
    },
    colorPrimary: {
        backgroundColor: theme.palette.primary.contrastText,
        boxShadow: theme.customShadows[0]
    }
}))(AppBar);

export const StyledToolBar = withStyles(({
    root: {
        maxWidth: '1440px',
        margin: 'auto',
        width: '90%'
    }
}))(Toolbar);

export const NavigationsWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '0px 30px'
    }
}))(Box);

export const DesktopNavigationContainer = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}))(Box);

export const MobileNavigationContainer = withStyles((theme) => ({
    root: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
}))(Box);