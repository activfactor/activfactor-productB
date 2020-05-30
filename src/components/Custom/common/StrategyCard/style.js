import { Typography, withStyles, TableCell, TableRow, Box } from '@material-ui/core';
import { Card } from 'components/MaterialUIs';

export const TickersNumber = withStyles((theme) => ({
    root: {
        fontSize: '12px',
        color: theme.palette.text.secondary,
        fontWeight: 500,
        marginBottom: '15px',
        marginTop: '15px'
    }
}))(Typography);

export const RebalancingWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    }
}))(Box);

export const Rebalancing = withStyles((theme) => ({
    root: {
        fontSize: '13px',
        color: theme.palette.common.black,
        fontWeight: 500,
        marginBottom: '10px',
        marginRight: '3px'
    }
}))(Typography);

export const StyledTableCell = withStyles((theme) => ({
    body: {
        color: props => props.color ? props.color : theme.palette.common.black,
        fontWeight: 500,
        fontSize: '13px'
    },
    head: {
        color: theme.palette.common.black,
        fontWeight: 500,
        fontSize: '13px'
    }
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({

}))(TableRow);

export const DescriptionWrapper = withStyles((theme) => ({
    root: {
        padding: '18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.down('xs')]: {
            padding: '15px'
        }
    }
}))(Box);

export const StyledCard = withStyles((theme) => ({
    root: {
        width: '400px',
        margin: '10px',
        [theme.breakpoints.down('sm')]: {
            minWidth: 'unset',
            margin: 'unset'
        }
    }
}))(Card);

