import React, { Component } from "react"; 
import Button from '../../../UI/Button';
import classes from './AuthButtons.module.scss';

class AuthButtons extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Button to="/login" nameOfClass={classes.button}>Login</Button>
        <span className={classes.button}>|</span>
        <Button to="/signup" nameOfClass={classes.button}>Sign up</Button>
      </div>
    );
  }
}

export default AuthButtons;
