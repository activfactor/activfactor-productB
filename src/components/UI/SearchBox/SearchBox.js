import React,{ Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBox extends Component {
    render(){
        return (
            <div className="input-group search-input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
                </div>

                <Field name="search" component="input" type="text" placeholder="Search" className="form-control" />
            </div>

        );
    }
    
}

export default reduxForm({
    form: "searchForm"
})(SearchBox);