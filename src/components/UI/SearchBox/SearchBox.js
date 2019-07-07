import React,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './SearchBox.module.scss';

class SearchBox extends Component {
    render(){
        return (
            <div className={classes.container}>
                <Field name="search" component="input" type="text" placeholder="       Search" />
            </div>
        );
    }
    
}

export default reduxForm({
    form: "searchForm"
})(SearchBox);