import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {signIn_A, resetSignInError, updateLocation } from '../../../actions';
import history from '../../../history';
import Link from '../../UI/Link';

let styleBorder = "none";

class Login extends Component{
    state = {isSpinner:false}

    componentDidMount(){
        if (this.props.authenticated){
            history.push('/dashboard');
            this.props.updateLocation('/dashboard');
        }
    }
    
    onSubmit = async formValues => {
        if (formValues.username && formValues.password){
            this.props.resetSignInError();
            this.setState({isSpinner:true});
            const data = {
                email: formValues.username,
                password: formValues.password
            }
            this.props.signIn_A(data);

        } else {
            this.validate(formValues);
        }
    }

    renderSubmit = isinput => {
        if (!isinput || this.props.errorMessage){
            return (
                <input className={`btn btn-primary`} type="submit" value="Login" />
            );
        } else {
            return(
                <React.Fragment>
                    <button className={`btn btn-primary btn__login`} type="submit">
                        Login <span className="spinner-border spinner-border-sm ml-2" role="status" aria-hidden="true"></span>
                    </button>
                </React.Fragment>
            );
        }
    }

    // renderError({ error, touched}){
    //     if (touched && error){
    //         styleBorder = "4px solid #a30808";
    //     } else {
    //         styleBorder = "none";
    //     }
    // }

    renderError({ error, touched}){
        if (touched && error){
            styleBorder = "is-invalid";
        } else {
            styleBorder = "";
        }
    }

    renderInput = ({meta, input, type, placeholder}) => {
        this.renderError(meta);
        return (
            <div className="form-group">
                <input {...input} autoComplete='off' type={type} placeholder={placeholder} className={`${styleBorder} form-control`} />
            </div>
        );
    }

    AuthError = () => {
        if (this.props.errorMessage){
            return <div className="invalid-feedback">{this.props.errorMessage}</div>
        }
    }

    btnBtnLink = "btn btn-link";

    render(){
        return(
            <div className="container-fluid">
                <div className="container-authentication col">
                    <div className="form-login_wrapper">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="_login-form">
                            <div className="h4">Login</div>
                            <Field name="username" component={this.renderInput} placeholder="Email Address"  />
                            <Field name="password" type="password" component={this.renderInput} placeholder="Password" />

                            {this.AuthError()}

                            <div className="_btn-container">
                                {this.renderSubmit(this.state.isSpinner)}
                                <span>
                                    <Link to="/reset">Forgot Password?</Link>
                                </span>
                            </div>

                            <div className="_btn-text-container">Don't have an account? <span><Link to="/signup">Sign up</Link></span></div>
                        </form>
                        <div></div>
                        <div></div>
                    </div>
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
        token: state.auth.token,
        uername: state.auth.username,
        errorMessage: state.auth.errorMessage,
        authenticated: state.auth.authenticated
    }
}
export default compose(connect(mapStateToProps, {signIn_A,resetSignInError, updateLocation}), reduxForm({ form: 'loginForm',validate}))(Login);