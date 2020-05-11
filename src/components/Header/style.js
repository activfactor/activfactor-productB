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
        maxWidth: '1400px',
        margin: 'auto',
        width: '100%'
    }
}))(Toolbar);

export const NavigationsWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(6),
        }
    }
}))(Box);

export const DesktopNavigationContainer = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))(Box);

export const MobileNavigationContainer = withStyles((theme) => ({
    root: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
}))(Box);