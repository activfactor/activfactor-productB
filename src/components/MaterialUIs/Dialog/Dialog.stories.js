import React, {useState} from 'react';
import Dialog from './Dialog';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';
import { Button } from '@material-ui/core';

export default {
    title: 'Dialog',
}

export const SimpleDialog = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const renderActions = () => {
        return (
            <>
            <Button onClick={handleClose} variant="contained" color="primary" fullWidth={true}>
                Disagree
            </Button>
            <Button onClick={handleClose} variant="contained" color="secondary" autoFocus fullWidth={true}>
                Agree
            </Button>
            </>
        )
    }

    const renderTitle = () => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>  
                <div style={{color: 'red', fontSize: '18px', fontWeight: 500, marginBottom: '10px'}}>Error Message</div>
                <div style={{color: 'black' , fontSize: '12px', fontWeight: 400}}>Small details about the error</div>
            </div>
        )
    }
    return (
        <Router history={history}>
            <ThemeProvider>
                <Button onClick={handleOpen} variant="outlined" color="primary">
                    Open the dialog
                </Button>
                <Dialog renderTitle={renderTitle} themeColor="error" fullWidth={true} direction="left" withFullScreen={true} open={open} onClose={handleClose} renderActions={renderActions}>
                    Please use another service
                </Dialog>
            </ThemeProvider>
        </Router>
    )
}