import React, {useState} from 'react';
import CustomizedSnackbar from './Snackbar';
import { Router } from 'react-router-dom';
import history from '../../../history';
import { Button } from '@material-ui/core';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Snackbar',
  };

export const SimpleSnackbar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Router history={history}>
            <ThemeProvider>
                <Button onClick={handleOpen} variant="outlined" color="primary">
                    Show the snackbar
                </Button>
                <CustomizedSnackbar open={open} onClose={handleClose} severity="error" message="this Factor is not selected" variant="filled" action={
                    <Button variant="contained" color="secondary" onClick={handleClose}>
                        Got it
                    </Button>
                }/>
            </ThemeProvider>
        </Router>
    )
}