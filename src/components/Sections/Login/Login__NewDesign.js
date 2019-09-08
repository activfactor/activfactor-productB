import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {signIn_A, resetSignInError, updateLocation } from '../../../actions';
import history from '../../../history';
import Link from '../../UI/Link';
import Logo from '../../../assets/img/logo_auth.png';
import BackgroundUrl from '../../../assets/img/login_background.jpg';


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
                // email: formValues.username,
                // password: formValues.password
                email: "adam_smith14787@gnail.con",
                password: "123456789"
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
          <div className="auth__container">
              <div className="auth__wrapper">
                  <div className="login__container">
                      <div className="login__wrapper">

                          <div className="login__logo-container">
                              <div className="_logo"><img src={Logo} alt="logo auth"/></div>
                          </div>

                          <div className="title__h3">The New Face of Investment</div>

                          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="_login-form">

                              <Field name="username" component={this.renderInput} placeholder="Email Address"  />
                              <Field name="password" type="password" component={this.renderInput} placeholder="Password" />
                              <div>{this.AuthError()}</div>

                              <div className="_links-container">
                                  <div className="checkbox--item">
                                      <label>
                                          <input
                                            type="checkbox"
                                            value={this.props.value}
                                            onChange={this.props.onChange}
                                            checked={this.state.checked}
                                            onClick={this.onCheckHandler}
                                          />
                                          <i />
                                          <span className="_text-label">Remember me</span>
                                      </label>
                                  </div>
                                  <div className="_link">
                                      <Link to="/reset">Forgot Password?</Link>
                                  </div>
                              </div>

                              <div className="_btn-submit">{this.renderSubmit(this.state.isSpinner)}</div>



                              {/*<div className="_btn-text-container">Don't have an account? <span><Link to="/signup">Sign up</Link></span></div>*/}
                          </form>

                      </div>
                  </div>

                  <div className="auth__screen-image" style={{backgroundImage: `url(${BackgroundUrl})`}}></div>

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