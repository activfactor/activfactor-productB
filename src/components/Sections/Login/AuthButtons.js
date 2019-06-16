import React, { Component } from "react"; 
import Button from '../../UI/Button';

class AuthButtons extends Component {
  render() {
    return (
      <div className="auth--buttons__container">
        <Button to="/login" nameOfClass="authnav--container__button">Login</Button>
        <span className="authnav--container__button">|</span>
        <Button to="/signup" nameOfClass="authnav--container__button">Sign up</Button>
      </div>
    );
  }
}

export default AuthButtons;
