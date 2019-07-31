import React, { Component } from "react";
import image from '../../../assets/img/ProfilePic.png';
import ProfilePicture from '../../UI/ProfilePicture/ProfilePicture';
import NotificationButton from '../../UI/NotificationButton/NotificationButton';
import AuthButtons from '../../Sections/Login/AuthButtons/AuthButtons';
import ToggleButton from "../../UI/ToggleButton/ToggleButton";

class AuthNav extends Component {
  render() {
    return (
      <div className="_auth-container">

        <AuthButtons />

        <NotificationButton />

        <div className="_profile-picture-avatar">
          <ProfilePicture image={image} />
        </div>

        <ToggleButton />

      </div>
    );
  }
}

export default AuthNav;
