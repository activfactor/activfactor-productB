import React, { Component } from "react"; 
import Button from '../../../UI/Button';
import classes from './AuthButtons.module.scss';
import { connect } from 'react-redux';
import { signOut } from '../../../../actions/index';
import { Link } from 'react-router-dom';

class AuthButtons extends Component {
  renderAuthButtons = () => {
    if (!this.props.authenticated){
      return (
        <div className={classes.container}>
          <Button to="/login" nameOfClass={classes.button}>Login</Button>
          <span className={classes.button}>|</span>
          <Button to="/signup" nameOfClass={classes.button}>Sign up</Button>
        </div>
      );
    } else {
      return (
        <div className={classes.container}>
          <Link className={classes.button} to="#" onClick={this.props.signOut}>Logout</Link>
        </div>
      );
    }
  }


  render() {
    return (
      this.renderAuthButtons()
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, {signOut})(AuthButtons);
