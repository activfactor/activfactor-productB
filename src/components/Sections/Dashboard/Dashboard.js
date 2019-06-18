import React from 'react';
import requireAuth from '../../hoc/requireAuth';
import classes from './Dashboard.module.scss';
const Dashboard = () => {
    return (
        <main className={classes.container}>
            <div>Welcome to Dashboard !</div>
        </main>
    );
}

export default requireAuth(Dashboard);