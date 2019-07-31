import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const NotificationButton = () => {
    return (
        <button className="btn _btn-notification-header">
          <FontAwesomeIcon icon={faBell} />
          <span className="_badge" />
        </button>
    );
}

export default NotificationButton;