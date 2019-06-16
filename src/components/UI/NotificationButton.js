import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const NotificationButton = () => {
    return (
        <button className="authnav--container__notificationbtn">
          <FontAwesomeIcon className="authnav--container__fontawesome" icon={faBell} />
          <span className="authnav--container__notificationbadge" />
        </button>
    );
}

export default NotificationButton;