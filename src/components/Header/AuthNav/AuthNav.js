import React, { Component } from "react";
import image from '../../../assets/img/avatar.png';
import ProfilePicture from '../../UI/ProfilePicture/ProfilePicture';
import NotificationButton from '../../UI/NotificationButton/NotificationButton';
import AuthButtons from '../../Sections/Login/AuthButtons/AuthButtons';
import ToggleButton from "../../UI/ToggleButton/ToggleButton";
import { connect } from 'react-redux';

class AuthNav extends Component {

  render() {
    return (
      <div className="_auth-container">

        <AuthButtons />
        { this.props.authenticated ?
        <React.Fragment>
        <NotificationButton /> 

        <div className="_profile-picture-avatar">
          <ProfilePicture image={image} />
        </div>
        </React.Fragment>
        : '' }

        <ToggleButton />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated : state.auth.authenticated && state.auth.token && state.auth.userID ? true : false
  };
}

export default connect(mapStateToProps)(AuthNav);
