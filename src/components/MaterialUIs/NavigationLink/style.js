import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    navigationLinkWrapper: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '12px 24px'
        }
    },
    navigationLink: {
        wordWrap: 'nowrap',
        color: theme.palette.text.link,
        fontWeight: 600,
        fontSize: 13,
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
    activeNavigationLink: {
        color: theme.palette.primary.light,
    }
}));