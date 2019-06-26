import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';
import { Link } from 'react-router-dom';
import classes from './Login.module.scss';

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
                <input {...input} autoComplete='off' type={type} placeholder={placeholder} className={classes.input} style={{border:styleBorder}} />
            </div>
        );
    }

    AuthError = () => {
        if (this.props.errorMessage){
            return <div className="error">{this.props.errorMessage}</div>
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
                            <input className={classes.submit} type="submit" value="Login" />
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