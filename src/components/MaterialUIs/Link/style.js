import { Link, withStyles } from '@material-ui/core';

export const StyledLink = withStyles((theme) => ({
    root: {
        fontSize: props => props.fontSize ? props.fontSize : '14px',
        alignSelf: props => props.align ? props.align : 'center',
        color: props => props.theme === 'secondary' ? 'inherit' : theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.light
        }
    }
}))(Link);