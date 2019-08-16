import React, { Component } from "react"; 
import { connect } from 'react-redux';
import { signOut, updateLocation } from '../../../../actions/index';
import { resetTickerList } from '../../../../actions/ticker'
import Link from '../../../UI/Link';

class AuthButtons extends Component {
  onSignOut = () => {
    this.props.updateLocation('/login');
    this.props.resetTickerList();
    this.props.signOut();
  }

  renderAuthButtons = () => {
    if (!this.props.authenticated){
      return (
        <div className="_btn-auth-container">
          <Link nameOfClass="btn btn-link" to="/login" onClick={() => this.props.updateLocation('/login')}>Login</Link>
          <span className="_separator">|</span>
          <Link nameOfClass="btn btn-link" to="/signup" onClick={() => this.props.updateLocation('/signup')}>Sign up</Link>
        </div>
      );
    } else {
      return (
        <div className="_btn-auth-container">
          <Link nameOfClass="btn-link" to="#" onClick={this.onSignOut}>Logout</Link>
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

export default connect(mapStateToProps, {signOut, updateLocation, resetTickerList})(AuthButtons);
