import { Tab, Tabs, withStyles } from '@material-ui/core';

export const StyledPrimaryTabs = withStyles((theme) => ({
    flexContainer: {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main, 
        width: 'fit-content',
        borderRadius: theme.shape.borderRadius
    },
    indicator: {
        width: '100%',
        display: 'none',
    }
}))(Tabs);

export const StyledPrimaryTab = withStyles((theme) => ({
    root: {
        minWidth: props => props.minwidth ? props.minwidth : 'unset',
        maxWidth: 'unset',
        minHeight: 'unset',
        borderRightWidth: '2px',
        borderRightColor: theme.palette.primary.main,
        borderRightStyle: 'solid',
        color: theme.palette.text.primary,
        '&:last-child':{
            border: 'none'
        },
        '&:focus':{
            outline: 'none'
        },
        outline: 'none'
    },
    selected: {
        backgroundColor: theme.palette.primary.main,
        color: `${theme.palette.common.white} !important`,
        transition: 'all 300ms cubic-bezier(0.41, 0.5, 0.2, 1)',
    }
}))(Tab);

export const StyledSecondaryTabs = withStyles((theme) => ({
    flexContainer: {
        boxShadow: theme.customShadows[1],
        backgroundColor: theme.palette.common.white,
        padding: '4px',
        borderRadius: theme.shape.borderRadius,
        width: 'fit-content',
    },
    indicator: {
        width: '100%',
        display: 'none',
    }
}))(Tabs);

export const StyledSecondaryTab = withStyles((theme) => ({
    root: {
        '&:focus':{
            outline: 'none'
        },
    },
    selected: {
        backgroundColor: theme.palette.primary.light,
        color: `${theme.palette.common.white} !important`,
        transition: 'all 300ms cubic-bezier(0.41, 0.5, 0.2, 1)',
        boxShadow: theme.customShadows[0],
        borderRadius: theme.shape.borderRadius,
        outline: 'none'
    }
}))(Tab);