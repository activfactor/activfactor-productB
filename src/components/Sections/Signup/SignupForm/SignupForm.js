import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import Link from '../../../UI/Link';

class Signup extends Component {
    onSubmit() {
        console.log("Done");
    }

    renderInput = ({meta, input, type, placeholder}) => {
        // this.renderError(meta);
        return (
            <div className="form-group">
                {/* {this.renderError(meta, input, type, placeholder)} */}
                <input {...input} autoComplete='off' type={type} placeholder={placeholder} className="form-control" />
            </div>
        );
    }

    render() {
        return (
            <div className="_signup-form">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                    <div className="h4">Sign up for free</div>
                    <p className="text-medium">Get access to a wealth trading platform by just entering your Email and Password!</p>

                    <div className="_form-wrapper">

                        <div className="_name-container">
                            <Field name="firstname" component={this.renderInput} placeholder="First Name"/>

                            <Field name="lastname" component={this.renderInput} placeholder="Last Name"/>
                        </div>

                        <Field name="email" component={this.renderInput} placeholder="Email Address"/>

                        <Field name="password" type="password" component={this.renderInput} placeholder="Password"/>

                        <div className="_btn-container">
                            <input className="btn btn-primary" type="submit" value="Sign up"/>

                            <div className="_btn-text-container">
                                Already have an account?  <span><Link to="/login">Login</Link></span>
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}

export default reduxForm({
  form: "signupForm"
})(Signup);
