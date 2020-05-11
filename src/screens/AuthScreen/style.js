import { Box, withStyles, Typography, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({
    formContainer: {
        width: '100%'
    }
}))

export const ContentWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '60%',
        margin: 'auto',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.down('lg')]: {
            width: '80%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '90%', 
        }
    }
}))(Box);

export const CheckboxWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}))(Box);

export const HText = withStyles((theme) => ({
    root: {
        color: theme.customColors.black,
        marginBottom: theme.spacing(2),
        fontSize: 26,
        fontWeight: 600
    }
}))(Typography);

export const PTextWrapper = withStyles(({
    root: {
        display: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
}))(Box);

export const PText = withStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
        marginTop: theme.spacing(1),
        textAlign: 'center'
    }
}))(Typography);

export const FreeText = withStyles((theme) => ({
    root: {
        color: theme.palette.primary.light,
        textTransform: 'uppercase',
        fontSize: 26,
        fontWeight: 600
    }
}))(Typography);

export const ButtonWrapper = withStyles((theme) => ({
    root: {
        width: '100%',
        margin: '10px 0px'
    }
}))(Box);