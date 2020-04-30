import { withStyles, AppBar, Toolbar, makeStyles } from '@material-ui/core';

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
        maxWidth: '1200px',
        margin: 'auto',
        width: '100%'
    }
}))(Toolbar);

export const useStyles = makeStyles((theme) => ({
    NavigationLinkWrapper: {
        '& a':{
            color: theme.palette.text.link,
            'text-decoration': 'none'
        }
    }
}))