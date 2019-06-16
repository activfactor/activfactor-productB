import React,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBox extends Component {
    render(){
        return (
            <div className="searchbox--input">
                <Field name="search" component="input" type="text" placeholder="       Search" />
            </div>
        );
    }
    
}

export default reduxForm({
    form: "searchForm"
})(SearchBox);