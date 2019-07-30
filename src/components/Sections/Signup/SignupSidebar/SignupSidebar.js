import React from 'react';
import classes from './SignupSidebar.module.scss';

const SignupSidebar = () => {
    return (
        <div className="_signup-description">

            <div className="h4">What you will get?</div>

            <ul className="_signup-description_list">
                <li><i className="fas fa-check"></i> Premium tools for free</li>
                <li><i className="fas fa-check"></i> Get a personalized service</li>
                <li><i className="fas fa-check"></i> Save unlimited watchlists</li>
                <li><i className="fas fa-check"></i> Connect your brokerage account</li>
                <li><i className="fas fa-check"></i> Get a regular health check on your investments</li>
            </ul>

        </div>
    );
};

export default SignupSidebar;