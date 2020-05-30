import { makeStyles, Box, withStyles, Typography } from '@material-ui/core';

export const useStyles = makeStyles(({
    shrink: {
        transform: 'translate(14px, -5px) scale(0.75)',
    },
    root: {
        transform: 'translate(14px, 12px) scale(1)'
    }
}));

export const Wrapper = withStyles((theme) => ({
    root: {
        width: '300px',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}))(Box);

export const OptionHighlight = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        color: theme.palette.primary.main,
        fontWeight: '500'
    }
}))(Typography);

export const OptionText = withStyles((theme) => ({
    root: {
        fontSize: '14px',
        margin: '0px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }
}))(Box);