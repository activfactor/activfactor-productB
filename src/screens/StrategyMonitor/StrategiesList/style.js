import { withStyles, Box } from '@material-ui/core';
export const HeadersWrapper = withStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& h2':{
            fontSize: '18px',
            fontWeight: 600,
            color: theme.palette.common.black,
            marginBottom: '10px'
        },
        '& p': {
            fontSize: '13px',
            color: theme.palette.text.secondary,
            fontWeight: 500
        }
    }
}))(Box);