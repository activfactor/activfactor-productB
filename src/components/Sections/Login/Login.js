import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {signIn_A, resetSignInError } from '../../../actions';
import { Link } from 'react-router-dom';
import classes from './Login.module.scss';
import Spinner from '../../UI/Spinner/SpinnerButton';

let styleBorder = "none";

class Login extends Component{
    state = {isSpinner:false}


    onSubmit = formValues => {
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
                <input className={classes.submit} type="submit" value="Login" />
            );
        } else {
            return(
                <React.Fragment>
                    <input className={classes.submit} type="submit" value='' />
                    <Spinner color='white' nameOfClass={classes.spinner}/>
                </React.Fragment>
            );
        }
    }

    renderError({ error, touched}){
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
                <input {...input} autoComplete='off' type={type} placeholder={placeholder} className={classes.input} style={{border:styleBorder}} />
            </div>
        );
    }

    AuthError = () => {
        if (this.props.errorMessage){

            return <div className={classes.error}>{this.props.errorMessage}</div>
        }
    }

    render(){
        return(
            <section className={classes.section}>
                <div className={classes.container}>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={classes.form}>
                        <h4 className={classes.header}>Login</h4>
                        <Field name="username" component={this.renderInput} placeholder="Email Address"  />
                        <Field name="password" type="password" component={this.renderInput} placeholder="Password" />
                        {this.AuthError()}
                        <div className={classes.buttons}>
                            <span>
                                {this.renderSubmit(this.state.isSpinner)}
                            </span>
                            <Link to="/reset">Forgot Password?</Link>
                        </div>
                        <span className={classes.register}>Don't have an account? <Link to="/signup">Sign up</Link></span>
                    </form>
                    <div></div>
                    <div></div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return { 
        token: state.auth.token,
        uername: state.auth.username,
        errorMessage: state.auth.errorMessage
    }
}
export default compose(connect(mapStateToProps, {signIn_A,resetSignInError}), reduxForm({ form: 'loginForm'}))(Login);