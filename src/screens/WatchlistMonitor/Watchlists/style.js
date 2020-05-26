import { withStyles, Box, Button } from '@material-ui/core';
export const HeadersWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& h2':{
            fontSize: '18px',
            fontWeight: 600,
            color: theme.palette.common.black,
            marginBottom: '10px'
        },
        '& p': {
            fontSize: '13px',
            color: theme.palette.text.secondary,
            fontWeight: 500
        }
    }
}))(Box);

export const AddWatchlisButton = withStyles((theme) => ({
    outlinedPrimary: {
        height: '318px',
        width: '250px',
        borderWidth: '2px',
        borderColor: theme.palette.text.secondary,
        borderStyle: 'dashed',
        color: theme.palette.text.secondary,
        fontSize: '36px',
        margin: '10px',
        outline: 'none',
        '&:hover': {
            borderColor: theme.palette.common.black,
            color: theme.palette.text.primary,
            borderStyle: 'dashed',
            borderWidth: '2px',
            backgroundColor: theme.palette.background.default,
            outline: 'none'
        }
    }
}))(Button);