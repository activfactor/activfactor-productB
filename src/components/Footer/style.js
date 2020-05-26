import { Box, withStyles, Typography } from '@material-ui/core';

export const Container = withStyles(({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 'auto'
    }
}))(Box);
export const BottomWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        justifyContent:'center',
        alignItems: 'center',
        color: theme.palette.common.white,
        fontSize: '12px',
        fontWeight: 500,
        backgroundColor: theme.palette.primary.light
    }
}))(Box);

export const TopWrapper = withStyles((theme) => ({
    root: {
        backgroundColor: theme.customColors.footer,
        padding: theme.spacing(3)
    }
}))(Box);

export const LinksWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: theme.spacing(2),
        borderBottomWidth: '1px',
        borderBottomColor: theme.customColors.footerDescription,
        borderBottomStyle: 'solid',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    }
}))(Box);

export const DescriptionWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(3),
        color: theme.customColors.footerDescription,
        fontSize: '12px',
        fontWeight: 400,
        textAlign: 'center'
    }
}))(Box);