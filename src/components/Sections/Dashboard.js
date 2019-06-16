import React from 'react';
import requireAuth from '../hoc/requireAuth';

const Dashboard = () => {
    return (
        <main className="dashboard--container">
            <div>Welcome to Dashboard !</div>
        </main>
    );
}

export default requireAuth(Dashboard);