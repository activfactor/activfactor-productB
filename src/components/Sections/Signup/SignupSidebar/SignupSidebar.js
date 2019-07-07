import React from 'react';
import classes from './SignupSidebar.module.scss';

const SignupSidebar = () => {
    return (
        <section className={classes.section}>
            <div className={classes.header}><p>What you will get?</p></div>
                        
                        <ul className={classes.list}>
                            <li><i className="fas fa-check"></i>Premium tools for free</li>
                            <li><i className="fas fa-check"></i>Get a personalized service</li>
                            <li><i className="fas fa-check"></i>Save unlimited watchlists</li>
                            <li><i className="fas fa-check"></i>Connect your brokerage account</li>
                            <li><i className="fas fa-check"></i>Get a regular health check on your investments</li>
                        </ul>

            </section>
    );
};

export default SignupSidebar;