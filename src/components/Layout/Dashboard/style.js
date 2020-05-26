import { withStyles, Box } from '@material-ui/core';
export const HeaderWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '10px 10px',
        alignItems: 'center',
        minHeight: '60px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }
    }
}))(Box);

export const TableContainer = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: props => props.width ? props.width : '100%',
        margin: props => props.margin ? props.margin : '0px',
    }
}))(Box);
