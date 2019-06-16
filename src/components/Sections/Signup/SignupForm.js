import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

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
            <input {...input} autoComplete='off' type={type} placeholder={placeholder} className="form--control" style={{border:styleBorder}} />
        </div>
    );
}

  render() {
    return (
      
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="signup--form">
          <p className="signup--form__header">Sign up for free</p>
          <div className="signup--form__contentcontainer">
          <p className="signup--form__subheader">Get access to a wealth trading platform by just entering your Email and Password!</p>
            <div className="signup--form__firstname">
            <Field  name="firstname" component={this.renderInput} placeholder="First Name" />
            </div>
            <div className="signup--form__lastname">
            <Field className="signup--form__lastname" name="lastname" component={this.renderInput} placeholder="Last Name" />
            </div>
            <div className="signup--form__email">
            <Field className="signup--form__email" name="email" component={this.renderInput} placeholder="Email Address" />
            </div>
            <div className="signup--form__password">
            <Field className="signup--form__password" name="password" type="password" component={this.renderInput} placeholder="Password" />
            </div>
            <div className="signup--buttons__container">
              <input className="signup--buttons__submit" type="submit" value="Sign up" />
              <span className="signup--form__login">Already have an account?  <Link to="/login">Login</Link></span>
            </div>
          </div>
        </form>
    );
  }
}

export default reduxForm({
  form:'signupForm'
})(Signup);
