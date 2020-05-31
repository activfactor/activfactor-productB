import { Box, withStyles } from '@material-ui/core';

export const Grid = withStyles((theme) => ({
    root: {
        display: 'grid',
        gridColumnGap: ({ygap}) => ygap ? ygap : '15px',
        gridRowGap: ({xgap}) => xgap ? xgap : '15px',
        gridTemplateColumns: ({repeat}) => repeat ? `repeat(${repeat}, 1fr)` : 'repeat(3, 1fr)',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr) !important'
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: '1fr !important'
        }
    }
}))(Box);