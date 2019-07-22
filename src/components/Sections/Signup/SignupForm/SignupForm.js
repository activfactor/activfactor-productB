import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import classes from './SignupForm.module.scss';
import Link from '../../../UI/Link';

let styleBorder = "none";
class Signup extends Component {
  onSubmit(){
    console.log("Done");
  }

  renderInput = ({meta, input, type, placeholder}) => {
    // this.renderError(meta);
    return (
        <div>
            {/* {this.renderError(meta, input, type, placeholder)} */}
            <input {...input} autoComplete='off' type={type} placeholder={placeholder} className={classes.input} style={{border:styleBorder}} />
        </div>
    );
}

  render() {
    return (
      
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={classes.form}>
          <p className={classes.header}>Sign up for free</p>
          <div className={classes.elements}>
          <p className={classes.subheader}>Get access to a wealth trading platform by just entering your Email and Password!</p>
            <div className={classes.firstname}>
            <Field  name="firstname" component={this.renderInput} placeholder="First Name" />
            </div>
            <div className={classes.lastname}>
            <Field className="signup--form__lastname" name="lastname" component={this.renderInput} placeholder="Last Name" />
            </div>
            <div className={classes.email}>
            <Field className="signup--form__email" name="email" component={this.renderInput} placeholder="Email Address" />
            </div>
            <div className={classes.password}>
            <Field className="signup--form__password" name="password" type="password" component={this.renderInput} placeholder="Password" />
            </div>
            <div className={classes.buttons}>
              <input className={classes.submit} type="submit" value="Sign up" />
              <span>Already have an account?  <Link to="/login">Login</Link></span>
            </div>
          </div>
        </form>
    );
  }
}

export default reduxForm({
  form:'signupForm'
})(Signup);
