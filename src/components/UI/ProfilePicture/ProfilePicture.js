import React from 'react';
import classes from './ProfilePicture.module.scss';

const ProfilePicture = (props) => {
    return (
            <img src={props.image} alt="profilePic" />
    );
}

export default ProfilePicture;