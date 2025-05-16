import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;