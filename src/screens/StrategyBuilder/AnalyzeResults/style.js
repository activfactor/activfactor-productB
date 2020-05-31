import { Box, withStyles, Typography } from '@material-ui/core';

export const HeaderWrapper = withStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    }
}))(Box);

export const Header = withStyles((theme) => ({
    root: {
        fontSize: '16px',
        color: theme.palette.common.black,
        fontWeight: 500,
        marginBottom: theme.spacing(1) 
    }
}))(Typography);

export const Title = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
        fontWeight: 400,
    }
}))(Typography);

export const TableWrapper = withStyles(({
    root: {
        width: '98.5%',
    }
}))(Box);

export const ButtonWrapper = withStyles((theme) => ({
    root: {
        minWidth: '260px',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }
}))(Box);