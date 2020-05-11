import { Link, withStyles } from '@material-ui/core';

export const StyledLink = withStyles((theme) => ({
    root: {
        fontSize: props => props.fontSize ? props.fontSize : '14px',
        alignSelf: 'center'
    }
}))(Link);