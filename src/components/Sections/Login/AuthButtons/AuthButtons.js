import React, { Component } from "react"; 
import classes from './AuthButtons.module.scss';
import { connect } from 'react-redux';
import { signOut, updateLocation } from '../../../../actions/index';
import Link from '../../../UI/Link';

class AuthButtons extends Component {
  onSignOut = () => {
    this.props.updateLocation('/login');
    this.props.signOut();
  }

  renderAuthButtons = () => {
    if (!this.props.authenticated){
      return (
        <div className={classes.container}>
          <Link nameOfClass={classes.button} to="/login" onClick={() => this.props.updateLocation('/login')}>Login</Link>
          <span className={classes.button}>|</span>
          <Link nameOfClass={classes.button} to="/signup" onClick={() => this.props.updateLocation('/signup')}>Sign up</Link>
        </div>
      );
    } else {
      return (
        <div className={classes.container}>
          <Link className={classes.button} to="#" onClick={this.onSignOut}>Logout</Link>
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

export default connect(mapStateToProps, {signOut, updateLocation})(AuthButtons);
