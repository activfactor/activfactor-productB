import React, { Component } from "react";
import image from '../../../assets/img/ProfilePic.png';
import ProfilePicture from '../../UI/ProfilePicture';
import NotificationButton from '../../UI/NotificationButton';
import AuthButtons from '../../Sections/Login/AuthButtons';
import ToggleButton from "../../UI/ToggleButton";

class AuthNav extends Component {
  render() {
    return (
      <div className="authnav--container">
        <AuthButtons />
        <NotificationButton />
        <ProfilePicture image={image} />
        <ToggleButton />
      </div>
    );
  }
}

export default AuthNav;
