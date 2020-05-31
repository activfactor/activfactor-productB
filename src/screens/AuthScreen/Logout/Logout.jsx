import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from 'store/actions/auth.actions';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const Logout = () => {
    const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
        backdrop: {
          zIndex: theme.zIndex.drawer + 1,
          color: '#fff',
        },
    }));

    const classes = useStyles();
    useEffect(() => {
        dispatch(signOut())
    } , [dispatch]);
    return (
        <Backdrop open={true} className={classes.backdrop} transitionDuration={100}>
            <CircularProgress color="primary"/>
        </Backdrop>
    );
};

export default Logout;