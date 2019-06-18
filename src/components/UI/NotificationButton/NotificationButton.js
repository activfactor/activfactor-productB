import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import classes from './NotificationButton.module.scss';

const NotificationButton = () => {
    return (
        <button className={classes.btn}>
          <FontAwesomeIcon icon={faBell} />
          <span className={classes.badge} />
        </button>
    );
}

export default NotificationButton;