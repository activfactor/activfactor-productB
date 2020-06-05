import { Card, CardHeader, CardContent, withStyles } from '@material-ui/core';

export const StyledCard = withStyles((theme) => ({
    root: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.customShadows[0],
        height: '100%',
        width: ({width}) => width ? width : '100%',
        margin: ({margin}) => margin ? margin : 'auto',
        [theme.breakpoints.down('md')]: {
            width:  '100% !important',
            margin: props => props.margin ? props.margin : '0px !important'
        }
    }
}))(Card);

export const StyledHeader = withStyles((theme) => ({
    title: {
        color: theme.palette.common.black,
        fontWeight: 500,
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }
    }
}))(CardHeader);

export const StyledCardContent = withStyles((theme) => ({
    root: {
        borderTopWidth: '2px',
        borderTopColor: theme.palette.background.default,
        borderTopStyle: 'solid',
        padding: props => props.padding ? props.padding : '16px 16px 24px',
        '&:last-child':{
            paddingBottom: props => props.padding ? props.padding : '24px'
        }
    }
}))(CardContent);