import React, { Component } from "react"; 
import classes from './AuthButtons.module.scss';
import { connect } from 'react-redux';
import { signOut } from '../../../../actions/index';
import Link from '../../../UI/Link';

class AuthButtons extends Component {
  renderAuthButtons = () => {
    if (!this.props.authenticated){
      return (
        <div className={classes.container}>
          <Link nameOfClass={classes.button} to="/login">Login</Link>
          <span className={classes.button}>|</span>
          <Link nameOfClass={classes.button} to="signup">Sign up</Link>
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
