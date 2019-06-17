import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';
import { Link } from 'react-router-dom';

let styleBorder = "none";

class Login extends Component{

    onSubmit = formValues => {
        if (formValues.username && formValues.password){
            this.props.signIn(formValues);
        } else {
            this.validate(formValues);
        }
    }

    renderError({ error, touched} , input ,type, placeholder){
        if (touched && error){
            styleBorder = "4px solid #a30808";
        } else {
            styleBorder = "none";
        }
    }

    renderInput = ({meta, input, type, placeholder}) => {
        this.renderError(meta);
        return (
            <div>
                {/* {this.renderError(meta, input, type, placeholder)} */}
                <input {...input} autoComplete='off' type={type} placeholder={placeholder} className="form--control" style={{border:styleBorder}} />
            </div>
        );
    }

    AuthError = () => {
        if (this.props.errorMessage){
            return <div className="form--error">{this.props.errorMessage}</div>
        }
    }

    render(){
        return(
            <div className="section--login__container">
                <div className="login--container">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="login--form">
                        <h4 className="login--form__header">Login</h4>
                        <Field name="username" component={this.renderInput} placeholder="Email Address"  />
                        <Field name="password" type="password" component={this.renderInput} placeholder="Password" />
                        {this.AuthError()}
                        <div className="login--buttons__container">
                            <input className="login--buttons__submit" type="submit" value="Login" />
                            <Link to="/reset">Forgot Password?</Link>
                        </div>
                        <span className="login--form__register">Don't have an account? <Link to="/signup">Sign up</Link></span>
                    </form>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.username){
        errors.username='You must to specify a username'
    } 

    if (!formValues.password){
        errors.password='You must enter a password'
    }

    return errors;
}

const mapStateToProps = state => {
    return { 
        jwtoken: state.auth.jwtoken,
        uername: state.auth.username,
        errorMessage: state.auth.errorMessage
    }
}

// this is the exact same way to wrap the redux form like below 
export default compose(connect(mapStateToProps, {signIn}), reduxForm({ form: 'loginForm' ,validate}))(Login);

// export default connect(mapStateToProps,{signIn})(
//     reduxForm({form: 'loginForm',validate})(Login)
// );