import React, { Component } from "react";
import image from '../../../assets/img/ProfilePic.png';
import ProfilePicture from '../../UI/ProfilePicture/ProfilePicture';
import NotificationButton from '../../UI/NotificationButton/NotificationButton';
import AuthButtons from '../../Sections/Login/AuthButtons/AuthButtons';
import ToggleButton from "../../UI/ToggleButton/ToggleButton";
import classes from "./AuthNav.module.scss";

class AuthNav extends Component {
  render() {
    return (
      <div className={classes.container}>
        <AuthButtons />
        <NotificationButton />
        <ProfilePicture image={image} />
        <ToggleButton />
      </div>
    );
  }
}

export default AuthNav;
