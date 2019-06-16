import React from 'react';

const ProfilePicture = (props) => {
    return (
            <img src={props.image} alt="profilePic" className="authnav--container__avatar" />
    );
}

export default ProfilePicture;