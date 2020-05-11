import { makeStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    searchIcon: {
        padding: theme.spacing(1, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        color: theme.palette.text.primary,
      },
      inputRoot: {
        minWidth: '180px',
        backgroundColor: theme.palette.text.secondary,
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius
      },
      inputInput: {
        color: theme.palette.text.primary,
        padding: '10px 20px',
        borderRadius: theme.shape.borderRadius,
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '180px',
    }
}))