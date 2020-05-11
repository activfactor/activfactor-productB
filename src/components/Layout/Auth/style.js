import { Box, withStyles, Typography } from '@material-ui/core';

export const IconWrapper = withStyles(({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '12px'
    }
}))(Box);

export const FullWidthWrapper = withStyles((theme) => ({
    root: {
        width: '85%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            marginTop: '50px' 
        }
    }
}))(Box);

export const Container = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 0 50%',
        overflow: 'hidden',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.customColors.white,
        boxShadow: theme.customShadows[1]
    }
}))(Box);

export const ImageWrapper = withStyles((theme) => ({
    root: {
        flex: 1,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}))(Box);

export const ContentContainer = withStyles((theme) => ({
    root: {
        flex: 1,
        display: 'flex'
    }
}))(Box);