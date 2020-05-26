import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, withStyles } from '@material-ui/core';

export const StyledExpansionPanel = withStyles((theme) => ({
    root: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.customShadows[1],
    }
}))(ExpansionPanel);

export const StyledDetails = withStyles((theme) => ({
    root: {
        padding: '0px'
    }
}))(ExpansionPanelDetails);

export const StyledSummary = withStyles((theme) => ({
    root: {
        backgroundColor: props => props.theme === 'default' ? theme.palette.common.white : theme.palette.primary[props.theme],
        color: theme.palette.common.white,
        margin: '0px',
        boxShadow: theme.customShadows[1],
        borderRadius: '3px'
    }
}))(ExpansionPanelSummary);