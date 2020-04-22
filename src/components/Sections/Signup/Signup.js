import React, {Component} from "react";
import SignupForm from "./SignupForm/SignupForm";
import SignupSidebar from "./SignupSidebar/SignupSidebar";

// import classes from './Signup.module.scss';

class Signup extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container-authentication col">
                    <div className="form-signup_wrapper">
                        <SignupForm/>
                        <SignupSidebar/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
