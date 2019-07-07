import React, { Component } from "react";
import SignupForm from "./SignupForm/SignupForm";
import SignupSidebar from "./SignupSidebar/SignupSidebar";
import classes from './Signup.module.scss';

class Signup extends Component {
  render() {
    return (
      <section className={classes.section}>
        <div className={classes.container}>
        <div className={classes.sections}>
          <SignupForm />
          <SignupSidebar />
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
