import React from 'react';
import CheckboxesTags from './CheckboxesTags';
import { Router } from 'react-router-dom';
import history from '../../../history';
import ThemeProvider from '../../../Theme/MaterialTheme';

export default {
    title: 'Autocomplete',
}

export const SimpleAutocomplete = () => {
    const options = [{title: 'noubar', value: 'NOUBAR'},{title: 'maya', value: 'MAYA'}];
    return (
        <Router history={history}>
            <ThemeProvider>
                <CheckboxesTags defaultValues={options} options={options} onChange={(values) => console.log(values)}/>
            </ThemeProvider>
        </Router>
    )
}