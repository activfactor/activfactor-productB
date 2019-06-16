import React, { Component } from "react";
import SignupForm from "./SignupForm";
import SignupSidebar from "./SignupSidebar";

class Signup extends Component {
  render() {
    return (
      <section className="section--signup__container">
        <div className="signup--container">
        <div className="Signup--sections__container">
          <SignupForm />
          <SignupSidebar />
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
